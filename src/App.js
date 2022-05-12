import React from 'react'
//import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Header from './Header'

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const User = () => <div>User</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <Header></Header>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="user" element={<User></User>}></Route>
            </Routes>
          </Router>
        </main>
      </header>
    </div>
  )
}

export default App
