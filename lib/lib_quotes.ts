import type { Locale } from "./i18n";

export type Quote = {
  text: string;
  author: string;
};

export const quotesByLocale: Record<Locale, Quote[]> = {
  ru: [
    {
      text: "Если ты сделал работу, можно и помолчать. Пусть таблица говорит за тебя.",
      author: "Выдуманная цитата Джейсона Стэтхэма.",
    },
    {
      text: "Дисциплина — это когда ты сделал, даже если настроения не было и геройствовать не хотелось.",
      author: "Выдуманная цитата Джейсона Стэтхэма.",
    },
    {
      text: "Слабость любит рассуждения. Сила предпочитает галочку в календаре.",
      author: "Выдуманная цитата Джейсона Стэтхэма.",
    },
    {
      text: "Ты не обязан чувствовать мотивацию. Достаточно просто не полениться.",
      author: "Выдуманная цитата Джейсона Стэтхэма.",
    },
    {
      text: "Сделал подход — молодец. Не сделал — завтра будешь умнее.",
      author: "Выдуманная цитата Джейсона Стэтхэма.",
    },

    {
      text: "Успех редко выглядит вдохновляюще. Чаще он выглядит как обычный выполненный план.",
      author: "Выдуманная цитата Маргарет Тэтчер.",
    },
    {
      text: "Сила характера — это когда ты продолжаешь, даже если всем, включая тебя, немного всё равно.",
      author: "Выдуманная цитата Маргарет Тэтчер.",
    },
    {
      text: "Если путь непростой, значит, ты всё ещё на нём. Это уже хороший знак.",
      author: "Выдуманная цитата Маргарет Тэтчер.",
    },
    {
      text: "Самоуважение начинается не с громких слов, а с тихо выполненных дел.",
      author: "Выдуманная цитата Маргарет Тэтчер.",
    },
    {
      text: "Привычки управляют днём. День управляет результатом. Всё довольно прозаично.",
      author: "Выдуманная цитата Маргарет Тэтчер.",
    },

    {
      text: "Каждое повторение — это вклад. Проценты начислятся позже.",
      author: "Выдуманная цитата Арнольда Шварценеггера.",
    },
    {
      text: "Если было тяжело — отлично. Значит, ты не зря встал с дивана.",
      author: "Выдуманная цитата Арнольда Шварценеггера.",
    },
    {
      text: "Тело меняется медленно. Зато честно.",
      author: "Выдуманная цитата Арнольда Шварценеггера.",
    },
    {
      text: "Форма не появляется внезапно. Она тихо подкрадывается.",
      author: "Выдуманная цитата Арнольда Шварценеггера.",
    },
    {
      text: "Сегодня ты сделал чуть больше, чем ничего. Это уже прогресс.",
      author: "Выдуманная цитата Арнольда Шварценеггера.",
    },

    {
      text: "Простые действия работают лучше сложных размышлений. Проверено практикой.",
      author: "Выдуманная цитата Брюса Ли.",
    },
    {
      text: "Не стремись к идеалу. Он всё равно занят.",
      author: "Выдуманная цитата Брюса Ли.",
    },
    {
      text: "Ты не борешься с телом. Ты просто напоминаешь ему, кто тут главный.",
      author: "Выдуманная цитата Брюса Ли.",
    },
    {
      text: "Когда действие становится привычкой, сопротивление уходит пить чай.",
      author: "Выдуманная цитата Брюса Ли.",
    },
    {
      text: "Путь силы состоит из мелочей, которые ты обычно хотел бы пропустить.",
      author: "Выдуманная цитата Брюса Ли.",
    },

    {
      text: "Настоящая уверенность не позирует. Она просто делает и идёт дальше.",
      author: "Выдуманная цитата Клинта Иствуда.",
    },
    {
      text: "Меньше слов. Больше фактов. Факты сегодня есть.",
      author: "Выдуманная цитата Клинта Иствуда.",
    },
    {
      text: "Либо ты держишь ритм, либо потом объясняешь себе, почему нет.",
      author: "Выдуманная цитата Клинта Иствуда.",
    },
    {
      text: "Спокойствие приходит, когда знаешь: ты не схалтурил.",
      author: "Выдуманная цитата Клинта Иствуда.",
    },
    {
      text: "День засчитан. Без фанфар, но по-честному.",
      author: "Выдуманная цитата Клинта Иствуда.",
    },

    {
      text: "Большие результаты начинаются с маленьких систем, которые не раздражают.",
      author: "Выдуманная цитата Илона Маска.",
    },
    {
      text: "Хочешь изменений — меняй процесс, а не настроение. Настроение ненадёжно.",
      author: "Выдуманная цитата Илона Маска.",
    },
    {
      text: "Регулярность — это когда система работает даже в плохой день.",
      author: "Выдуманная цитата Илона Маска.",
    },
    {
      text: "Ты — проект с длинным сроком окупаемости.",
      author: "Выдуманная цитата Илона Маска.",
    },
    {
      text: "Если схема простая, она имеет шанс выжить.",
      author: "Выдуманная цитата Илона Маска.",
    },

    {
      text: "Сегодня ты сделал минимум. Но ты его сделал — и это важно.",
      author: "Выдуманная цитата тренера.",
    },
    {
      text: "Тренировка считается, если ты не соврал себе.",
      author: "Выдуманная цитата тренера.",
    },
    {
      text: "Ты пришёл не за эмоциями. Эмоции будут потом.",
      author: "Выдуманная цитата тренера.",
    },
    {
      text: "Минимум сохраняет ритм. Ритм сохраняет результат.",
      author: "Выдуманная цитата тренера.",
    },
    {
      text: "План — это когда ты делаешь, а не обсуждаешь.",
      author: "Выдуманная цитата тренера.",
    },

    {
      text: "Ты становишься тем, что делаешь чаще всего. Даже если делаешь без вдохновения.",
      author: "Выдуманная цитата неизвестного автора.",
    },
    {
      text: "Усталость проходит. Галочка остаётся.",
      author: "Выдуманная цитата неизвестного автора.",
    },
    {
      text: "Малые действия выглядят скучно, пока однажды не становятся результатом.",
      author: "Выдуманная цитата неизвестного автора.",
    },
    {
      text: "Сила — это не пафос. Это привычка.",
      author: "Выдуманная цитата неизвестного автора.",
    },
    {
      text: "Если сегодня был шаг, значит, день не зря.",
      author: "Выдуманная цитата неизвестного автора.",
    },

    {
      text: "Результат любит тишину. И таблицу без пропусков.",
      author: "Выдуманная цитата Джейсона Стэтхэма.",
    },
    {
      text: "Самая надёжная мотивация — привычка, которая не спрашивает настроения.",
      author: "Выдуманная цитата Маргарет Тэтчер.",
    },
    {
      text: "Когда кажется, что ничего не происходит, скорее всего, всё идёт по плану.",
      author: "Выдуманная цитата Брюса Ли.",
    },
    {
      text: "Тебе не нужно делать больше всех. Достаточно делать своё.",
      author: "Выдуманная цитата Клинта Иствуда.",
    },
    {
      text: "Система работает, пока ты не мешаешь ей пропусками.",
      author: "Выдуманная цитата Илона Маска.",
    },

    {
      text: "День засчитан. Можно выдохнуть и не придумывать оправдания.",
      author: "Выдуманная цитата тренера.",
    },
    {
      text: "Сомнения не делают отжимания. Делают руки.",
      author: "Выдуманная цитата Джейсона Стэтхэма.",
    },
    {
      text: "Настойчивость — это когда ты продолжаешь без аплодисментов.",
      author: "Выдуманная цитата Маргарет Тэтчер.",
    },
    {
      text: "Форма появляется не сразу. Зато потом никуда не девается.",
      author: "Выдуманная цитата Арнольда Шварценеггера.",
    },
    {
      text: "Твоя форма — это доказательство последовательности. Без лишних слов.",
      author: "Выдуманная цитата неизвестного автора.",
    },
  ],

  en: [
    {
      text: "If you’ve done the work, you don’t need to explain yourself. The result speaks for you.",
      author: "A fake quote by Jason Statham.",
    },
    {
      text: "Discipline is doing what needs to be done, even when no one is watching and no one is clapping.",
      author: "A fake quote by Jason Statham.",
    },
    {
      text: "Weakness loves excuses. Strength prefers action—quiet, simple, and finished.",
      author: "A fake quote by Jason Statham.",
    },
    {
      text: "You don’t need motivation. You need reliability—today, tomorrow, and on the days you’d rather skip.",
      author: "A fake quote by Jason Statham.",
    },
    {
      text: "Every set is a contract with yourself: you either honor it, or you practice lying to yourself.",
      author: "A fake quote by Jason Statham.",
    },

    {
      text: "Success is rarely loud. It is usually built quietly through daily, disciplined choices.",
      author: "A fake quote by Margaret Thatcher.",
    },
    {
      text: "Strength of character is measured by consistency, not by speeches or moods.",
      author: "A fake quote by Margaret Thatcher.",
    },
    {
      text: "A difficult road is not a reason to turn back; it is a reason to walk with more certainty.",
      author: "A fake quote by Margaret Thatcher.",
    },
    {
      text: "Self-respect begins where excuses end—and work begins.",
      author: "A fake quote by Margaret Thatcher.",
    },
    {
      text: "You govern your future to the extent that you govern your habits.",
      author: "A fake quote by Margaret Thatcher.",
    },

    {
      text: "Every repetition is a vote for the person you want to become. Vote with action.",
      author: "A fake quote by Arnold Schwarzenegger.",
    },
    {
      text: "Growth starts where comfort ends. If it was hard, you were in the right place.",
      author: "A fake quote by Arnold Schwarzenegger.",
    },
    {
      text: "The body changes when the mind stops negotiating. Don’t debate—do it.",
      author: "A fake quote by Arnold Schwarzenegger.",
    },
    {
      text: "Strength is built on ordinary days done correctly, not on rare bursts of inspiration.",
      author: "A fake quote by Arnold Schwarzenegger.",
    },
    {
      text: "You’re not here to impress anyone. You’re here to prove you can keep your promise to yourself.",
      author: "A fake quote by Arnold Schwarzenegger.",
    },

    {
      text: "Simple actions, repeated many times, beat rare moments of inspiration. Practice wins.",
      author: "A fake quote by Bruce Lee.",
    },
    {
      text: "Do not chase perfection. Chase continuity: a little, done again and again.",
      author: "A fake quote by Bruce Lee.",
    },
    {
      text: "You are not fighting your body—you are teaching it, and it learns through repetition.",
      author: "A fake quote by Bruce Lee.",
    },
    {
      text: "When movement becomes habit, resistance fades. What remains is clean work.",
      author: "A fake quote by Bruce Lee.",
    },
    {
      text: "The way of strength is attention to small things: posture, breath, rhythm, and honesty.",
      author: "A fake quote by Bruce Lee.",
    },

    {
      text: "Real confidence doesn’t need evidence. It simply does the work—quietly.",
      author: "A fake quote by Clint Eastwood.",
    },
    {
      text: "Less talk. More finished work. That’s what discipline looks like.",
      author: "A fake quote by Clint Eastwood.",
    },
    {
      text: "Either you keep the rhythm, or you explain why you couldn’t. Choose who you are.",
      author: "A fake quote by Clint Eastwood.",
    },
    {
      text: "Peace comes to people who know they did what they were supposed to do today.",
      author: "A fake quote by Clint Eastwood.",
    },
    {
      text: "The day counts if you didn’t quit. Everything else is noise.",
      author: "A fake quote by Clint Eastwood.",
    },

    {
      text: "Big outcomes start with small systems that run every day, even on boring days.",
      author: "A fake quote by Elon Musk.",
    },
    {
      text: "If you want to change yourself, change the process—not the mood. Moods are unreliable.",
      author: "A fake quote by Elon Musk.",
    },
    {
      text: "Consistency is an engineering solution to motivation. Systems beat feelings.",
      author: "A fake quote by Elon Musk.",
    },
    {
      text: "Build yourself like a project: step, test, adjust, and step again.",
      author: "A fake quote by Elon Musk.",
    },
    {
      text: "What works is not inspiration—it’s a repeatable sequence of actions. Keep it simple.",
      author: "A fake quote by Elon Musk.",
    },

    {
      text: "You did less than you wanted, but more than you would have if you delayed. That’s growth.",
      author: "A fake quote by a Coach.",
    },
    {
      text: "A session ends not when it gets easy, but when you honestly did your part.",
      author: "A fake quote by a Coach.",
    },
    {
      text: "You didn’t come here for feelings. You came here to build the habit of not quitting.",
      author: "A fake quote by a Coach.",
    },
    {
      text: "Minimum work keeps the rhythm. Keeping the rhythm keeps the result.",
      author: "A fake quote by a Coach.",
    },
    {
      text: "A plan is not a wish. A plan is an action you execute even when you don’t feel like it.",
      author: "A fake quote by a Coach.",
    },

    {
      text: "You become what you do daily. So the next honest step matters more than one perfect day.",
      author: "A fake quote by an Unknown Author.",
    },
    {
      text: "Fatigue passes. Confidence stays—if you didn’t step back when it was tempting.",
      author: "A fake quote by an Unknown Author.",
    },
    {
      text: "Small actions don’t look impressive—until one day they add up to a different life.",
      author: "A fake quote by an Unknown Author.",
    },
    {
      text: "Strength is not a feeling. It’s a choice repeated long enough to become normal.",
      author: "A fake quote by an Unknown Author.",
    },
    {
      text: "If you took even one step today, you didn’t stand still. Keep going.",
      author: "A fake quote by an Unknown Author.",
    },

    {
      text: "Results like silence: you do it, you mark it, you move on—no drama, no excuses.",
      author: "A fake quote by Jason Statham.",
    },
    {
      text: "The strongest motivation is a habit that doesn’t ask for your mood.",
      author: "A fake quote by Margaret Thatcher.",
    },
    {
      text: "When it feels like nothing is changing, that’s often when the foundation is being built.",
      author: "A fake quote by Bruce Lee.",
    },
    {
      text: "You don’t have to do more than everyone. You have to do your work—every time.",
      author: "A fake quote by Clint Eastwood.",
    },
    {
      text: "A system beats chaos only if you stop breaking it with skips.",
      author: "A fake quote by Elon Musk.",
    },

    {
      text: "The day is counted. Mark it and sleep calm: you did what you promised yourself.",
      author: "A fake quote by a Coach.",
    },
    {
      text: "Doubts don’t do the work. Hands do. So do it.",
      author: "A fake quote by Jason Statham.",
    },
    {
      text: "Persistence is staying on the road even when there will be no applause.",
      author: "A fake quote by Margaret Thatcher.",
    },
    {
      text: "Strength doesn’t come from one heroic day. It comes from a hundred normal days without quitting.",
      author: "A fake quote by Arnold Schwarzenegger.",
    },
    {
      text: "Your form is proof of your consistency—and it’s honest proof.",
      author: "A fake quote by an Unknown Author.",
    },
  ],
};
