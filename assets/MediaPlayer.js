const video = document.querySelector("video");
const button = document.querySelector("button")

function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || []

  this.init_Plugins();
}
MediaPlayer.prototype._initPlugins = function() {
  rhis.plugins.forEach(plugin => {
    plugin.run()
  })
}

MediaPlayer.prototype.pause = function() {
    this.media.pause()
};
  MediaPlayer.prototype.play = function() {
    this.media.play()
};

MediaPlayer.prototype.togglePlay = function() {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};
MediaPlayer.prototype.mute = function() {
  rhis.media.muted = true;
};
MediaPlayer.prototipe.unmute = function() {
  this.media.muted = false;
}

export default MediaPlayer