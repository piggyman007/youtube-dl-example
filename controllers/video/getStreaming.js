const fs = require('fs');
const md5 = require('md5');
const youtubedl = require('youtube-dl');

function getVideoFromYoutube(res, link, filename) {
  console.log('getting video from youtube ....');
  const video = youtubedl(link, ['--format=18'], {
    start: 0,
    cwd: __dirname
  });

  video.pipe(fs.createWriteStream(filename, {
    flags: 'a'
  }));
  video.pipe(res);
}

function getVideoFromFile(res, filename) {
  console.log('getting video from file ....');
  const readStream = fs.createReadStream(filename);
  readStream.on('open', () => {
    readStream.pipe(res);
  });
}

function getStreaming(req, res) {
  const link = req.query.link;
  const filename = `store/${md5(link)}.mp4`;

  if (fs.existsSync(filename)) {
    getVideoFromFile(res, filename);
  } else {
    getVideoFromYoutube(res, link, filename);
  }
}

module.exports = getStreaming;