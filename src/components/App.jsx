import React, { useState } from 'react'
import Accordion from './Accordion'
// import Search from './Search'
import Dropdown from './Dropdown'

const item = [
  {
    title: 'Bikini',
    content: '123'
  },
  {
    title: 'Smile',
    content: '456'
  },
  {
    title: 'Happy',
    content: '789'
  }
]

const option = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Shade of Blue',
    value: 'blue'
  }
]

function App() {
  const [selected, setSelected] = useState(option[0])

  return (
    <div>
      {/* <Accordion item={item} /> */}
      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={option}
      />
    </div>
  )
}

export default App
