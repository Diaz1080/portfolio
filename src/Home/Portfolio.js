import { Link } from "react-router-dom";
import data from "../Data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <p>To view details about the projects, click on any of the cards</p>
      <div className="row">
        {data.map((projectData, index) => {
          return <Project {...projectData} index={index} key={index} />;
        })}
      </div>
    </section>
  );
};

const Project = ({ img, title, text, button, index, link }) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card">
        <img src={img} className="card-img-top" alt={`${title} screenshot`} />

        <div className="card-body" id="card">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <Link to={link} className="btn btn-primary">
            {button}
          </Link>
        </div>
      </div>
      {/* <!-- end of card--> */}
    </div>
  );
};

export default Portfolio;
