var pointsArray = document.getElementsByClassName('point');
var animatePoints = function(points){
 
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

 window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
     
    if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     } 
     
    window.addEventListener('scroll',function(event) {
           if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
    });
 }