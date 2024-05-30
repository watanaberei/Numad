$( document ).ready(function() {
    console.log( "document ready!" );
  
    var $sticky = $('.sticky');
    var $stickyrStopper = $('.sticky-stopper');
    if (!!$sticky.offset()) { // make sure ".sticky" element exists
  
      var generalSidebarHeight = $sticky.innerHeight();
      var stickyTop = $sticky.offset().top;
      var stickOffset = 0;
      var stickyStopperPosition = $stickyrStopper.offset().top;
      var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
      var diff = stopPoint + stickOffset;
  
      $(window).scroll(function(){ // scroll event
        var windowTop = $(window).scrollTop(); // returns number
  
        if (stopPoint < windowTop) {
            $sticky.css({ position: 'absolute', top: diff });
        } else if (stickyTop < windowTop+stickOffset) {
            $sticky.css({ position: 'fixed', top: stickOffset });
        } else {
            $sticky.css({position: 'absolute', top: 'initial'});
        }
      });
  
    }
  });