import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h2 className="header__title">
            Reliable, efficient delivery <span>Powered by Technology</span>
          </h2>
          <p className="header__text">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="card">
          <section className="card__supervisor">
            <h2 className="card__title">Supervisor</h2>
            <p className="card__text">
              Monitors activity to identify project roadblocks
            </p>
            <img
              className="card__img"
              src="../images/icon-supervisor.svg"
              alt="Icon Supervisor"
            />
          </section>
          <section className="card__team">
            <h2 className="card__title">Team Builder</h2>
            <p className="card__text">
              Scans our talent network to create the optimal team for your
              project
            </p>
            <img
              className="card__img"
              src="../images/icon-team-builder.svg"
              alt="Icon Team Builder"
            />
          </section>
          <section className="card__karma">
            <h2 className="card__title">Karma</h2>
            <p className="card__text">
              Regularly evaluates our talent to ensure quality
            </p>
            <img
              className="card__img"
              src="../images/icon-karma.svg"
              alt="Icon Karma"
            />
          </section>
          <section className="card__calculator">
            <h2 className="card__title">Calculator</h2>
            <p className="card__text">
              Uses data from past projects to provide better delivery estimates
            </p>
            <img
              className="card__img"
              src="../images/icon-calculator.svg"
              alt="Icon calculator"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
