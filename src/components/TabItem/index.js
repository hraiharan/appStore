// Write your code here

import './index.css'

const TabItem = ({props, onclick, active}) => {
  const {tabId, displayText} = props
  const onclickEvent = () => {
    onclick(tabId)
  }
  let classname = ''
  if (active) {
    classname = 'btn-active'
  } else {
    classname = 'btn-inactive'
  }
  console.log(active, classname)
  return (
    <li>
      <button className={classname} onClick={onclickEvent}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
