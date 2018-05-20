import React, { Component } from 'react';
import { algorithms } from './data';
import Algorithm from './components/Algorithm';
import Fuse from 'fuse.js';

const quicklinks = [
  'vco',
  'lfo',
  'quantizer',
  'envelope',
  'filter',
  'audio',
  'midi',
  'shift',
  'delay',
  'dual',
  'effect',
  'utility',
];

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      showInfo: false,
      filteredAlgorithms: algorithms,
      fuse: new Fuse(algorithms, {
        // keys: ['meta', 'tag']
        shouldSort: true,
        threshold: 0.3,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "name",
          "keywords",
        ]
      })
    }
    this.toggleInfo = this.toggleInfo.bind(this);
  }
  toggleInfo() {
    console.log('ayy', this.state.showInfo)
    this.setState({ showInfo: !this.state.showInfo });
  }
  filterList(filter) {
    this.setState({
      search: filter,
      filteredAlgorithms: filter.length > 0 ? this.state.fuse.search(filter) : algorithms,
    });
  }
  render() {
    return (
      <div>
        <header>
          <input type="text" value={this.state.search} placeholder="Search" onChange={(e) => { this.filterList(e.target.value) } } />
          <span className="quicklink" onClick={() => { this.filterList('') } }><span>clear</span></span>
          <span className={this.state.showInfo ? "quicklink info active" : "quicklink info" } onClick={this.toggleInfo}><span>info</span></span>
        </header>
        {this.state.showInfo ? (
          <div className="info">Hello world!</div>
        ) : (
          <div>
            <div className="quicklinks">
              {quicklinks.map(quicklink => <span className={this.state.search === quicklink ? "quicklink active" : "quicklink"} onClick={() => { this.filterList(quicklink) } }>{quicklink}</span>)}
            </div>
            <div className="results">
              {this.state.filteredAlgorithms.map(algorithm => <Algorithm key={algorithm.code} algorithm={algorithm}/>)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;