
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi")
const dotenv = require('dotenv');
dotenv.config();

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

/*app.get('/test', function (req, res) {
    res.json(mockAPIResponse)
})*/


const textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY,
});


app.post('/analysis' , getText);  

function getText(req,res){

  textapi.sentiment(
    {
      text: `${req.body.value}`,
  
    },

    function(error, response){
      if(error === null){
        res.send(response)
      }

      else{
        res.send(error);
        console.log(error)
      }
    }
   
  )

}


//
/*app.post('/analysis', function(req, res){

console.log('there is a request');
textapi.sentiment(

       {
            text: `${req.body.value}`
           
        },

           function (response, error) {
            
             if (error === null) {

                 res.send(response);
               }

          else {
                res.send(error);
                console.log(error)
               }

          }

);
});*/