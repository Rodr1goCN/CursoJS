interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
  muteButton: HTMLButtonElement;
  fullscreenButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;
  private muteButton: HTMLButtonElement;
  private fullscreenButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
    this.muteButton = videoPlayerElements.muteButton;
    this.fullscreenButton = videoPlayerElements.fullscreenButton;
  }

  iniciarEventos(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playButton.innerText = 'Play';
    });

    this.muteButton.addEventListener('click', () => {
      this.toggleMute();
    });
    this.fullscreenButton.addEventListener('click', () => {
      this.toggleFullscreen();
    });
  }

  toggleFullscreen(): void {
    if (this.videoPlayer.requestFullscreen) {
      this.videoPlayer.requestFullscreen();
    }
  }

  toggleMute(): void {
    this.videoPlayer.muted = !this.videoPlayer.muted;
    if (this.videoPlayer.muted) {
      this.muteButton.innerText = 'Unmute';
    } else {
      this.muteButton.innerHTML = 'Mute';
    }
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }
  stop(): void {}
}
const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
  muteButton: document.querySelector('.mute') as HTMLButtonElement,
  fullscreenButton: document.querySelector('.fullscreen') as HTMLButtonElement,
});

videoPlayer.iniciarEventos();
