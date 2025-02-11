ytbmobile-volume.js
(function(){
  if(!!window.__volumeForced)
    return;
  window.__volumeForced=true;
  let forceVolume=()=>{
    document.getElementsByTagName('video')[0].volume=0.1;
    requestAnimationFrame(forceVolume);                                                                                    
  };
  forceVolume();
})();
