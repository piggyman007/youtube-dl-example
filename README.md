# youtube-dl-example

demo and sample code for youtube-dl library

## steps to run

1. `npm i`
2. `npm start`
3. open web browser and goto the url `http://localhost:3000#{youtube url}`, e.g., `http://localhost:3000/#https://www.youtube.com/watch?v=3ev7GXzFTPg`
4. for the first time, the app will fetch video from youtube directly. Then return streaming data to the web page and keep that video in the local store also (in the /store folder). If this video is requested again, the app will get movie from the local store instead.
