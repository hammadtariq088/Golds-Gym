import React from 'react'

const Workout = () => {
  return (
    <section className="classical-workout-area ">
    <div className="container bg-warning">
      <div className="row ">
        <div className="col-12 ">
          <div
            className="classical-workout-wrap bg-img"
            data-bg-img="assets/img/photos/workout.bg2.png"
          >
            <div
              className="column-left bg-img"
              data-bg-img="assets/img/photos/workout.bg1.png"
            //   not working
            >
              <div className="content">
                <h2 className="title">
                  CLASSICAL
                  <br />
                  WORKOUT
                </h2>
                <p>
                  Lorem ipsum dolor amet, consectetur adipiscing elit, sed
                  do eiod tempor incididunt ut labore
                </p>
                <a className="btn-link" href="classes.html">
                  VIEW ClASSES SCHEDULE
                </a>
              </div>
            </div>
            <div
              className="shape-style bg-dark"
            />
            <div className="column-right ">
              <div className="workout-items">
                <div className="workout-item">
                  <div className="thumb">
                    <img src="assets/img/photos/workout1.png" alt="Image" />
                  </div>
                  <div className="content">
                    <h3>01.</h3>
                  </div>
                </div>
                <div className="workout-item">
                  <div className="thumb">
                    <img src="assets/img/photos/workout3.png" alt="Image" />
                  </div>
                  <div className="content">
                    <h3>03.</h3>
                  </div>
                </div>
                <div className="workout-item mb-0 mb-xxs-40">
                  <div className="thumb">
                    <img src="assets/img/photos/workout2.png" alt="Image" />
                  </div>
                  <div className="c">
                    <h3> 02.</h3>
                  </div>
                </div>
                <div className="workout-item mb-0">
                  <div className="thumb">
                    <img src="assets/img/photos/workout4.png" alt="Image" />
                  </div>
                  <div className="content">
                    <h3>04.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Workout