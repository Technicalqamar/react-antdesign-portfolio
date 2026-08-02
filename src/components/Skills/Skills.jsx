import { Card, Progress, Tag } from 'antd';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaFire } from 'react-icons/fa';
import './Skills.css';

const skillList = [
  {
    name: 'HTML',
    icon: <FaHtml5 className="skill-icon html-icon" />,
    percent: 100,
    tags: ['Frontend', 'UI'],
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt className="skill-icon css-icon" />,
    percent: 90,
    tags: ['Frontend', 'UI'],
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare className="skill-icon js-icon" />,
    percent: 85,
    tags: ['Frontend'],
  },
  {
    name: 'React',
    icon: <FaReact className="skill-icon react-icon" />,
    percent: 70,
    tags: ['Frontend', 'UI'],
  },
  {
    name: 'Git & GitHub',
    icon: <FaGitAlt className="skill-icon git-icon" />,
    percent: 95,
    tags: ['Version Control'],
  },
  {
    name: 'Firebase',
    icon: <FaFire className="skill-icon firebase-icon" />,
    percent: 70,
    tags: ['Database', 'Backend'],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-heading">My Skills</h2>
        <p className="skills-intro">
          I have experience working with a variety of modern web technologies.
          Below is an overview of my core technical skills and their proficiency levels.
        </p>

        <div className="skills-grid">
          {skillList.map((skill) => (
            <Card key={skill.name} className="skill-card" hoverable>
              <div className="skill-card-content">
                {skill.icon}
                <h3 className="skill-name">{skill.name}</h3>
                <Progress
                  percent={skill.percent}
                  strokeColor="#1890ff"
                  railColor="#e8e8e8"
                  showInfo={false}
                  className="skill-progress"
                />
                <div className="skill-tags">
                  {skill.tags.map((tag) => (
                    <Tag key={tag} color="blue">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
