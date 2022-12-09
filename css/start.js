import express from 'express';
const app = express();
const port = 3000;




webapp = app.get('/', (req,res) => {
    const top = '<!DOCTYPE html>' + '<br>'  + '<html lang="en">' + '<br>' +  '<head>' +   '<meta charset="UTF-8">' + '<br>' +       '<meta http-equiv="X-UA-Compatible" content="IE=edge">' + '<br>' +         '<meta name="viewport" content="width=device-width, initial-scale=1.0">' + '<br>' +         '<title>Document</title>' + '<br>' +     '</head>' + '<br>' +     '<body>' + '<br>';
    const bottom = '</body>' + '<br>' +  '</html>';
    var stgout = top;
    //database calls to get the number of jobs in a given day for i < (number of jobs)
    
    for (let i = 0; i < 5; i++) {
    //methods for getting address and time go here for a specific job in a day using the i counter to select the jobs
    var infoone = 'address';
    var infotwo = 'time';
    
    stgout = stgout.concat('', infoone + ' ' + infotwo + '<br>');
    
    
    }
    stgout = stgout.concat('',bottom);
    res.status(200).send(stgout);
}) 



app.listen(port, () => console.log(`Server has started on port: ${port}`))
