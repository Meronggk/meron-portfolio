import React from 'react';
import './skills.css';
import { TechSkills } from './TechSkills';


export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical skills</span>

      <div className="skills__container container grid">
        <TechSkills />
      </div>
    </section>
  );
}
