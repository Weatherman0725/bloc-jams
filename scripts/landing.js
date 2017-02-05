var pointsArray = document.getElementsByClassName('point');

 var revealPoint = function(point) {
         point.style.opacity = 1;
         point.style.transform = "scaleX(.95) translateY(3rem)";
         point.style.msTransform = "scaleX(.95) translateY(3rem)";
         point.style.WebkitTransform = "scaleX(.95) translateY(3rem)";
    }
 
var animatePoints = function(points){
    forEach(points, revealPoint); 
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