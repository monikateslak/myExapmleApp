import React from 'react'
//('https://jsonplaceholder.typicode.com/todos/1')

function GetData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((resData) => console.log(resData))

  return <div className="box">get Api data</div>
}

export default GetData
