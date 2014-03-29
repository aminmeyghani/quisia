

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

##`.smooth(@duration)`

### Description ###

Animates the opacity property of an element using CSS3 transitions.

### Parameters: ###

__@duration__ : The animation duration. Can be either expressed in `ms` or `s`.

### Usage ###
  Can be mixed in with elements that have different states, like hover or active.
  See the example below

### Examples ###

    // Adding transition to all of the links
    a, a:hover{
      .smooth(200ms);
    }

##`.make-font-size(@base-size , @step-size , @how-many-sizes)`

### Description ###

Creates different font size classes given the base font size and the number of 
font sizes needed with a step size.

### Parameters: ###

__@base-size__  : The font size used to calculate the other font sizes from
__@step-size  : The distance between each iteration.
__@how-many-size  : The number of font size classes needed:

### Usage ###
  this is how you can use it, just mix it in with your less and there you go

### Examples ###
    example starts here

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

