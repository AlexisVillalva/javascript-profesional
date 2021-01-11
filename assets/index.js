import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause()],
});

const playButton = document.querySelector("#toggle-play-button");
const muteButton = document.querySelector("#toggle-mute-button");
playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

// trabajando con service workers para guardar la aplicacion en cache
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/sw.js")
        .catch((error) => console.log(error.message));
}
