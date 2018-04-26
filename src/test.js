var mime = require('./mime_types');
var file_type = mime.getMIMEType('file.mp3');
console.log(file_type);