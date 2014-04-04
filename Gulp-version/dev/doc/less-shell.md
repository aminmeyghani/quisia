

<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-base.less -->

# Base #
 Contains the base HTML styles. The elements that are targeed are mainly for resetting purposes.

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-base.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-components.less -->

# Components Main Interfaces #

## List intefaces ##
The `list` components allow you to easily define lists and use them
in different parts fo different components like nav bar or legends 
or anything of that nature.

### Example ###

    <ul class="list-inline">
        <li>first</li>
        <li>Second</li>
    </ul>

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-components.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-layout.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-layout.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-md-theme.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-md-theme.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-md-theme2.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-md-theme2.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-mixins.less -->

# Mixin Interfaces #

##`.fix-float()`##

### Description ###

Can be used to wrap around floated elements. Using `fix-float`, the wrapper
gets a height and stays in the flow of the document.

### Parameters: none ###

### Usage ###
  Apply the class to a wrapper div that contains floated elements.

### Example ###

    <div class="fix-float">
      <div>floated div</div>
      <div>floated div</div>
      <div>floated div</div>
    </div>
**********************

##`.box-shadow-well([@blur, @speed, @color])`

### Description ###

Creats a subtle well region with a small inner shadow.

### Parameters: ###

__@blur__ (optional) : The amout of shadow blur in pixels or any other valid units.

__@speed__ (optional) : The amout of shadow speed in pixels or any other valid units.

__@color__ (optional) : The shadow color in any valid color units.

### Usage ###
  Can be mixed in with any block-level component. The three parameters are optional.
  It is also possible to use each parameter individually. See examples below.

### Examples ###
    
    // All the examples below are block-level elements.
    .example1{
      .box-shadow-well(10px, 10px, #000); // using all the parameters
    }

    .example2{
      .box-shadow-well(); // Calling without any parameters.
    }

    .example3{
      // Calling with one parameter. 
      // Note that the order of the parameter is not important.
      .box-shadow-well(@color : #e5e6e7);
    }

##`.smooth([@what, @duration, @timing-function])`

### Description ###

Used to add CSS3 transition to the specified property.

### Parameters: ###

1. __@what__ (optional)  *string: or non-string*, The CSS property to which we want to add the transition:
The default value is `all` which applies the transition to all the properties.

2. __@duration__ (optional) *integer* : The duration of the transition. The default value is 200ms.

3. __@timing-function__ (optional) *string or non-string* : A valid timing function for the transition.
The default value is `linear`.

### Usage ###
  Can be mixed in with other classes or ids or anywhere. Cannot be called by itself to generate 
  classes or ids.s

### Examples ###
    // Example to set transition for the hover state of the anchor links.
    // using all the parameters.
    a, a:hover{
      .smooth("color",250ms, "ease-out");
    }

    // Setting transitino for the background color of a box.
    .box, .box:hover{
      .smooth(@what: 'background-color');
    }

##`.custom-loop(@n: 3 [, @base-value:1, @unit: '%', @property:font-size, @selector: ~".fs-", @step-size: 2])`

### Description ###

General purpose loop for creating repeated selectors containing one property that increments
at a particular value.

### Parameters: ###

1. __@n__ : *integer*, The number of iterations.

2. __@base-value__ (optional): *integer*,  The starting value for the loop to be assigned to the property. Default value is the same is the value assigned for the number of iterations `@n`.

3. __@unit__ (optional): *string*, The unit for the property. Default value is `px`.

4. __@property__ (optional): *non-string* or *string* The CSS property. Default value is `width`

5. __@selector__ (optional): *escaped string*, The selector used for the loop. Could be anything as long as it is passed in as a escaped string.

6. __@step-size__ (optional): *integer*, The value by which the loop increments by.

### Usage ###
  The mixin can be called inside the LESS independently.

### Examples ###
    // Using just the required parameter.
    .custom-loop(@n:3);
    //->
    .span-1 {
      width: 3px;
    }
    .span-2 {
      width: 4px;
    }
    .span-3 {
      width: 5px;
    }

    //Using all the optional Parameters.
    .custom-loop( @n: 3 , @base-value:1, @unit: '%', @property:font-size, @selector: ~".fs-", @step-size: 2);
    //->
    .fs-1 {
      font-size: 1%;
    }
    .fs-2 {
      font-size: 3%;
    }
    .fs-3 {
      font-size: 5%;
    }

##`.make-fs(  @base-size ; @how-many ; @unit; @step-size  )`

### Description ###

Creates different font size classes given the base font size and the number of 
font sizes needed with a step size.

### Parameters: ###

__@base-size__  : **integer** The starting font size value.

__@how-many__  : **integer** The number of font size classes created as an integer.

__@unit__  : **string/non-string**T he unit used to generate the font sizes. Any other unit can be passed, but make
sure to pass the `%` unit as a string.

__@step-size__ **integer**  : The distance between each font size. For example, if the `step-size` is 2 and 
the base `base-size` is 14, for three font classes you will get: `14, 16, 18`

__@selector__ **string/non-string**  : The selector used. By default the selector is `.fs-`. Make 
sure to escape the selector if you need

### Usage ###
  Can be used independently in a LESS file to create custom font 
  size classes with a single call. Look at the examples below for more information. `Note` that
  for the mixin to work properly, it is best to pass in the parameters explicitly with the name
  of the variables. This way you can avoid potential problems and confusion.

### Examples ###
    // using the default unit value.

     .make-fs(@base-size: 13, @how-many:4, @step-size:4);
     //->
     .fs-1 {
       font-size: 13px;
     }
     .fs-2 {
       font-size: 17px;
     }
     .fs-3 {
       font-size: 21px;
     }
     .fs-4 {
       font-size: 25px;
     }

     //using custom font size unit.

     .make-fs(@base-size: 13, @how-many:4, @step-size:4, @unit : '%');

     //->

     .fs-1 {
       font-size: 13%;
     }
     .fs-2 {
       font-size: 17%;
     }
     .fs-3 {
       font-size: 21%;
     }
     .fs-4 {
       font-size: 25%;
     }

     // using a custom selector.

     .make-fs(@base-size: 13, @how-many:4, @step-size:4, @unit : 'px', @selector : h );

     //->

     h1 {
       font-size: 13px;
     }
     h2 {
       font-size: 17px;
     }
     h3 {
       font-size: 21px;
     }
     h4 {
       font-size: 25px;
     }

##`.fibo(@n, @unit, @property)`

### Description ###

Can be used to assign numbers in the fibonacci sequence to any CSS property. The mixin requires three
parameters: the sequence term, the unit and the CSS property.

### Parameters: ###

__@n__  : The nth term of the fibonacci sequence.

__@unit__  : The unit used for the CSS property. If you need to pass in the `%` unit, you should
escape the value when passing to the mixin:  `  .fibo(14,e('%'),width);` or `.fibo(12,~'%',width);`

__@property__  : The CSS property.

### Usage ###
  Used inside another class or id, cannot be called directly, should be mixed in.

### Examples ###
    // Creating a golden rectangle.

    .golden-rectangle{
      .fibo(14,px,width);
      .fibo(15,px,height);
    }

    //->

    .golden-rectangle {
      width: 377px;
      height: 610px;
    }

    //ratio : 377/610 ~ 0.61803

    // passing the % unit.

    .golden-rectangle{
      .fibo(14,e('%'),width);
      .fibo(15,e('%'),height);
    }

    //->
    .golden-rectangle {
      width: 377%;
      height: 610%;
    }

##`.make-fibo-for(@how-many, @starting-term [, @unit, @step-size, @class-name, @property])`

### Description ###

Makes font sizes by default based on the fibonacci sequence. You can also target another property
such as width with a custom class.

### Parameters: ###

__@how-many__ : The number of terms that you need. For example, if you pass in 3 with starting term of
5, you will get 5, 8 ,13.

__@starting-term__ : The starting term that you want to start the sequence from. If you pass 5,  
then you will get 5, 8, 13,... for example.

__@unit__ (optional) : The unit used for the property. By default the unit is `px`. You can pass in other
units, but make sure to pass in the `%` unit as a string. That is: `.make-fibo-for(@unit: '%', @how-many: 2 ...);`

__@stepsize__ (optional) : is the distance between the generated classes. The default value is one 
which by default produces `fs-1, fs-2,...`.

__@class-name__ (optional) : The sequential generated class. By default the class name is `fs`. You
can pass other names such as my-selector: `.make-fibo-for(@class-name: my-selector, ...);` 
//-> my-selector-1, my-selector-2, .... 

__@property__ (optional) : The CSS property that you need to target. By default this is set to `font-size`.
You can target the `width` property for example: `.make-fibo-for(@property : width, @how-many:2, ...);`.

### Usage ###
  You can use this mixin independently in you LESS file and the classes will be generated automatically.

### Examples ###
    // Using the default values and just specifying the number of terms and the starting term.

    .make-fibo-for( @how-many:5 , @starting-term:6 );
    //->
    .fs-1 {
      font-size: 8px;
    }
    .fs-2 {
      font-size: 13px;
    }
    .fs-3 {
      font-size: 21px;
    }
    .fs-4 {
      font-size: 34px;
    }
    .fs-5 {
      font-size: 55px;
    }

    // Creating classes for the width property with custom class names and custom unit.

    .make-fibo-for( @how-many:5 , @starting-term:6 , @unit:'%', @property : width, @class-name : mygrid);

    .mygrid-1 {
      width: 8%;
    }
    .mygrid-2 {
      width: 13%;
    }
    .mygrid-3 {
      width: 21%;
    }
    .mygrid-4 {
      width: 34%;
    }
    .mygrid-5 {
      width: 55%;
    }
  
    // using custom selectors
    .make-fibo-for( @how-many:5 , @starting-term:6 , @unit:'%', @property : width, @class-name : ~"gs .fs-");
    //->
    .gs .fs-1 {
      width: 8%;
    }
    .gs .fs-2 {
      width: 13%;
    }
    .gs .fs-3 {
      width: 21%;
    }
    .gs .fs-4 {
      width: 34%;
    }
    .gs .fs-5 {
      width: 55%;
    }

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-mixins.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-modules.less -->

# Modules #
Reusable modules that are composed from components.

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-modules.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-theme.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-theme.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-variables.less -->

#Variables

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-variables.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/demo.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/demo.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_css3.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_css3.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_glyphicons.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_glyphicons.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_grid.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_grid.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_mixins.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_mixins.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_normalize.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_normalize.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_shapes.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_shapes.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_surgical.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_surgical.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_utils.less -->

# Utilities #

## `.limit-width()` ##

  ### Parameters ###
  none.

  Page utility to set the width of the page to 100% limits the width of the page to 100%.

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_utils.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_variables.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/_/_globals/_variables.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/_/_app-colors.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/_/_app-colors.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/_/_app-component-variables.less -->

# _app-components-variables #

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/_/_app-component-variables.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/_/_app-components.less -->

# _app-components.less #

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/_/_app-components.less -->

