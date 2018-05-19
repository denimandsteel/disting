export const algorithms = [
  {
    code: 'A-1',
    name: 'Precision Adder',
    Z: 'Offset (CV)',
    X: 'Input',
    Y: 'Input',
    A: 'X+Y+Z',
    B: 'X-Y-Z',
    extra: ['knob_recorder'],
    description: "Output A is the sum of inputs X & Y; output B is the difference between inputs X & Y. With nothing plugged into input X, B is therefore simply an inverted copy of Y.<br><br>The Z knob/CV sets an offset which is applied to both A and B. The offset is a whole number of Volts. If X/Y are 1V/Octave pitch CVs, Z is therefore an octave shift control. The maximum shift is 10V, positive or negative.<br><br>When Z changes, the offset is shown on the display. After a short while the display reverts to showing the current algorithm.",
    video: 'https://www.youtube.com/watch?v=mCFaTt6vNpk',
    parameters: [
      {
        min: 0,
        max: 1,
        default: 0,
        description: 'When 1, the offset is not restricted to 1V steps, and changes smoothly with Z.',
      },
    ]
  },
  {
    code: 'A-2',
    name: 'Four Quadrant Multiplier',
  },
  {
    code: 'A-3',
    name: 'Full-wave Rectifier',
  },
  {
    code: 'A-4',
    name: 'Minimum/maximum',
  },
  {
    code: 'A-5',
    name: 'Linear/Exponential Converter',
  },
  {
    code: 'A-6',
    name: 'Quantizer',
  },
  {
    code: 'A-7',
    name: 'Comparator',
  },
  {
    code: 'A-8',
    name: 'Dual Waveshaper',
  },
  {
    code: 'B-1',
    name: 'Sample and Hold',
  },
  {
    code: 'B-2',
    name: 'Slew Rate Limiter',
  },
  {
    code: 'B-3',
    name: 'Pitch and Envelope Tracker',
  },
  {
    code: 'B-4',
    name: 'Clockable Delay/Echo',
    keywords: 'effect',
  },
  {
    code: 'B-5',
    name: 'LFO',
  },
  {
    code: 'B-6',
    name: 'Clockable LFO',
    extra: ['tap_tempo'],
  },
  {
    code: 'B-7',
    name: 'VCO with linear FM',
  },
  {
    code: 'B-8',
    name: 'VCO with waveshaping',
  },
  {
    code: 'C-1',
    name: 'Precision Adder (fractional offsets)',
  },
  {
    code: 'C-2',
    name: 'Voltage Controlled Delay Line',
    keywords: 'effect',
  },
  {
    code: 'C-3',
    name: 'Clockable Ping Pong Delay (Z feedback) ',
    keywords: 'effect',
  },
  {
    code: 'C-4',
    name: 'Clockable Ping Pong Delay (Z input pan) ',
    keywords: 'effect',
  },
  {
    code: 'C-5',
    name: 'Resonator',
    keywords: 'effect',
  },
  {
    code: 'C-6',
    name: 'Vocoder',
    keywords: 'effect',
  },
  {
    code: 'C-7',
    name: 'Phaser',
    keywords: 'effect',
  },
  {
    code: 'C-8',
    name: 'Bit Crusher',
    keywords: 'effect',
  },
  {
    code: 'D-2',
    name: 'Tape Delay',
    keywords: 'effect',
  },
  {
    code: 'D-3',
    name: 'Waveform Animator',
  },
  {
    code: 'D-4',
    name: 'State Variable Filter',
  },
  {
    code: 'D-5',
    name: 'LP/HP Filter',
  },
  {
    code: 'D-6',
    name: 'LP/BP Filter',
  },
  {
    code: 'D-7',
    name: 'BP/HP Filter',
  },
  {
    code: 'D-8',
    name: 'BP/Notch Filter',
  },
  {
    code: 'E-1',
    name: 'AR Envelope',
  },
  {
    code: 'E-2',
    name: 'AR Envelope (with push)',
  },
  {
    code: 'E-3',
    name: 'AR Envelope & VCA',
  },
  {
    code: 'E-4',
    name: 'AR Envelope & VCA (with push)',
  },
  {
    code: 'E-5',
    name: 'Dual AR Envelope',
  },
  {
    code: 'E-6',
    name: 'Dual AR Envelope (with push)',
  },
  {
    code: 'E-7',
    name: 'Euro to Buchla Converter',
  },
  {
    code: 'E-8',
    name: 'Buchla to Euro Converter',
  },
  {
    code: 'F-1',
    name: 'Clockable AD Envelope (with mute)',
  },
  {
    code: 'F-2',
    name: 'Clockable AD Envelope (with gate)',
  },
  {
    code: 'F-3',
    name: 'Clockable AD Envelope (with trigger). ',
  },
  {
    code: 'F-4',
    name: 'Clockable AD Envelope & VCA',
  },
  {
    code: 'F-5',
    name: 'Shift Register Random CVs',
  },
  {
    code: 'F-6',
    name: 'Shift Register Random Quantized CVs',
  },
  {
    code: 'F-7',
    name: 'Shift Register Random Triggers',
  },
  {
    code: 'F-8',
    name: 'Shift Register Random Dual Triggers',
  },
  {
    code: 'G-1',
    name: 'E-S-1 Emulation',
    keywords: 'utility',
  },
  {
    code: 'G-2',
    name: 'E-S-2 Emulation',
    keywords: 'utility',
  },
  {
    code: 'G-3',
    name: 'Pitch Reference',
    keywords: 'utility',
  },
  {
    code: 'G-4',
    name: 'Frequency Reference',
    keywords: 'utility',
  },
  {
    code: 'G-5',
    name: 'Tuner',
    keywords: 'utility',
  },
  {
    code: 'G-6',
    name: 'MIDI Clock',
  },
  {
    code: 'G-7',
    name: 'MIDI/CV',
  },
  {
    code: 'G-8',
    name: 'CV/MIDI',
  },
  {
    code: 'H-1',
    name: 'Crossfade/Pan',
  },
  {
    code: 'H-2',
    name: 'Dual Sample and Hold',
  },
  {
    code: 'H-3',
    name: 'Dual Quantizer (Z scale)',
  },
  {
    code: 'H-4',
    name: 'Dual Quantizer',
  },
  {
    code: 'H-5',
    name: 'Dual Euclidean Patterns',
  },
  {
    code: 'H-6',
    name: 'Dual Delayed Pulse Generator',
  },
  {
    code: 'H-7',
    name: 'Noise',
  },
  {
    code: 'I-1',
    name: 'Audio Playback',
  },
  {
    code: 'I-2',
    name: 'Clocked Audio Playback',
  },
  {
    code: 'I-3',
    name: 'Audio Playback with V/Oct',
  },
  {
    code: 'I-4',
    name: 'Audio Playback with Z Speed',
  },
  {
    code: 'I-5',
    name: 'Audio Playback with Reverse',
  },
  {
    code: 'I-6',
    name: 'Audio Playback with Scrub',
  },
  {
    code: 'I-7',
    name: 'Dual Audio Playback',
  },
  {
    code: 'I-8',
    name: 'Dual Audio Playback with Z Speed',
  },
  {
    code: 'J-1',
    name: 'MIDI File Playback (Clocked)',
  },
  {
    code: 'J-3',
    name: 'MIDI File Playback (Free Running)',
  },
  {
    code: 'J-4',
    name: 'Audio Playback with End CV',
  },
  {
    code: 'J-5',
    name: 'Audio Recorder',
  },
  {
    code: 'K-1',
    name: 'Wavetable VCO',
  },
  {
    code: 'K-5',
    name: 'Programmable Quantizer',
  },
  {
    code: 'L-1',
    name: 'Stereo Reverb',
    keywords: 'effect',
  },
  {
    code: 'L-2',
    name: 'Mono-to-Stereo Reverb',
    keywords: 'effect',
  },
  {
    code: 'L-3',
    name: 'Dual Reverb',
    keywords: 'effect',
  },
  {
    code: 'L-5',
    name: 'Stereo Chorus',
    keywords: 'effect',
  },
  {
    code: 'L-6',
    name: 'Mono Chorus',
    keywords: 'effect',
  },
  {
    code: 'L-8',
    name: 'Gate',
  },
  {
    code: 'M-1',
    name: 'Delayed LFO',
  },
  {
    code: 'M-2',
    name: 'Scaled LFO',
  },
];