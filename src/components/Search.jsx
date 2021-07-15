import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  const handleSearchData = async () => {
    const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: term
      }
    })
    setResults(data.query.search)
  }

  useEffect(() => {
    if (term && !results.length) {
      handleSearchData()
    } else {
      const timeoutId = setTimeout(() => {
        if (term) handleSearchData()
      }, 1000)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [term])

  const renderList = results.map(({ pageid, title, snippet }) => {
    return (
      <div className='item' key={pageid}>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`http://en.wikipedia.org?curid=${pageid}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{title}</div>
          <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
          {/* {snippet} */}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='search'>Enter Search Term</label>
          <input
            id='search'
            type='text'
            className='input'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderList}</div>
    </div>
  )
}

export default Search
