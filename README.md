1. what is (x)html
   
   XHTML is HTML redesigned as XML. It is to enforce 'good format' in html so that browsers for small devices have enough resource to interpret. The enforcements includes mainly:

   **Document Structure**

   - XHTML DOCTYPE is mandatory
   - The xmlns attribute in `<html>` is mandatory
   - `<html>`, `<head>`, `<title>`, and `<body>` are mandatory
  
   **XHTML Elements**
   
   - XHTML elements must be properly nested
   - XHTML elements must always be closed
   - XHTML elements must be in lowercase
   - XHTML documents must have one root element
  
   **XHTML Attributes**

   - Attribute names must be in lower case
   - Attribute values must be quoted
   - Attribute minimization is forbidden
  
  [see source](https://www.w3schools.com/html/html_xhtml.asp)

2. Refresh memory on CSS selectors and query selectors hierarchy
   
   `<p id='the_pgh' class='normal_css'>This is the <span>most important part of the</span>paragraph</p>`

   the `document.querySelector('#the_pgh span').innerHTML` will return `most important part of the`

3. What does the `<article></article>` HTML tag mean ?
   
   It specifies independent and self-contained content. An article should make sense on its own and it should be possible to distribute it independently from the rest of the site. ([see source](https://www.w3schools.com/tags/tag_article.asp))

4. a fun that get consts can pass the const around or not ?