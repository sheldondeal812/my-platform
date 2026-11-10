// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import profileImage from './assets/GameIcon.png'

type ReportKind = "bug" | "feature";

type Report = {
  id: string
  text: string
  kind: ReportKind
}


function App() {

const sampleReport: Report = {
  id: "1",
  text: "Navigation link is broken",
  kind: "bug",
}


  return(
    <main className="intro">
      <h1>Sheldon Deal </h1>
      <h2>Senior Capstone Production Platform Page Test </h2>
      <p>I am a computer science major. I am interested in video game design and going for 
        the game design minor. Outside of my major I like to act, sing, draw, and play board games.
      </p>

      <img 
      src = {profileImage}
      alt = "Profile"
      className = "profile-img"
      />

      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
          <p>
            {sampleReport.text} ({sampleReport.kind})
          </p>
      </section>

      
      </main>

      
  )
}

export default App
