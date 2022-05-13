import throttle from "lodash.throttle";


const videoPlayer = document.querySelector("#vimeo-player");

const player = new Vimeo.Player(videoPlayer);
 
player.on('timeupdate', throttle(onPlay, 1000));


function onPlay({ seconds }) {
    localStorage.setItem("videoplayer-current-time",seconds)

}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));