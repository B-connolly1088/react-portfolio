import React from "react";
import CardTemplate from "../CardTemplate";
import hotTakes from "../../images/Hot-Takes.png";
import drDrink from "../../images/Dr-Drink.png";

export default function Portfolio() {
  const projects = [
    {
      title: "Hot Takes",
      description: "Hot Takes is a JS application where useres can go to write amateur reviews of their favorite movies.",
      github: "https://github.com/B-connolly1088/Hot-Takes",
      deployed: "https://hot-takes-reviews-b29812e3e846.herokuapp.com/",
      src: hotTakes,
    },
    {
      title: "Dr. Drink",
      description: "Dr. Drink is a JS application that will help a user with drink recipes for a small business or at home.",
      github: "https://github.com/B-connolly1088/Dr-Drink",
      deployed: "https://hot-takes-reviews-b29812e3e846.herokuapp.com/",
      src: drDrink,
    },
    {
      title: "Employee Tracker",
      description: "This JS application allows businesses to perform HR tasks relating to their business.",
      github: "https://github.com/B-connolly1088/employee-tracker",
      src: drDrink,
    },
    {
      title: "ECommerce Backend",
      description: "This JS application allows an ECommerce business owner to update their stores products.",
      github: "https://github.com/B-connolly1088/ecommerce-backend",
      src: drDrink,
    },
    {
      title: "SocialAPI",
      description: "This JS platform allows users to share thoughts, react to other users thoughts and create a friends list.",
      github: "https://github.com/B-connolly1088/social-api",
      src: drDrink,
    },
    {
      title: "README Generator",
      description: "This JS application allows developers to automatically generate their README for projects.",
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
