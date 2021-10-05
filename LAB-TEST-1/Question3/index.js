const fs = require('fs');

var dir = './Logs';

function remove() {
    for (let i = 0; i < 10; i++) {
        fs.unlink('Logs/log' + i + '.txt', function(err) {
            if (err) throw err;
            console.log('deleted files...log' + i + '.txt');
        });
    }
    if (!fs.existsSync(dir)) {
        fs.rmdir(dir)
    }

}

function create() {
    if (!fs.existsSync(dir)) {
        fs.mkdir('Logs', function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("Logs directory created successfully!\n");
        })
    }

    for (let i = 0; i < 10; i++) {
        fs.appendFile('Logs/log' + i + '.txt', 'Content of file ' + i, function(err) {
            if (err) throw err;
            console.log('log' + i + '.txt');
        })
    }
}
create()
remove()