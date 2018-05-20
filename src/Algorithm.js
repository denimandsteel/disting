import React, { Component } from 'react';

const extras = {
  knob_recorder: 'Knob recorder enabled',
  tap_tempo: 'Tap tempo enabled',
  midi_support: 'Outputs & Receives MIDI',
  z_trigger: 'Press Z to trigger'
}

class Algorithm extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen() {
    this.setState({ open: !this.state.open });
  }
  render() {
    const { algorithm: {
      code,
      name,
      Z, X, Y, A, B,
      extra,
      description,
      video,
      parameters,
    } } = this.props;
    let embed = null;
    if (video) {
      let matches = video.match(/v=(.+)$/)
      if (matches) {
        embed = "https://www.youtube.com/embed/" + matches[1];
      }
    }
    return (
      <div className="algorithm">
        <div className="header" onClick={this.toggleOpen}>
          <div><span className="code">{code}</span></div>
          <div className="name">{name}</div>
        </div>
        {this.state.open && (
          <div className="description">
            <div className="wires"><span className="input"><span>Z</span></span> {Z}</div>
            <div className="wires"><span className="input"><span>X</span></span> {X}</div>
            <div className="wires"><span className="input"><span>Y</span></span> {Y}</div>
            <div className="wires"><span className="output"><span>A</span></span> {A}</div>
            <div className="wires"><span className="output"><span>B</span></span> {B}</div>
            {extra && extra.map((item) => {
              return (<div key={item} className={'extra ' + item}>*{extras[item]}</div>);
            })}
            <div className="full" dangerouslySetInnerHTML={{ __html: description }}/>
            {embed && (
              <div className="embed-container">
                <iframe width="560" height="315" src={embed} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>
            )}
            {parameters.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Param</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {parameters.map((parameter, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{parameter.min}</td>
                        <td>{parameter.max}</td>
                        <td>{parameter.default}</td>
                        <td>{parameter.description}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Algorithm;