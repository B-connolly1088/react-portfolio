import React from 'react';
// import CardTemplate from '../CardTemplate';
// import myResume from '../../images/resume.pdf'
import { Document } from 'react-pdf'


export default function Resume() {
  // const resume = {
  //   src: "#",
  //   deployed: myResume
  // }
  return (
    <div>
      <h1>Resume</h1>
      {/* <CardTemplate project = {resume} /> */}
      <Document file="./resume.pdf" />
    </div>
  );
}
