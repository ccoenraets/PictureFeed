var express = require('express'),
    http = require('http'),
    path = require('path'),
    main = require('./main'),
    app = express();

app.use(express.logger("dev"));

app.use(express.bodyParser({
    uploadDir: __dirname + '/uploads',
    keepExtensions: true
}));

app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, './uploads')));

app.post('/images', main.addImage); // endpoint to post new images
app.get('/images', main.getImages); // endpoint to get list of images

app.listen(3000, function () {
    console.log('PictureFeed server listening on port 3000');
});
