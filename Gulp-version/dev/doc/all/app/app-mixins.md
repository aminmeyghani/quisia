

<!-- Start /~Amin~/_docs+libs/QUISIA/quisia/Gulp-version/dev/less/app/app-mixins.less -->

# app-mixins.less #

## fix-float 
fix-float mixin for floated elements. Creates a wrapper for the floated elements giving the box a height.

### Usage ###
  Apply the class to a wrapper div that contains floated elements.

## box-shadow ##
    .box-shadow-well([@blur, @speed, @color]);
Used for making well regions. It accepts three optional parameters: 

### Usage ###

     .example1{
       .box-shadow-well(@color : #000 , @blur : 20px);
     }

### Params: 

* **non-string** *@blur* the amount of blur

* **non-string** *@speed* the amount of speed

* **non-string** *@color* the color for the shadow

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

