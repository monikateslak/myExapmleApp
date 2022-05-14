import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <Router>
          <ul>
            <li>Logo</li>
            <li>
              <Link to="/about"></Link>about
            </li>
            <li>
              <Link to="/shop">Shop</Link></li>
            <li>
              <Link to="/free">free</Link></li>
            <li>
              <Link to="/contact">contact</Link></li>
            <li>
              <Link to="/join">join</Link></li>
          </ul>
        </Router>
      </nav>
    </div>
  )
}

export default Navigation
