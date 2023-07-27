import React from "react";
import CardTemplate from "../CardTemplate";
import hotTakes from "../../images/Hot-Takes.png";
import drDrink from "../../images/Dr-Drink.png";

export default function Portfolio() {
  const projects = [
    {
      title: "Hot Takes",
      description: "Fluff",
      github: "https://github.com/B-connolly1088/Hot-Takes",
      deployed: "https://hot-takes-reviews-b29812e3e846.herokuapp.com/",
      src: hotTakes,
    },
    {
      title: "Dr. Drink",
      description: "Fluff",
      github: "https://github.com/B-connolly1088/Dr-Drink",
      deployed: "https://hot-takes-reviews-b29812e3e846.herokuapp.com/",
      src: drDrink,
    },
    {
      title: "Employee Tracker",
      description: "Fluff",
      github: "https://github.com/B-connolly1088/employee-tracker",
      src: drDrink,
    },
    {
      title: "ECommerce Backend",
      description: "Fluff",
      github: "https://github.com/B-connolly1088/ecommerce-backend",
      src: drDrink,
    },
    {
      title: "SocialAPI",
      description: "Fluff",
      github: "https://github.com/B-connolly1088/social-api",
      src: drDrink,
    },
    {
      title: "Dr. Drink",
      description: "Fluff",
      github: "https://github.com/B-connolly1088/Dr-Drink",
      deployed: "https://hot-takes-reviews-b29812e3e846.herokuapp.com/",
      src: drDrink,
    },
  ];
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="row">
        {projects.map((project, i) => (
          <div key={i} className="col-md-4 col-sm-12">
            <CardTemplate project={project} portfolio={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
