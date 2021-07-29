import React from 'react';
 
class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <h6>Search Course</h6>

        <form action="/" method="get">
            <input
                type="text"
                id="header-search"
                placeholder="Search courses"
                name="search" 
                className="form-control"
            />
            <div className="flex flex-center">
                <button type="submit" className="btn btn-success mt-3">Search</button>
            </div>
        </form>
      </div>
    )
  }
}
 
export default SearchBar;