import { useState,useRef } from "react"
import "./Tabs.css"

const headings = [
  'First tab', 'Second tab', 'Third tab'
]
const content = [
  'This is the first tab content',
  'The second tab is much the same as the first tab',
  'But the third tabe does its own thing'
]

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0)

  const tabRef = useRef(null)

  return <div className="Tabs">
    <div>
      { headings.map((text, idx) => {
        return <TabHeading
          key={idx}
          index={idx}
          ref={tabRef}
          onClick={() => {setSelectedTab(idx)}}
          selected={selectedTab === idx}
          title={headings[idx]}/>
      })}
    </div>
    <div className="tabcontent"><p>{content[selectedTab]}</p></div>
  </div>
}

function TabHeading(props) {
  return <button
    onClick={props.onClick}
    tabIndex={props.idx}
    className={props.selected ? 'tab selected': 'tab'}
    title={props.title}>
    {props.title}</button>
}

export default Tabs