import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, arrowClicked} = props
  const {suggestion} = suggestionItem

  const onArrowClicked = () => {
    arrowClicked(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
        onClick={onArrowClicked}
      />
    </li>
  )
}

export default SuggestionItem
