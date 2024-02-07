import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchText: ''}

  onInputChange = event => {
    this.setState({searchText: event.target.value})
  }

  arrowClicked = suggestion => {
    this.setState({searchText: suggestion})
  }

  render() {
    const {searchText} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachSearch =>
      eachSearch.suggestion.toLowerCase().includes(searchText.toLowerCase()),
    )

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt="google logo"
        />
        <div className="search-card">
          <div className="input-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              className="input"
              type="search"
              placeholder="Search Google"
              value={searchText}
              onChange={this.onInputChange}
            />
          </div>
          <ul className="search-items-list">
            {searchResult.map(eachResult => (
              <SuggestionItem
                suggestionItem={eachResult}
                key={eachResult.id}
                arrowClicked={this.arrowClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
