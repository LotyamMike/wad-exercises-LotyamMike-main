# HTML 5
## The past, the present, the future

# Table of Contents
- [Hypertext Markup Language](#/html)
- [HTML Terminology](#/terminology)
- [HTML Document Structure](#/structure)
- [HTML Common Elements](#/commonelements)
- [Section Elements](#/sectionelements)
- [Semantic Structural Tags](#/semantic)

# <a id="html"></a>Hypertext Markup Language
- **HTML** – **H**yper **T**ext **M**arkup **L**anguage
  - A **notation for describing**
    - document structure (semantic markup)
    - formatting (presentation markup)
  - Looks (looked?) like:
    - A Microsoft Word document
- The markup tags **provide information** about the page content structure
- A **HTML** document **consists of many tags**


# Creating HTML Pages
- An **HTML** document must have an **.htm** or **.html** file extension
- **HTML** files can be created with text editors:
  - _Atom_ :)

# HTML – Past, Present, Future
- 1991 – HTML first mentioned – Tim Berners-Lee – HTML tags
- 1993 – HTML (first public version, published at IETF)
- 1993 – HTML 2 draft
- 1995 – HTML 2 – W3C
- 1995 – HTML 3 draft
- 1997 – HTML 3.2 – “Wilbur”
- 1997 – HTML 4 – ”Cougar” – CSS
- 1999 – HTML 4.01 (final)
- 2000 – XHTML draft
- 2001 – XHTML  (final)
- 2008 – HTML5 / XHTML5 draft
- 2011 – feature complete HTML5
- http://en.wikipedia.org/wiki/HTML5#Plan_2014

# <a id="terminology"></a>HTML Terminology
- Concepts in **HTML**
  - **Tags**
    - Opening tag and closing tag
    - The smallest piece in HTML
  - **Attributes**
    - Properties of the tag
    - Size, color, etc…
  - **Elements**
    - Combination of opening, closing tag and attributes


# HTML Tags
- **Tags** are the **smallest piece** in HTML Document
  - Start with `<` and end with `>`
- Two kinds of **tags**
  - **Opening**
    - Mark the start of an HTML element
  - **Closing**
    - Mark the end of an HTML element
    - Starts with `</`

```html
<html>
<body>
   <h1>Hello Pesho!</h1>
</body>
</html>
```

<div class="fragment balloon" style="top:68%; left:17%;">Opening tags</div>

<div class="fragment balloon" style="top:82%; left:17%;">Closing tags</div>


# Attributes
- Attributes are **properties of HTML Elements**
  - Used to **set** `size`, `color`, `border`, etc…
  - Put **directly in the tags**
  - Has value surrounded by **single** `' '` or **double** `" "`  quotes
    - The value is always a string

```html
<!-– makes a hyperlink to Google -->
<a href="http://google.com"> go to Google</a>

<!-– makes a horizontal line -->
<hr width="95%" size="3px"/>

<!-– adds an image in the web page -->
<img src="images/SEB-Ninja.png"/>
```

<div class="fragment balloon" style="top:72%; left:58%; width:25.56%">Some  tags don't have closing tag</div>



# Most Common Attributes
- There are some **attributes that are common** for every HTML element
  - `id`, `class`, `name`, `style`
- Some attributes are **specific**
  - For example the attribute `src` of the `img` element
    - Shows the path to the image to be shown


# HTML Elements
- HTML Elements are **combination of tags and attributes**
  - Opening tag with some or none attributes and a closing tag

```html
<a href="http://google.com"> go to Google</a>
```

```html
<html>…</html>
```

# <a id="structure"></a>HTML Document Structure
- Some elements are **essential** to each HTML Document:
    - `html`, `head`, `body`, `doctype`
- The `html` element
  - Used to **mark the beginning** and ending of a HTML document
  - All the content of the web page is inside this tag

```html
<html>
   <!-- content goes here -->
</html>
```

# Head Element
- The `head` tag contains markup that is not visible to the user (i.e. the person using the browser)
  - But **helps the browser** to render correctly the HTML document
- **What is in there**?
  - Styles, scripts
  - Declare encodings
  - Etc..
  - The `title` tag - the text in the tab of a browser

# Body Element and Doctype
- `body` element contains **all the visible to the user markup**
  - Headings, text, hyperlinks, images, etc…
  - Textboxes, sliders, buttons…
- `Doctype` is kind of the validator of the page
  - **Tells the browser** in which version of HTML the page is written
  - HTML 5 Doctype

```html
<!DOCTYPE html>
```


# Text Formatting
- Text formatting tags modify the text between the opening tag and the closing tag
  - Ex. <code>&lt;b>Hello&lt;/b&gt;</code> makes "Hello" bold
  - Many of the formatting tags are deprecated
    - **Use CSS instead**

# Text Formatting - Tags
|          Tags        |              Meaning             |
|:---------------------|:--------------------------------:|
| `<b></b>`            | <b>bold</b>                      |
| `<i></i>`            | <i>italiazed</i>                 |
| `<u></u>`            | <u>underlined</u>                |
| `<sup></sup>`        | sample<sup>superscript</sup>     |
| `<sub></sub>`        | sample<sub>bold</sub>            |
| `<strong></strong>`  | <strong>strong</strong>          |
| `<em></em>`          | <em>emphasized</em>              |
| `<pre></pre>`        | <pre>preformatted text</pre>     |

# <a id="commonelements"></a>Some Simple Tags
- Hyperlink Tags

```html
<a href="http://www.strathmore.edu/"
  title="Strath">Link to Strath Web site</a>
```
- Image Tags

```html
<img src="logo.gif" alt="logo" />
```
- Text formatting tags

```html
This text is <em>emphasized.</em>
<br />new line<br />
This one is <strong>more emphasized.</strong>
```

# Hyperlink Tags
<!-- TODO:
- `target` attribute
  - `_blank`
  - `_self`
-->


# Headings and Paragraphs
- Heading Tags (`h1` – `h6`)

```html
<h1>Heading 1</h1>
<h2>Sub heading 2</h2>
<h3>Sub heading 3</h3>
```

- Paragraph Tags

```html
<p>This is my first paragraph</p>
<p>This is my second paragraph</p>
```

- Sections: `div` and `span`

```html
<div style="background: skyblue;">
   This is a div
</div>
```



# Ordered Lists: **&#60;ol&#62;** Tag
- Create an **Ordered List** using `<ol></ol>`:

```html
<ol type="1">
  <li>Apple</li>
  <li>Orange</li>
  <li>Grapefruit</li>
</ol>
```
- Attribute values for **type** are **1**, **A**, **a**, **I**, or **i**



# Unordered Lists: **&#60;ul&#62;** Tag
- Create an **Unordered List** using `<ul></ul>`:
- Attribute values for **type** are:



# Definition lists: **&#60;dl&#62;** tag
- Create **definition lists** using `<dl></dl>`
  - Pairs of text and associated definition; text is in `<dt></dt>` tag, definition in `<dd></dd>` tag

```html
<dl>
<dt>HTML</dt>
<dd>A markup language …</dd>
<dt>CSS</dt>
<dd>Language used to …</dd>
</dl>
```
  - Renders **without bullets**
  - Definition is **indented**

# <a id="sectionelements"></a>The &#60;div&#62; Tag
- `<div>` creates logical<br /> divisions within a page <br /> <br/>
  - Block element <br/> <br/>
  - Used with CSS <br/> <br/>
- _Example_:

```html
<div style="font-size:24px; color:red">DIV example</div>
<p>This one is
    <span style="color:red; font-weight:bold">only a test</span>.
</p>
```

# The &#60;span&#62; Tag

<ul style="width: 60%">
<li><strong>Inline style</strong> element</li>
<li>
    Useful for <strong>modifying a specific portion</strong> of text
    <ul>
        <li><strong>Don't use it to create a separate area</strong> (paragraph) in the document</li>
    </ul>
</li>

<li>Mainly used to style parts of a text</li>

</ul>

```html
<p>This one is
    <span style="color:red; font-weight:bold">only a test</span>.
</p>
<p>This one is another
    <span style="font-size:32px; font-weight:bold">TEST</span>.
</p>
```



# <a id="semantic"></a>Semantic Structural Tags

# The Structure of a Web Page
- A sample layout structure of a Web Page


# The "HTML 4 and Before" Way
- Using **divs with IDs**
  - The **IDs are needed for styling**

```html
<html>
<head> … </head>
<body>
    <div id="header"> … </div>
    <div id="navigation"> … </div>
    <div id="sidebar"> … </div>
    <div id="content"> … </div>
    <div id="footer"> … </div>
</body>
</html>
```

# The HTML5 Way
- In **HTML5** there are **semantic tags** for layout
  - `<nav>`, `<header>`, `<footer>`, `<section>`

```html
<html>
<head> … </head>
<body>
    <header> … </header>
    <nav> … </nav>
    <aside> … </aside>
    <section> … </section>
    <footer> … </footer>
</body>
</html>
```
- Work only **in newer browsers**


# Remember
- It is important to have the **correct vision** and **attitude** towards HTML
  - **HTML is only about structure**, not appearance
  - Browsers tolerate invalid HTML code and parse errors – you should not
  - Always think about **semantics**
- The **W3C HTML Validator** is a way to validate your HTML
  - http://validator.w3.org/
