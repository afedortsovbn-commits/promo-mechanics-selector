const criteria = [
  {
    id: "companySize",
    title: "Размер компании",
    note: "Влияет на доступный масштаб, скорость внедрения и требования к отчетности.",
    multi: false,
    options: [
      ["micro", "Микро"],
      ["small", "Малый бизнес"],
      ["medium", "Средний бизнес"],
      ["large", "Крупная компания"],
      ["enterprise", "Федеральный бренд"],
    ],
  },
  {
    id: "industry",
    title: "Направление деятельности",
    note: "Можно выбрать несколько, если продукт продается в смешанной модели.",
    multi: true,
    options: [
      ["fmcg", "FMCG"],
      ["retail", "Ритейл"],
      ["ecom", "E-commerce"],
      ["service", "Услуги"],
      ["b2b", "B2B"],
      ["saas", "SaaS"],
      ["finance", "Финансы"],
      ["horeca", "HoReCa"],
      ["education", "Образование"],
      ["beauty", "Красота/здоровье"],
      ["auto", "Авто/техника"],
      ["realEstate", "Недвижимость"],
    ],
  },
  {
    id: "maturity",
    title: "Зрелость компании",
    note: "Помогает отличать механики быстрого спроса от долгой CRM-модели.",
    multi: false,
    options: [
      ["launch", "Запуск"],
      ["growth", "Рост"],
      ["stable", "Стабильная"],
      ["stagnation", "Стагнация"],
      ["turnaround", "Перезапуск"],
    ],
  },
  {
    id: "productType",
    title: "Тип продукта",
    note: "От типа покупки зависит допустимая глубина скидки и формат преференции.",
    multi: true,
    options: [
      ["mass", "Массовый"],
      ["premium", "Премиальный"],
      ["luxury", "Люксовый"],
      ["subscription", "Подписка"],
      ["durable", "Долгий цикл"],
      ["impulse", "Импульсный"],
      ["complex", "Сложный выбор"],
      ["newCategory", "Новая категория"],
    ],
  },
  {
    id: "productAge",
    title: "Сколько продукт на рынке",
    note: "Появляется после выбора типа продукта.",
    dependsOn: "productType",
    multi: false,
    options: [
      ["new", "До 6 месяцев"],
      ["young", "6-24 месяца"],
      ["known", "2-5 лет"],
      ["mature", "Более 5 лет"],
      ["decline", "Снижение спроса"],
    ],
  },
  {
    id: "margin",
    title: "Маржинальность",
    note: "Ключевой ограничитель для скидок, кэшбэка и подарков.",
    multi: false,
    options: [
      ["lowMargin", "Низкая"],
      ["midMargin", "Средняя"],
      ["highMargin", "Высокая"],
      ["unknownMargin", "Неизвестна"],
    ],
  },
  {
    id: "duration",
    title: "Длительность механики",
    note: "Короткие акции лучше для импульса, длинные — для привычки и данных.",
    multi: false,
    options: [
      ["flash", "1-7 дней"],
      ["short", "2-4 недели"],
      ["season", "1-3 месяца"],
      ["long", "3+ месяца"],
      ["alwaysOn", "Постоянно"],
    ],
  },
  {
    id: "companyAge",
    title: "Сколько компания на рынке",
    note: "Новые бренды чаще нуждаются в доверии и пробе, зрелые — в защите доли.",
    multi: false,
    options: [
      ["newCompany", "До 1 года"],
      ["youngCompany", "1-3 года"],
      ["established", "3-10 лет"],
      ["oldCompany", "10+ лет"],
    ],
  },
  {
    id: "finance",
    title: "Финансовое состояние",
    note: "Определяет допустимый риск и горизонт окупаемости.",
    multi: false,
    options: [
      ["cashTight", "Дефицит средств"],
      ["balanced", "Стабильно"],
      ["investment", "Есть бюджет на рост"],
      ["crisis", "Нужно срочно оживить продажи"],
    ],
  },
  {
    id: "budget",
    title: "Желаемый бюджет",
    note: "Бюджет задает верхнюю границу сложности механики.",
    multi: false,
    options: [
      ["tinyBudget", "Минимальный"],
      ["lowBudget", "Низкий"],
      ["midBudget", "Средний"],
      ["highBudget", "Высокий"],
      ["veryHighBudget", "Очень высокий"],
    ],
  },
  {
    id: "salesVolume",
    title: "Продажи в штуках в год",
    note: "Объем нужен для понимания статистической устойчивости промо.",
    multi: false,
    options: [
      ["unitsLow", "До 1 тыс."],
      ["unitsMid", "1-50 тыс."],
      ["unitsHigh", "50 тыс.-1 млн"],
      ["unitsMass", "1 млн+"],
    ],
  },
  {
    id: "salesRevenue",
    title: "Продажи в $ в год",
    note: "Годовая выручка в долларах помогает отделить механики раннего роста от масштабных CRM, loyalty и партнерских программ.",
    multi: false,
    options: [
      ["revLow", "До $100 тыс."],
      ["revMid", "$100 тыс.-$1 млн"],
      ["revHigh", "$1-10 млн"],
      ["revEnterprise", "$10 млн+"],
    ],
  },
  {
    id: "competition",
    title: "Уровень конкуренции",
    note: "При высокой конкуренции важна дифференциация, а не только скидка.",
    multi: false,
    options: [
      ["lowCompetition", "Низкий"],
      ["midCompetition", "Средний"],
      ["highCompetition", "Высокий"],
      ["priceWar", "Ценовая война"],
    ],
  },
  {
    id: "channel",
    title: "Канал продаж",
    note: "Можно выбрать гибрид, если акция идет в нескольких точках контакта.",
    multi: true,
    options: [
      ["online", "Онлайн"],
      ["offline", "Офлайн"],
      ["omni", "Омниканал"],
      ["marketplace", "Маркетплейсы"],
      ["app", "Мобильное приложение"],
      ["partners", "Партнерская сеть"],
    ],
  },
  {
    id: "retailFormat",
    title: "Формат контакта",
    note: "Появляется после выбора канала продаж.",
    dependsOn: "channel",
    multi: true,
    options: [
      ["ownStore", "Свой магазин"],
      ["chainRetail", "Сети"],
      ["directSales", "Прямые продажи"],
      ["delivery", "Доставка"],
      ["field", "Полевые команды"],
      ["events", "Мероприятия"],
    ],
  },
  {
    id: "goal",
    title: "Цель механики",
    note: "Если целей несколько, первая выбранная считается главной.",
    multi: true,
    options: [
      ["awareness", "Охват/узнаваемость"],
      ["trial", "Пробная покупка"],
      ["traffic", "Трафик"],
      ["conversion", "Конверсия"],
      ["aov", "Средний чек"],
      ["repeat", "Повторная покупка"],
      ["retention", "Удержание"],
      ["reactivation", "Реактивация"],
      ["data", "Сбор данных"],
      ["referral", "Рекомендации"],
      ["premiumImage", "Имидж/премиальность"],
      ["inventory", "Распродажа запасов"],
    ],
  },
  {
    id: "currentMetric",
    title: "Текущая проблема",
    note: "Выберите симптом, который механика должна исправить.",
    multi: true,
    options: [
      ["lowAwareness", "Низкая узнаваемость"],
      ["lowTrust", "Мало доверия"],
      ["lowConversion", "Низкая конверсия"],
      ["highCAC", "Высокий CAC"],
      ["lowRepeat", "Мало повторов"],
      ["lowAOV", "Низкий чек"],
      ["churn", "Отток"],
      ["stock", "Излишки"],
      ["noData", "Мало данных о клиентах"],
    ],
  },
  {
    id: "audienceGender",
    title: "Пол аудитории",
    note: "Можно оставить пустым, если коммуникация гендерно нейтральная.",
    multi: true,
    options: [
      ["female", "Женщины"],
      ["male", "Мужчины"],
      ["mixedGender", "Смешанная"],
    ],
  },
  {
    id: "audienceAge",
    title: "Возраст аудитории",
    note: "Возраст влияет на канал, сложность условий и тип преференции.",
    multi: true,
    options: [
      ["teen", "14-17"],
      ["young", "18-24"],
      ["adult", "25-34"],
      ["matureAdult", "35-44"],
      ["senior", "45+"],
    ],
  },
  {
    id: "income",
    title: "Доход аудитории",
    note: "Чем выше доход, тем важнее статус, эмоция, сервис и эксклюзив.",
    multi: false,
    options: [
      ["lowIncome", "Низкий"],
      ["middleIncome", "Средний"],
      ["highIncome", "Высокий"],
      ["veryHighIncome", "Очень высокий"],
    ],
  },
  {
    id: "positioning",
    title: "Позиционирование",
    note: "Защищает бренд от неподходящих преференций.",
    multi: true,
    options: [
      ["economy", "Выгода"],
      ["value", "Разумная ценность"],
      ["expert", "Экспертность"],
      ["premiumPosition", "Премиальность"],
      ["innovation", "Инновационность"],
      ["eco", "Этичность/экология"],
      ["community", "Комьюнити"],
      ["fun", "Развлечение"],
    ],
  },
  {
    id: "risk",
    title: "Ограничения и риски",
    note: "Эти параметры штрафуют механики, которые могут навредить экономике или бренду.",
    multi: true,
    options: [
      ["noDiscount", "Нельзя снижать цену"],
      ["legalSensitive", "Сложные юр. ограничения"],
      ["brandSensitive", "Нельзя удешевлять бренд"],
      ["lowOps", "Мало операционных ресурсов"],
      ["fastLaunch", "Нужно запустить быстро"],
      ["crmReady", "Есть CRM/данные"],
      ["noCRM", "Нет CRM"],
    ],
  },
];

const mechanisms = [
  {
    id: "sampling",
    name: "Сэмплинг / пробный доступ",
    summary: "Дать попробовать продукт с минимальным барьером: образец, демо, пробная версия, дегустация, тест-драйв.",
    base: 54,
    tags: ["trial", "awareness", "newCategory", "lowTrust", "offline", "online", "fmcg", "beauty", "saas", "complex", "revLow", "revMid", "micro", "small", "launch", "turnaround", "mass", "new", "youngCompany", "unitsLow", "ownStore", "chainRetail", "field", "events"],
    avoid: ["lowMargin", "cashTight", "inventory", "oldCompany"],
    preferenceTags: ["utility", "experience"],
    bestFor: ["новые продукты", "сложный выбор", "недоверие", "категории, где качество ощущается после использования"],
    pros: ["Снижает риск первой покупки", "Создает быстрый опыт продукта", "Хорошо измеряется через купоны и промокоды"],
    cons: ["Требует контроля себестоимости", "Может привлечь охотников за бесплатным", "Нужна цепочка догрева после пробы"],
    usage: "Рационально использовать для запуска, расширения аудитории, борьбы с недоверием и демонстрации качества. В B2B и SaaS лучше работает как пилот с ограниченным сроком и понятным критерием успеха.",
  },
  {
    id: "cashback",
    name: "Кэшбэк / rebate",
    summary: "Вернуть часть стоимости деньгами, баллами или сертификатом после покупки.",
    base: 51,
    tags: ["conversion", "repeat", "retention", "midMargin", "highMargin", "fmcg", "retail", "ecom", "finance", "app", "crmReady", "revMid", "revHigh", "revEnterprise", "medium", "large", "enterprise", "growth", "stable", "balanced", "crisis", "highBudget", "unitsHigh", "unitsMass", "midCompetition", "highCompetition", "omni", "delivery", "mixedGender"],
    avoid: ["luxury", "veryHighIncome", "brandSensitive", "lowMargin", "unknownMargin"],
    preferenceTags: ["utility", "monetary"],
    bestFor: ["ценочувствительные сегменты", "повторные покупки", "омниканал", "категории с частыми покупками"],
    pros: ["Сохраняет видимую цену", "Стимулирует повтор", "Может собирать чеки и first-party data"],
    cons: ["Сложнее объяснить, чем скидку", "Нужна прозрачная механика начисления", "При плохой UX снижает доверие"],
    usage: "Хорош для конкуренции по выгоде без прямого обвала цены. Для премиальных продуктов лучше заменять на сервисный кредит или бонус на следующую покупку.",
  },
  {
    id: "tieredDiscount",
    name: "Ступенчатая скидка",
    summary: "Чем больше сумма корзины или количество товаров, тем выше выгода.",
    base: 50,
    tags: ["aov", "traffic", "conversion", "retail", "ecom", "marketplace", "midMargin", "highMargin", "inventory", "lowAOV", "revLow", "revMid", "micro", "small", "medium", "stagnation", "crisis", "known", "mature", "decline", "unitsMid", "midCompetition", "chainRetail", "delivery"],
    avoid: ["premiumPosition", "luxury", "noDiscount", "brandSensitive", "lowMargin", "unknownMargin"],
    preferenceTags: ["monetary"],
    bestFor: ["рост среднего чека", "распродажа", "категории с дополняемыми товарами"],
    pros: ["Прямо управляет средним чеком", "Понятна покупателю", "Легко запускать быстро"],
    cons: ["Риск привыкания к скидкам", "Может съедать маржу", "Плохо подходит для люкса"],
    usage: "Лучше всего работает, когда пороги рассчитаны от текущего среднего чека: первый порог чуть выше текущего AOV, второй — на уровне выгодной корзины.",
  },
  {
    id: "bundle",
    name: "Бандл / комплект",
    summary: "Собрать товары или услуги в набор с выгодой, удобством или новой ценностью.",
    base: 53,
    tags: ["aov", "inventory", "value", "retail", "ecom", "service", "saas", "lowAOV", "stock", "midMargin", "highMargin", "revLow", "revMid", "revHigh", "micro", "small", "medium", "growth", "stagnation", "known", "mature", "decline", "balanced", "crisis", "highBudget", "unitsMid", "unitsHigh", "lowCompetition", "midCompetition", "omni", "ownStore", "delivery", "mixedGender"],
    avoid: ["luxury", "complex"],
    preferenceTags: ["utility", "service"],
    bestFor: ["рост среднего чека", "допродажа", "обучение правильному сценарию использования"],
    pros: ["Повышает воспринимаемую ценность", "Снижает сравнение цены по отдельным SKU", "Помогает выводить новые товары"],
    cons: ["Нужна логика сочетаемости", "Плохой набор выглядит как слив остатков", "Сложнее прогнозировать склад"],
    usage: "Используйте, когда товары естественно дополняют друг друга или клиенту сложно выбрать. В SaaS аналог — пакет функций или onboarding bundle.",
  },
  {
    id: "loyalty",
    name: "Программа лояльности",
    summary: "Накопление статуса, баллов, уровней, привилегий и персональных предложений.",
    base: 56,
    tags: ["repeat", "retention", "data", "reactivation", "alwaysOn", "long", "crmReady", "app", "retail", "ecom", "finance", "horeca", "beauty", "revHigh", "revEnterprise", "medium", "large", "enterprise", "stable", "growth", "known", "mature", "established", "oldCompany", "balanced", "investment", "highBudget", "veryHighBudget", "unitsHigh", "unitsMass", "midCompetition", "highCompetition", "omni", "ownStore", "chainRetail", "noData", "mixedGender"],
    avoid: ["newCompany", "noCRM", "tinyBudget", "flash", "revLow"],
    preferenceTags: ["status", "utility", "service", "personal"],
    bestFor: ["частые покупки", "накопление данных", "удержание", "защита доли у зрелого бренда"],
    pros: ["Создает долгую причину возвращаться", "Дает данные для персонализации", "Позволяет управлять LTV"],
    cons: ["Нужна операционная дисциплина", "Нельзя строить только на скидках", "Эффект не мгновенный"],
    usage: "Рациональна, если есть повторяемость покупок и инфраструктура учета. Для премиум-сегмента акцент лучше делать на привилегии, ранний доступ и сервис, а не на баллы.",
  },
  {
    id: "referral",
    name: "Реферальная программа",
    summary: "Вознаграждать клиента за рекомендацию и давать мотивирующий бонус новому покупателю.",
    base: 52,
    tags: ["referral", "highCAC", "lowTrust", "community", "saas", "service", "finance", "education", "subscription", "crmReady", "online", "revMid", "revHigh", "small", "medium", "growth", "youngCompany", "established", "balanced", "investment", "unitsLow", "unitsMid", "midCompetition", "highCompetition", "directSales", "male", "mixedGender"],
    avoid: ["noCRM", "legalSensitive", "stagnation"],
    preferenceTags: ["monetary", "status", "social"],
    bestFor: ["высокий CAC", "продукт с хорошим NPS", "комьюнити", "подписка"],
    pros: ["Приводит теплые лиды", "Может снижать CAC", "Усиливает доверие через социальное доказательство"],
    cons: ["Не спасает слабый продукт", "Нужна защита от фрода", "Сложно масштабировать без аналитики"],
    usage: "Запускайте после подтверждения удовлетворенности клиентов. В дорогих категориях часто лучше работает двусторонняя ценность: подарок другу плюс статусная привилегия рекомендателю.",
  },
  {
    id: "prizeDraw",
    name: "Розыгрыш призов",
    summary: "Участие в лотерее или случайном розыгрыше после покупки, регистрации или действия.",
    base: 46,
    tags: ["awareness", "traffic", "data", "fmcg", "retail", "ecom", "young", "fun", "lowBudget", "midBudget", "short", "season", "revLow", "revMid", "medium", "large", "enterprise", "launch", "growth", "mass", "new", "balanced", "investment", "highBudget", "veryHighBudget", "unitsHigh", "unitsMass", "midCompetition", "highCompetition", "chainRetail", "events", "mixedGender"],
    avoid: ["legalSensitive", "luxury", "brandSensitive", "b2b", "micro"],
    preferenceTags: ["emotional", "utility", "bigPrize", "manySmall"],
    bestFor: ["массовый охват", "низкий бюджет на контакт", "сбор чеков", "развлекательная коммуникация"],
    pros: ["Создает заметность", "Может быть бюджетно эффективным", "Гибко комбинируется с покупкой и UGC"],
    cons: ["Юридически чувствительно", "Вероятность выигрыша снижает мотивацию", "Не всегда дает качественную аудиторию"],
    usage: "Для массовых продуктов уместны много мелких утилитарных призов. Для аудитории с высоким доходом лучше работают редкие эмоциональные или статусные впечатления.",
  },
  {
    id: "contestUGC",
    name: "Конкурс / UGC-челлендж",
    summary: "Пользователь создает контент, выполняет задание или соревнуется за приз.",
    base: 45,
    tags: ["awareness", "community", "fun", "young", "adult", "online", "social", "premiumImage", "data", "lowAwareness", "revMid", "revHigh", "small", "medium", "growth", "launch", "balanced", "investment", "highBudget", "unitsMid", "unitsHigh", "highCompetition", "events", "male", "mixedGender"],
    avoid: ["lowOps", "b2b", "legalSensitive", "senior"],
    preferenceTags: ["emotional", "status", "social"],
    bestFor: ["бренды с визуальной категорией", "комьюнити", "имидж", "соцсети"],
    pros: ["Дает контент и вовлечение", "Усиливает эмоциональную связь", "Может повышать органический охват"],
    cons: ["Высокие требования к креативу", "Нужна модерация", "Не гарантирует продажи"],
    usage: "Применяйте, когда аудитории естественно делиться опытом. Приз должен поддерживать позиционирование: статус, опыт, доступ, а не случайная скидка.",
  },
  {
    id: "premiumGift",
    name: "Подарок за покупку",
    summary: "Физический, цифровой или сервисный подарок при выполнении условия покупки.",
    base: 52,
    tags: ["conversion", "premiumPosition", "highIncome", "veryHighIncome", "beauty", "retail", "ecom", "highMargin", "brandSensitive", "noDiscount", "revMid", "revHigh", "revEnterprise", "medium", "large", "enterprise", "growth", "stable", "known", "mature", "balanced", "investment", "highBudget", "veryHighBudget", "unitsMid", "unitsHigh", "lowCompetition", "midCompetition", "omni", "ownStore", "chainRetail", "mixedGender"],
    avoid: ["lowMargin", "tinyBudget", "economy"],
    preferenceTags: ["gift", "status", "experience"],
    bestFor: ["премиальные бренды", "защита цены", "сезонные кампании", "пороговые покупки"],
    pros: ["Не обесценивает цену", "Создает ощущение заботы", "Можно точно привязать к AOV"],
    cons: ["Подарок должен быть желанным", "Логистика и остатки", "Плохой подарок удешевляет бренд"],
    usage: "Для высокого дохода выбирайте эмоциональные, статусные или сервисные подарки. Для среднего дохода — практичные, но качественные.",
  },
  {
    id: "limitedDrop",
    name: "Лимитированный дроп / ранний доступ",
    summary: "Ограниченная партия, ранний доступ, лист ожидания или закрытая продажа.",
    base: 49,
    tags: ["premiumImage", "premium", "luxury", "innovation", "community", "highIncome", "veryHighIncome", "brandSensitive", "noDiscount", "awareness", "revHigh", "revEnterprise", "medium", "large", "enterprise", "launch", "growth", "investment", "highBudget", "veryHighBudget", "unitsLow", "unitsMid", "lowCompetition", "midCompetition", "omni", "events", "male", "mixedGender"],
    avoid: ["inventory", "stock", "economy", "lowTrust", "crisis", "priceWar"],
    preferenceTags: ["status", "exclusive", "emotional"],
    bestFor: ["премиум", "новинки", "комьюнити", "сильный бренд или инфоповод"],
    pros: ["Поддерживает ценность бренда", "Создает дефицит и обсуждение", "Хорошо собирает лист ожидания"],
    cons: ["Нужен реальный интерес", "Слабый спрос станет видимым", "Не решает массовую распродажу"],
    usage: "Хорошо работает как альтернатива скидке, когда важно сохранить статус и цену. Условие доступа должно быть простым: предзаказ, уровень лояльности, приглашение.",
  },
  {
    id: "coupon",
    name: "Купон / промокод",
    summary: "Персональный или массовый код на выгоду, бесплатную доставку, подарок или сервис.",
    base: 48,
    tags: ["conversion", "traffic", "reactivation", "ecom", "marketplace", "online", "lowBudget", "fastLaunch", "lowConversion", "cashTight", "revLow", "revMid", "micro", "small", "medium", "stagnation", "turnaround", "decline", "crisis", "unitsLow", "unitsMid", "highCompetition", "delivery", "mixedGender"],
    avoid: ["premiumPosition", "luxury", "brandSensitive", "noDiscount", "unknownMargin"],
    preferenceTags: ["monetary", "utility"],
    bestFor: ["быстрый запуск", "реактивация", "измерение канала", "партнерские размещения"],
    pros: ["Простая атрибуция", "Быстрый запуск", "Можно персонализировать"],
    cons: ["Легко утечь в публичный доступ", "Снижает готовность платить", "Часто каннибализирует спрос"],
    usage: "Лучше использовать сегментно: новым, спящим, корзинам без покупки или партнерам. Для брендов с риском удешевления заменяйте скидку на сервисную преференцию.",
  },
  {
    id: "tradeIn",
    name: "Trade-in / обмен старого на новое",
    summary: "Скидка, бонус или утилизационная выгода при сдаче старого товара.",
    base: 47,
    tags: ["durable", "auto", "retail", "electronics", "conversion", "traffic", "eco", "highMargin", "complex", "offline", "revMid", "revHigh", "revEnterprise", "medium", "large", "enterprise", "stable", "mature", "oldCompany", "balanced", "investment", "highBudget", "veryHighBudget", "unitsLow", "unitsMid", "lowCompetition", "midCompetition", "omni", "ownStore", "directSales", "male"],
    avoid: ["impulse", "lowOps", "fmcg"],
    preferenceTags: ["monetary", "eco", "service"],
    bestFor: ["техника", "авто", "товары длительного пользования", "экологическое позиционирование"],
    pros: ["Уменьшает барьер дорогой покупки", "Дает повод заменить продукт", "Поддерживает экологичный нарратив"],
    cons: ["Нужна оценка и логистика", "Риск операционных споров", "Не подходит частым дешевым покупкам"],
    usage: "Эффективен для категорий с длинным циклом замены. Преференция может быть не только деньгами: вывоз, настройка, перенос данных, сервис.",
  },
  {
    id: "subscriptionTrial",
    name: "Пробный период подписки",
    summary: "Ограниченный доступ к сервису с переходом в платную модель.",
    base: 52,
    tags: ["subscription", "saas", "education", "service", "trial", "conversion", "retention", "online", "app", "complex", "revLow", "revMid", "revHigh", "micro", "small", "medium", "launch", "growth", "new", "youngCompany", "balanced", "investment", "unitsLow", "unitsMid", "highCompetition", "directSales", "mixedGender"],
    avoid: ["lowOps", "cashTight"],
    preferenceTags: ["experience", "service"],
    bestFor: ["SaaS", "образование", "сервисы", "цифровые продукты с повторяемой ценностью"],
    pros: ["Снижает риск входа", "Показывает ценность до оплаты", "Дает данные о поведении"],
    cons: ["Нужен onboarding", "Есть риск низкой конверсии в оплату", "Требует продуктовой аналитики"],
    usage: "Сильнее всего работает, если trial ведет пользователя к моменту ценности и содержит понятное окончание: оплата, апгрейд, консультация.",
  },
  {
    id: "crmTriggers",
    name: "CRM-триггеры и персональные офферы",
    summary: "Автоматические предложения по поведению: брошенная корзина, день рождения, истечение срока, вероятный отток.",
    base: 55,
    tags: ["conversion", "repeat", "retention", "reactivation", "data", "crmReady", "online", "app", "ecom", "saas", "finance", "churn", "lowRepeat", "revMid", "revHigh", "revEnterprise", "medium", "large", "enterprise", "stable", "stagnation", "turnaround", "known", "mature", "established", "oldCompany", "balanced", "investment", "highBudget", "veryHighBudget", "unitsMid", "unitsHigh", "unitsMass", "midCompetition", "highCompetition", "omni", "delivery", "noData", "mixedGender"],
    avoid: ["noCRM", "newCompany", "revLow"],
    preferenceTags: ["personal", "utility", "service"],
    bestFor: ["базы клиентов", "повторные покупки", "снижение оттока", "персонализация"],
    pros: ["Высокая релевантность", "Хорошая измеримость", "Не требует массового дисконта"],
    cons: ["Нужны данные и согласия", "Плохая сегментация раздражает", "Требует поддержки сценариев"],
    usage: "Оптимальна, когда есть CRM и события поведения. Преференция должна соответствовать причине: корзине — доставка/срок, оттоку — сервис или персональная выгода.",
  },
  {
    id: "gamification",
    name: "Геймификация / миссии",
    summary: "Задания, прогресс, уровни, коллекции, streak-механики и бейджи.",
    base: 47,
    tags: ["app", "online", "repeat", "retention", "data", "young", "adult", "fun", "community", "alwaysOn", "loyalty", "revHigh", "revEnterprise", "large", "enterprise", "stable", "investment", "veryHighBudget", "unitsHigh", "unitsMass", "midCompetition", "highCompetition", "omni", "mixedGender"],
    avoid: ["senior", "lowOps", "b2b"],
    preferenceTags: ["status", "emotional", "utility"],
    bestFor: ["мобильные приложения", "частые покупки", "комьюнити", "обучение привычке"],
    pros: ["Увеличивает вовлечение", "Может менять поведение без большой скидки", "Хорошо работает с loyalty"],
    cons: ["Легко сделать искусственно", "Нужен дизайн экономики", "Не заменяет реальную ценность"],
    usage: "Делайте миссии короткими и связанными с бизнес-целями: повтор, категория, чек, отзыв, рекомендация. Награды — за прогресс, а не только за покупку.",
  },
  {
    id: "partnerPromo",
    name: "Партнерская преференция",
    summary: "Бонус от смежного бренда: сервис, сертификат, доступ, подарок, совместный пакет.",
    base: 49,
    tags: ["partners", "awareness", "premiumImage", "highIncome", "service", "finance", "travel", "retail", "noDiscount", "brandSensitive", "revHigh", "revEnterprise", "large", "enterprise", "stable", "oldCompany", "investment", "highBudget", "veryHighBudget", "unitsHigh", "lowCompetition", "midCompetition", "omni", "events", "mixedGender"],
    avoid: ["fastLaunch", "lowOps", "revLow"],
    preferenceTags: ["service", "experience", "status"],
    bestFor: ["премиум", "партнерские экосистемы", "рост ценности без скидки", "новые аудитории"],
    pros: ["Расширяет ценность без прямой скидки", "Дает доступ к аудитории партнера", "Может поддерживать позиционирование"],
    cons: ["Дольше согласование", "Риск слабого партнера", "Сложнее атрибуция"],
    usage: "Подбирайте партнера по совпадению аудитории и статуса. Для высокого дохода лучше опыт и сервис, для среднего — практичная экономия у надежного партнера.",
  },
  {
    id: "causePromo",
    name: "Cause-related promo",
    summary: "Часть покупки поддерживает социальную, экологическую или локальную инициативу.",
    base: 42,
    tags: ["eco", "premiumImage", "community", "awareness", "highIncome", "veryHighIncome", "female", "adult", "matureAdult", "brandSensitive", "revMid", "revHigh", "revEnterprise", "medium", "large", "enterprise", "stable", "known", "mature", "investment", "highBudget", "lowCompetition", "midCompetition", "events", "mixedGender"],
    avoid: ["priceWar", "cashTight", "lowTrust", "crisis"],
    preferenceTags: ["emotional", "social"],
    bestFor: ["бренды с ценностями", "комьюнити", "имиджевые кампании", "этичное позиционирование"],
    pros: ["Укрепляет смысл бренда", "Не требует скидки", "Может повышать PR-эффект"],
    cons: ["Нужна подлинность и отчетность", "Слабее работает на срочные продажи", "Риск скепсиса"],
    usage: "Используйте только при реальной связи с брендом и прозрачной отчетности. Иначе механика будет восприниматься как декоративная.",
  },
  {
    id: "financing",
    name: "Рассрочка / BNPL / сервисная выгода",
    summary: "Снизить барьер покупки без снижения цены: рассрочка, бесплатная установка, доставка, страховка.",
    base: 50,
    tags: ["durable", "complex", "conversion", "highIncome", "middleIncome", "auto", "realEstate", "electronics", "noDiscount", "premiumPosition", "revMid", "revHigh", "revEnterprise", "small", "medium", "large", "enterprise", "stable", "known", "mature", "balanced", "investment", "unitsLow", "unitsMid", "highCompetition", "ownStore", "directSales", "male", "mixedGender"],
    avoid: ["impulse", "fmcg", "legalSensitive"],
    preferenceTags: ["service", "utility"],
    bestFor: ["дорогие товары", "длинный цикл решения", "премиальный товар без скидки", "низкая конверсия"],
    pros: ["Сохраняет цену", "Убирает финансовый барьер", "Может повышать конверсию в дорогих категориях"],
    cons: ["Юридические и партнерские условия", "Риск непонимания полной стоимости", "Не подходит дешевым импульсным товарам"],
    usage: "Лучше всего работает, когда покупатель уже хочет товар, но откладывает из-за суммы, риска доставки, настройки или обслуживания.",
  },
  {
    id: "guarantee",
    name: "Гарантия результата / money-back",
    summary: "Снять риск покупки обещанием возврата, гарантией результата или расширенным сервисом.",
    base: 48,
    tags: ["lowTrust", "complex", "service", "education", "saas", "conversion", "premiumPosition", "expert", "newCategory", "revLow", "revMid", "revHigh", "micro", "small", "medium", "launch", "new", "youngCompany", "balanced", "unitsLow", "unitsMid", "highCompetition", "directSales", "male", "mixedGender"],
    avoid: ["lowOps", "cashTight", "fmcg", "crisis"],
    preferenceTags: ["riskReduction", "service"],
    bestFor: ["сложный выбор", "образование", "услуги", "новые категории", "недоверие"],
    pros: ["Снимает ключевое возражение", "Поддерживает экспертность", "Не снижает цену"],
    cons: ["Нужны понятные условия", "Риск злоупотреблений", "Должна быть уверенность в продукте"],
    usage: "Формулируйте гарантию конкретно: срок, условие, критерий, процесс возврата. Для B2B лучше использовать пилот с KPI.",
  },
];

const preferenceRules = [
  {
    match: ["veryHighIncome", "highIncome", "premiumPosition", "luxury", "brandSensitive"],
    text: "Рекомендуемая преференция: эмоциональная, статусная или сервисная. Не делать главным мотивом прямую скидку.",
  },
  {
    match: ["lowIncome", "middleIncome", "priceWar", "economy", "cashTight"],
    text: "Рекомендуемая преференция: понятная денежная выгода, кэшбэк, бесплатная доставка или практичный подарок.",
  },
  {
    match: ["young", "teen", "fun", "community", "app"],
    text: "Рекомендуемая преференция: игровые задания, коллекции, социальное признание, доступ к лимитированному опыту.",
  },
  {
    match: ["b2b", "complex", "expert"],
    text: "Рекомендуемая преференция: пилот, консультация, аудит, расширенная гарантия или сервисный пакет.",
  },
  {
    match: ["fmcg", "unitsMass", "lowBudget"],
    text: "Рекомендуемая преференция: много небольших утилитарных призов или instant win вместо одного далекого суперприза.",
  },
  {
    match: ["eco", "causePromo"],
    text: "Рекомендуемая преференция: вклад в понятную инициативу, переработка, trade-in или прозрачный социальный бонус.",
  },
];

const state = {};
let allVisible = false;
let lastResults = [];

const criteriaGrid = document.querySelector("#criteriaGrid");
const selectedCount = document.querySelector("#selectedCount");
const matchBtn = document.querySelector("#matchBtn");
const resetBtn = document.querySelector("#resetBtn");
const progress = document.querySelector("#progress");
const results = document.querySelector("#results");
const resultList = document.querySelector("#resultList");
const showAllBtn = document.querySelector("#showAllBtn");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modalBody");

function renderCriteria() {
  criteriaGrid.innerHTML = criteria
    .map((group) => {
      const mode = group.multi ? "мультивыбор" : "один выбор";
      return `
        <article class="category" data-group="${group.id}" ${group.dependsOn ? "hidden" : ""}>
          <div class="category__top">
            <div>
              <h3>${group.title}</h3>
              <p>${group.note}</p>
            </div>
            <span class="mode">${mode}</span>
          </div>
          <div class="options">
            ${group.options
              .map(([id, label]) => `<button class="chip" type="button" data-group="${group.id}" data-id="${id}">${label}</button>`)
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function getSelectedValues() {
  return Object.values(state).flat();
}

function updateDependentGroups() {
  criteria.forEach((group) => {
    if (!group.dependsOn) return;
    const el = document.querySelector(`[data-group="${group.id}"].category`);
    const shouldShow = Boolean(state[group.dependsOn]?.length);
    el.hidden = !shouldShow;
    if (!shouldShow && state[group.id]) {
      delete state[group.id];
    }
  });
}

function updateUi() {
  updateDependentGroups();
  document.querySelectorAll(".chip").forEach((chip) => {
    const values = state[chip.dataset.group] || [];
    chip.classList.toggle("selected", values.includes(chip.dataset.id));
    chip.classList.toggle("primary-choice", values[0] === chip.dataset.id);
  });
  const count = getSelectedValues().length;
  selectedCount.textContent = `${count} ${plural(count, "параметр", "параметра", "параметров")} выбрано`;
  matchBtn.disabled = count === 0;
}

function plural(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

function onChipClick(event) {
  const chip = event.target.closest(".chip");
  if (!chip) return;
  const group = criteria.find((item) => item.id === chip.dataset.group);
  const values = state[group.id] || [];
  const id = chip.dataset.id;

  if (group.multi) {
    state[group.id] = values.includes(id)
      ? values.filter((value) => value !== id)
      : [...values, id];
  } else {
    state[group.id] = values.includes(id) ? [] : [id];
  }

  if (!state[group.id].length) delete state[group.id];
  updateUi();
}

function scoreMechanism(mechanism) {
  let score = mechanism.base;
  const notes = [];
  Object.entries(state).forEach(([groupId, values]) => {
    values.forEach((value, index) => {
      const weight = index === 0 ? 9 : 5;
      if (mechanism.tags.includes(value)) {
        score += weight;
        const group = criteria.find((item) => item.id === groupId);
        const label = group.options.find((item) => item[0] === value)?.[1] || value;
        notes.push(`${group.title}: ${label}`);
      }
      if (mechanism.avoid.includes(value)) {
        score -= index === 0 ? 11 : 6;
      }
    });
  });

  score += synergyBonus(mechanism, getSelectedValues());
  score = Math.max(0, Math.min(100, Math.round(score)));
  return { ...mechanism, score, notes: notes.slice(0, 5), preference: getPreference(mechanism) };
}

function synergyBonus(mechanism, values) {
  const has = (...items) => items.every((item) => values.includes(item));
  let bonus = 0;
  if (mechanism.id === "loyalty" && has("crmReady", "repeat")) bonus += 8;
  if (mechanism.id === "crmTriggers" && has("crmReady", "churn")) bonus += 9;
  if (mechanism.id === "premiumGift" && has("noDiscount", "premiumPosition")) bonus += 8;
  if (mechanism.id === "bundle" && has("lowAOV", "highMargin")) bonus += 7;
  if (mechanism.id === "prizeDraw" && has("fmcg", "awareness")) bonus += 7;
  if (mechanism.id === "referral" && has("highCAC", "subscription")) bonus += 8;
  if (mechanism.id === "limitedDrop" && has("veryHighIncome", "brandSensitive")) bonus += 8;
  if (mechanism.id === "coupon" && has("fastLaunch", "lowConversion")) bonus += 7;
  if (mechanism.id === "guarantee" && has("lowTrust", "complex")) bonus += 8;
  if (values.includes("priceWar") && mechanism.avoid.includes("priceWar")) bonus -= 8;
  if (values.includes("lowMargin") && mechanism.preferenceTags.includes("monetary")) bonus -= 7;
  return bonus;
}

function getPreference(mechanism) {
  const values = new Set([...getSelectedValues(), mechanism.id]);
  const matched = preferenceRules.find((rule) => rule.match.some((tag) => values.has(tag)));
  if (matched) return matched.text;
  if (mechanism.preferenceTags.includes("status")) return "Рекомендуемая преференция: статус, ранний доступ, закрытые условия или персональный сервис.";
  if (mechanism.preferenceTags.includes("monetary")) return "Рекомендуемая преференция: прозрачная денежная выгода с контролем маржи и ограничением срока.";
  return "Рекомендуемая преференция: простая, релевантная ценность, которую легко объяснить в одном сообщении.";
}

function runMatching() {
  allVisible = false;
  results.hidden = true;
  progress.hidden = false;
  matchBtn.disabled = true;
  setTimeout(() => {
    lastResults = mechanisms
      .map(scoreMechanism)
      .filter((item) => item.score >= 35)
      .sort((a, b) => b.score - a.score);
    progress.hidden = true;
    results.hidden = false;
    matchBtn.disabled = false;
    renderResults();
    results.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 2000);
}

function renderResults() {
  const visible = allVisible ? lastResults : lastResults.slice(0, 5);
  showAllBtn.hidden = lastResults.length <= 5;
  showAllBtn.textContent = allVisible ? "Показать топ-5" : "Показать все";

  if (!visible.length) {
    resultList.innerHTML = `
      <article class="result-card">
        <div class="rank">!</div>
        <div>
          <h3>Предложений по эффективным механикам для заданных параметров нет</h3>
          <p class="fit-notes">Попробуйте снять часть ограничений, уточнить цель или выбрать дополнительные вводные.</p>
        </div>
      </article>
    `;
    return;
  }

  resultList.innerHTML = visible
    .map((item, index) => `
      <article class="result-card">
        <div class="rank">${index + 1}</div>
        <div>
          <h3>${item.name}</h3>
          <p>${item.summary}</p>
          <div class="tags">
            ${item.bestFor.slice(0, 4).map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <div class="preference">${item.preference}</div>
          <p class="fit-notes">${item.notes.length ? `Совпадения: ${item.notes.join("; ")}.` : "Подходит как универсальная механика, но требует уточнения вводных."}</p>
          <button class="details-btn" type="button" data-details="${item.id}">Подробная информация</button>
        </div>
        <div class="score">
          <strong>${item.score}%</strong>
          <div class="bar"><i style="width:${item.score}%"></i></div>
        </div>
      </article>
    `)
    .join("");
}

function openDetails(id) {
  const item = lastResults.find((result) => result.id === id) || mechanisms.find((result) => result.id === id);
  modalBody.innerHTML = `
    <p class="eyebrow">Механика</p>
    <h2 id="modalTitle">${item.name}</h2>
    <p>${item.summary}</p>
    <div class="preference">${item.preference || getPreference(item)}</div>
    <div class="detail-grid">
      <section class="detail-block">
        <h3>Когда использовать</h3>
        <p>${item.usage}</p>
      </section>
      <section class="detail-block">
        <h3>Лучше всего для</h3>
        <ul>${item.bestFor.map((value) => `<li>${value}</li>`).join("")}</ul>
      </section>
      <section class="detail-block">
        <h3>Плюсы</h3>
        <ul>${item.pros.map((value) => `<li>${value}</li>`).join("")}</ul>
      </section>
      <section class="detail-block">
        <h3>Минусы и риски</h3>
        <ul>${item.cons.map((value) => `<li>${value}</li>`).join("")}</ul>
      </section>
    </div>
  `;
  modal.hidden = false;
}

criteriaGrid.addEventListener("click", onChipClick);
matchBtn.addEventListener("click", runMatching);
resetBtn.addEventListener("click", () => {
  Object.keys(state).forEach((key) => delete state[key]);
  results.hidden = true;
  progress.hidden = true;
  updateUi();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
showAllBtn.addEventListener("click", () => {
  allVisible = !allVisible;
  renderResults();
});
resultList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-details]");
  if (button) openDetails(button.dataset.details);
});
modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close]")) modal.hidden = true;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") modal.hidden = true;
});

renderCriteria();
updateUi();
