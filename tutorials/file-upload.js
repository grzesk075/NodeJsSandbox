var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res) {

    if(req.url == '/fileupload1') {

      var form = new formidable.IncomingForm();
      form.parse(req, function(err, fields, files) {
        res.end('File ' + files.filetoupload.path + ' uploaded.');
      });
    } else {

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<html>');
      res.write('<head/>');
      res.write('<body>');
      res.write('<form action="fileupload1" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"></input><br/>');
      res.write('<input type="submit" value="Upload file"></input>');
      res.write('</form>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    }
}).listen(8080);