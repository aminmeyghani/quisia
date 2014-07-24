'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('appVersion', ['version',
	function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}
	])
.directive('myOtherCoolDirective', ['$compile',
	function($compile) {
		return {
			restrict: 'A',
			replace: true,
			template: "<span>this is the replaced content</span>",
			link: function(scope, element, attrs, controller) {
				element.on('click', function() {
					console.log("I was clocked");
				})
			}
		};
	}
	])
.directive('myCoolDirective', ['$compile',
	function($compile) {
		return {
                restrict: 'A', // only activate on element attribute
                require: '?ngModel', // get a hold of NgModelController
                link: function(scope, element, attrs, ngModel) {
                    if (!ngModel) return; // do nothing if no ng-model

                    // Specify how UI should be updated
                    ngModel.$render = function() {
                    	element.html(ngModel.$viewValue || '');
                    };

                    // Listen for change events to enable binding
                    element.on('blur keyup change', function() {
                    	scope.$apply(read);
                    });
                    read(); // initialize

                    // Write data to the model

                    function read() {
                    	var html = element.html();
                        // When we clear the content editable the browser leaves a <br> behind
                        // If strip-br attribute is provided then we strip this out
                        if (attrs.stripBr && html == '<br>') {
                        	html = '';
                        }
                        ngModel.$setViewValue(html);
                      }
                    }
                  };
                }
                ])
.directive('clearableSearchField', ['$timeout','$compile',function($timeout, $compile) {

		return {
			require: 'ngModel',
			scope: {},
      link: function(scope, element, attrs, theModel) {
        // AM: setting up the markup.
        var iconMarkup = '<span ng-show="enabled" ng-mousedown="reset()" class="icon remove glyphicon glyphicon-remove-circle"></span>\
                          <span ng-show="!enabled"  class="icon glyphicon glyphicon-search"></span>';
        var template = $compile(iconMarkup)(scope);
        var parentMarkup =  '<div class="input-clearable"></div>';
        element.wrap(parentMarkup).parent().append(template);
        // AM: clearing the input content.
        scope.reset = function() {
          theModel.$setViewValue("");theModel.$render();
          $timeout(function() {element[0].focus();}, 0, false);
        };
        // AM: input handlers: empty or not, focused or not.
        element.bind('input', function() {
          scope.enabled = !theModel.$isEmpty(element.val());
          theModel.$isEmpty(element.val()) ? scope.enabled = false : scope.enabled = true;
          scope.$apply();
        })
        .bind('focus', function() {
          scope.enabled = !theModel.$isEmpty(element.val());
          scope.$apply();
        })
        .bind('blur', function() {
          theModel.$isEmpty(element.val()) ? scope.enabled = false : scope.enabled = true;
          scope.$apply();
        });
      }
		};

}])

.directive('resetField', ['$compile', '$timeout', function($compile, $timeout) {
  return {
    require: 'ngModel',
    scope: {},
    link: function(scope, el, attrs, ctrl) {
      // limit to input element of specific types
      var inputTypes = /text|search|tel|url|email|password/i;
      if (el[0].nodeName !== "INPUT") {
        throw new Error("resetField is limited to input elements");
      }
      if (!inputTypes.test(attrs.type)) {
        throw new Error("Invalid input type for resetField: " + attrs.type);
      }

      // compiled reset icon template
      var template = $compile('<i ng-show="enabled" ng-mousedown="reset()" class="fa fa-times-circle"></i>')(scope);
      el.after(template);

      scope.reset = function() {
        ctrl.$setViewValue(null);
        ctrl.$render();
        $timeout(function() {
            el[0].focus();
        }, 0, false);
      };

      el.bind('input', function() {
        scope.enabled = !ctrl.$isEmpty(el.val());
      })
      .bind('focus', function() {
        scope.enabled = !ctrl.$isEmpty(el.val());
        scope.$apply();
      })
      .bind('blur', function() {
        scope.enabled = false;
        scope.$apply();
      });

    }
  };
}]);
//-------------------
//last semi colon.
;
