import { projects } from "./content/projects"
import type { Project } from "./content/projects"
import type { Experience } from "./content/experience"
import { experiences } from "./content/experience"
import { tech } from "./content/technologies"

const projctListElement = document.getElementById('project-list')! as HTMLDivElement
const experienceListElement = document.getElementById('experience-list')! as HTMLDivElement
const projectTemplateElement = document.getElementById('card-template')! as HTMLTemplateElement
const delay = 50

projects.forEach(addProject)
experiences.forEach(addExperience)

function addProject(project: Project, index: number) {
    const newProject = projectTemplateElement.cloneNode(true) as HTMLDivElement

    const timestampElement = newProject.querySelector('.card-timestamp')! as HTMLDivElement
    const nameElement = newProject.querySelector('.card-title')! as HTMLHeadingElement
    const descriptionElement = newProject.querySelector('.card-description')! as HTMLParagraphElement
    const linkElement = newProject.querySelector('.card-links')! as HTMLAnchorElement
    const languageElement = newProject.querySelector('.card-langs')! as HTMLDivElement

    timestampElement.textContent = project.date
    nameElement.textContent = project.name
    descriptionElement.textContent = project.description

    if (project.links.length > 0) {
        project.links.forEach(link => {
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
        note.textContent = 'No links available :('
        note.className = 'note'
        linkElement.appendChild(note)
    }

    project.technologies.forEach(langName => {
        const lang = tech[langName]
        if (!lang) return
        const langElement = document.createElement('img')
        langElement.setAttribute('src', `https://cdn.simpleicons.org/${lang.icon}`)
        langElement.setAttribute('alt', lang.name)
        languageElement.appendChild(langElement)
    })

    newProject.removeAttribute('id')
    newProject.style.animation = `fadeIn 0.5s ease ${index * delay}ms forwards`
    if (project.hidden) newProject.style.display = 'none'
    projctListElement.appendChild(newProject)
}

function addExperience(experience: Experience, index: number) {
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

    timestampElement.textContent = range
    nameElement.textContent = `${experience.company}`

    const roleElement = document.createElement('p')
    roleElement.className = 'card-role'
    roleElement.textContent = experience.title
    headerEl.insertBefore(roleElement, descriptionElement)

    descriptionElement.textContent = experience.company_description

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
        note.textContent = 'No links available :('
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

projectTemplateElement.remove()
