const fs = require('fs');

/*
fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if (err) {
        console.error(new Error(err));
        return;
    }

    console.log(contenido);
})
*/

/*
fs.rename('index.html', 'main.html', (err) => {
    if (err) throw err;
})
*/

fs.unlink('main.html', (err)=> {});
