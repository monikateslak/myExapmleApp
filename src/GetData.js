import React from 'react'
import { useState, useEffect } from 'react'

const GetApiData = async () => {
  const [users, setUsers] = useState()
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/',
  ).then((response) => response.json())

  setUsers(response)

  useEffect(() => {
    GetApiData()
  }, [])
  ;<div className="get-data">
    {users.map((user) => (
      <div className="item-container">
        Id:{user.Id} <div className="title">Title:{user.title}</div>
      </div>
    ))}
  </div>
}

export default GetApiData
