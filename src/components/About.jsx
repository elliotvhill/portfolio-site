export default function About() {
    return (
        <div className='about'>
            <h2 className='about-head main-brand'>About</h2>
            <div className='container w-50'>
                <p>
                    Elliot Hill is a full stack software developer relocating to
                    San Francisco, CA in January 2024 to pursue his engineering
                    career goals (and to be closer to his new niece!)
                </p>
                <p>
                    With a broad background in customer service, political
                    science, and diversity and inclusion advocacy, he approaches
                    projects through a lens of accessibility, equity, and
                    integrity.
                </p>
            </div>
            <div className='container'>
                <img
                    src='src/assets/LI-profile-pic-sq.jpeg'
                    alt='A headshot of Elliot wearing a blue suit and tie with greenery in the background.'
                    className="img-thumbnail rounded-circle w-25"
                />
            </div>
        </div>
    )
}
