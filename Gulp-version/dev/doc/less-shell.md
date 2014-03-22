

<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-base.less -->

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




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-mixins.less -->

# Mixin Interfaces #

##`.fix-float()`
### Parameters: none ###

### Description ###

Can be used to wrap around floated elements. Using `fix-float`, the wrapper
gets a height and stays in the flow of the document.

### Usage ###
  Apply the class to a wrapper div that contains floated elements.

### Example ###

    <div class="fix-float">
      <div>floated div</div>
      <div>floated div</div>
      <div>floated div</div>
    </div>
**********************

##`.box-shadow([@blur, @speed, @color])`

### Parameters: ###

__@blur__ (optional) : The amout of shadow blur in pixels or any other valid units.

__@speed__ (optional) : The amout of shadow speed in pixels or any other valid units.

__@color__ (optional) : The shadow color in any valid color units.

### Description ###

Creats a subtle well region with a small inner shadow.

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

## .smooth([@duration]) ##
  Adds CSS3 transition for the opacity property.

### Usage ###
    a{
      .snooth(200ms);
        &:hover{
        .smooth(500ms);
        }
    }

### Params: 

* **non-string** *@duration* passed in either as milliseconds or seconds. 200ms or 3s are valid values.

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-mixins.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-modules.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-modules.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-theme.less -->

<!-- End /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-theme.less -->




<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-variables.less -->

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

