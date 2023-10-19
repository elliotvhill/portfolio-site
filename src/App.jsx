import { useState } from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./App.css"

function App() {
    const currentYear = new Date().getFullYear()
    const footerDate = () => {
        let copyright = document.querySelector("#copy-year")
        copyright.innerHTML = `<p class="small">&copy; ${currentYear} Elliot Hill</p>`
      }
    return (
        <>
            <div className='app'>
                <div className='app-header'>
                    <Header />
                </div>
                <div className='app-nav'>
                    <Nav />
                </div>
                <div className='app-main'>
                    <Main />
                </div>
                <div className='app-footer'>
                    {/* <Footer>
                        <div>{footerDate()}</div>
                    </Footer> */}
                </div>
            </div>
        </>
    )
}

export default App
