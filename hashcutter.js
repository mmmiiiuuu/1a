  function compress() {
 var imgCur = document.getElementById('inp').value;
 var jimmy = [];
let compressedImg = imgCur.split('').reduce((o, c, d) => {
  if (o[o.length - 2] === c && o[o.length - 1] < 35) o[o.length - 1]++;
  else 
   o.push(c, '');
 if (o[o.length - 3] % d) jimmy.push(d);
    else jimmy.push(o[o.length - 3]);
  return o;
},[]).map(_ => typeof _ === 'number' ? _.toString(36) : _).join('');
 

  var imgCur2 = document.getElementById('inp').value;
 var jim = [];
let compressedImg2 = imgCur2.split('').reduce((p, e, t) => {
  if (p[p.length - 2] === e && p[p.length - 1] < 35) p[p.length - 1]++;
  else 
   p.push(e, 0);
 if (p[p.length - 3] % t) jim.push(t);
    else jim.push(p[p.length - 3]);
  return p;
},[]).map(__ => typeof __ === 'number' ? __.toString(36) : __).join('');
 
 
 var str = compressedImg; 
 function findRepeat(str) {
  const arr = str.split('');
  const hash = new Map();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash.get(arr[i]) === undefined) {
      hash.set(arr[i], true);
    } else {
      const value = hash.get(arr[i]);
      if (value) {
        hash.set(arr[i], !value);
      }
    }
  }
  hash.forEach((v, k, g) => {
    if (!v || g)
      result.push(k);
  });
  return result;
}
 
 document.getElementById('out').value =  '\n\nMv#' + btoa(compressedImg2) + '\n\n';
 
 document.getElementById('inp').value = '';
}


function restore(){
 var compressedImgCur1 = document.getElementById('out').value.replace('Mv#', '');
 var compressedImgCur = atob(compressedImgCur1);
let decompressedImgCur = compressedImgCur
  .split('').map((c,i,a)=>i%2?undefined:new Array(2+parseInt(a[i+1],36)).join(c)).join('');
 document.getElementById('inp').value = decompressedImgCur;
}


  