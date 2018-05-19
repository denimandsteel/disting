import React, { Component } from 'react';
import { algorithms } from './data';
import Algorithm from './components/Algorithm';
import Fuse from 'fuse.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
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
          <input type="text" value={this.state.search} onChange={(e) => { this.filterList(e.target.value) } } />
          <span className="quicklink" onClick={() => { this.filterList('') } }>clear</span>
        </header>
        <div className="quicklinks">
          <span className="quicklink" onClick={() => { this.filterList('vco') } }>vco</span>
          <span className="quicklink" onClick={() => { this.filterList('lfo') } }>lfo</span>
          <span className="quicklink" onClick={() => { this.filterList('quantizer') } }>quantizer</span>
          <span className="quicklink" onClick={() => { this.filterList('envelope') } }>envelope</span>
          <span className="quicklink" onClick={() => { this.filterList('filter') } }>filter</span>
          <span className="quicklink" onClick={() => { this.filterList('audio') } }>audio</span>
          <span className="quicklink" onClick={() => { this.filterList('midi') } }>midi</span>
          <span className="quicklink" onClick={() => { this.filterList('shift') } }>shift</span>
          <span className="quicklink" onClick={() => { this.filterList('delay') } }>delay</span>
          <span className="quicklink" onClick={() => { this.filterList('dual') } }>dual</span>
          <span className="quicklink" onClick={() => { this.filterList('effect') } }>effect</span>
          <span className="quicklink" onClick={() => { this.filterList('utility') } }>utility</span>
        </div>
        <div className="results">
          {this.state.filteredAlgorithms.map(algorithm => <Algorithm key={algorithm.code} algorithm={algorithm}/>)}
        </div>
      </div>
    );
  }
}
export default App;