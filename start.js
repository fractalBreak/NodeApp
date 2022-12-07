import express from 'express';
const app = express()
const port = 3000

app.use(express.static('css'))
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).json({info: 'present text XD'})
}) 

app.post('/', (req, res) => {
    const { parcel } = req.body
    if (!parcel){
        return res.status(400).send({ status: 'failed'})
    }
    res.status(200).send({ status: 'recieved'})
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))
