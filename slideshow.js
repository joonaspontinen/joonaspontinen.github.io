

var index = localStorage.getItem('article');
var keepScrolling = true;

function saveNumberOfArticle() {
    'use strict';
    localStorage.setItem('article', index);
    console.log( index );
    console.log( localStorage.getItem('article') );
}

function display() {
    'use strict';
    $.getJSON("https://pontinj1-589288.firebaseio.com/.json", function (data) {
        $('#otsikko').html(data.uutiset[index].otsikko);
        $('#sisalto').html(data.uutiset[index].sisalto);
        $('#paivamaara').html(data.uutiset[index].paivamaara);
    });
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
    saveNumberOfArticle();
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
    saveNumberOfArticle();
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