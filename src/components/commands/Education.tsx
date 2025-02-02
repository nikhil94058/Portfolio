import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech in Computer Science and Engineering (Data Science)",
    desc: "National Institute of Technology Patna | 2022 ~ 2026 | CGPA: 9.4/10",
  },
  {
    title: "Senior Secondary (Class 12)",
    desc: "BSEB | 2020 ~ 2022 | Percentage: 87.6%",
  },
  {
    title: "Secondary (Class 10)",
    desc: "BSEB | 2018 ~ 2020 | Percentage: 88.2%",
  },
];

export default Education;
