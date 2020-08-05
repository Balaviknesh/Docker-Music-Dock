var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MusicDock' });
});

router.get('/getMusicFiles', function (req, res) {


  const musicFolder = './music/';
  console.log("Executed");

  fs.readdir(musicFolder, (err, files) => {
    musicFiles = []
    files.forEach(file => {

      if(file.endsWith('.m4a') || file.endsWith('.mp3'))
      {
        musicFiles.push({'title': file, 'link': 'http://localhost:3000/'+file})
      }

    });

    res.send({'mf': musicFiles})

  });

})

module.exports = router;
