export default function About() {
    return (
        <div className='container'>
            <h2 className='about-head main-brand'>About</h2>
            <div className='container d-flex flex-row'>
                <div className='container w-50 d-flex flex-column my-auto'>
                    <p>
                        Elliot Hill is a full stack software developer
                        relocating to San Francisco, CA in January 2024 to
                        pursue his engineering career goals (and to be closer to
                        his new niece!).
                    </p>
                    <p>
                        With a broad background in customer service, political
                        science, and diversity and inclusion advocacy, he
                        approaches projects through a lens of accessibility,
                        equity, and integrity.
                    </p>
                </div>
                <img
                    src='/LI-profile-pic-sq.jpeg'
                    alt='A headshot of Elliot wearing a blue suit and tie with greenery in the background.'
                    className='img-thumbnail object-fit-cover ratio ratio-1x1 w-25 h-25 rounded-circle mx-auto'
                />
            </div>
        </div>
    )
}
