import './index.css'

const HistoryItem = props => {
  const {searchDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="list-container">
      <div className="text-container">
        <p className="description">{timeAccessed}</p>
        <img src={logoUrl} className="image" alt="app logo" />
        <p className="description">{title}</p>
        <p className="description">{domainUrl}</p>
      </div>
      <div className="img-container">
        <button className="btn" data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="image"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
