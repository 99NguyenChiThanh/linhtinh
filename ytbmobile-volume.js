ytbmobile-volume.js text/javascript
(function(){
  if(!!window.__volumeForced)
    window.alert(5 + 6);
    return;
  window.__volumeForced=true;
  window.alert(4 + 6);
  let forceVolume=() => {
    window.alert(3 + 6);
    document.getElementsByTagName('video')[0].volume=0.2;
    window.alert(2 + 6);
    requestAnimationFrame(forceVolume);
  };
  forceVolume();
  window.alert(0);
})();
