"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dict";
import LangSwitch from "@/components/LangSwitch";
import { quotesByLocale } from "@/lib/lib_quotes";

/* ===== utils ===== */

function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h;
}

function addDays(date: Date, days: number) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function toISODate(d: Date) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function formatShortDateByLang(d: Date, lang: Locale) {
  return d.toLocaleDateString(lang === "en" ? "en-US" : "ru-RU");
}

function capitalize(s: string) {
  if (!s) return s;
  return s[0].toUpperCase() + s.slice(1);
}

// 0 = Пн ... 6 = Вс
function getMondayBasedWeekday(d: Date) {
  return (d.getDay() + 6) % 7;
}

function getDowLabels(lang: Locale) {
  return lang === "en"
    ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    : ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
}

/* ===== month title by lang ===== */

function formatMonthTitleFull(d: Date, lang: Locale) {
  const locale = lang === "en" ? "en-US" : "ru-RU";
  const s = d.toLocaleDateString(locale, { month: "long", year: "numeric" });
  return lang === "ru" ? s.replace(/\s?г\.?$/i, "") : s;
}

function formatMonthTitleShort(d: Date, lang: Locale) {
  if (lang === "en") {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(d);
  }

  const full = formatMonthTitleFull(d, "ru");
  const parts = full.trim().split(/\s+/);
  const year = parts[parts.length - 1];
  const month = parts.slice(0, -1).join(" ").trim();

  if (month.length <= 4) return `${capitalize(month)} ${year}`;
  return `${capitalize(month.slice(0, 3))} ${year}`;
}

/* ===== types ===== */

type DayCell = {
  date: Date;
  inCurrentMonth: boolean;
  pushups?: number;
};

type MonthGrid = {
  title: string;
  titleFull: string;
  weeks: DayCell[][];
};

/* ===== calendar logic ===== */

function buildMonthGrid(
  year: number,
  monthIndex0: number,
  pushupByISO: Map<string, number>,
  lang: Locale
): MonthGrid {
  const firstOfMonth = new Date(year, monthIndex0, 1);

  const offset = getMondayBasedWeekday(firstOfMonth);
  const gridStart = addDays(firstOfMonth, -offset);

  const allCells: DayCell[] = Array.from({ length: 42 }, (_, i) => {
    const date = addDays(gridStart, i);
    return {
      date,
      inCurrentMonth: date.getMonth() === monthIndex0,
      pushups: pushupByISO.get(toISODate(date)),
    };
  });

  const weeks: DayCell[][] = [];
  for (let i = 0; i < 6; i++) weeks.push(allCells.slice(i * 7, i * 7 + 7));

  const trimmed = weeks.filter((week) => {
    const hasCurrentMonth = week.some((c) => c.inCurrentMonth);
    const hasPushups = week.some((c) => typeof c.pushups === "number");
    return hasCurrentMonth && hasPushups;
  });

  const finalWeeks = trimmed.length ? trimmed : [weeks[0]];

  const fullTitle = formatMonthTitleFull(firstOfMonth, lang);
  const shortTitle =
    finalWeeks.length === 1
      ? formatMonthTitleShort(firstOfMonth, lang)
      : lang === "ru"
      ? capitalize(fullTitle)
      : fullTitle;

  const fullDisplay = lang === "ru" ? capitalize(fullTitle) : fullTitle;

  return { title: shortTitle, titleFull: fullDisplay, weeks: finalWeeks };
}

/* ===== component ===== */

export default function CalendarClient({ lang }: { lang: Locale }) {
  const dict = getDict(lang);

  const [start, setStart] = useState(() => toISODate(new Date()));
  const defaultTitle =
    lang === "en" ? "100 push-ups challenge" : "100 отжиманий челлендж";
  const [title, setTitle] = useState(defaultTitle);

  // seed для цитаты: на сервере его нет, чтобы не было hydration mismatch,
  // на клиенте задаём один раз после гидрации (будет меняться при refresh)
  const [quoteSeed, setQuoteSeed] = useState<string | null>(null);
  const [isTelegramWebView, setIsTelegramWebView] = useState(false);

  useEffect(() => {
    setQuoteSeed(String(Date.now()));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ua = navigator.userAgent || "";
    const isTG =
      /Telegram/i.test(ua) ||
      /TGWebApp/i.test(ua) ||
      // некоторые мобильные клиенты Telegram помечают webview иначе,
      // но наличие объекта Telegram.WebApp — надёжный признак
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typeof (window as any).Telegram?.WebApp !== "undefined";
    setIsTelegramWebView(isTG);
  }, []);

  const quote = useMemo(() => {
    const list = quotesByLocale[lang] ?? [];
    if (!list.length) return null;

    // Пока seed не задан (SSR/первый рендер) — цитату не рисуем.
    // Так не будет "прыжка" после загрузки и не будет hydration mismatch.
    if (!quoteSeed) return null;

    const h = hashString(quoteSeed);
    const idx = h % list.length;
    return list[idx];
  }, [lang, quoteSeed]);

  const plan = useMemo(() => {
    const startDate = new Date(start);
    return Array.from({ length: 100 }, (_, i) => ({
      day: i + 1,
      date: addDays(startDate, i),
    }));
  }, [start]);

  const pushupByISO = useMemo(() => {
    const m = new Map<string, number>();
    plan.forEach((p) => m.set(toISODate(p.date), p.day));
    return m;
  }, [plan]);

  const months = useMemo(() => {
    const startDate = new Date(start);
    const endDate = plan[99].date;

    const res: { y: number; m: number }[] = [];
    let y = startDate.getFullYear();
    let m = startDate.getMonth();

    while (
      y < endDate.getFullYear() ||
      (y === endDate.getFullYear() && m <= endDate.getMonth())
    ) {
      res.push({ y, m });
      m++;
      if (m > 11) {
        m = 0;
        y++;
      }
    }
    return res;
  }, [start, plan]);

  const dow = getDowLabels(lang);

  // ===== Auto scale ONLY on mobile (keeps desktop untouched) =====
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const sheetRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // Только для мобилки
    if (!window.matchMedia("(max-width: 640px)").matches) return;

    const wrap = wrapRef.current;
    const sheet = sheetRef.current;
    if (!wrap || !sheet) return;

    const compute = () => {
      const cs = window.getComputedStyle(wrap);
      const padL = parseFloat(cs.paddingLeft || "0");
      const padR = parseFloat(cs.paddingRight || "0");

      const availableW = wrap.clientWidth - padL - padR;
      const sheetW = sheet.offsetWidth || 1;

      const safety = 2;
      const scale = Math.min(1, (availableW - safety) / sheetW);

      wrap.style.setProperty("--sheet-scale", String(scale));
      wrap.setAttribute("data-scale-ready", "1");
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    ro.observe(wrap);

    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <main className="page">
      <div className="content">
        <section className="intro">
          <p className="introMain">
            {lang === "en"
              ? "100‑day push-up challenge: start with one push-up and add one every day."
              : "Челлендж на 100 дней: начните с одного отжимания и каждый день добавляйте по одному."}
          </p>
          <p className="introSub">
            {lang === "en"
              ? "Print the calendar, tick off completed days, and steadily reach 100."
              : "Распечатайте календарь, отмечайте выполненные дни и шаг за шагом дойдите до 100."}
          </p>
        </section>

        <div className="topbar">
          <h1
            className="screenTitle"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => {
              const next = e.currentTarget.innerText.trim();
              setTitle(next || defaultTitle);
            }}
          >
            {title}
          </h1>

          <div className="topbarRight">
            <div className="langSwitch">
              <LangSwitch />
            </div>

            <div className="printActions">
              <p className="printHintInline">
                {lang === "ru" ? (
                  <>
                    Печать не работает?
                    <br />
                    Откройте во внешнем браузере.
                  </>
                ) : (
                  <>
                    Print not working?
                    <br />
                    Open in external browser.
                  </>
                )}
              </p>

              <button className="btn" onClick={() => window.print()}>
                {dict.ui.print}
              </button>
            </div>
          </div>
        </div>

        <div className="controls">
          <label className="control">
            <span className="label">{dict.ui.startDateLabel}</span>
            <input
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="input"
              lang="en-CA"
            />
          </label>

          <p className="period">
            {dict.ui.period} {formatShortDateByLang(new Date(start), lang)} —{" "}
            {formatShortDateByLang(plan[99].date, lang)}
          </p>
        </div>

        <div ref={wrapRef} className="sheetWrap" data-scale-ready="0">
          <div ref={sheetRef} className="sheet">
            <div className="printTitle">{title}</div>

            <div className="months">
              {months.map(({ y, m }, idx) => {
                const { title: monthTitle, titleFull, weeks } = buildMonthGrid(
                  y,
                  m,
                  pushupByISO,
                  lang
                );

                return (
                  <section
                    key={`${y}-${m}`}
                    className={`month ${idx === 0 ? "showDow" : ""}`}
                  >
                    <div className="monthLabel">
                      <span className="monthLabelText monthLabelTextDesktop">
                        {monthTitle}
                      </span>
                      <span className="monthLabelText monthLabelTextMobile">
                        {titleFull}
                      </span>
                    </div>

                    <div className="monthBody">
                      <div className="dow">
                        {dow.map((d) => (
                          <div key={d} className="dowCell">
                            {d}
                          </div>
                        ))}
                      </div>

                      <div className="grid">
                        {weeks.flat().map((cell, i) => {
                          if (!cell.inCurrentMonth)
                            return <div key={i} className="cell empty" />;

                          const isDay100 = cell.pushups === 100;
                          const isNoChallengeDay = !cell.pushups;

                          return (
                            <div
                              key={i}
                              className={`cell ${isDay100 ? "cell100" : ""}`}
                            >
                              <span
                                className={`cellDate ${
                                  isNoChallengeDay ? "cellDateDash" : ""
                                }`}
                              >
                                {cell.date.getDate()}
                              </span>

                              {!isNoChallengeDay && (
                                <span
                                  className={`cellValue ${
                                    isDay100 ? "cellValue100" : ""
                                  }`}
                                >
                                  {cell.pushups}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>

            {quote && (
              <div className="quote">
                <div className="quoteText">
                  {lang === "ru" ? "«" : "“"}
                  {quote.text}
                  {lang === "ru" ? "»" : "”"}
                </div>
                <div className="quoteAuthor">— {quote.author}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
