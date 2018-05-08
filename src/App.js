import React, {Component} from 'react';
import fuzzyFilterFactory from 'react-fuzzy-filter';
import './App.css';

// these components share state and can even live in different components
const {InputFilter, FilterResults} = fuzzyFilterFactory();

class App extends Component {
  render() {
    const items = [
      { name: 'A-1 Precision Adder' },
      { name: 'A-2 Four Quadrant Multiplier' },
      { name: 'A-3 Full-wave Rectifier' },
      { name: 'A-4 Minimum/maximum' },
      { name: 'A-5 Linear/Exponential Converter' },
      { name: 'A-6 Quantizer' },
      { name: 'A-7 Comparator' },
      { name: 'A-8 Dual Waveshaper' },
      { name: 'B-1 Sample and Hold' },
      { name: 'B-2 Slew Rate Limiter' },
      { name: 'B-3 Pitch and Envelope Tracker' },
      { name: 'B-4 Clockable Delay/Echo' },
      { name: 'B-5 LFO' },
      { name: 'B-6 Clockable LFO' },
      { name: 'B-7 VCO with linear FM' },
      { name: 'B-8 VCO with waveshaping' },
      { name: 'C-1 Precision Adder (fractional offsets)' },
      { name: 'C-2 Voltage Controlled Delay Line' },
      { name: 'C-3 Clockable Ping Pong Delay (Z feedback) ' },
      { name: 'C-4 Clockable Ping Pong Delay (Z input pan) ' },
      { name: 'C-5 Resonator' },
      { name: 'C-6 Vocoder' },
      { name: 'C-7 Phaser' },
      { name: 'C-8 Bit Crusher' },
      { name: 'D-2 Tape Delay' },
      { name: 'D-3 Waveform Animator' },
      { name: 'D-4 State Variable Filter' },
      { name: 'D-5 LP/HP Filter' },
      { name: 'D-6 LP/BP Filter' },
      { name: 'D-7 BP/HP Filter' },
      { name: 'D-8 BP/Notch Filter' },
      { name: 'E-1 AR Envelope' },
      { name: 'E-2 AR Envelope (with push)' },
      { name: 'E-3 AR Envelope & VCA' },
      { name: 'E-4 AR Envelope & VCA (with push)' },
      { name: 'E-5 Dual AR Envelope' },
      { name: 'E-6 Dual AR Envelope (with push)' },
      { name: 'E-7 Euro to Buchla Converter' },
      { name: 'E-8 Buchla to Euro Converter' },
      { name: 'F-1 Clockable AD Envelope (with mute)' },
      { name: 'F-2 Clockable AD Envelope (with gate)' },
      { name: 'F-3 Clockable AD Envelope (with trigger). ' },
      { name: 'F-4 Clockable AD Envelope & VCA' },
      { name: 'F-5 Shift Register Random CVs' },
      { name: 'F-6 Shift Register Random Quantized CVs' },
      { name: 'F-7 Shift Register Random Triggers' },
      { name: 'F-8 Shift Register Random Dual Triggers' },
      { name: 'G-1 E-S-1 Emulation' },
      { name: 'G-2 E-S-2 Emulation' },
      { name: 'G-3 Pitch Reference' },
      { name: 'G-4 Frequency Reference' },
      { name: 'G-5 Tuner' },
      { name: 'G-6 MIDI Clock' },
      { name: 'G-7 MIDI/CV' },
      { name: 'G-8 CV/MIDI' },
      { name: 'H-1 Crossfade/Pan' },
      { name: 'H-2 Dual Sample and Hold' },
      { name: 'H-3 Dual Quantizer (Z scale)' },
      { name: 'H-4 Dual Quantizer' },
      { name: 'H-5 Dual Euclidean Patterns' },
      { name: 'H-6 Dual Delayed Pulse Generator' },
      { name: 'H-7 Noise' },
      { name: 'I-1 Audio Playback' },
      { name: 'I-2 Clocked Audio Playback' },
      { name: 'I-3 Audio Playback with V/Oct' },
      { name: 'I-4 Audio Playback with Z Speed' },
      { name: 'I-5 Audio Playback with Reverse' },
      { name: 'I-6 Audio Playback with Scrub' },
      { name: 'I-7 Dual Audio Playback' },
      { name: 'I-8 Dual Audio Playback with Z Speed' },
      { name: 'J-1 MIDI File Playback (Clocked)' },
      { name: 'J-3 MIDI File Playback (Free Running)' },
      { name: 'J-4 Audio Playback with End CV' },
      { name: 'J-5 Audio Recorder' },
      { name: 'K-1 Wavetable VCO' },
      { name: 'K-5 Programmable Quantizer' },
      { name: 'L-1 Stereo Reverb' },
      { name: 'L-2 Mono-to-Stereo Reverb' },
      { name: 'L-3 Dual Reverb' },
      { name: 'L-5 Stereo Chorus' },
      { name: 'L-6 Mono Chorus' },
      { name: 'L-8 Gate' },
      { name: 'M-1 Delayed LFO' },
      { name: 'M-2 Scaled LFO' },
    ];
    const fuseConfig = {
      // keys: ['meta', 'tag']
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name",
      ]
    };
    return (
      <div>
        <header>
          <InputFilter debounceTime={200} />
        </header>
        <div>vco lfo quantizer envelope filter audio midi shift delay dual</div>
        <FilterResults
          items={items}
          fuseConfig={fuseConfig}>
          {filteredItems => {
            return(
              <div className="results">
                {filteredItems.map(item => <div>{item.name}</div>)}
              </div>
            )
          }}
        </FilterResults>
      </div>
    );
  }
}
export default App;