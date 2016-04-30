> -----------------------------------------------------------------------------------------------------
>   'doctron' (jsDoc template) - Responsive jsDoc template. (based in *default template*)  
>   Author: Juan José Guerra Haba - <dinertron@gmail.com> - 2016 April  
>   License: Open GPL v.3. Keep credit, please.  
>   Versión: 1.0.0  
>   Folder: doctron  
>   
> ----------------------------------------------------------------------------------------------------

# DOCTRON TEMPLATE
[![doctron logo](./static/img/doctron-logo.png "doctron Github page")](http://guerratron.github.io/doctron "Doctron Page") 
Responsive jsDoc template. (based in *default template*) 

# DESCRIPTION
The **doctron** is a *'jsDoc'* template. It is based in **Default template**.  

> This template has been given a more updated and modern touch, respecting standards and minified some files to load (were deleted the added fonts). 
> It will has incorporated some new features to enhance functionality. It is more versatile than its predecessor by incorporating more configuration options, thus increasing the customization possibility.
> Now different style themes can be selected, it allows enable 'debug zones' (very useful for developers), responsive design for different screen types and devices, ... and more.

# FEATURES
The **doctron** template is based in *'Default template'*, but I adding it a few features for enhanced it.  
  - This template **not requery** any additional fonts.  
  - *Responsive* design.  
  - *HTML5* valid.  
  - '**debug zone**': It allow to developers check the variables and configuration options.  
  - '**toTop**' button.  
  - '**change Theme**' button.  
  - Design **new look**.
  - Less size. 

# OPTIONS
This options for configuration they may be included in **jsDoc.conf.json** configuration file within the *'templates'* section, thus the path will be more or less: 
  > jsDoc.conf.json {..., templates: { ... }, ...}  
  
  - **debug** : [boolean] Allow enabled the *debug-zone*
  - **logoFile**  : [string] Let the relative path to logo image (png, jpg, gif)
  - **logoLink**  : [string] Logo as link to any site
  - **theme** : [string] The name of style theme (light or dark)
  - **totop** : [boolean] To Top button.
  - **changeTheme**  : [boolean] A *select box* to change the theme.
  - **responsive**    : [boolean] Allow show a responsive design to different screen types and devices
  - **author**        : [string]  By example a link to author email, on 'footer'. The footer section must be enabled
  - **copyright**     : [string] A string representing the copyright
  - **meta**          : [object] A javascript object indicating some *HTML meta-tags*:
    - **title**       : [string] It is the page title
    - **description** : [string] The page description, very useful for **SEO** and search engines
    - **keywords**    : [string] Like the above, it is used with SEO
    - **charset**     : [string] The page charset: *utf-8*, *ascii*, *utf-16*, ...
    - **language**    : [string] The page natural language: *es*, *en*, ...
  
These options could be as follows in a configuration file sample JSDoc :
````JSON
{
  ...,
  "templates" : {
    ...,
    "debug"       : true,
    "logoFile"        : "img/wrapperTracer-logo.png",
    "logoLink"        : "http://guerratron.github.io/WrapperTracer",
    "responsive"  : true,
    "author"      : "<a href='mailto:dinertron@gmail.com' title='author'>GuerraTron</a>",
    "footer"      : true,
    "copyright"   :  "2016 (c) Juan Jose Guerra Haba",
    "theme"       : "lighter",
    "changeTheme" : true,
    "totop"       : false,
    "meta"        : {
      "title"       : "WrapperTracer :: Rastreo de Objetos JS - by GUERRATRON",
      "description" : "WrapperTracer :: Rastreo de Objetos JS and its methods traits - by GUERRATRON",
      "keywords"    : "wrappertracer,js,code,debug,trait,traits,trace,tracer,wrapper,guerratron",
      "charset"     : "utf-8",
      "language"    : "es"
    },
    ...
  },
  ...
}
````

# INSTALATION
Copy the '**doctron** folder' to *'jsDoc/templates path'*. By example, in Windows: 
````TXT
C:\Program Files\nodejs\node_modules\jsdoc\templates
````

## INHERITED
The default template for JSDoc 3 uses: [the Taffy Database library](http://taffydb.com/) and the [Underscore Template library](http://documentcloud.github.com/underscore/#template).

## Authorship
Developed by Juan José Guerra Haba. &lt;dinertron@gmail.com&gt;    
Copyright 2015 &copy; <a href="&#x6d;&#97;&#105;&#108;&#116;&#x6f;&#x3a;&#100;&#105;&#110;&#x65;&#x72;&#x74;&#114;&#x6f;&#110;&#64;&#x67;&#109;&#x61;&#x69;&#x6c;&#46;&#99;&#x6f;&#x6d;" title="author">GuerraTron</a>  
License GPL v3