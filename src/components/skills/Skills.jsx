import React from 'react';
import './skills.css';
import { TechSkills } from './TechSkills';
// import { Backend } from './Backend';
// import { Database } from './Database';

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical skills</span>

      <div className="skills__container container grid">
        <TechSkills />
        {/* <Backend />
        <Database /> */}
      </div>
    </section>
  );
}
