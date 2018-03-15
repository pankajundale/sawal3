/* globals app1 */

(function() {

    app1.LinkedinProfileC = Trillo.inherits(Shared.SharedC, function(viewSpec) {
    Shared.SharedC.call(this, viewSpec);
  });

  var LinkedinProfileC = app1.LinkedinProfileC.prototype;
  var SharedC = Shared.SharedC.prototype;

  LinkedinProfileC.handleAction = function(actionName, selectedObj, $e, targetController) {
    return SharedC.handleAction.call(this, actionName, selectedObj, $e, targetController);
  };
  
  LinkedinProfileC.postViewShown = function(view) {
    SharedC.postViewShown.call(this, view);
  };
  
 
})();

