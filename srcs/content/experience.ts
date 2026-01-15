import type { technologies } from "./technologies";
import { tech } from "./technologies";

const delay = 50

export const experiences: Experience[] = [
  {
    id: "freelance",
    title: "Software Developer & Project Manager",
    company: "Freelance",
    startDate: "2023-03-06",
    endDate: "2025-10-31",
    company_description: "Worked in long and short term projects, as a developer, QA tester and project manager.",
    work_description: "Clients include: Blocky.so, Gamiffynia, Youthful Impact, Violets",
    technologies: ['java', 'yaml', 'ts', 'wp', 'react', 'docker', 'git', 'python', 'md'],
    links: [
      { name: "Reference", url: "https://www.linkedin.com/in/ryan-cockburn/" },
      { name: "Bocky.so", url: "https://blocky.so/" },
      { name: "YouthfulImpact", url: "https://www.youthfulimpact.org/" },
      { name: "Gamiffynia", url: "https://gamiffynia.me/" }
    ]
  },
  {
    id: "hexagon",
    title: "Event Coordinator",
    company: "Hexagon RY",
    startDate: "2024-01-22",
    endDate: "2025-02-15",
    company_description: "Hive Helsinki student organization.",
    work_description: "Organized events for the student organization.",
    technologies: [],
    links: [
      { name: "Instagram", url: "https://www.instagram.com/hive_hexagon/" }
    ]
  },
  {
    id: "citybox",
    title: "Housekeeper",
    company: "Citybox Helsinki",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    company_description: "Citybox Helsinki is a modern, budget-friendly hotel located in the city center, known for its self-service check-in and eco-friendly practices.",
    work_description: "Maintained cleanliness and orderliness of rooms and common areas, ensuring a comfortable stay for all guests.",
    technologies: [],
    links: [
      { name: "Website", url: "https://cityboxhotels.com/hotels/helsinki/helsinki" },
      { name: "Email", url: "mailto:helsinki@cityboxhotels.com" }
    ]
  },
  {
    id: "haven",
    title: "Waitress",
    company: "Hotel Haven",
    startDate: "2023-12-05",
    endDate: "2024-04-30",
    company_description: "An elegant hotel located in the heart of Helsinki, offering a blend of modern luxury and classic elegance.",
    work_description: "Provided exceptional dining service to guests, ensuring a memorable breakfast experience.",
    technologies: [],
    links: [
      { name: "Website", url: "https://www.hotelhaven.fi/en/" }
    ]
  },
  {
    id: "lasipalatsi",
    title: "Cafe Worker",
    company: "Cafe Lasipalatsi",
    startDate: "2022-09-12",
    endDate: "2023-02-28",
    ongoing: false,
    company_description: "Cafe Lasipalatsi is a popular cafe located in the Lasipalatsi building in Helsinki, known for its cozy atmosphere and delicious pastries.",
    work_description: "Provided excellent customer service, prepared and served food and beverages, and maintained cleanliness in the cafe.",
    technologies: [],
    links: [
      { name: "Website", url: "https://www.raflaamo.fi/en/restaurant/helsinki/cafe-lasipalatsi" }
    ]
  },
  {
    id: "nuortenääni",
    title: "Journalist & photographer",
    company: "Nuorten Ääni-toimitus (hobby)",
    startDate: "2017-09-01",
    endDate: "2020-03-31",
    ongoing: false,
    company_description: "Nuorten Ääni is a youth group based in Helsinki, focusing on topics that young people find important.",
    work_description: "Wrote articles and took photographs, covering various topics relevant to youth culture, issues and interests.",
    technologies: [],
    links: [
      { name: "Website", url: "https://nuorten.hel.fi/nuorisotalot/nuorten-aani/" }
    ]
  }
]

export interface Experience {
  id: string,
  title: string,
  company: string,
  startDate: string,
  endDate?: string,
  ongoing?: boolean,
  company_description: string,
  work_description: string,
  technologies: technologies[],
  links: ExperienceLink[],
}

export interface ExperienceLink {
  name: string,
  url: string
}

export function renderExperiencePageContent() {
    const app = document.getElementById('app') as HTMLDivElement | null
    if (!app) return

    app.innerHTML = renderExperiencePage()
    const experienceListElement = document.getElementById('experience-cards')! as HTMLDivElement
    const projectTemplateElement = document.getElementById('card-template')! as HTMLTemplateElement
    experiences.forEach((exp, index) => addExperience(exp, index, experienceListElement, projectTemplateElement, tech, delay))

    projectTemplateElement.remove()
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

export function addExperience(experience: Experience, index: number, experienceListElement: HTMLDivElement, projectTemplateElement: HTMLTemplateElement, tech: any, delay: number) {
    const newExp = projectTemplateElement.cloneNode(true) as HTMLDivElement

    const timestampElement = newExp.querySelector('.card-timestamp')! as HTMLDivElement
    const nameElement = newExp.querySelector('.card-title')! as HTMLHeadingElement
    const descriptionElement = newExp.querySelector('.card-description')! as HTMLParagraphElement
    const linkElement = newExp.querySelector('.card-links')! as HTMLAnchorElement
    const languageElement = newExp.querySelector('.card-langs')! as HTMLDivElement
    const headerEl = newExp.querySelector('.card-header')! as HTMLDivElement

    const formatYYYYMM = (dateStr?: string) => {
        if (!dateStr) return undefined
        const d = new Date(dateStr)
        if (isNaN(d.getTime())) return dateStr
        const yyyy = d.getFullYear()
        const mm = String(d.getMonth() + 1).padStart(2, '0')
        return `${mm}/${yyyy}`
    }

    const start = formatYYYYMM(experience.startDate) || ''
    const end = formatYYYYMM(experience.endDate) || ''
    const range = experience.ongoing ? `current - ${start}` : (end ? `${start} - ${end}` : start)

    const computeDuration = (startDate?: string, endDate?: string, ongoing?: boolean) => {
        if (!startDate) return ''
        const s = new Date(startDate)
        const e = ongoing ? new Date() : (endDate ? new Date(endDate) : new Date())
        if (isNaN(s.getTime()) || isNaN(e.getTime())) return ''
        let totalMonths = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth())
        if (totalMonths < 0) totalMonths = 0
        const years = Math.floor(totalMonths / 12)
        const months = totalMonths % 12
        const parts: string[] = []
        if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
        if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`)
        if (parts.length === 0) return 'less than a month'
        return parts.join(' ')
    }

    const durationText = experience.ongoing ? 'ongoing' : computeDuration(experience.startDate, experience.endDate, experience.ongoing)

    timestampElement.textContent = durationText ? `${range} • ${durationText}` : range
    nameElement.textContent = `${experience.title}`

    const roleElement = document.createElement('p')
    roleElement.className = 'card-role'
    roleElement.textContent = experience.company
    headerEl.insertBefore(roleElement, descriptionElement)

    descriptionElement.textContent = experience.company_description

    if (experience.work_description && experience.work_description.length > 0) {
        const existingJobDesc = newExp.querySelector('.card-jobdesc') as HTMLParagraphElement | null
        if (existingJobDesc)
            existingJobDesc.textContent = experience.work_description
        else
        {
            const jobDescElement = document.createElement('p')
            jobDescElement.className = 'card-jobdesc'
            jobDescElement.textContent = experience.work_description

            if (descriptionElement && typeof descriptionElement.insertAdjacentElement === 'function')
                descriptionElement.insertAdjacentElement('afterend', jobDescElement)
            else if (headerEl)
                headerEl.appendChild(jobDescElement)
        }
    }

    if (experience.links && experience.links.length > 0) {
        experience.links.forEach(link => {
            const newLink = document.createElement('a')
            newLink.className = 'card-link'
            newLink.setAttribute('href', link.url)
            newLink.setAttribute('target', '_blank')
            newLink.setAttribute('rel', 'noopener noreferrer')

            const buttonElement = document.createElement('button')
            buttonElement.textContent = link.name

            newLink.appendChild(buttonElement)
            linkElement.appendChild(newLink)
        })
    } else {
        const note = document.createElement('p')
        note.textContent = 'No links available :(  '
        note.className = 'note'
        linkElement.appendChild(note)
    }

    if (experience.technologies && experience.technologies.length > 0) {
        experience.technologies.forEach(langName => {
            const lang = tech[langName]
            if (!lang) return
            const langElement = document.createElement('img')
            langElement.setAttribute('src', `https://cdn.simpleicons.org/${lang.icon}`)
            langElement.setAttribute('alt', lang.name)
            languageElement.appendChild(langElement)
        })
    }

    newExp.removeAttribute('id')
    newExp.style.animation = `fadeIn 0.5s ease ${index * delay}ms forwards`

    experienceListElement.appendChild(newExp)
}