import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const clickTabItem = () => {
    onClickTabItem(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`button ${activeTabClassName}`}
        onClick={clickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
