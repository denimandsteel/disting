import React, { Component } from 'react';

const extras = {
  knob_recorder: 'Knob recorder enabled',
  tap_tempo: 'Tap tempo enabled',

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
    if (video) {
      const youtubeId = video.match(/v=(.+)$/);
    }
    return (
      <div className="algorithm">
        <div onClick={this.toggleOpen}>
          <span class="code">{code}</span>
          {name}
        </div>
        {this.state.open && (
          <div className="description">
            <div className="wires"><span className="input"><span>Z</span></span> {Z}</div>
            <div className="wires"><span className="input"><span>X</span></span> {X}</div>
            <div className="wires"><span className="input"><span>Y</span></span> {Y}</div>
            <div className="wires"><span className="output"><span>A</span></span> {A}</div>
            <div className="wires"><span className="output"><span>B</span></span> {B}</div>
            {extra && extra.map((item) => {
              return (<div className={'extra ' + item}>*{extras[item]}</div>);
            })}
            <div className="full" dangerouslySetInnerHTML={{ __html: description }}/>
            <div>{video}</div>
            {parameters && (
              <table>
                <thead>
                  <tr>
                    <th>P</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Def</th>
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