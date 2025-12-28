# GitHub Pages — одностраничный сайт-статья (HTML/CSS/JS)

Статический сайт в формате текстовой статьи: H1 + H2/H3, списки, блоки сервисов с “синим разделением”, авто-оглавление.  
Размещается на GitHub Pages, открыт к индексации (robots: index, follow), без тяжёлых библиотек.

---

## 1) Состав проекта (структура папок)

/
index.html
assets/
css/
styles.css
js/
main.js
img/
favicon.svg
(другие изображения при необходимости)


---

## 2) Что уже настроено

- Адаптивная вёрстка под телефон и десктоп
- Минималистичный дизайн, 1 акцентный цвет (ссылки/разделители)
- SEO минимум: `<title>`, `description`, `robots`, `canonical`, корректная структура H1/H2/H3
- Ссылки визуально выделены (синие + подчёркивание)
- Блоки сервисов оформлены карточками (border-left акцентным цветом)
- Оглавление:
  - на десктопе — справа
  - на мобилке — только сверху (справа блок скрыт)
- Подключена аналитика:
  - Google Analytics (GA4 / gtag.js)
  - Яндекс.Метрика

---

## 3) Быстрые правки (где что менять)

### 3.1. Заголовок страницы (H1)
Файл: `index.html`  
Найдите:
```html
<h1>...</h1>

Замените текст внутри.
3.2. SEO: title / description

Файл: index.html → внутри <head>:

<title>...</title>
<meta name="description" content="..." />

3.3. Canonical

Файл: index.html:

<link rel="canonical" href="https://ВАШ-ДОМЕН.github.io/" />

3.4. Текст статьи (весь контент)

Файл: index.html
Контент расположен внутри:

<article class="article"> ... </article>

Там же находятся:

    заголовки h2, h3

    списки ul/ol

    абзацы p

    блоки сервисов

3.5. Ссылки (редиректы)

Все внешние ссылки оформлены так:

<a href="https://virtualcards.su/hRJdIU" target="_blank" rel="noopener">domain.com</a>

Чтобы поменять редирект:

    меняйте только href="...",

    текст domain.com можно оставлять читабельным.

Важно:

    внутренние ссылки оглавления вида #... не редиректные — это навигация по странице.

4) Дизайн (CSS) — что менять

Файл: assets/css/styles.css
4.1. Акцентный цвет (ссылки и “синяя полоса” в блоках)

Вверху файла:

:root{
  --accent:#2563eb;
}

4.2. Отступы на мобилке (слева/справа)

Отступы задаёт .container. Для мобильных включён отдельный блок:

@media (max-width: 980px){
  .container{
    padding-left: max(14px, env(safe-area-inset-left));
    padding-right: max(14px, env(safe-area-inset-right));
  }
}

4.3. “Синее разделение” между сервисами

Стили карточек сервисов:

.service{
  border-left: 4px solid var(--accent);
}

5) Оглавление (TOC) — как работает

Файл: assets/js/main.js

Скрипт автоматически:

    находит h2 и h3 внутри .article,

    создаёт/назначает им id,

    строит оглавление на десктопе справа и мобильное сверху,

    подсвечивает активный пункт при прокрутке.

6) Аналитика: Google (GA4) и Яндекс.Метрика

Коды вставлены в index.html в блоке <head>.
6.1. Google Analytics (GA4)

Блок выглядит примерно так:

<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

Чтобы заменить счётчик GA4:

    поменяйте G-XXXXXXXXXX в 2 местах.

6.2. Яндекс.Метрика

Блок выглядит примерно так:

<script type="text/javascript">
  (function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
  })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=XXXXXXXX', 'ym');

  ym(XXXXXXXX, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/XXXXXXXX" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

Чтобы заменить ID Метрики:

    поменяйте XXXXXXXX в 3 местах:

        tag.js?id=XXXXXXXX

        ym(XXXXXXXX, 'init', ...)

        /watch/XXXXXXXX

7) Публикация на GitHub Pages

    Загрузите проект в репозиторий (важно: index.html должен быть в корне репо).

    Репозиторий → Settings → Pages

    Build and deployment:

    Source: Deploy from a branch

    Branch: main

    Folder: / (root)

    Сохраните — через 1–5 минут появится ссылка.

Важное про URL

    Если нужен URL вида https://username.github.io/
    репозиторий должен называться username.github.io

    Если репозиторий обычный (например site)
    URL будет https://username.github.io/site/

8) Проверка перед сдачей (чек-лист)

Сайт открывается по GitHub Pages

H1 один на странице

Есть title и description

Ссылки кликабельны и визуально выделены

На мобилке есть отступы слева/справа

Оглавление справа скрыто на мобилке

    GA4 и Яндекс.Метрика вставлены в <head>

9) Короткая инструкция 5–10 строк (для заказчика)

    Текст и структура статьи меняются в index.html внутри <article class="article"> ... </article>.

    Заголовок страницы (H1) — в index.html в теге <h1>.

    Title/Description — в index.html внутри <head>.

    Ссылки меняются в index.html — обновляйте href="..." у тегов <a>.

    Цвет ссылок/разделителей — assets/css/styles.css переменная --accent.

    Оглавление формируется автоматически из H2/H3 (скрипт assets/js/main.js).

    GA4: замените G-... в коде Google Tag в <head>, если потребуется другой счётчик.

    Метрика: замените номер счётчика XXXXXXXX в 3 местах в коде Метрики в <head>.
