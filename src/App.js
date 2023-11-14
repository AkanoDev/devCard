import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "Advance",
    color: "#0c25e8"
  },
  {
    skill: "JavaScript",
    level: "Beginner",
    color: "#ffff29"
  },
  {
    skill: "Web Design",
    level: "Intermediate",
    color: "#24ff24"
  },
  {
    skill: "Git and Github",
    level: "Beginner",
    color: "#ff3d3d"
  },
  {
    skill: "React",
    level: "Beginner",
    color: "#ADD8E6"
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <img src="./hero/hero.png" alt="hero" />
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <h1>Redick Jake Taal</h1>
      <p>
        Full-stack web developer. When not coding, I like to read Manga's and
        Novels, to play games, or to read some story in programming communities
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="skillset">
      {skills.map((skill) => (
        <Skills skillsObject={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skills({ skillsObject }) {
  return (
    <div className="skill" style={{ backgroundColor: skillsObject.color }}>
      <span>{skillsObject.skill}</span>
      <span>
        {skillsObject.level === "Advance"
          ? "💪"
          : skillsObject.level === "Intermediate"
          ? "👍"
          : "👶"}
      </span>
    </div>
  );
}
