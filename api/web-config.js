const http = require('http');
const fs = require('fs');
const path = require('path');
const { generateCharacter } = require("./utils/functions/generate-character.func");

function webConfig() {
    return http.createServer((req, res) => {
        switch (req.url) {
            case "/":
                fs.readFile(path.join(__dirname, 'page', 'index.html'), (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Errore nel caricare l\'index.html');
                    }

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                });

                break;

            case "/index_.js":
                fs.readFile(path.join(__dirname, 'page', 'index_.js'), (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Errore nel caricare l\'index_.js');
                    }

                    res.writeHead(200, { 'Content-Type': 'text/javascript' });
                    res.end(data);
                });

                break;

            case "/generate-character":
                res.writeHead(200, { 'Content-Type': 'application/json' });
                generateCharacter().then((character) => {
                    res.end(JSON.stringify(character));
                })
                break;

            case "/styles.css":
                fs.readFile(path.join(__dirname, 'page', 'styles.css'), (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Errore nel caricare styles.css');
                    }

                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.end(data);
                });

                break;

            case "/favicon.ico":
                fs.readFile(path.join(__dirname, 'page', 'favicon.ico'), (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('Errore nel caricare favicon.ico');
                    }

                    res.writeHead(200, { 'Content-Type': 'image/vnd' });
                    res.end(data);
                });

                break;

            default:
                res.writeHead(404);
                res.end('nigga what?');

                break;
        }
    });
}

module.exports = { webConfig }