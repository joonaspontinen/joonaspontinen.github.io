

var index = localStorage.getItem('article');
var keepScrolling = true;

function saveNumberOfArticle() {
    console.log( index );
    localStorage.setItem('article', index);
    
    
}

function display() {
    'use strict';
    $.getJSON("https://pontinj1-589288.firebaseio.com/.json", function (data) {
        console.log(data)
        $('#otsikko').html(data.uutiset[index].otsikko);
        $('#sisalto').html(data.uutiset[index].sisalto);
        $('#paivamaara').html(data.uutiset[index].paivamaara);
    });
    saveNumberOfArticle();
}

function nextSlide() {
    'use strict';
    if (index < 2) {
        index += 1;
        display();
    } else {
        index = 0;
        display();
    }
    
}

function previousSlide() {
    'use strict';
    if (index > 0) {
        index -= 1;
        display();
    } else {
        index = 2;
        display();
    }
    
}

var time = setInterval(nextSlide, 2000);

function stopSlide() {
    'use strict';
    if (keepScrolling)
        {
            clearInterval(time);
            keepScrolling = !keepScrolling;
            $("#pause").text("Play");
        }
        else {
            time = setInterval(nextSlide, 2000);
            time;
            keepScrolling = !keepScrolling; 
            $("#pause").text("||");
        }
    
    
}

function changeArticle() {
    'use strict';
    time;
    
}

window.onload = function () {
    'use strict';
    display();
    nextSlide();
    changeArticle();
};