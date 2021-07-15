import React from 'react'
import Accordion from './Accordion'
import Search from './Search'

function App() {
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
  return (
    <div>
      {/* <Accordion item={item} /> */}
      <Search />
    </div>
  )
}

export default App
