export default function Portfolio() {
    return (
        <div className='container'>
                <h2 className='fw-semibold'>Portfolio</h2>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-4 mb-3 mb-sm-0'>
                        <div className='card'>
                            <div className='card-body'>
                                <img
                                    className='card-img-top mb-2 object-fit-cover'
                                    src='/Rove-Curious.png'
                                    alt='A screenshot of the home page for the Rove Curious web application.'
                                />
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
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 mb-3 mb-sm-0'>
                        <div className='card'>
                            <div className='card-body'>
                                <img
                                    className='card-img-top mb-2 object-fit-cover '
                                    src='/Sad-Dads-Concert-Tracker.png'
                                    alt='A screenshot of the home page for the Sad Dads concert tracking web application.'
                                />
                                <h5 className='card-title'>Sad Dads</h5>
                                <p className='card-subtitle text-muted mb-2'>
                                    Node.js, Express.js, MongoDB, Mongoose
                                </p>
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
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 mb-3 mb-sm-0'>
                        <div className='card'>
                            <div className='card-body'>
                                <img
                                    className='card-img-top mb-2 object-fit-cover '
                                    src='/DALL-E-Dazzle-Home.png'
                                    alt='A screenshot of the home page for the DALL-E-Dazzle web application.'
                                />
                                <h5 className='card-title'>DALL-E-Dazzle</h5>
                                <p className='card-subtitle text-muted mb-2'>
                                    MongoDB, Express.js, React, Node.js
                                </p>
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
    )
}
