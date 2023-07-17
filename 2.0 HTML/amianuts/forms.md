# HTML Forms and Frames


# Table of Contents
- [HTML Forms](#/form)
  - [Form Fields and Fieldsets](#/field)
  - [Buttons](#/button)
  - [Checkboxes and Radio Buttons](#/checkbox)
  - [Select Fields](#/select)
  - [Hidden Fields](#/hidden)
  - [Sliders and Spinboxes](#/slider)
  - [Validation Fields](#/validation)
- HTML Frames
  - [Frame and **noframe** tags](#/noframe)
  - [**iframe** tag](#/iframe)


# <a id="form"></a>What are HTML Forms?
- The **primary** method for gathering data from site visitors
- HTML Forms can contain
  - **Text** fields for the user to type
  - **Buttons** for interactions like<br /> "**Register**", "**Login**", "**Search**"
  - **Menus**, **Sliders**, etc…
- Check Google, Yahoo, Facebook
  - Google search field is a simple **Text field**


# How to Create a HTML Form?
- Create a form block with
```html
<form></form>
```
- _Example_:


```html
<form name="myForm" method="post" action="path/to/some-script.php">
   ...
</form>
```



# <a id="field"></a>Text Fields
- **Single-line** text input fields:

```html
<input type="text" name="FirstName" value="This is a text field" />
```
- **Multi-line** text input fields (`textarea`):

```html
<textarea name="Comments">
    This is a multi-line text field
</textarea>
```
- **Password** input – a text field which masks the entered text with `*` signs

```html
<input type="password" name="pass" />
```



# <a id="button"></a>Buttons
- **Reset** button – brings the form to its initial state

```html
<input type="reset" name="resetBtn"
  value="Reset the form" />
```
- **Submit** button:

```html
<input type="submit" name="submitBtn" value="Submit" />
```

# <a id="button"></a>Buttons
- **Image** button – acts like submit but image is displayed and click coordinates are sent

```html
<input type="image" src="submit.gif"
  value="click me" alt="Submit" />
```
- **Ordinary** button – no default action, used with JS

```html
<input type="button" value="Apply Now" />
```


# <a id="checkbox"></a>Checkboxes and Radio Buttons
- **Checkboxes**:
```html
<input type="checkbox" name="fruit" value="apple" />
```
- **Radio** buttons:
```html
<input type="radio" name="title" value="Mr." />
```
- Radio buttons can be grouped, allowing **only one** to be selected from a group:
```html
<input type="radio" name="city" value="Lom" />
<input type="radio" name="city" value="Ruse" />
```



# <a id="select"></a>Select Fields
- **Dropdown** menus:

```html
<select name="gender">
  <option value="Value 1"
    selected="selected">Male</option>
  <option value="Value 2">Female</option>
  <option value="Value 3">Other</option>
</select>
```
- **Multiple-choice** menus:

```html
<select name="products" multiple="multiple">
  <option value="Value 1"
    selected="selected">keyboard</option>
  <option value="Value 2">mouse</option>
</select>
```


# <a id="hidden"></a>Hidden Fields
- **Hidden** fields contain invisible data

```html
<input type="hidden" name="Account"
  value="This is a hidden text field" />
```
  - Not shown to the user
  - Used by **JavaScript** and **server-side** code
    - **ViewState**, **SessionState** in ASP.NET


# Labels
- **Labels** are used to associate an explanatory text to a form field using the field's ID

```html
<label for="fn">First Name</label>
<input type="text" id="fn" />
```
- Clicking on a label **focuses** its associated field
  - Checkboxes are **toggled**
  - Radio buttons are **checked**
- Labels are
  - Both a **usability** and **accessibility** feature
  - Required to pass accessibility validation


# Fieldsets
- **Fieldsets** are used to enclose a group of related form fields:

```html
<form method="post" action="form.aspx">
   <fieldset>
      <legend>Client Details</legend>
      <input type="text" id="Name" />
      <input type="text" id="Phone" />
   </fieldset>
   <fieldset>
      <legend>Order Details</legend>
      <input type="text" id="Quantity" />
      <textarea cols="40" rows="10" id="Remarks">
      </textarea>
   </fieldset>
</form>
```
- The <code>&lt;legend&gt;</code> is the fieldset's title


# <a id="slider"></a>Range and Spinbox
- Restricts users to enter only numbers
  - Additional attributes **min**, **max** and **step** and **value**
  - Can become **Spinbox** or **Slider**, depending on the input type

```html
<input type="range" min="0" max="100" />
<input type="number" min="0" max="100" />
```
  - Have some **differences** on **different browsers**
  - Spinboxes **do not work** on all the browsers
    - Shown as regular textboxes


# Field Attributes from HTML 5
- **Autocomplete**
  - The browser stores the previously typed values
  - Brings them back on a later visit
- **Autofocus**
  - The field becomes on focus on page load

```html
<input type="text" name="firstName"
  autofocus="autofocus" />
```
- **Required**
  - The field is required to be filled/selected


# <a id="validation"></a>Input Fields with Validation
- **Email** – provides a simple validation for email
  - Can be passed a pattern for validation
  - In a mobile device brings the email keyboard

```html
<input type="email" required="true" pattern="[^ @]*@[^ @].[^ @]"/>
```
- **URL** – has validation for url
  - In a mobile device brings the url keyboard

```html
<input type="url" required="true" />
```
- **Telephone**
  - Brings the numeric keyboard (currently supported only in Safari 8)

```html
<input type="tel" required="true" />
```


# Tab Index
- The `tabindex` HTML attribute controls the order in which form fields and hyperlinks are focused when repeatedly pressing the **TAB** key
  - `tabindex=0` (zero) – "natural" order
  - If `X < Y`, then elements with `tabindex="X"` are iterated before elements with `tabindex="Y"`
  - Elements with negative `tabindex` are skipped, however, this is not defined in the standard

```html
<input type="text" name="second" tabindex="10" />
<input type="text" name="first" tabindex="5" />
```


# <a id="iframe"></a>Inline Frames: `<iframe>`
- **Inline frames** provide a way to show one website inside another website:

```html
<iframe name="iframeYoutube"
        width="600"
        height="400"
        src="https://www.youtube.com/"
        frameborder="yes"
        scrolling="yes">
</iframe>
```
