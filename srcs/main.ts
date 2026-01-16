import './particles'

import { tech } from "./content/technologies";
import { education, addEducation } from "./content/education";
import { certifications, addCertification, renderCertificatesPageContent } from "./content/certifications";
import { renderSkills, renderSkillsPageContent } from './skills';
import { projects, addProject, renderProjectsPageContent } from "./content/projects";
import { renderTestimonials } from "./content/testimonials"
import { experiences, addExperience, renderExperiencePageContent } from "./content/experience";
// import { blogs, addBlog } from "./content/blogs";

let projctListElement: HTMLDivElement | null = null
let experienceListElement: HTMLDivElement | null = null
let educationListElement: HTMLDivElement | null = null
let certificationListElement: HTMLDivElement | null = null
// let blogListElement: HTMLDivElement | null = null
let projectTemplateElement: HTMLTemplateElement | null = null
let delay = 50

document.addEventListener('DOMContentLoaded', () => {
    console.log('[main] DOMContentLoaded handler running')

    const app = document.getElementById('app') as HTMLDivElement | null
    if (!app) return

    const pathname = window.location.pathname || ''
    
    if (pathname.includes('/certificates')) {
        renderCertificatesPageContent()
        setupHeaderNav()
    } else if (pathname.includes('/projects')) {
        renderProjectsPageContent()
        setupHeaderNav()
    } else if (pathname.includes('/skills')) {
        renderSkillsPageContent()
        setupHeaderNav()
    } else if (pathname.includes('/experience')) {
        renderExperiencePageContent()
        setupHeaderNav()
    } else {
        renderMainPageContent()
    }
})

// RENDER MAIN PAGE ---------------------------------------------

function renderMainPageContent() {
    const app = document.getElementById('app') as HTMLDivElement | null
    if (!app) return

    app.innerHTML = renderMainPage()

    projctListElement = document.getElementById('project-list')! as HTMLDivElement
    experienceListElement = document.getElementById('experience-cards')! as HTMLDivElement
    educationListElement = document.getElementById('education-list')! as HTMLDivElement
    // blogListElement = document.getElementById('blog-list')! as HTMLDivElement
    certificationListElement = document.getElementById('certification-cards')! as HTMLDivElement
    projectTemplateElement = document.getElementById('card-template')! as HTMLTemplateElement

    projects.filter(p => p.isshowed).forEach((p, i) => addProject(p, i, projctListElement!, projectTemplateElement!, tech, delay))
    experiences.forEach((e, i) => addExperience(e, i, experienceListElement!, projectTemplateElement!, tech, delay))
    education.slice(0, 3).forEach((e, i) => addEducation(e, i, educationListElement!, projectTemplateElement!, tech, delay))
    certifications.filter(c => c.isshowed).forEach((c, i) => addCertification(c, i, certificationListElement!, projectTemplateElement!, tech, delay))
    // blogs.forEach((b, i) => addBlog(b, i, blogListElement!, projectTemplateElement!, delay))

    setupHeaderNav()
    renderSkills()
    renderTestimonials()
    contactForm()

    projectTemplateElement!.remove()
}


// NAV ---------------------------------------------

export function setupHeaderNav() {
    const navbar = document.querySelector('.navbar') as HTMLDivElement | null
    if (!navbar) return

    const nav = document.createElement('nav')
    nav.className = 'nav'

    const pathname = window.location.pathname || ''
    const isMainPage = !pathname.includes('/certificates') && !pathname.includes('/projects') && !pathname.includes('/skills') && !pathname.includes('/experience')

    const links = [
        { name: 'Home', href: isMainPage ? '#' : '/portfolio/' },
        { name: 'Certificates', href: isMainPage ? '#certification' : '/portfolio/certificates' },
        { name: 'Skills', href: isMainPage ? '#skills' : '/portfolio/skills' },
        { name: 'Projects', href: isMainPage ? '#projects' : '/portfolio/projects' },
        { name: 'Experience', href: isMainPage ? '#experience' : '/portfolio/experience' }
    ]

    links.forEach(l => {
        const a = document.createElement('a')
        a.textContent = l.name
        a.setAttribute('href', l.href)
        a.className = 'nav-link'

        if (isMainPage && l.href.startsWith('#')) {
            a.addEventListener('click', (e) => {
                e.preventDefault()
                if (l.href === '#' || l.href === '#top') {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    return
                }
                const el = document.querySelector(l.href)
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            })
        }
        
        nav.appendChild(a)
    })

    navbar.appendChild(nav)
}

// CONTACT ---------------------------------------------

export function contactForm(): void {
    const form = document.getElementById('contact-form') as HTMLFormElement | null
    if (!form) return

    const submitBtn = document.getElementById('contact-submit') as HTMLButtonElement | null
    const submitText = document.getElementById('submit-text') as HTMLElement | null
    const sendIcon = document.querySelector('.send-icon') as HTMLElement | null
    const successIcon = document.querySelector('.success-icon') as HTMLElement | null

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (submitBtn) submitBtn.disabled = true

        if (sendIcon) {
            sendIcon.style.animation = 'fly 0.8s linear both'
            sendIcon.style.position = 'absolute'
        }

        if (successIcon) {
            successIcon.style.display = 'inline-flex'
            setTimeout(() => { successIcon.style.opacity = '1' }, 50)
        }

        if (submitText) submitText.textContent = 'Sent'
    })
}

function renderMainPage(): string {
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
          <div class="lcr--content" style="font-weight: 900; background-color: var(--text-background); border-radius: 10px; padding: 20px;">
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
