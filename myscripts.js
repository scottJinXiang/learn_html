var a = 0;
function myFunction() {
  if (a==0) {
    document.getElementById("demo").style.fontSize = '35px';
    a = 1;
  }
  else {
    document.getElementById("demo").style.fontSize = '15px';
    a = 0;
  }
}
