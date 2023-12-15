export default function Portfolio() {
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='fw-semibold'>Portfolio</h2>
                <div className='project-list'>
                    <div className='card-group mt-5'>
                        <div className='card border-primary w-25'>
                            <img
                                className='card-img-top'
                                src='src/assets/Rove-Curious.png'
                                alt='A screenshot of the home page for the Rove Curious web application.'
                            />
                            <div className='card-body'>
                                <h4 className='card-title'>Rove Curious</h4>
                                <h6 className="card-subtitle">Javascript, HTML, CSS</h6>
                                <p className='card-text'>
                                    Web app built with vanilla Javascript that uses RESTful Axios API calls to pull images from NASA's Mars Curiosity Rover Photos API.
                                </p>
                                <a href="https://github.com/elliotvhill/Rove_Curious_NASA_API" className="card-link" target="_blank">GitHub</a>
                                <a href="https://rove-curious.surge.sh/" className="card-link" target="_blank">Live Site</a>
                            </div>
                        </div>
                        <div className='card border-primary w-25'>
                            <img
                                className='card-img-top'
                                src='src/assets/Sad-Dads-Concert-Tracker.png'
                                alt='A screenshot of the home page for the Sad Dads concert tracking web application.'
                            />
                            <div className='card-body'>
                                <h4 className='card-title'>Sad Dads</h4>
                                <h6 className='card-subtitle'>Node.js, Express.js, MongoDB, Mongoose</h6>
                                <p className='card-text'>
                                    Full stack app built with a custom API implemented using MongoDB and Mongoose.The app allows users to track concerts they've attended, including artists, venues, and setlists.
                                </p>
                                <a href="https://github.com/elliotvhill/Sad-Dads-Concert-Tracker" className="card-link" target="_blank">GitHub</a>
                            </div>
                        </div>
                        <div className='card border-primary w-25'>
                            <img className='card-img-top' src='src/assets/DALL-E-Dazzle-Home.png' alt='A screenshot of the home page for the DALL-E-Dazzle web application.' />
                            <div className='card-body'>
                                <h4 className='card-title'>DALL-E-Dazzle</h4>
                                <h6 className='card-subtitle'>MongoDB, Express.js, React, Node.js</h6>
                                <p className='card-text'>
                                    Full stack MERN app built with OpenAI's DALL-E API that generates images based on text prompts.
                                </p>
                                <a href="https://github.com/Adrienx/DALL-E-Dazzle" className="card-link" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className='project project1'>
                        <h3 className='project1 fw-medium mt-5'>
                            Rove Curious
                        </h3>
                        <h4>
                            <a href='https://github.com/elliotvhill/Rove_Curious_NASA_API' target='_blank' className='infolight'>GitHub</a>{" "}|{" "}<a href='https://rove-curious.surge.sh/' target='_blank' className='infolight'> Live site</a>{" "}- Javascript, HTML, CSS
                        </h4>
                        <p>
                            Browser-based web app built with vanilla Javascript that uses RESTful Axios API calls to pull images from NASA's Mars Curiosity Rover Photos API.
                        </p>
                        <p>
                            As a first project, the goal was to use DOM manipulation, event listeners, and API calls to craft an app using minimal HTML.
                        </p>
                    </div>
                    <div className='project project2'>
                        <h3 className='project2 fw-medium'>
                            Cell Phone Hackathon
                        </h3>
                        <h4>
                            <a
                                href='https://github.com/elliotvhill/Cell-Phone-Hackathon'
                                target='_blank'
                                className='infolight'
                            >
                                GitHub
                            </a>{" "}
                            |{" "}
                            <a href='#' target='_blank' className='infolight'>
                                Live site{" "}
                                <span className='wip'>(in progress!)</span>
                            </a>{" "}
                            - Javascript, Express.js, MongoDB, Mongoose
                        </h4>
                        <p>
                            Developed a full stack web app in a two-day sprint
                            on a team of four developers that takes user input
                            and dynamically updates to showcase product
                            information.
                        </p>
                        <p>
                            Gathered JSON data and built a custom API using
                            Mongoose schemas to seed the data.
                        </p>
                    </div>
                    <div className='project project3'>
                        <h3 className='project3 fw-medium'>
                            Sad Dads Concert Tracker
                        </h3>
                        <h4>
                            <a
                                href='https://github.com/elliotvhill/Sad-Dads-Concert-Tracker'
                                target='_blank'
                                className='infolight'
                            >
                                GitHub
                            </a>{" "}
                            |{" "}
                            <a href='#' target='_blank' className='infolight'>
                                Live site{" "}
                                <span className='wip'>(in progress!)</span>
                            </a>{" "}
                            - Node.js, Express.js, MongoDB, Mongoose
                        </h4>
                        <p>
                            Full stack application built with a custom API
                            implemented using MongoDB and Mongoose.
                        </p>
                        <p>
                            The app allows users to track concerts they've
                            attended, including artists, venues, and setlists.
                        </p>
                    </div>
                    <div className='project project4'>
                        <h3 className='project4 fw-medium'>DALL-E-Dazzle</h3>
                        <h4>
                            <a
                                href='https://github.com/Adrienx/DALL-E-Dazzle'
                                target='_blank'
                                className='text-infolight'
                            >
                                GitHub
                            </a>{" "}
                            |{" "}
                            <a
                                href='#'
                                target='_blank'
                                className='text-infolight'
                            >
                                Live site{" "}
                                <span className='wip'>(in progress!)</span>
                            </a>{" "}
                            - MongoDB, Express.js, React, Node.js, Cloudinary
                        </h4>
                        <p>
                            Full stack MERN app built with OpenAI's DALL-E API
                            that generates images based on text prompts.
                        </p>
                        <p>
                            With full create, read, update, delete (CRUD)
                            operations hitting all RESTful API calls.
                        </p>
                        <p>
                            Images can be uploaded and saved to a gallery hosted
                            on Cloudinary using their RESTful upload image API.
                        </p>
                    </div> */}
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
