var Rotate = function() {

  /**
   * Default settings voor de functie
   * @type {{selector: string, choosedegrees: number, choosescale: number, chooseopacity:}}
   */
  var defaultSettings = {
    selector: '.pijlen',
    choosedegrees: 180,
    choosescale: 0.8,
    chooseopacity: 1.0


  };

  var element = defaultSettings.selector;
  var choosedegrees = defaultSettings.choosedegrees;
  var choosescale = defaultSettings.choosescale;
  var chooseopacity = defaultSettings.chooseopacity;


  // Code die de default settings en nieuwe settings samenvoegd.
  var mergeObjects = function(object1, object2) {
    for (var attrname in object1) {
      if (object2.hasOwnProperty(attrname)) {
        object1[attrname] = object2[attrname];
      }
    }
  };

  //Code die het element draait en schaalt.
  var setDegrees = function(el, myDegrees, myScale) {
    el.style.webkitTransform = 'rotate(' + myDegrees + 'deg) scale(' +
      myScale + ')';
    el.style.mozTransform = 'rotate(' + myDegrees + 'deg) scale(' + myScale +
      ')';
    el.style.msTransform = 'rotate(' + myDegrees + 'deg) scale(' + myScale +
      ')';
    el.style.oTransform = 'rotate(' + myDegrees + 'deg) scale(' + myScale +
      ')';
    el.style.transform = 'rotate(' + myDegrees + 'deg) scale(' + myScale +
      ')';

  };

  //Code die de doorzichtigheid van het element aanpast.
  var setOpacity = function(el, myOpacity) {
    el.style.opacity = myOpacity;
  };

  var setColor = function(el, myColor) {
    el.style.color = myColor;
  };

  // Code die alles initieert.
  var init = function(selector, settings) {

    mergeObjects(defaultSettings, settings || {});
    var selector = selector || defaultSettings.selector;
    var element = document.querySelector(selector);

    var settingdegrees = defaultSettings.choosedegrees;
    var settingscale = defaultSettings.choosescale;
    var settingopacity = defaultSettings.chooseopacity;


    setDegrees(element, settingdegrees, settingscale);
    setOpacity(element, settingopacity);
  };

  // Code terug geven.
  return {
    init: init
  };
}
