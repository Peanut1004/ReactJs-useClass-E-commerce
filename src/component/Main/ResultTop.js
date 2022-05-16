import React from 'react'

class ResultTop extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     time: Date.now(),
  //   }
  // }
  render() {
    return (
      <div className="results-top">
        <span>{this.props.products.length} results found</span>
        <div className="sort-by">
          <label>Sort by</label>
          <div className="sort-by-selector">
            <select onChange={(e) => this.props.handleSort(e.target.value)}>
              <option value="">Featured</option>
              <option value="asc">Price asc.</option>
              <option value="desc">Price desc.</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default ResultTop