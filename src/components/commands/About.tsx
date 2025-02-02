import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Nikhil Kumar Das</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Full-Stack Developer</HighlightAlt>,<br />
        <HighlightAlt>Competitive Programmer</HighlightAlt>, and <br />
        <HighlightAlt>Blockchain Enthusiast</HighlightAlt>.
      </p>
      <p>
        I am passionate about building scalable applications, solving complex
        coding challenges, and exploring innovative technologies like Web3 and
        AI.
      </p>
      <p>
        I have experience working with modern web frameworks, cloud computing,
        and distributed systems. I enjoy collaborating with teams to create
        high-performance applications and continuously improving my skill set.
      </p>
      <p>
        I am a 4-star coder on{" "}
        <a href="https://www.codechef.com/users/nikhil94058">CodeChef</a>, a
        Specialist on{" "}
        <a href="https://codeforces.com/profile/nikhil94058">Codeforces</a>, and
        a Knight on <a href="https://leetcode.com/nikhil94058">LeetCode</a>.
      </p>
      <p>
        When I'm not coding, I love participating in hackathons, writing tech
        blogs, and mentoring aspiring developers in the community.
      </p>
    </AboutWrapper>
  );
};

export default About;
