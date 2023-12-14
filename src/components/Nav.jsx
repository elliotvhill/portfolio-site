import { Link } from "react-router-dom"
export default function Nav() {
    // content
    return (
        <div className='nav navbar navbar-expand-lg'>
            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse fw-medium' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link'>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-link'>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-link'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
