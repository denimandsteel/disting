export const algorithms = [
  {
    code: 'A1',
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
    ],
  },
  {
    code: 'A2',
    name: 'Four Quadrant Multiplier',
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
    ],
  },
  {
    code: 'A3',
    name: 'Full-wave Rectifier',
  },
  {
    code: 'A4',
    name: 'Minimum/maximum',
  },
  {
    code: 'A5',
    name: 'Linear/Exponential Converter',
  },
  {
    code: 'A6',
    name: 'Quantizer',
  },
  {
    code: 'A7',
    name: 'Comparator',
  },
  {
    code: 'A8',
    name: 'Dual Waveshaper',
  },
  {
    code: 'B1',
    name: 'Sample and Hold',
  },
  {
    code: 'B2',
    name: 'Slew Rate Limiter',
  },
  {
    code: 'B3',
    name: 'Pitch and Envelope Tracker',
  },
  {
    code: 'B4',
    name: 'Clockable Delay/Echo',
    keywords: 'effect',
  },
  {
    code: 'B5',
    name: 'LFO',
  },
  {
    code: 'B6',
    name: 'Clockable LFO',
    extra: ['tap_tempo'],
  },
  {
    code: 'B7',
    name: 'VCO with linear FM',
  },
  {
    code: 'B8',
    name: 'VCO with waveshaping',
  },
  {
    code: 'C1',
    name: 'Precision Adder (fractional offsets)',
  },
  {
    code: 'C2',
    name: 'Voltage Controlled Delay Line',
    keywords: 'effect',
  },
  {
    code: 'C3',
    name: 'Clockable Ping Pong Delay (Z feedback) ',
    keywords: 'effect',
  },
  {
    code: 'C4',
    name: 'Clockable Ping Pong Delay (Z input pan) ',
    keywords: 'effect',
  },
  {
    code: 'C5',
    name: 'Resonator',
    keywords: 'effect',
  },
  {
    code: 'C6',
    name: 'Vocoder',
    keywords: 'effect',
  },
  {
    code: 'C7',
    name: 'Phaser',
    keywords: 'effect',
  },
  {
    code: 'C8',
    name: 'Bit Crusher',
    keywords: 'effect',
  },
  {
    code: 'D2',
    name: 'Tape Delay',
    keywords: 'effect',
  },
  {
    code: 'D3',
    name: 'Waveform Animator',
  },
  {
    code: 'D4',
    name: 'State Variable Filter',
  },
  {
    code: 'D5',
    name: 'LP/HP Filter',
  },
  {
    code: 'D6',
    name: 'LP/BP Filter',
  },
  {
    code: 'D7',
    name: 'BP/HP Filter',
  },
  {
    code: 'D8',
    name: 'BP/Notch Filter',
  },
  {
    code: 'E1',
    name: 'AR Envelope',
  },
  {
    code: 'E2',
    name: 'AR Envelope (with push)',
  },
  {
    code: 'E3',
    name: 'AR Envelope & VCA',
  },
  {
    code: 'E4',
    name: 'AR Envelope & VCA (with push)',
  },
  {
    code: 'E5',
    name: 'Dual AR Envelope',
  },
  {
    code: 'E6',
    name: 'Dual AR Envelope (with push)',
  },
  {
    code: 'E7',
    name: 'Euro to Buchla Converter',
  },
  {
    code: 'E8',
    name: 'Buchla to Euro Converter',
  },
  {
    code: 'F1',
    name: 'Clockable AD Envelope (with mute)',
  },
  {
    code: 'F2',
    name: 'Clockable AD Envelope (with gate)',
  },
  {
    code: 'F3',
    name: 'Clockable AD Envelope (with trigger). ',
  },
  {
    code: 'F4',
    name: 'Clockable AD Envelope & VCA',
  },
  {
    code: 'F5',
    name: 'Shift Register Random CVs',
  },
  {
    code: 'F6',
    name: 'Shift Register Random Quantized CVs',
  },
  {
    code: 'F7',
    name: 'Shift Register Random Triggers',
  },
  {
    code: 'F8',
    name: 'Shift Register Random Dual Triggers',
  },
  {
    code: 'G1',
    name: 'E-S-1 Emulation',
    keywords: 'utility',
  },
  {
    code: 'G2',
    name: 'E-S-2 Emulation',
    keywords: 'utility',
  },
  {
    code: 'G3',
    name: 'Pitch Reference',
    keywords: 'utility',
  },
  {
    code: 'G4',
    name: 'Frequency Reference',
    keywords: 'utility',
  },
  {
    code: 'G5',
    name: 'Tuner',
    keywords: 'utility',
  },
  {
    code: 'G6',
    name: 'MIDI Clock',
  },
  {
    code: 'G7',
    name: 'MIDI/CV',
  },
  {
    code: 'G8',
    name: 'CV/MIDI',
  },
  {
    code: 'H1',
    name: 'Crossfade/Pan',
  },
  {
    code: 'H2',
    name: 'Dual Sample and Hold',
  },
  {
    code: 'H3',
    name: 'Dual Quantizer (Z scale)',
  },
  {
    code: 'H4',
    name: 'Dual Quantizer',
  },
  {
    code: 'H5',
    name: 'Dual Euclidean Patterns',
  },
  {
    code: 'H6',
    name: 'Dual Delayed Pulse Generator',
  },
  {
    code: 'H7',
    name: 'Noise',
  },
  {
    code: 'I1',
    name: 'Audio Playback',
  },
  {
    code: 'I2',
    name: 'Clocked Audio Playback',
  },
  {
    code: 'I3',
    name: 'Audio Playback with V/Oct',
  },
  {
    code: 'I4',
    name: 'Audio Playback with Z Speed',
  },
  {
    code: 'I5',
    name: 'Audio Playback with Reverse',
  },
  {
    code: 'I6',
    name: 'Audio Playback with Scrub',
  },
  {
    code: 'I7',
    name: 'Dual Audio Playback',
  },
  {
    code: 'I8',
    name: 'Dual Audio Playback with Z Speed',
  },
  {
    code: 'J1',
    name: 'MIDI File Playback (Clocked)',
  },
  {
    code: 'J3',
    name: 'MIDI File Playback (Free Running)',
  },
  {
    code: 'J4',
    name: 'Audio Playback with End CV',
  },
  {
    code: 'J5',
    name: 'Audio Recorder',
  },
  {
    code: 'K1',
    name: 'Wavetable VCO',
  },
  {
    code: 'K5',
    name: 'Programmable Quantizer',
  },
  {
    code: 'L1',
    name: 'Stereo Reverb',
    keywords: 'effect',
  },
  {
    code: 'L2',
    name: 'Mono-to-Stereo Reverb',
    keywords: 'effect',
  },
  {
    code: 'L3',
    name: 'Dual Reverb',
    keywords: 'effect',
  },
  {
    code: 'L5',
    name: 'Stereo Chorus',
    keywords: 'effect',
  },
  {
    code: 'L6',
    name: 'Mono Chorus',
    keywords: 'effect',
  },
  {
    code: 'L8',
    name: 'Gate',
  },
  {
    code: 'M1',
    name: 'Delayed LFO',
  },
  {
    code: 'M2',
    name: 'Scaled LFO',
  },
];