import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
import Home from './Home.jsx'
import Footer from './Footer'

export default function Main() {
    return (
        <div className='main'>
            <div className='routes-container'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <div className='main-landing'>
                <Footer />
            </div>
        </div>
    )
}