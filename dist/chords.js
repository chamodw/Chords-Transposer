function transposition(n,r,s){var o=0,e='<span class="chords-highlighted">',t="</span>",a=[];return n.forEach(function(n,l){var h=n;console.log(h),console.log("%d: %s",l,n),n=n.replace(/m?(sus|add|maj)?[0-9]?( *(-|\/))? *$/,""),console.log(n),a=_chords.indexOf(n)<0?_chordsFlat:_chords;var i=a.indexOf(n);if(s<0)if(i+s<0)var c=a[(a.length+i+s)%a.length];else var c=a[(i+s)%a.length];else var c=a[(i+s)%a.length];console.log(n),console.log(c);var g=c.length-n.length;console.log(g),r=r.slice(0,l+o)+e+c+r.slice(l+o+n.length,l+o+h.length)+t+r.slice(l+o+h.length),console.log(r),o+=e.length+t.length+g}),r}function array2string(n){var r="";return n.forEach(function(n,s){r+=n+"\n"}),r}function findChords(n){var r,s,o=/^ *[A-Ga-g](#|b|&)?m?(sus|add|maj)?[0-9]?( *(-|\/) *[A-G](#|b)?)?( +[A-Ga-g](#|b|&)?m?(sus|add|maj)?[0-9]?( *(-|\/) *[A-G](#|b|&)?)? *)* *$/,e=/[A-Ga-g](#|b|&)?m?(sus|add|maj)?[0-9]?( *(-|\/) *[A-G](#|b|&)?)? *$/;return String(n).match(o)?(r=n.search(e),s=findChords(n.substr(0,r-1)),s[r]=n.substr(r).trim(),s):[]}function replaceWithTags(n,r){var s=0,o='<span class="chords-highlighted">',e="</span>";return n.forEach(function(n,t){console.log("%d: %s",t,n),r=r.slice(0,t+s)+o+r.slice(t+s,t+s+n.length)+e+r.slice(t+s+n.length),s+=o.length+e.length}),r}var chords=function(){},_chords=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],_chordsFlat=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];chords.parse=function(n){for(var r=n.value.split(/\r\n|\r|\n/g),s=0;s<r.length;s++)r[s]=replaceWithTags(findChords(r[s]),r[s]);return array2string(r)},chords.shiftScale=function(n,r,s){for(var o=_chords.indexOf(r),e=_chords.indexOf(s),t=e-o,a=n.value.split(/\r\n|\r|\n/g),l=0;l<a.length;l++)a[l]=transposition(findChords(a[l]),a[l],t);return array2string(a)},chords.shiftScaleBy=function(n,r){for(var s=r,o=n.value.split(/\r\n|\r|\n/g),e=0;e<o.length;e++)o[e]=transposition(findChords(o[e]),o[e],s);return array2string(o)};