function AutoPlay() {
  AutoPlay.prototype.run = function (player) {
    player.mutee(); // for starting autoplay we have to mute it first.
    player.play();
  };
}

export default AutoPlay;
