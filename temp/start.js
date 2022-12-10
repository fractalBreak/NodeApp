import express from 'express';
const app = express()
const port = 3000

app.use(express.static('css'))
app.use(express.json())

app.get('/', (req,res) => {
    const top = '<!DOCTYPE html>' + '\n'  + '<html lang="en">' + '\n' +  '<head>' +   '<meta charset="UTF-8">' + '\n' +       '<meta http-equiv="X-UA-Compatible" content="IE=edge">' + '\n' +         '<meta name="viewport" content="width=device-width, initial-scale=1.0">' + '\n' +         '<title>Document</title>' + '\n' +     '</head>' + '\n' +     '<body>' + '\n';
    const bottom = '</body>' + '\n' +  '</html>';
    var stgout = top;
    //database calls to get the number of jobs in a given day for i < (number of jobs)
    for (let i = 0; i < 5; i++) {
    //methods for getting address and time go here for a specific job in a day using the i counter to select the jobs
    var infoone = 'address'
    var infotwo = 'time'
    
    stgout = stgout.concat('', infoone + ' ' + infotwo + '<br>');
    
    
    }
    stgout = stgout.concat('',bottom);
    res.status(200).send(stgout)
}) 

app.post('/', (req, res) => {
    const { parcel } = req.body
    if (!parcel){
        return res.status(400).send({ status: 'failed'})
    }
    res.status(200).send({ status: 'recieved'})
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))
