import { Link } from 'react-router-dom'
export default function Nav() {
    // content
    return (
        <div className="nav">
            <Link to='/' className='nav-link main-brand'>Home</Link>
            <Link to='/about' className='nav-link main-brand'>About</Link>
            <Link to='/projects' className='nav-link main-brand'>Projects</Link>
            <Link to='/contact' className='nav-link main-brand'>Contact</Link>
        </div>
    )
}