

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

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-mixins.less -->

