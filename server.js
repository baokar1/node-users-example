console.log('Server-side code running');

var express = require('express');

var fs = require("fs");

var app = express();

// serve files from the public directory
app.use(express.static('public'));


// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});
// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/getUsers', (req, res) => {
	
	console.log('button was clicked')
	
  fs.readFile('users.txt', function (err, users) {
   if (err){
	   throw err;
	res.write('file not found')
   }
   else{
	   res.status = 200;
	res.send(users); 
		
   } 
   
  
});

   
});



