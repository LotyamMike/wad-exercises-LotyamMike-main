# HTML Tables


# Contents
- [HTML Tables](#/tables)
  - [Simple Tables](#/simpletables)
  - [Data cells and Header cells](#/headers)
  - [Complete HTML Tables](#/completetables)
- [Nested Tables](#/nestedtables)
- [Complex tables](#/comlextables)
  - [Cell Spacing and Padding](#/cells)
  - [Column and Row Span](#/spans)

# <a id="tables"></a>HTML Tables
- Tables represent tabular data
  - A table consists of one or several rows
  - Each row has one or more columns
- Tables are comprised of several core tags:
  - `<table></table>`:  begin/end table definition
  - `<tr></tr>`: create a table row
  - `<td></td>`: create tabular data (cell)
- Tables should not be used for layout
  - Use CSS floats and positioning styles instead


# <a id="simpletables"></a>Simple HTML Tables – _Example_

```html
<table cellspacing="0" cellpadding="5">
  <tr>
    <td><img src="ppt.gif"></td>
    <td><a href="lecture1.ppt">Lecture 1</a></td>
  </tr>
  <tr>
    <td><img src="ppt.gif"></td>
    <td><a href="lecture2.ppt">Lecture 2</a></td>
  </tr>
  <tr>
    <td><img src="zip.gif"></td>
    <td>
      <a href="lecture2-demos.zip">Lecture 2 - Demos</a>
      </td>
  </tr>
</table>
```


# <a id="headers"></a>Data Cells and Header Cells
- Two kinds of cells in HTML tables
  - `Data` cells – containing the table data
  - `Header` cells – used for the column names or some more important cells
- Why two kinds of cells?
  - Used to `semantically` separate the cells

```html
<tr>
    <th>Full Name</th> <th>Mark</th>
</tr>
<tr>
    <td>Doncho Minkov</td> <td>Very good (5)</td>
</tr>
<tr>
    <td>Georgi Georgiev</td> <td>Excellent (6)</td>
</tr>
```

# <a id="completetables"></a>Complete HTML Tables
## With Header, Footer and Body


# Complete HTML Tables
- Table rows split into three semantic sections: `header`, `body` and `footer`
  - `<thead>` denotes table header and contains `<th>` elements, instead of `<td>` elements
  - `<tbody>` denotes collection of table rows that contain the very data
  - `<tfoot>` denotes table footer but comes **BEFORE** the `<tbody>` tag
  - `<colgroup>` and `<col>` define columns (used to set column widths)


# Complete HTML Table: _Example_

```html
<table>
  <colgroup>
    <col style="width:100px" /><col />
  </colgroup>
  <thead>
    <tr><th>Column 1</th><th>Column 2</th></tr>
  </thead>
  <tfoot>
    <tr><td>Footer 1</td><td>Footer 2</td></tr>
  </tfoot>
  <tbody>
    <tr><td>Cell 1.1</td><td>Cell 1.2</td></tr>
    <tr><td>Cell 2.1</td><td>Cell 2.2</td></tr>
  </tbody>
</table>
```

# Complete HTML Table: _Example_

```html
<table>
  <colgroup>
    <col style="width:200px" /><col />
  </colgroup>
  <thead>
    <tr><th>Column 1</th><th>Column 2</th></tr>
  </thead>
  <tfoot>
    <tr><td>Footer 1</td><td>Footer 2</td></tr>
  </tfoot>
  <tbody>
    <tr><td>Cell 1.1</td><td>Cell 1.2</td></tr>
    <tr><td>Cell 2.1</td><td>Cell 2.2</td></tr>
  </tbody>
</table>
```



# <a id="nestedtables"></a>Nested Tables
## Tables in Tables in Tables in Tables…


# Nested Tables
- Table **cells** (`<td>`) can contain **nested** tables (tables within tables):

```html
<table>
  <tr>
    <td>Contact:</td>
    <td>
      <table>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```



# <a id="cells"></a> Cell Spacing and Padding




# Cell Spacing and Padding – _Example_

```html
<html>
  <head><title>Table Cells</title></head>
  <body>
    <table cellspacing="15" cellpadding="0">
      <tr>
          <td>First</td>
          <td>Second</td>
      </tr>
    </table>
    <br/>
    <table cellspacing="0" cellpadding="10">
      <tr>
          <td>First</td>
          <td>Second</td>
      </tr>
    </table>
  </body>
</html>
```




```html
<html>
  <head><title>Table Cells</title></head>
  <body>
    <table cellspacing="15" cellpadding="0">
      <tr>
          <td>First</td>
          <td>Second</td>
      </tr>
    </table>
    <br/>
    <table cellspacing="0" cellpadding="10">
      <tr>
          <td>First</td>
          <td>Second</td>
      </tr>
    </table>
  </body>
</html>
```

# <a id="spans"></a>Row and Column Spans
## How to Make a Two-Cells Column or Row?


# Column and Row Span – _Example_ -->

```html
<table cellspacing="0">
  <tr class="1">
  	<td>Cell[1,1]</td>
  	<td colspan="2">Cell[2,1]</td>
  </tr>
  <tr class="2">
  	<td>Cell[1,2]</td>
  	<td rowspan="2">Cell[2,2]</td>
  	<td>Cell[3,2]</td>
  </tr>
  <tr class="3">
  	<td>Cell[1,3]</td>
  	<td>Cell[2,3]</td>
  </tr>
</table>
```

# Tables summary
![tables_summary](images/tables_summary.png)

> @Credits : Learning Web Design 5th Ed (J.N. Robbins)
