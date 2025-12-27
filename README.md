# Статья-лендинг на GitHub Pages (Virtual Debit Cards)

Этот репозиторий содержит статический одностраничный сайт в формате статьи. Сайт публикуется через GitHub Pages и открыт к индексации.

---

## Быстрые ссылки (замените USERNAME)
- Сайт: `https://USERNAME.github.io/`
- Репозиторий: `https://github.com/USERNAME/USERNAME.github.io`

> ВАЖНО: если репозиторий называется `USERNAME.github.io`, GitHub Pages будет открываться **без** `/repo/` — прямо по адресу `https://USERNAME.github.io/`.

---

## Структура проекта

/index.html
/robots.txt
/sitemap.xml
/README.md
/assets/css/styles.css
/assets/js/main.js
/assets/img/logo.svg
/assets/img/favicon.svg
/assets/img/ (доп. изображения статьи)


**За что отвечает каждый файл:**
- `index.html` — вся страница (H1, текст статьи, ссылки, SEO: title/description, подключение стилей/скриптов).
- `assets/css/styles.css` — дизайн: типографика, отступы, вид ссылок (синие), блоки сервисов с синим разделителем, адаптивность.
- `assets/js/main.js` — оглавление (справа и на мобильном), подсветка активного раздела при прокрутке, год в футере.
- `assets/img/logo.svg` — логотип в шапке.
- `assets/img/favicon.svg` — иконка вкладки (favicon).
- `robots.txt` — разрешение индексации + ссылка на sitemap.
- `sitemap.xml` — карта сайта (1 URL).

---

## Как редактировать текст статьи

1) Откройте репозиторий → файл `index.html`.  
2) Нажмите **Edit (карандаш)**.  
3) Найдите блок:
```html
<!-- ===================== ARTICLE START ===================== -->
...текст...
<!-- ===================== ARTICLE END ===================== -->

    Редактируйте контент только внутри этого блока.

    Нажмите Commit changes — сайт обновится обычно через 1–3 минуты.

Разметка текста (H1 / H2 / H3 / списки)
Главный заголовок (H1)

На странице должен быть один H1:

<h1>Заголовок страницы</h1>

Разделы (H2)

<h2>Название раздела</h2>

Подразделы (H3)

<h3>Название подраздела</h3>

Маркированный список

<ul>
  <li>Пункт 1</li>
  <li>Пункт 2</li>
</ul>

Нумерованный список

<ol>
  <li>Шаг 1</li>
  <li>Шаг 2</li>
</ol>

Как редактировать ссылки

Ссылка в тексте оформляется так:

<a href="https://example.com" target="_blank" rel="noopener">example.com</a>

    Адрес меняется в href="..."

    Текст ссылки меняется между >...<

    target="_blank" открывает ссылку в новой вкладке (можно оставить)

Блоки сервисов (синие разделители)

Каждый сервис оформлен отдельным блоком для удобства чтения:

<section class="service">
  <h3>Название сервиса</h3>
  <p>Описание...</p>
  <p>Ссылка: <a href="https://site.com">site.com</a></p>
  <ul>...</ul>
</section>

Чтобы добавить новый сервис:

    Скопируйте любой существующий блок <section class="service">...</section>

    Вставьте его ниже

    Измените текст и ссылку

Как добавить изображение в статью
Шаг 1: загрузить изображение

    Откройте папку assets/img/

    Нажмите Add file → Upload files

    Загрузите картинку (например photo.jpg)

Шаг 2: вставить изображение в текст

В нужном месте статьи вставьте:

<img src="assets/img/photo.jpg" alt="Короткое описание" loading="lazy">

Рекомендации:

    alt обязателен (полезен для SEO и доступности)

    loading="lazy" ускоряет загрузку

SEO-минимум (Title / Description)

SEO-поля находятся в <head> файла index.html:

<title>...</title>
<meta name="description" content="...">
<meta name="robots" content="index, follow">

    Title — заголовок вкладки и поисковой выдачи

    Description — описание в поисковой выдаче

    Robots — индексация (у нас включена)

Индексация (robots.txt и sitemap.xml)
robots.txt

Файл разрешает индексацию и указывает sitemap:

User-agent: *
Allow: /

Sitemap: https://USERNAME.github.io/sitemap.xml

    Замените USERNAME на свой логин GitHub.

sitemap.xml

Файл содержит URL главной страницы:

<loc>https://USERNAME.github.io/</loc>

    Замените USERNAME на свой логин GitHub.

Как включить GitHub Pages (публикация)

    Репозиторий → Settings

    Слева → Pages

    Source: Deploy from branch

    Branch: main

    Folder: /(root)

    Save

После публикации сайт будет доступен по адресу:

    https://USERNAME.github.io/

Как проверить “правильный” URL (без /repo/)

Чтобы сайт открывался без /repo/, репозиторий должен называться:

    USERNAME.github.io

Если репозиторий называется иначе, будет формат project pages:

    https://USERNAME.github.io/REPO_NAME/

Если изменения не видны (кэш браузера)

Иногда браузер держит старые стили.

    Обновите страницу жёстко:

    Windows: Ctrl + F5

    Mac: Cmd + Shift + R

    Откройте сайт в режиме инкогнито.

    Увеличьте версию CSS в index.html:

<link rel="stylesheet" href="assets/css/styles.css?v=1" />

Поменяйте v=1 → v=2, сохраните и сделайте Commit.
