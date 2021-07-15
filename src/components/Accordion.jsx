import React, { useState } from 'react'

const Accordion = ({ item }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const renderedItems = item.map((item, i) => {
    const handleTitleClick = (item, i) => {
      setActiveIndex(i)
    }

    const active = i === activeIndex ? 'active' : ''

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => handleTitleClick(item, i)}
        >
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })

  return <div className='ui styled accordion'>{renderedItems}</div>
}

export default Accordion
