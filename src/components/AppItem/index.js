// Write your code here
import './index.css'

const AppItem = ({props}) => {
  const {appId, appName, imageUrl, category} = props

  return (
    <li className="app-item">
      <img className="app-item-img" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
