import React from 'react';

export const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1+ years of development</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>
        <h3 className="about__title">CodeWars</h3>
        <span className="about__subtitle">450+ Kata, rank 5kyu</span>
      </div>
    </div>
  );
}
