var clicks = 0;

function displayClicks() {
    document.getElementById('clck').innerHTML = 'You clicked the cat ' + clicks + ' times!';
}

$( "img" ).click(function(e) {
    const el = e.target;
    let add = (function () {
        clicks += 1;
    })();
    displayClicks();
  });

  