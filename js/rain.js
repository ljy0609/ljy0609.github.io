(function() {
  function randomRainDropLocation() {
    return Math.floor(Math.random() * 1000);  
  }

  function startRain(plane) {
    plane = plane || '';
    
    setInterval(function(){
      var $rainDrop = $('<div class="sky__rain rain"></div>');
      
      if(plane) {
        $rainDrop.addClass('rain--' + plane);
      }
      
      $sky.append($rainDrop);
      $rainDrop.css('left', randomRainDropLocation() + '%');
      setTimeout(function(){
        $rainDrop.remove();
      }, 3000)
    }, 25);
  }
  
  var $sky = $('.js-object-sky');
  return {
    init: function init() {
      startRain();
      startRain('middle');
      startRain('back');
    }
  }
}()).init();