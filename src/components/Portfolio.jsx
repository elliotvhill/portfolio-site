export default function Portfolio() {
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='fw-semibold'>Portfolio</h2>
                <div className='project-list'>
                    <div className='card-group'>
                        <div className='card'>
                            <img
                                className='card-img-top'
                                src='src/assets/Rove-Curious.png'
                                alt='A screenshot of the home page for the Rove Curious web application.'
                            />
                            <div className='card-body'>
                                <h5 className='card-title'>Rove Curious</h5>
                                <p className='card-subtitle text-muted mb-2'>
                                    Javascript, HTML, CSS
                                </p>
                                <p className='card-text'>
                                    Web app built with vanilla Javascript that
                                    uses RESTful Axios API calls to pull images
                                    from NASA's Mars Curiosity Rover Photos API.
                                </p>
                                <p className='card-text'>
                                    <a
                                        href='https://github.com/elliotvhill/Rove_Curious_NASA_API'
                                        className='card-link'
                                        target='_blank'
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href='https://rove-curious.surge.sh/'
                                        className='card-link'
                                        target='_blank'
                                    >
                                        Live Site
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className='card'>
                            <img
                                className='card-img-top'
                                src='src/assets/Sad-Dads-Concert-Tracker.png'
                                alt='A screenshot of the home page for the Sad Dads concert tracking web application.'
                            />
                            <div className='card-body'>
                                <h5 className='card-title'>Sad Dads</h5>
                                <h6 className='card-subtitle text-muted mb-2'>
                                    Node.js, Express.js, MongoDB, Mongoose
                                </h6>
                                <p className='card-text'>
                                    Full stack app built with a custom API
                                    implemented using MongoDB and Mongoose.The
                                    app allows users to track concerts they've
                                    attended, including artists, venues, and
                                    setlists.
                                </p>
                                <p className='card-text'>
                                    <a
                                        href='https://github.com/elliotvhill/Sad-Dads-Concert-Tracker'
                                        className='card-link'
                                        target='_blank'
                                    >
                                        GitHub
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className='card'>
                            <img
                                className='card-img-top'
                                src='src/assets/DALL-E-Dazzle-Home.png'
                                alt='A screenshot of the home page for the DALL-E-Dazzle web application.'
                            />
                            <div className='card-body'>
                                <h5 className='card-title'>DALL-E-Dazzle</h5>
                                <h6 className='card-subtitle text-muted mb-2'>
                                    MongoDB, Express.js, React, Node.js
                                </h6>
                                <p className='card-text'>
                                    Full stack MERN app built with OpenAI's
                                    DALL-E API that generates images based on
                                    text prompts.
                                </p>
                                <p className='card-text'>
                                    <a
                                        href='https://github.com/Adrienx/DALL-E-Dazzle'
                                        className='card-link'
                                        target='_blank'
                                    >
                                        GitHub
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='projects-exp mt-5'>
                <h2 className='exp infolight fw-semibold'>Professional Experience</h2>
                <h4 className='exp  font-infolight'>
                    <a
                        href='https://drive.google.com/file/d/11pyFg53ZnBl6lnqDZ8tqCpadwMTsvMpP/view?usp=sharing'
                        target='_blank'
                    >
                        Click here to download my resume.
                    </a>
                </h4>
                <div className='exp-list'>
                    <div className='exp exp-professional'>
                        <div className='exp-indeed'>
                            <div className='accordion' id='accordionExample'>
                                <div className='accordion-item'>
                                    <h2
                                        className='accordion-header'
                                        id='headingOne'
                                    >
                                        <button
                                            className='accordion-button'
                                            type='button'
                                            data-bs-toggle='collapse'
                                            data-bs-target='#collapseOne'
                                            aria-expanded='true'
                                            aria-controls='collapseOne'
                                        >
                                            Indeed.com
                                        </button>
                                    </h2>
                                    <div
                                        id='collapseOne'
                                        className='accordion-collapse collapse show'
                                        aria-labelledby='headingOne'
                                        data-bs-parent='#accordionExample'
                                    >
                                        <div className='accordion-body'>
                                            <ul className='list-unstyled'>
                                                <li className='exp fw-semibold'>
                                                    Enterprise Client Success
                                                    Representative
                                                </li>
                                                <li className='exp-date fw-medium'>
                                                    January 2019 - April 2023
                                                </li>
                                                <li>
                                                    Drove revenue retention and
                                                    expansion for Sales
                                                    organization by managing a
                                                    portfolio of over 90
                                                    enterprise clients,
                                                    resulting in consistent
                                                    quarterly revenue generation
                                                    of over $1.8 million.
                                                </li>
                                                <li>
                                                    Achieved client objectives
                                                    and showcased return on
                                                    investment (ROI) via monthly
                                                    executive business reviews,
                                                    leading to an 88% client
                                                    retention rate and enhanced
                                                    product adoption.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
