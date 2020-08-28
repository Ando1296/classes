/*                    SELECTORS

the universal selectors selects all html elements in html
(*)
prioritate goes to another css if it exists 
for exampl
.class{
  background-color: red;
} 
*{
  background-color: blue;
}// now all background besides class class is blue 
dont for all (*) we will use * this only when we want to style all elements in div for example

div > * { // div and * are selectors 
  background-color: lightblue; // background-color (property) 
  // we write that in div all elements have that background-color besides this div;
}

        To group selectors, separate each selector with a comma.
h1{
  color: green;
}
p{
  color: green;
}
div{
  color: green;
}
instead of this we can write 
h1, p, div {
  color: green;
}
                                                    External CSS

With an external style sheet, you can change the look of an entire website by changing just one file!
Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.

<html>
  <head>
    <link ref="stylesheet" type="style/css"(it isn't obligatory) href="learningcss.css">
  </head>
</html>
Do not add a space between the property value and the unit (such as margin-left: 20 px;). The correct way is: margin-left: 20px;

                                                    Multiple Style Sheets
//
If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. 
If the internal style is defined after the link to the external style sheet, the <h1> elements will be "orange":

<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
<style>
h1 {
  color: orange;
}
</style>
</head>

However, if the internal style is defined before the link to the external style sheet, the <h1> elements will be "navy":

<head>
<style>
h1{
  color: orange;
}
</style>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>

                                                Cascading Order
//
What style will be used when there is more than one style specified for an HTML element?
All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1.Inline style (inside an HTML element)
2.External and internal style sheets (in the head section)
3.Browser default

So, an inline style has the highest priority, and will override external and internal styles and browser defaults.

                                              CSS Comments
//
A CSS comment is placed inside the <style> element, and starts with /* and ends with */
/*
                                              HTML and CSS Comments
//
From the HTML tutorial, you learned that you can add comments to your HTML source by using the <!--...--> syntax.

In the following example, we use a combination of HTML and CSS comments:

                                          CSS Colors
//
Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.
In CSS, a color can be specified by using a color name:

Tomato
Orange
DodgerBlue
MediumSeaGreen
Gray
SlateBlue
Violet
LightGray

You can set the background color for HTML elements
<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>

You can set the color of text:
<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>

You can set the color of borders:
<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1

In CSS, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and HSLA values:

Same as color name "Tomato":
<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>

                                              RGB Value

In CSS, a color can be specified as an RGB value, using this formula:
rgb(red, green, blue)
Each parameter (red, green, and blue) defines the intensity of the color between 0 and 255
For example, rgb(255, 0, 0) is displayed as red and so on i hope you understood

RGBA Value

RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity for a color.
An RGBA color value is specified with:
rgba(red, green, blue, alpha)
The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):

CSS HEX Colors
#rrggbb
Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff
For example, #ff0000 is displayed as red, because red is set to its highest value

CSS HSL Colors
HSL Value
In CSS, a color can be specified using hue, saturation, and lightness (HSL) in the form:

hsl(hue, saturation, lightness)
Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.
Saturation is a percentage value, 0% means a shade of gray, and 100% is the full color.
Lightness is also a percentage, 0% is black, 50% is neither light or dark, 100% is white

Saturation
Saturation can be described as the intensity of a color.
100% is pure color, no shades of gray
50% is 50% gray, but you can still see the color.
0% is completely gray, you can no longer see the color.

Lightness
The lightness of a color can be described as how much light you want to give the color,
where 0% means no light (black), 50% means 50% light (neither dark nor light) 100% means full lightness (white).


HSLA Value
hsla(hue, saturation, lightness, alpha)
alpha is number between 0.0 to 1.0

                                                BACKGROUND

The CSS background properties are used to define the background effects for elements.
The CSS background properties are used to define the background effects for elements.

background-color
background-image
background-repeat
background-attachment
background-position

You can set the background color for any HTML elements
h1, p, div {
  background-color: lightblue;
}

                                              Opacity / Transparency
//
The opacity property specifies the opacity/transparency(tapancik/antapancik) of an element. It can take a value from 0.0
 - 1.0. The lower value, the more transparent:
div{
  opasity: 0.3;
}
////##Note: When using the opacity property to add transparency to the background of an element, all of its child elements inherit the same transparency.
 This can make the text inside a fully transparent element hard to read.


                                              Transparency using RGBA

//If you do not want to apply opacity to child elements, like in our example above, use RGBA color values. The following example sets the opacity for the background color and not the text
You learned from our CSS Colors Chapter, that you can use RGB as a color value. In addition to RGB, you can use an RGB color value with an alpha channel (RGBA) - 
which specifies the opacity for a color.
An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

div{
  background-color: rgba(0,128,0,0.3) /* Green background with 30% opacity */
/*}

                                                  CSS background-image
//
The background-image property specifies an image to use as the background of an element.
By default, the image is repeated so it covers the entire element.
body{
  background-image: url(paper.gif);
}
##Note: When using a background image, use an image that does not disturb the text.

                                                  CSS background-repeat
//
By default, the background-image property repeats an image both horizontally and vertically
Some images should be repeated only horizontally or vertically, or they will look strange, like this:

body{
  background-image: url("someurl.jpg");
  background-repeat: repeat-x;
}//repeat-x will repeat image horizontalyy repeat-y vertically 

Showing the background image only once is also specified by the background-repeat property
body{
  background-image: url("someimageurl");
  background-repeat: no-repeat; // no-repeating background images
}

                                    CSS background-position

//The background-position property is used to specify the position of the background image.
Position the background image in the top-right corner
body{
  background-image: url(someurl);
  background-repeat: no-repeat;
  background-position: right top;
} // background image will be on top right corner;

                                    CSS Background Attachment

//The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page):
body{
  background-repeat: no-repeat;
  background-attachment: fixed; // if scroll it will stay in place if we scroll 
}

body{
  background-attachment: scroll; 
}
                                    CSS Background Shorthand

//To shorten the code, it is also possible to specify all the background properties in one single property. This is called a shorthand property.
instead of 
body{
  background-color: red;
  background-repeat: no-repeat;
  background-position: right top;
  background-image: url('some url');
  background-attachment: fixed;
}
body{
  background: red url('someurl') no-repeat right top; 
}

                                      css borders;
//
The CSS border properties allow you to specify the style, width, and color of an element's border
  $$CSS Border Style
dotted - Defines a dotted border
dashed - Defines a dashed border
solid - Defines a solid border
double - Defines a double border
groove - Defines a 3D grooved border. The effect depends on the border-color value
ridge - Defines a 3D ridged border. The effect depends on the border-color value
inset - Defines a 3D inset border. The effect depends on the border-color value
outset - Defines a 3D outset border. The effect depends on the border-color value
none - Defines no border
hidden - Defines a hidden border

p{border-style: dotted;}
Note: None of the OTHER CSS border properties (which you will learn more about in the next chapters) will have ANY effect unless the border-style property is set!

  ##CSS Border Width
The border-width property specifies the width of the four borders.
p{
  border-style: dashed;
  border-width: 5px; // thick, medium also work like px
}

###Specific Side Widths
p{
  border-style: solid;
  border-width: 20px 5px; // 20 top and bottom 5 right and left widths it
                            can also have 4 px top rigth bottom left 
}

$$ border-color
p{
  border-color: red (rgb, rgba and so on)
  we can set also specific sides color
  border-color: red green blue black (daltonizmm)
}
                            CSS Border - Individual Sides
//we can give styles to border's individual sides 
like 
p{
  border-left-style: dashed;
  border-top-style: solid;
  border-left ... and so on
}
p{
  border-style: dashed solid; // top and buttom will be styled dashed right and left solid
}
if it has 4 values it will work by this order top rigth buttom and left see you soon baby
if it has 3 values it will work by top rigth-left and buttom
if it has 2 values top and bottom first then rigth and left thanks for attention;
$$$property is used in the example above. However, it also works with border-width and border-color.
                                          border shorthand 

//p{
  border: 5px solid green;
}
p{
  border-left: 5px solid green;
  bakground-color: white;// and like this the rest 
}
                                      CSS Rounded Borders

//The border-radius property is used to add rounded borders to an element
p{
  border-style: solid;
  border-color: red;
  border-radius: 5px;
}

                                      CSS Margins
//
Margin - Individual Sides
margin-top
margin-left
margin-right
margin-bottom 

All the margin properties can have the following values

auto - the browser calculates the margin
length - specifies a margin in px, pt, cm, etc.
% - specifies a margin in % of the width of the containing element
inherit - specifies that the margin should be inherited from the parent element
##Negative values are allowed.
p{
  margin-top: 100px;
  margin-right: 140px;
  margin-buttom: 150px;
  margin-left: 140px;
}
          Margin - Shorthand Property

p{
  margin: 25px 15px 7px 8px // top right buttom left;
}
p{
  margin: 25px 15px 14px // top rigth-left buttom;
}
p{
  margin: 26px -6px; // top-buttom right-left
}
if margin have 1 value all sides will be affected by that value

                The auto Value
//
You can set the margin property to auto to horizontally center the element within its container
it will horizontally center if we give margin: auto
      The inherit Value
//This example lets the left margin of the <p class="ex1"> element be inherited from the parent element (<div>):
div{
  margin-left: 10px;
}
p{
  margin-left: inherit // it means that p inherits its margin from its parent
}

                        Margin Collapse
//
Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.
This does not happen on left and right margins! Only top and bottom margins!
h1{
  margin-bottom: 50px;
}
h2{
  margin-top: 30px;
}// now h1 and h2 not have margin 80 they have the largest one 50px

                          css paddings

//padding are used to generate space around the element's content inside of any defined border
we can set padding to individual sides of element
padding-top
padding-right
padding-buttom
padding-left
all padding can have length px %  contai
ning width of containing element
and also inherit this we have descised already that child can inherit from it's parent 
div{
  padding-top: 14px;
  padding-right: inherit;
  padding-buttom: 50%;
  padding-left: 19px;
}
paddings also have shorthand properties 
padding: top right buttom left
padding: top right-left buttom
padding: top-buttom right-left

padding: 25px all sides have padding of 25px; 