// DZIAŁA ROUTER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import React from 'react'
//import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Header from './Header'
import MainSection from './Main'
import GetData from './GetData'

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const User = () => <div>User</div>
const MyApp = () => <div>MyApp</div>
const Shop = () => <div>Shop</div>
const Free = () => <div>Free</div>
const Contact = () => <div>Contact</div>
const Join = () => <div>Join</div>

function App() {
  return (
    <div className="App">
      <MainSection></MainSection>
      <header className="App-header">
        <GetData></GetData>
        <Navigation></Navigation>
        <Header></Header>
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/user" element={<User></User>}></Route>
              <Route path="/myapp" element={<MyApp></MyApp>}></Route>
              <Route path="/shop" element={<Shop></Shop>}></Route>
              <Route path="/free" element={<Free></Free>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
              <Route path="/join" element={<Join></Join>}></Route>
            </Routes>
          </Router>
          
        </main>
      </header>
    </div>
  )
}

export default App
