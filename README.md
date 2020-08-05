# Docker-Music-Dock
A simple web music player running in Node JS in a Docker Container


To run it

docker pull bkidocks/music-dock:latest
docker run -p 3000:3000 -v /path/to/your/music/folder:/usr/src/app/music -t bkidocks/music-dock:latest
supports only .m4a and .mp3 files


Music player library credits - ngx audio player

![Screenshot](https://i.imgur.com/n2fswrc.png)
