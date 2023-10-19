export default function Projects() {
    return (
        <div className='projects-main'>
            <div className='projects'>
                <h2 className='projects main-brand'>Previous projects</h2>
                <div className='project-list'>
                    <div className='project project1'>
                        <h3 className='project1'>
                            Rove Curious
                        </h3>
                            <h4><a href="https://github.com/elliotvhill/Rove_Curious_NASA_API" target="_blank" className="main-brand">GitHub</a> | <a href="https://rove-curious.surge.sh/" target="_blank" className="main-brand">Live site</a> - Javascript, HTML, CSS</h4>
                        <p>
                            Browser-based web app built with vanilla Javascript
                            that uses RESTful Axios API calls to pull images
                            from NASA's Mars Curiosity Rover Photos API.
                        </p>
                        <p>
                            As a first project, the goal was to use DOM
                            manipulation, event listeners, and API calls to
                            craft an app using minimal HTML.
                        </p>
                    </div>
                    <div className='project project2'>
                        <h3 className='project2'>
                            Cell Phone Hackathon
                        </h3>
                        <h4><a href="https://github.com/elliotvhill/Cell-Phone-Hackathon" target="_blank" className="main-brand">GitHub</a> | <a href="#" target="_blank" className="main-brand">Live site <span className="wip">(in progress!)</span></a> - Javascript, Express.js, MongoDB, Mongoose</h4>
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
                        <h3 className='project3'>
                            Sad Dads Concert Tracker
                        </h3>
                        <h4><a href="https://github.com/elliotvhill/Sad-Dads-Concert-Tracker" target="_blank" className="main-brand">GitHub</a> | <a href="#" target="_blank" className="main-brand">Live site <span className="wip">(in progress!)</span></a> - Node.js, Express.js, MongoDB, Mongoose</h4>
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
                        <h3 className='project4'>
                            DALL-E-Dazzle
                        </h3>
                        <h4><a href="https://github.com/Adrienx/DALL-E-Dazzle" target="_blank" className="main-brand">GitHub</a> | <a href="#" target="_blank" className="main-brand">Live site <span className="wip">(in progress!)</span></a> - MongoDB,
                            Express.js, React, Node.js, Cloudinary</h4>
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
                    </div>
                </div>
            </div>
            <div className='projects-exp'>
                <h2 className='exp main-brand'>Experience</h2>
                <h4 className="exp  light-accent"><a href="https://drive.google.com/file/d/11pyFg53ZnBl6lnqDZ8tqCpadwMTsvMpP/view?usp=sharing" target="_blank">Click here to download my resume.</a></h4>
                <div className='exp-list'>
                    <div className="exp exp-professional">
                        <h3 className='exp'>Professional</h3>
                        <div className="exp-indeed">
                            <h4 className='exp'>Indeed.com</h4>
                            <ul>
                                <li className="exp">Enterprise Client Success Representative</li>
                                <li className="exp-date">January 2019 - April 2023</li>
                                <li>Drove revenue retention and expansion for Sales organization by managing a portfolio of over 90 enterprise clients, resulting in consistent quarterly revenue generation of over $1.8 million.</li>
                                <li>Achieved client objectives and showcased return on investment (ROI) via monthly executive business reviews, leading to an 88% client retention rate and enhanced product adoption.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}