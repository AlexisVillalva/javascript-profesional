function AutoPlay() {
    AutoPlay.prototype.run = function (player) {
        if (!player.muted) {
            player.muted = true; // for starting autoplay we have to mute it first.
        }
        player.play();
    };
}

export default AutoPlay;
