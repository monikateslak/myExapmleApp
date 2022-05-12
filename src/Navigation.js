import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="navigation">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/logo">Logo</Link>
            </li>
            <li>about</li>
            <li>shop</li>
            <li>free</li>
            <li>contact</li>
            <li>join</li>
          </ul>
        </nav>
      </Router>
    </div>
  )
}

export default Navigation
