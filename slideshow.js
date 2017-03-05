

var index = 0;
var keepScrolling = true;

function display() {
    'use strict';
    $.getJSON("https://pontinj1-589288.firebaseio.com/.json", function (data) {
        $('#otsikko').html(data.uutiset[index].otsikko);
        $('#paivamaara').html(data.uutiset[index].paivamaara);
        $('#sisalto').html(data.uutiset[index].sisalto);
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

function stopSlide() {
    'use strict';
    keepScrolling = !keepScrolling;
}

function changeArticle() {
    'use strict';
    setInterval(nextSlide(), 10);
    
}

window.onload = function () {
    'use strict';
    display();
    nextSlide();
    changeArticle();
};