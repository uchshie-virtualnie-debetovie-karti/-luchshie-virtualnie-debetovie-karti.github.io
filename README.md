 Статья-лендинг на GitHub Pages (Virtual Debit Cards)

Этот репозиторий содержит статический одностраничный сайт в формате статьи. Сайт публикуется через GitHub Pages и открыт к индексации.

---

## Быстрые ссылки
- Сайт: https://luchshie-virtualniye-debetovie-karti.github.io/
- Репозиторий: https://github.com/luchshie-virtualniye-debetovie-karti/luchshie-virtualniye-debetovie-karti.github.io

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

SEO-минимум (Title / Description)

SEO-поля находятся в <head> файла index.html:

<title>...</title>
<meta name="description" content="...">
<meta name="robots" content="index, follow">

Индексация (robots.txt и sitemap.xml)

    robots.txt разрешает индексацию и указывает sitemap:
    https://luchshie-virtualniye-debetovie-karti.github.io/sitemap.xml

    sitemap.xml содержит URL главной страницы:
    https://luchshie-virtualniye-debetovie-karti.github.io/

Как включить GitHub Pages (публикация)

    Репозиторий → Settings

    Слева → Pages

    Source: Deploy from branch

    Branch: main

    Folder: /(root)

    Save

Если изменения не видны (кэш браузера)

    Обновите страницу жёстко:

    Windows: Ctrl + F5

    Mac: Cmd + Shift + R

    Откройте сайт в режиме инкогнито.

    Увеличьте версию CSS в index.html:

<link rel="stylesheet" href="assets/css/styles.css?v=1" />

Поменяйте v=1 → v=2, сохраните и сделайте Commit.
