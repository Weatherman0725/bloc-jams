var animatePoints = function(){
 
    var points = document.getElementsByClassName('point');
 
    var revealPoint = function(index) {
         points[index].style.opacity = 1;
         points[index].style.transform = "scaleX(.95) translateY(3rem)";
         points[index].style.msTransform = "scaleX(.95) translateY(3rem)";
         points[index].style.WebkitTransform = "scaleX(.95) translateY(3rem)";
    }
    for( var i =0; i < points.length; i++){
        revealPoint(i);
    }
 };