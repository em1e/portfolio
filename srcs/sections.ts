export function renderMainPage(): string {
    return `
    <!-- Particles canvas remains in index.html; main app content inserted here -->

    <div class="landing">
      <div class="landing--container">
        <div class="landing--container-left" style="background-color: var(--a0);">
          <!-- Links -->
          <div class="lcl--content">
            <a href="https://www.linkedin.com/in/em1e/" target="_blank" rel="noreferrer">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="landing--social" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(234, 234, 234);">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
            <a href="https://github.com/em1e" target="_blank" rel="noreferrer">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="landing--social" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(234, 234, 234);">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Pfp -->
        <img src="assets/pfp.png" alt="" class="landing--img">

        <!-- Info -->
        <div class="landing--container-right">
          <div class="lcr--content" style="font-weight: 900; background-color: rgb(30,30,30,0.9); border-radius: 10px; padding: 20px;">
            <h6>Software Developer • Full-Stack Developer • Data Engineer</h6>
            <h1 style="color: #D08159;">Vilja Kettunen</h1>
            <p>
              I'm a passionate software developer specializing in data engineering, full-stack-, and system development. I love creating efficient and user-friendly software solutions that make a difference.
            </p>
            <div class="lcr-buttonContainer">
              <a href="/static/media/resume.bc382d73.pdf" download="resume" target="_blank" rel="noreferrer" class="btn resumeBtn">Download CV</a>
              <a href="/#contacts" class="btn contactBtn">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About, Education, Certifications etc are rendered as sections below -->
    <main id="main-content">
      <section id="about" class="content about">

      <!-- Line (decorative) -->
      <div class="line-styling">
        <br/><br/><br/>
        <div class="style-circle" style="background: var(--pop)"></div>
        <div class="style-circle" style="background: var(--pop)"></div>
        <div class="style-circle" style="background: var(--pop)"></div>

        <div class="style-line" style="background: var(--pop)"></div>

        <div class="style-circle" style="background: var(--pop)"></div>
        <div class="style-circle" style="background: var(--pop)"></div>
        <div class="style-circle" style="background: var(--pop)"></div>
      </div>

      <!-- Text -->
      <div class="about-body">
        <div class="about-description panel">
          <h2>Who am I?</h2>
          <p>
            I'm Vilja, a data engineering student at KAMK and alumni from Hive Helsinki. I enjoy working on projects that challenge me to learn new skills, and push me out of my comfort zone. I have experience in various programming languages and frameworks, including Python, C++, C, JavaScript, TypeScript, React, Node.js, and more - but I'm always eager to expand my knowledge and explore new technologies. I've always loved problem-solving and math, which is what drew me to programming and software development in the first place.
          </p><br/>
          <p>
            In my free time, I love hiking, reading books, cooking, spending time with friends and collaborating on interesting ideas. I also enjoy connecting with like-minded individuals and collaborating on interesting projects.
          <p> <br/>
            Feel free to reach out about any cool opportunities or just to say hi! Hope we can build something amazing together!
          </p>
        </div>
      </div>
    </section>

      <section id="education" class="content education">
        <div class="education-body">
          <div class="education-description">
            <h2>Education</h2>
            <div id="education-list" class="card-list"></div>
          </div>
          <div class="edu-img"><img src="assets/education2.png" alt="Education image"/></div>
        </div>
      </section>

      <section class="content certification" id="certification">
        <div class="certification-body">
          <div class="certification-description">
            <h4 class="panel">“Courage doesn’t always roar...” — Mary Anne Radmacher</h4>
            <div class="certification-img"><img src="assets/certification2.png" alt="Certification image" style="height: 200px; width: 200px; margin-top: 20px;"/></div>
          </div>
          <div class="certification-cards">
            <h2 style="margin-left: 2rem;" class="panel">Certifications</h2>
            <a href="/portfolio/certificates" class="card-link" style="margin-left:1rem;"><button>View All</button></a>
            <div id="certification-cards" class="card-list"></div>
          </div>
        </div>
      </section>

      <section id="skills" class="content skills">
        <h2 style="color: var(--pop)">Skills</h2>
        <p class="panel">NOTE: skills are automatically counted from projects, certificates and experience listed in this portfolio</p>
        <a href="/portfolio/skills" class="card-link" style="margin-left:1rem;"><button>Read More</button></a>
        <div id="skill-cards"></div>
      </section>

      <section id="projects" class="content">
        <h2 style="color: var(--pop)">Projects</h2>
        <a href="/portfolio/projects" class="card-link" style="margin-left:1rem;"><button>View All</button></a>
        <div id="project-list" class="card-list"></div>
      </section>

      <section id="testimonials" class="content testimonials">
        <div class="testimonials--header"><h1>What people say</h1></div>
        <div class="testimonials--body">
          <div id="testimonials-slider" class="testimonials--slider"></div>
          <div class="testimonials-controls">
            <button class="prevBtn" aria-label="Previous testimonial">‹</button>
            <button class="nextBtn" aria-label="Next testimonial">›</button>
          </div>
          <div id="testimonials-dots" class="testimonials-dots"></div>
        </div>
      </section>

      <section id="experience" class="content experience">
        <div class="experience-body">
          <div class="experience-description">
            <h1>Experience</h1>
            <a href="/portfolio/experience" class="card-link" style="margin-left:1rem;"><button>View All</button></a>
            <div class="experience-cards">
              <div id="experience-cards" class="card-list">
                <div id="card-template" class="card" hidden>
                  <div class="card-timestamp"></div>
                  <div class="card-header">
                    <h2 class="card-title"></h2>
                    <p class="card-description"></p>
                    <p class="card-jobdesc"></p>
                  </div>
                  <div class="card-footer">
                    <div class="card-links"></div>
                    <div class="card-langs"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    `
}

export function renderCertificatesPage(): string {
    return `
    <div style="padding:2rem 3rem;">
      <a href="/portfolio/" style="display:inline-block; margin-bottom:1rem; text-decoration:none;">← Back</a>
      <h2>All Certifications</h2>
      <div class="card-list" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; width: 66.67%; margin: 0 auto;">
        <div id="card-template" class="card" hidden style="width: 100%;">
          <div class="card-timestamp"></div>
          <div class="card-header">
            <h2 class="card-title"></h2>
            <p class="card-description"></p>
          </div>
          <div class="card-footer">
            <div class="card-links"></div>
            <div class="card-langs"></div>
          </div>
        </div>
        <div id="certification-cards" class="card-list" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; width: 100%;"></div>
      </div>
    </div>
    `
}

export function renderProjectsPage(): string {
    return `
    <div style="padding:2rem 3rem;">
      <a href="/portfolio/" style="display:inline-block; margin-bottom:1rem; text-decoration:none;">← Back</a>
      <h2>All Projects</h2>
      <div class="card-list" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; width: 66.67%; margin: 0 auto;">
        <div id="card-template" class="card" hidden style="width: 100%;">
          <div class="card-timestamp"></div>
          <div class="card-header">
            <h2 class="card-title"></h2>
            <p class="card-description"></p>
          </div>
          <div class="card-footer">
            <div class="card-links"></div>
            <div class="card-langs"></div>
          </div>
        </div>
        <div id="project-list" class="card-list" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; width: 100%;"></div>
      </div>
    </div>
    `
}

export function renderSkillsPage(): string {
    return `
    <div style="padding:2rem 3rem;">
      <a href="/portfolio/" style="display:inline-block; margin-bottom:1rem; text-decoration:none;">← Back</a>
      <h2>Skills Overview</h2>
      <p class="panel" style="max-width: 66.67%; margin: 1rem auto;">These skills are automatically counted from projects, certificates and experience listed in this portfolio</p>
      <div id="skill-cards" style="width: 80%; margin: 2rem auto;"></div>
    </div>
    `
}

export function renderExperiencePage(): string {
    return `
    <div style="padding:2rem 3rem;">
      <a href="/portfolio/" style="display:inline-block; margin-bottom:1rem; text-decoration:none;">← Back</a>
      <h2>All Experience</h2>
      <div class="card-list" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; width: 66.67%; margin: 0 auto;">
        <div id="card-template" class="card" hidden style="width: 100%;">
          <div class="card-timestamp"></div>
          <div class="card-header">
            <h2 class="card-title"></h2>
            <p class="card-description"></p>
            <p class="card-jobdesc"></p>
          </div>
          <div class="card-footer">
            <div class="card-links"></div>
            <div class="card-langs"></div>
          </div>
        </div>
        <div id="experience-cards" class="card-list" style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; width: 100%;"></div>
      </div>
    </div>
    `
}

export default { renderMainPage, renderCertificatesPage, renderProjectsPage, renderSkillsPage, renderExperiencePage }
