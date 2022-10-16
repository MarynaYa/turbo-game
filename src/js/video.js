(() => {
    var myVideo = document.getElementById("video1"); 
    
    function playPause() { 
      if (myVideo.paused) 
        myVideo.play(); 
      else 
        myVideo.pause(); 
    } 
    
    function makeBig() { 
        myVideo.width = 999; 
    } 
    
    function makeSmall() { 
        myVideo.width = 520; 
    } 
    
    function makeNormal() { 
        myVideo.width = 759; 
    } 
    })();
    