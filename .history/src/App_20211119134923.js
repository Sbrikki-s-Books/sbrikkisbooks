import React from 'react'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Spotify from './pages/spotify/spotify'
import NavBar from './components/navBar/navBar'
import KingHero from './pages/kingHero/kingHero'
import Stats from './pages/stats/stats'
import Seo from './components/seo/seo'

const App = () => {
    return (
        <Router>
            <Seo
                title="Sbrikki's Books" 
                description="Sbrikki's Books - Book Club"
                keywords="sbrikki, books, sbrikkis, book, club, libro"
            />
            <NavBar />
            <div>
            <Routes>
                <Route exact path="/sbrikkisbooks_official_website" component={ Home } />
                <Route path="/sbrikkisbooks_official_website/spotify" component={ Spotify } />
                <Route path="/sbrikkisbooks_official_website/stats" component={ Stats } />
                <Route path="/sbrikkisbooks_official_website/king" component={ KingHero } />
            </Routes>
            </div>
        </Router>
    )
}

export default App
