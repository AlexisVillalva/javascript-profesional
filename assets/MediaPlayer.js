function MediaPlayer(config) {
  this.media = config.el;
  // adding plugins
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach((element) => {
    element.run(this);
  });
};

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

MediaPlayer.prototype.mutee = function () {
  console.log("muted");
  this.media.muted = true;
};

MediaPlayer.prototype.toggleMute = function () {
  console.log("toggle mute");
  if (this.media.muted) {
    this.media.muted = false;
  } else {
    this.media.muted = true;
  }
};

export default MediaPlayer;
