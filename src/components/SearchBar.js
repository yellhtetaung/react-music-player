import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onInputChange = (evt) => {
    this.setState({ term: evt.target.value });
  };
  onFromSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-white navbar-dark">
        <div className="container text-center">
          <h3 className="navbar-brand text-dark">React Music Player</h3>
          <form
            className="form-inline text-center"
            onSubmit={this.onFromSubmit}
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
