import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Fetch() {
  useEffect(() => {
    FetchItems()
  }, [])

  const [items, setItems] = useState([])

  const FetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const items = await data.json()
    console.log(items.items)
    setItems(items.items)
  }

  return (
    <div>
      <section className="data-container">
        test fetch test fetch
        {items.map((item) => (
          <h1 key={item.itemid}>
            <Link to={FetchItems}>{item.name}</Link>
          </h1>
        ))}
      </section>
    </div>
  )
}
export default Fetch
