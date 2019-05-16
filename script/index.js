var x = document.getElementById('abt');

var s=['Software Engineer','FullStack Developer','Coder','Android Developer','Student'];

var i = 0;

function display(i){
    if(i >= s.length){
        i = 0;
    }

    x.innerHTML = s[i];
    setTimeout(function(){
       display(i + 1)
    }, 3000)
}

display(0);

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

