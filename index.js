import app from "./server.js"
import 'dotenv/config'
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js" //data access object

const MongoClient = mongodb.MongoClient
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.cthanh9.mongodb.net/?retryWrites=true&w=majority`

const port = 8000

MongoClient.connect(
    uri,
    {   
        maxPoolSize: 50, //max users connected at one time
        wtimeoutMS: 2500, //how long to attempt connect before timing out, 25 seconds  
        useNewUrlParser: true //new parser
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1) 
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => { //start server
            console.log(`listening on port ${port}`)
        })
    })