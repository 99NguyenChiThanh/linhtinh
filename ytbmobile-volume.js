ytbmobile-volume.js text/javascript
(function() {if(!!window.__volumeForced)return;window.__volumeForced=true;let forceVolume=()=>{document.getElementsByTagName('video')[0].volume=0.2;requestAnimationFrame(forceVolume);};forceVolume();})();
