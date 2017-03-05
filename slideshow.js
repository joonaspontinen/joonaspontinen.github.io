

var index = 0;


window.onload = function () {
    'use strict';
    $.getJSON("pontinj1-589288.firebaseio.com/.json", function (data) {
        console.log(data);
        $('#otsikko').html(data.uutiset[index].otsikko);
    });
}