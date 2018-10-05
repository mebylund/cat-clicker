var clicks = 0;
var cat1 = 'Clover';
var cat2 = 'Aria';
function displayClicks() {
    document.getElementById('clck').innerHTML = 'You clicked the cats ' + clicks + ' times!';
}
$(".clover").innerHTML = cat1;
$(".aria").innerHTML = cat2;

$( "img" ).click(function(e) {
    const el = e.target;
    let add = (function () {
        clicks += 1;
    })();
    displayClicks();
  });

  