//va heberger notre librairie

"use strict";

function fetch(url) {
    return new Promise(function(ok, ko) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if (xhr.status == 200) {
                ok(xhr.response);
            } else {
                ko(xhr.status)
            }
        };
        xhr.onerror = function(error) {
            ko(error);
        }
        xhr.send();
    });
}
module.exports = fetch;
fetch("https://dog.ceo/api/breeds/list/all").then(function(response) {
    console.log(response)
}).catch(function(error) {
    console.error(error);
});