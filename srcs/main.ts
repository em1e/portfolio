import './particles'
import { renderSkills } from './skills'
import { projects } from "./content/projects"
import type { Project } from "./content/projects"
import type { Experience } from "./content/experience"
import { experiences } from "./content/experience"
import { education } from "./content/education"
import type { Education } from "./content/education"
import { tech } from "./content/technologies"
import { blogs } from "./content/blogs";
import { certifications } from "./content/certifications";
import type { Certification } from "./content/certifications"
import type { Blog } from "./content/blogs";

let projctListElement: HTMLDivElement | null = null
let experienceListElement: HTMLDivElement | null = null
let educationListElement: HTMLDivElement | null = null
let certificationListElement: HTMLDivElement | null = null
let projectTemplateElement: HTMLTemplateElement | null = null
let delay = 50

document.addEventListener('DOMContentLoaded', () => {
    console.log('[main] DOMContentLoaded handler running')
    projctListElement = document.getElementById('project-list')! as HTMLDivElement
    experienceListElement = document.getElementById('experience-cards')! as HTMLDivElement
    educationListElement = document.getElementById('education-list')! as HTMLDivElement
    certificationListElement = document.getElementById('certification-cards')! as HTMLDivElement
    projectTemplateElement = document.getElementById('card-template')! as HTMLTemplateElement

    projects.forEach(addProject)
    console.log(`[main] projects.length = ${projects.length}`)
    experiences.forEach(addExperience)
    console.log(`[main] experiences.length = ${experiences.length}`)
    education.slice(0, 3).forEach(addEducation)
    console.log(`[main] educationToShow = ${Math.min(3, education.length)}`)
    certifications.forEach(addCertification)
    console.log(`[main] certifications.length = ${certifications.length}`)
    blogs.forEach(addBlog)
    console.log(`[main] blogs.length = ${blogs.length}`)

    renderSkills()

    setupHeaderNav()

    projectTemplateElement!.remove()
})

function setupHeaderNav() {
    const header = document.querySelector('.header') as HTMLDivElement | null
    if (!header) return

    const nav = document.createElement('nav')
    nav.className = 'nav'

    const links = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#project-list' },
        { name: 'Blog', href: '#blog-list' }
    ]

    links.forEach(l => {
        const a = document.createElement('a')
        a.textContent = l.name
        a.setAttribute('href', l.href)
        a.className = 'nav-link'
        a.addEventListener('click', (e) => {
            e.preventDefault()
            const el = document.querySelector(l.href)
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        nav.appendChild(a)
    })

    header.appendChild(nav)
}

function addProject(project: Project, index: number) {
    console.debug(`[main] addProject: ${project.id} (index=${index})`)
    const newProject = projectTemplateElement!.cloneNode(true) as HTMLDivElement

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
    projctListElement!.appendChild(newProject)
}

    const blogListElement = document.getElementById('blog-list') as HTMLDivElement | null

    function addBlog(blog: Blog) {
        if (!blogListElement) return
    const newCard = projectTemplateElement!.cloneNode(true) as HTMLDivElement

        const timestampElement = newCard.querySelector('.card-timestamp')! as HTMLDivElement
        const nameElement = newCard.querySelector('.card-title')! as HTMLHeadingElement
        const descriptionElement = newCard.querySelector('.card-description')! as HTMLParagraphElement
        const linkElement = newCard.querySelector('.card-links')! as HTMLAnchorElement

        timestampElement.textContent = blog.date
        nameElement.textContent = blog.title
        descriptionElement.textContent = blog.description

        if (blog.url) {
            const a = document.createElement('a')
            a.className = 'card-link'
            a.setAttribute('href', blog.url)
            a.setAttribute('target', '_blank')
            a.setAttribute('rel', 'noopener noreferrer')
            const btn = document.createElement('button')
            btn.textContent = 'Read'
            a.appendChild(btn)
            linkElement.appendChild(a)
        } else {
            const note = document.createElement('p')
            note.textContent = 'No link'
            note.className = 'note'
            linkElement.appendChild(note)
        }

        if (blog.image) {
            const img = document.createElement('img')
            img.setAttribute('src', blog.image)
            img.setAttribute('alt', blog.title)
            img.style.width = '100%'
            img.style.borderRadius = '6px'
            img.style.marginBottom = '0.5rem'
            const header = newCard.querySelector('.card-header')!
            header.insertBefore(img, header.firstChild)
        }

    }

function addExperience(experience: Experience, index: number) {
    const newExp = projectTemplateElement!.cloneNode(true) as HTMLDivElement

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

    experienceListElement!.appendChild(newExp)
}

function addEducation(ed: Education, index: number) {
    if (!educationListElement) return
    const newCard = projectTemplateElement!.cloneNode(true) as HTMLDivElement

    const timestampElement = newCard.querySelector('.card-timestamp')! as HTMLDivElement
    const nameElement = newCard.querySelector('.card-title')! as HTMLHeadingElement
    const descriptionElement = newCard.querySelector('.card-description')! as HTMLParagraphElement
    const linkElement = newCard.querySelector('.card-links')! as HTMLDivElement
    const languageElement = newCard.querySelector('.card-langs')! as HTMLDivElement
    const headerEl = newCard.querySelector('.card-header')! as HTMLDivElement

    const formatYYYYMM = (dateStr?: string) => {
        if (!dateStr) return undefined
        const d = new Date(dateStr)
        if (isNaN(d.getTime())) return dateStr
        const yyyy = d.getFullYear()
        const mm = String(d.getMonth() + 1).padStart(2, '0')
        return `${mm}/${yyyy}`
    }

    const start = formatYYYYMM(ed.startDate) || ''
    const end = formatYYYYMM(ed.endDate) || ''
    const range = ed.ongoing ? `${start} - current` : (end ? `${start} - ${end}` : start)

    timestampElement.textContent = range
    nameElement.textContent = ed.major

    const schoolEl = document.createElement('h3')
    schoolEl.className = 'card-role'
    schoolEl.textContent = ed.school
    headerEl.insertBefore(schoolEl, descriptionElement)

    descriptionElement.textContent = ed.description || ''

    if (ed.url && ed.url.length > 0) {
        const a = document.createElement('a')
        a.className = 'card-link'
        a.setAttribute('href', ed.url)
        a.setAttribute('target', '_blank')
        a.setAttribute('rel', 'noopener noreferrer')
        const btn = document.createElement('button')
        btn.textContent = 'Read more'
        a.appendChild(btn)
        linkElement.appendChild(a)
    } else {
        const note = document.createElement('p')
        note.textContent = 'No links available'
        note.className = 'note'
        linkElement.appendChild(note)
    }

    if (ed.technologies && ed.technologies.length > 0) {
        ed.technologies.forEach(langName => {
            const lang = tech[langName]
            if (!lang) return
            const langElement = document.createElement('img')
            langElement.setAttribute('src', `https://cdn.simpleicons.org/${lang.icon}`)
            langElement.setAttribute('alt', lang.name)
            languageElement.appendChild(langElement)
        })
    }

    newCard.removeAttribute('id')
    newCard.style.animation = `fadeIn 0.5s ease ${index * delay}ms forwards`
    newCard.classList.add('education-card')
    educationListElement.appendChild(newCard)
}

function addCertification(cert: Certification, index: number) {
    if (!certificationListElement) return
    const newCard = projectTemplateElement!.cloneNode(true) as HTMLDivElement

    const timestampElement = newCard.querySelector('.card-timestamp')! as HTMLDivElement
    const nameElement = newCard.querySelector('.card-title')! as HTMLHeadingElement
    const descriptionElement = newCard.querySelector('.card-description')! as HTMLParagraphElement
    const linkElement = newCard.querySelector('.card-links')! as HTMLDivElement
    const languageElement = newCard.querySelector('.card-langs')! as HTMLDivElement
    const headerEl = newCard.querySelector('.card-header')! as HTMLDivElement

    timestampElement.textContent = cert.Date || ''
    nameElement.textContent = cert.certificate

    const issuerEl = document.createElement('p')
    issuerEl.className = 'card-role'
    issuerEl.textContent = cert.given_by
    headerEl.insertBefore(issuerEl, descriptionElement)

    descriptionElement.textContent = cert.description || ''

    const contentWrapper = document.createElement('div')
    contentWrapper.className = 'certcard-content'

    const footerEl = newCard.querySelector('.card-footer')! as HTMLDivElement
    newCard.removeChild(headerEl)
    newCard.removeChild(footerEl)
    contentWrapper.appendChild(headerEl)
    contentWrapper.appendChild(footerEl)

    if (timestampElement && timestampElement.parentElement === newCard) {
        newCard.removeChild(timestampElement)
        contentWrapper.insertBefore(timestampElement, contentWrapper.firstChild)
    }

    newCard.appendChild(contentWrapper)

    if (cert.link && cert.link.length > 0) {
        const a = document.createElement('a')
        a.className = 'card-link'
        a.setAttribute('href', cert.link)
        a.setAttribute('target', '_blank')
        a.setAttribute('rel', 'noopener noreferrer')
        const btn = document.createElement('button')
        btn.textContent = 'View Certificate'
        a.appendChild(btn)
        linkElement.appendChild(a)
    } else {
        const note = document.createElement('p')
        note.textContent = 'No link available'
        note.className = 'note'
        linkElement.appendChild(note)
    }

    if (cert.technologies && cert.technologies.length > 0) {
        cert.technologies.forEach(langName => {
            const lang = tech[langName as keyof typeof tech]
            if (!lang) return
            const langElement = document.createElement('img')
            langElement.setAttribute('src', `https://cdn.simpleicons.org/${lang.icon}`)
            langElement.setAttribute('alt', lang.name)
            languageElement.appendChild(langElement)
        })
    }

    newCard.removeAttribute('id')
    newCard.style.animation = `fadeIn 0.5s ease ${index * delay}ms forwards`
    newCard.classList.add('certification-card')
    certificationListElement.appendChild(newCard)
}
