

var index = 0;
var keepScrolling = true;

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

var time = setInterval(nextSlide, 1000);

function stopSlide() {
    'use strict';
    if (keepScrolling)
        {
            clearInterval(time);
            keepScrolling = !keepScrolling;
            document.getElementById("pause").value = "play";
        }
        else {
            time = setInterval(nextSlide, 1000);
            time;
            keepScrolling = !keepScrolling; 
            document.getElementById("myButton1").value = "||";
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