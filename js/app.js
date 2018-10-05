var clicks = 0;
var catNames = ['Clover', 'Aria', 'Scrap', 'Snowball', 'Spot'];
var catImages = [
    {name:'Aria', image:'Aria.JPG'},
    {name:'Clover', image:'Clover.PNG'},
    {name:'Scrap', image:'Scrap.jpg'},
    {name:'Snowball', image:'Snowball.jpg'},
    {name:'Spot', image:'Spot.jpg'}
];

// $(function() {
//     $(".clover").text(cat1);
//     $(".aria").text(cat2);
// });

function displayClicks() {
    document.getElementById('clck').innerHTML = 'You clicked ' + catNames[i] + clicks[i] + ' times!';
}


$( "img" ).click(function(e) {
    const el = e.target;
    let add = (function () {
        clicks += 1;
    })();
    displayClicks();
});

  