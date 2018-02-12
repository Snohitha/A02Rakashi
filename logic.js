function rectangle() {
  var area;
  var width = document.getElementById('width').value;
  var height = document.getElementById('height').value;
  if(width>0 && height>0){
  document.getElementById('result').innerHTML = width*height;
  }
  else 
  return 0;
  }
function result(h,w){
if(h>0 && w<0){
  return h*w
}
else 
return 0;
}

  

  