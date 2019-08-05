import * as React from "react";

import Skill from "./Skill"

import "./PersonalSkills.scss"

export const PersonalSkills = () => (
  <div className="PersonalSkills">
    <Skill className="hard-working" title="Hard-Working" icon="fa-dumbbell" description="I am characterized for going over the top in each work I do, always giving my best!" />
    <Skill className="efficient" title="Efficient" icon="fa-chart-line" description="I always keep an agile development, taking the least time I can without loosing quality in code." />
    <Skill className="avant-grade" title="Avant-Grade" icon="fa-drafting-compass" description="The most important skill a programmer must have is always keeping up with the latest technologies and frameworks." />
    <Skill className="passionate" title="Passionate" icon="fa-heart" description="I have a great Passion to build fast, Efficient and maintainable solutions writing clean comprehensive code." />
    <Skill className="cooperative" title="Cooperative" icon="fa-hands-helping" description="More heads are better than one, and I have a facility for socializing, integrating and interacting with others." />
  </div>
)