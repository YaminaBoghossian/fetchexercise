//va tester notre librairie


const fetch = require('.index.js');
fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(answer) {
        console.log(answer);
    }).catch(function(err) {
        console.error(err);
    });