import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
