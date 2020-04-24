const express = require('express');
var path = require('path');
const app = express();

app.use('/src', express.static(__dirname + '/src'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

express.static.mime.define({'application/javascript' : ['js']});
express.static.mime.define({'text/css' : ['css']});

app.listen(8080, () => console.log('Server Listening on port 8080!!!'));

