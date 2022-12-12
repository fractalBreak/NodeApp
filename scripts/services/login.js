import * as db from './db.js';
import * as helper from './helper.js';
import config from './config.js';

// GET LOGIN PAGE
export default function readFile() {
    readFile(path, 'utf8', (err, html) => {
        if(err){
            response.status(500).send('sorry, out of order');
        }
        response.send(html);
    })
};