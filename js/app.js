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
    rmv = $('.first')
    rmv.hide();
    rmv.removeClass();
    
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
        img.className = 'first';
        $('.first').show();
        document.body.appendChild(img);
    
};

function addClicks(n) {
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

    $('.first' ).click(function(e) {
        const el = e.target;
        let add = (function () {
            clicks[n] += 1;
        })();
        displayClicks();
    });
    function displayClicks() {
        document.getElementById('clck').innerHTML = 'You clicked ' + catNames[n] + ' ' + clicks[n] + ' times!';
    }

}

catNames.forEach(function(n) {
    var x = n;
    var elem = document.createElement('button');
    elem.textContent = x;
    elem.addEventListener('click', (function(nCopy) {
        return function() {
            // displayImage();
                clearImage();
                showImage(n);
                addClicks(n);
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




$( "img" ).click(function(e) {
    const el = e.target;
    let add = (function () {
        clicks[0] += 1;
    })();
    displayClicks();
});

  