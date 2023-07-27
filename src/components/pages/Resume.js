import React from 'react';
import CardTemplate from '../CardTemplate';
import myResume from '../../images/resume.pdf'


export default function Resume() {
  const resume = {
    src: "#",
    deployed: myResume
  }
  return (
    <div>
      <h1>Resume</h1>
      <CardTemplate project = {resume} />
    </div>
  );
}
