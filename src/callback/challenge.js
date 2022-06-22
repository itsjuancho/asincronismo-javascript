const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = "https://rickandmortyapi.com/api/character/";

function fetchData(url, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status == 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error("Error " + url);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

// El tan llamado 'Callback hell'
fetchData(API, (error, data) => {
    if (error) return console.error(error);
    fetchData(API + data.results[0].id, (error2, data2) => {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) return console.log(error3);
            console.log(data.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});