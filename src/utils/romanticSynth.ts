// Soft romantic Web Audio API chord generator
class RomanticSynth {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;

  private notes = [
    261.63, // C4
    311.13, // Eb4
    392.0,  // G4
    466.16, // Bb4
    523.25, // C5
    622.25, // Eb5
    698.46, // F5
    783.99, // G5
  ];

  private init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.init();
    this.isPlaying = true;
    
    // Play a gentle romantic arpeggio
    let step = 0;
    const playNextNote = () => {
      if (!this.isPlaying || !this.ctx) return;

      const freq = this.notes[step % this.notes.length];
      this.playPluck(freq);

      // Harmony note
      if (step % 2 === 0) {
        const harmonyFreq = this.notes[(step + 2) % this.notes.length] / 2;
        this.playPluck(harmonyFreq, 0.4);
      }

      step++;
    };

    playNextNote();
    this.intervalId = window.setInterval(playNextNote, 1800);
  }

  private playPluck(freq: number, volume = 0.25) {
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Soft envelope
      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime);
      osc.stop(this.ctx.currentTime + 2.6);
    } catch {
      // Audio context error fallback
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const romanticSynth = new RomanticSynth();
