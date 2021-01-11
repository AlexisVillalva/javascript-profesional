import MediaPlayer from '../MediaPlayer';


class AutoPlay {
  constructor() {}
  run(player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = true; // for starting autoplay we have to mute it first.
    }
    player.play();
  }
}

export default AutoPlay;
