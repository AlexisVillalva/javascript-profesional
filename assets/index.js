import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
    el: video,
    plugins: [
        //new AutoPlay()
    ],
});

const playButton = document.querySelector("#toggle-play-button");
const muteButton = document.querySelector("#toggle-mute-button");
playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();
