import "./Youtube.scss"

const Aflix = () => {
    return (
        <div className="container-fluid aflix">
      <div className="row">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light p-4">
            <h5 className="text-black h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>

        <nav className="navbar navbar-light bg-light">
          <div className="col">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <span id="youTubeLogo">
              <img src="img-2/yt.png" id="youtube" alt="screenshot"/>
              <span id="text">YouTube</span>
            </span>
          </div>

          <div className="col">
            <form className="d-flex" role="search" id="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div>🔎</div>
            </form>
          </div>
          <div>
            <span className="material-symbols-outlined" id="mic"> mic </span>
          </div>
          <div className="col text-end" id="icons">
            <span className="material-symbols-outlined" id="vid"> videocam </span>
            <span className="material-symbols-outlined" id="not">
              notifications_active
            </span>
            <span className="material-symbols-outlined"> account_circle </span>
          </div>
        </nav>
        {/* <!-- End of nav bar--> */}
      </div>
      {/* <!--End of row--> */}
      <div className="row">
        <div className="col-2">
          <section>
            <div>
              <button id="home" className="d-inline-flex align-items-center">
                <span className="material-symbols-outlined" id="house"> home </span>
                Home
              </button>
            </div>
            <div id="shorts">
              <img src="img-2/shorts.png" id="short" alt="screenshot"/>
              Shorts
            </div>
            <div id="shorts">
              <span className="material-symbols-outlined" id="short">
                subscriptions
              </span>
              Subscriptions
            </div>
            <hr />
          </section>
          {/* <!-- end of first section col-2--> */}
          <section>
            <div id="shorts">
              <span className="material-symbols-outlined" id="short">
                video_library
              </span>
              Library
            </div>
            <div id="shorts">
              <span className="material-symbols-outlined" id="short">
                history
              </span>
              History
            </div>
            <div id="shorts">
              <span className="material-symbols-outlined" id="short">
                smart_display
              </span>
              Your videos
            </div>
            <div id="shorts">
              <span className="material-symbols-outlined" id="short">
                schedule
              </span>
              Watch later
            </div>
            <div id="shorts">
              <span className="material-symbols-outlined" id="short">
                thumb_up
              </span>
              Linked videos
            </div>

            <hr />
          </section>
          {/* <!-- end of second section col-2--> */}

          <section>
            <div>
              <h6>SUBSCRIPTION</h6>
            </div>
            <div id="shorts">
              <img src="img-2/hack.png" id="short" alt="screenshot"/>
              Hack Upstate
            </div>
            <div id="shorts">
              <img src="img-2/freeCodeCamp.png" id="short" alt="screenshot"/>
              freeCodeCamp.O...
            </div>
            <div id="shorts">
              <img src="img-2/trinity.png" id="short" alt="screenshot"/>
              Trinity Media Studio
            </div>
            <div id="shorts">
              <img src="img-2/Jessica.png" id="short" alt="screenshot"/>
              JessicaRenee
            </div>
            <div id="shorts">
              <img src="img-2/w&y.png" id="short" alt="screenshot"/>
              Wisin & Yandel
            </div>
            <div id="shorts">
              <img src="img-2/myGaming.png" id="short" alt="screenshot"/>
              MyGamingFever
            </div>
            <div id="shorts">
              <img src="img-2/Chris.png" id="short" alt="screenshot"/>
              Chris Ramsey
            </div>
            <div id="shorts">
              <span className="material-symbols-outlined" id="short">
                expand_more
              </span>
              Show 1 more
            </div>
            <hr />
          </section>
          {/* <!-- end of third section col-2--> */}
        </div>
        {/* <!-- End of first col-2--> */}

        <div className="col-10">
          <div className="row">
            <div>
              <span id="box-1">All</span>
              <span id="box">CSS</span>
              <span id="box">Databases</span>
              <span id="box">music</span>
              <span id="box">Live</span>
              <span id="box">Mixes</span>
              <span id="box">live</span>
              <span id="box">Lilly Goodman</span>
              <span id="box">Gaming</span>
              <span id="box">Algorithms</span>
              <span id="box">Contemporary Worship music</span>
              <span className="material-symbols-outlined"> navigate_next </span>
            </div>
          </div>
          {/* <!-- end first row col-10 --> */}

          <div className="row" id="content">
            <div className="col">
              <img src="img-2/pic8.png" className="img-fluid" alt="screenshot" />
            </div>
            <div className="col">
              <img src="img-2/pic2.png" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
              <img src="img-2/pic6.png" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
              <img src="img-2/pic5.png" className="img-fluid" alt="screenshot"/>
            </div>
          </div>
          {/* <!-- end of row 2 col-10 --> */}
          <div className="row" id="description">
            <div className="col">
              <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                  <p>Own Orange Autographs!</p>
                  <p>What are you waiting for?</p>
                  <p>Ad • Fantastec</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-2">
                  <img src="img-2/hack.png" id="logo" alt="screenshot"/>
                </div>
                <div className="col-10">
                  <h6>W5D2 C4: Netflix Project P2</h6>
                  <p>Hack Upstate</p>
                  <p>4 views • 10 hours ago</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="col-2">
                  <img src="img-2/ezequiel.png" id="logo" alt="screenshot"/>
                </div>
                <div className="col-10">
                  <h6>el libro de EZEQUIEL</h6>
                  <h6>(AUDIOLIBRO) narrado completo</h6>
                  <p>Vicente Arcila Lopez</p>
                  <p>2 AM views • 1 vear ago</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-2">
                  <img src="img-2/trinity.png" id="logo" alt="screenshot"/>
                </div>
                <div className="col-10">
                  <h6>Derramara & Me Multiplicare</h6>
                  <h6>Felixis Falcon (Sección Acústica)</h6>
                  <p>Trinity Media Studio</p>
                  <p>4.8k views • 2 years ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row" id="content">
            <div className="col">
              <img src="img-2/pic4.png" className="img-fluid" alt="screenshot"/>
            </div>

            <div className="col">
              <img src="img-2/pic3.png" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
              <img src="img-2/pic7.png" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
              <img src="img-2/pic1.png" className="img-fluid" alt="screenshot"/>
            </div>
          </div>
          {/* <!-- end of row 3 col-10 --> */}

          <div className="row" id="description">
            <div className="col">
              <div className="row">
                <div className="col-2">
                  <img src="img-2/adam.png" id="logo" alt="screenshot"/>
                </div>
                <div className="col-10">
                  <h6>EL SEGUNDO ADAM</h6>
                  <p>EDUARDO PADILLA TRUJILLO</p>
                  <p>162 views • 7 hours ago</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-2">
                  <img src="img-2/login.png" id="logo" alt="screenshot"/>
                </div>
                <div className="col-10">
                  <h6>LOGIN FORM DESIGNS</h6>
                  <h6>Animated Login and Registration</h6>
                  <h6>Form in HTML CSS & JavaScript</h6>
                  <p>CodingNepal©</p>
                  <p>83K views • 2 years ago</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-2">
                  <img src="img-2/hack.png" id="logo" alt="screenshot"/>
                </div>
                <div className="col-10">
                  <h6>Careers in Code - Capstone</h6>
                  <h6>Setup with...</h6>
                  <p>Hack Upstate</p>
                  <p>485 views • 3 years ago</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-2">
                  <img src="img-2/dr.png" id="logo" alt="screenshot"/>
                </div>
                <div className="col-10">
                  <h6>9.5 Hour STUDY WITH ME (w/</h6>
                  <h6>music) ft. 25 Min focused..</h6>
                  <p>Dr. Oueen's Corner TV</p>
                  <p>237K views • Streamed 3 months ago</p>
                </div>
              </div>
            </div>
          </div>
          <hr id="thick" />
          <section>
            <div>
              <img src="img-2/Short..png" id="logo" alt="screenshot"/>
            </div>
          </section>
        </div>
        {/* <!-- End of col-10--> */}
      </div>
    </div>
    );
};

export default Aflix;