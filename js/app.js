var clicks = [0, 0, 0, 0, 0];
var catNames = ['Aria', 'Clover', 'Scrap', 'Snowball', 'Spot'];
var catImages = new Array();

catImages[0] = new Image();
catImages[0].src = 'images/Aria.JPG';

catImages[1] = new Image();
catImages[1].src = 'images/Clover.PNG';

catImages[2] = new Image();
catImages[2].src = 'images/Scrap.jpg';

catImages[3] = new Image();
catImages[3].src = 'images/Snowball.jpg';

catImages[4] = new Image();
catImages[4].src = 'images/Spot.jpg';

function clearImage(){
    if($('img').css= "display" && "block"){
        $('img').hide();
    }
    if($('img').css= "display" && "none"){
        $('img').show();
    }
    
};

function showImage(n) {
    if (n == 'Aria'){
        n = 0;
    }
    if (n == 'Clover'){
        n = 1;
    }
    if (n == 'Scrap'){
        n = 2;
    }
    if (n == 'Snowball'){
        n = 3;
    }
    if (n == 'Spot'){
        n = 4;
    }
        var img = document.createElement("img");
        img = catImages[n];
        img.width = 400;
        img.height = 400;
        img.alt = catNames[n];
        document.body.appendChild(img);
    
};

catNames.forEach(function(n) {
    var x = n;
    var elem = document.createElement('div');
    elem.textContent = x;
    elem.addEventListener('click', (function(nCopy) {
        return function() {
            // displayImage();
                clearImage();
                showImage(n);
            // alert(nCopy)
        };
    })(n));
    document.body.appendChild(elem);
});


$("#container").click(function(e) {
    const el = e.target;
});

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

  