import * as React from "react";

interface ISkillProps {
  className: string;
  title: string;
  icon: string;
  description: string;
}

interface ISkillState {}

import "./Skill.scss"

export default class Skill extends React.Component<ISkillProps, ISkillState> {
  render() {
    return (
      <div className={`Skill ${this.props.className}`}>
        <i className={`fas ${this.props.icon} icon`} />
        <h3 className="title">{this.props.title}</h3>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}
