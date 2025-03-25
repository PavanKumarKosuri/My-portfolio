import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header>
    <h1>Pavan Kumar Kosuri</h1>
    <p>AI-Assisted Full-Stack Developer | React.js | Node.js</p>
    <p>
      <a href="https://github.com/PavanKumarKosuri">GitHub</a> |{" "}
      <a href="https://www.linkedin.com/in/pavan-kumar-kosuri">LinkedIn</a>
    </p>
  </header>
);

const About = () => (
  <section>
    <h2>About Me</h2>
    <p>
      Full-Stack Developer with nearly 4 years of experience building secure,
      scalable web applications in React.js and Node.js. Adept at using
      AI-powered coding tools to rapidly prototype solutions, ensure clean code,
      and maintain best practices. Consistently optimized system performance,
      integrated third-party services, and collaborated with cross-functional
      teams to deliver enterprise-grade solutions. Passionate about leveraging
      AI to further drive innovation in Full-Stack development and DevOps
      workflows.
    </p>
  </section>
);

const Skills = () => (
  <section>
    <h2>Technical Skills</h2>
    <ul>
      <li>
        Frontend: JavaScript, React.js, Tailwind CSS, Bootstrap, HTML5, CSS3
      </li>
      <li>
        Backend: Node.js, Express, JWT, WebSockets, Payment Gateway Integrations
        (Razorpay)
      </li>
      <li>
        AI & Automation: Experience using AI coding tools (e.g., GitHub Copilot,
        ChatGPT) for code generation, debugging, and performance optimization
      </li>
      <li>Database: MySQL, Azure Cosmos DB</li>
      <li>DevOps & Cloud: Azure (App Services, CI/CD), Vercel, Netlify</li>
      <li>Security: OWASP Top 10, AES-256, JWT Authentication</li>
      <li>
        Tools & Collaboration: Git, GitHub, Postman, Figma, JIRA, Confluence
      </li>
    </ul>
  </section>
);

const Experience = () => (
  <section>
    <h2>Work Experience</h2>
    <div>
      <h3>Infosys Limited | Hyderabad, India</h3>
      <p>Full-Stack Developer (April 2022 – Present)</p>
      <ul>
        <li>
          Developed highly responsive web interfaces using React.js, ensuring
          optimal performance and enhancing user experience across various
          devices and browsers.
        </li>
        <li>
          Collaborated with the backend team to integrate APIs, implementing
          secure user authentication and session management using JWT, reducing
          security vulnerabilities by 20%.
        </li>
        <li>
          Played a crucial role in implementing OWASP Top 10 security standards
          to mitigate vulnerabilities, particularly focusing on XSS prevention,
          secure API consumption, and authentication/authorization flows.
        </li>
        <li>
          Worked closely with UI/UX teams to translate designs into
          pixel-perfect, user-friendly interfaces, improving the application's
          accessibility and ease of use.
        </li>
        <li>
          Collaborated with QA engineers to conduct front-end testing, utilizing
          tools like Postman, Confluence, and JIRA, and ensured timely bug
          resolution.
        </li>
        <li>
          Worked on Webmatics Online Service and Snapfish e-commerce projects,
          achieving a 15% decrease in page load times via optimized React
          components and lazy loading.
        </li>
      </ul>
    </div>
    <div>
      <h3>Avantel Limited | Visakhapatnam, India</h3>
      <p>Web Developer Apprentice (January 2021 – January 2022)</p>
      <ul>
        <li>
          Enhanced front-end interfaces (navigation bar, menus, etc.) for
          internal applications controlling 5kW UHF and 1kW HF units.
        </li>
        <li>
          Collaborated with the engineering team to ensure the UI was seamlessly
          integrated with backend systems, facilitating easier control and
          monitoring of unit operations.
        </li>
        <li>
          Acted as a mentor to the production team post-R&D phase, reducing
          production issues by 15%.
        </li>
        <li>
          Optimized internal tools, resulting in a 15% increase in task
          completion speed for production teams.
        </li>
      </ul>
    </div>
  </section>
);

const Projects = () => (
  <section>
    <h2>Key AI Assisted Projects</h2>
    <div>
      <h3>
        Corporate Health Management System | Personal Project | (June 2024 – Aug
        2024)
      </h3>
      <ul>
        <li>Role: Full-Stack Developer, AI-Assisted</li>
        <li>
          Overview: Built a full-stack system for corporate medical camps with
          multi-role access (SuperAdmin, HR, User, Phlebo).
        </li>
        <li>
          AI Usage: Employed ChatGPT for rapid UI prototyping, code snippets,
          and debugging.
        </li>
        <li>
          Achievements: OTP-based employee registration and role-based access
          control increased security and streamlined onboarding. Integrated QR
          code generation and dashboards for vendors and managers, boosting
          operational efficiency by 30%.
        </li>
      </ul>
    </div>
    <div>
      <h3>
        Doctor Booking Consultation | Personal Project | (July 2024 – Aug 2024)
      </h3>
      <ul>
        <li>Role: Full-Stack Developer, AI-Assisted</li>
        <li>
          Overview: Medical insurance-based system with Razorpay integration and
          Cosmos DB for real-time ticketing.
        </li>
        <li>
          AI Usage: Employed ChatGPT for rapid UI prototyping, code snippets,
          and debugging.
        </li>
        <li>
          Achievements: Optimized back-end architecture using generative AI
          suggestions, reducing processing time by 15%. Strengthened payment
          flows and real-time updates for improved user satisfaction.
        </li>
      </ul>
    </div>
    <div>
      <h3>
        Corporate Health Management Dashboards | Personal Project | (Aug 2024)
      </h3>
      <ul>
        <li>Role: Full-Stack Developer, AI-Assisted</li>
        <li>
          Overview: Developed dashboards for vendors, clients, and super admins,
          integrated with Razorpay, and added automated Excel report generation.
        </li>
        <li>
          AI Usage: Employed ChatGPT for rapid UI prototyping, code snippets,
          and debugging.
        </li>
        <li>
          Achievements: Automated real-time updates and reporting, improving
          process efficiency by 25%. Used AI-based code reviews to enhance
          maintainability and reduce technical debt.
        </li>
      </ul>
    </div>
  </section>
);

const Education = () => (
  <section>
    <h2>Education</h2>
    <p>
      Bachelor of Technology in Electronics & Communication Engineering | 2020
    </p>
    <p>BITS Vizag (affiliated with JNTU-K) | Visakhapatnam, India</p>
  </section>
);

const Achievements = () => (
  <section>
    <h2>Achievements</h2>
    <ul>
      <li>
        Payment Success Rate: Improved by 15% through Razorpay integration and
        AI-assisted code optimization.
      </li>
      <li>
        API Response Times: Reduced by 20% via efficient backend infrastructure
        suggested by AI-based performance analysis.
      </li>
      <li>
        Team Leadership: Led a team building a multi-role corporate health
        management system, achieving a 30% workflow efficiency increase.
      </li>
    </ul>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 Pavan Kumar Kosuri</p>
  </footer>
);

export default App;
