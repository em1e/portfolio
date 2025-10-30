import './particles'

import { tech } from "./content/technologies";
import { education } from "./content/education";
import { certifications } from "./content/certifications";
import { renderSkills } from './skills';
import { projects } from "./content/projects";
import { testimonials } from "./content/testimonials"
import { experiences } from "./content/experience";
import { blogs } from "./content/blogs";

import type { Education } from "./content/education";
import type { Certification } from "./content/certifications";
import type { Project } from "./content/projects";
import type { Experience } from "./content/experience";
import type { Blog } from "./content/blogs";

let projctListElement: HTMLDivElement | null = null
let experienceListElement: HTMLDivElement | null = null
let educationListElement: HTMLDivElement | null = null
let certificationListElement: HTMLDivElement | null = null
let blogListElement: HTMLDivElement | null = null
let projectTemplateElement: HTMLTemplateElement | null = null
let testimonialSliderElement: HTMLDivElement | null = null
let delay = 50

document.addEventListener('DOMContentLoaded', () => {
    console.log('[main] DOMContentLoaded handler running')

    projctListElement = document.getElementById('project-list')! as HTMLDivElement
    experienceListElement = document.getElementById('experience-cards')! as HTMLDivElement
    educationListElement = document.getElementById('education-list')! as HTMLDivElement
    blogListElement = document.getElementById('blog-list')! as HTMLDivElement
    certificationListElement = document.getElementById('certification-cards')! as HTMLDivElement
    projectTemplateElement = document.getElementById('card-template')! as HTMLTemplateElement
    testimonialSliderElement = document.getElementById('testimonials-slider')! as HTMLDivElement

    // runs add functions for each in the arrays
    projects.forEach(addProject)
    experiences.forEach(addExperience)
    education.slice(0, 3).forEach(addEducation)
    certifications.forEach(addCertification)
    blogs.forEach(addBlog)

    // runs set up functions once
    setupHeaderNav()
    renderSkills()
    renderTestimonials()
    contactForm()

    projectTemplateElement!.remove()
})

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

    function addBlog(blog: Blog, index: number) {
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

        newCard.removeAttribute('id')
        newCard.style.animation = `fadeIn 0.5s ease ${index * delay}ms forwards`
        newCard.classList.add('blog-card')
        blogListElement.appendChild(newCard)
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

function renderTestimonials(): void {
    const slider = document.getElementById('testimonials-slider') as HTMLDivElement | null
    const dotsContainer = document.getElementById('testimonials-dots') as HTMLDivElement | null
    const prevBtn = document.querySelector('.prevBtn') as HTMLButtonElement | null
    const nextBtn = document.querySelector('.nextBtn') as HTMLButtonElement | null
    if (!slider || !dotsContainer) return

    slider.innerHTML = ''
    dotsContainer.innerHTML = ''

    testimonials.forEach((t, i) => {
        const slide = document.createElement('div')
        slide.className = 'single--testimony'

        const imgWrap = document.createElement('div')
        imgWrap.className = 'review--img'
        if (t.avatar) {
            const img = document.createElement('img')
            img.setAttribute('src', t.avatar)
            img.setAttribute('alt', t.name)
            imgWrap.appendChild(img)
        }

        const content = document.createElement('div')
        content.className = 'review--content'

        const quote = document.createElement('p')
        t.quote.forEach(q => {
            const para = document.createElement('p')
            para.textContent = q
            quote.appendChild(para)
        })

        const who = document.createElement('h3')
        who.textContent = t.name

        const role = document.createElement('div')
        role.className = 'role'
        role.textContent = t.role || ''

        content.appendChild(quote)
        content.appendChild(who)
        content.appendChild(role)

        // optional contact buttons (render only when fields are provided)
        const contactsContainer = document.createElement('div')
        contactsContainer.className = 'testimonials-contacts'

        if (t.linkedin) {
            const a = document.createElement('a')
            a.className = 'card-link'
            a.setAttribute('href', t.linkedin)
            a.setAttribute('target', '_blank')
            a.setAttribute('rel', 'noopener noreferrer')
            const btn = document.createElement('button')
            btn.textContent = 'LinkedIn'
            a.appendChild(btn)
            contactsContainer.appendChild(a)
        }

        if (t.github) {
            const a = document.createElement('a')
            a.className = 'card-link'
            a.setAttribute('href', t.github)
            a.setAttribute('target', '_blank')
            a.setAttribute('rel', 'noopener noreferrer')
            const btn = document.createElement('button')
            btn.textContent = 'GitHub'
            a.appendChild(btn)
            contactsContainer.appendChild(a)
        }

        if (t.portfolio) {
            const a = document.createElement('a')
            a.className = 'card-link'
            a.setAttribute('href', t.portfolio)
            a.setAttribute('target', '_blank')
            a.setAttribute('rel', 'noopener noreferrer')
            const btn = document.createElement('button')
            btn.textContent = 'Portfolio'
            a.appendChild(btn)
            contactsContainer.appendChild(a)
        }

        if (contactsContainer.children.length > 0) content.appendChild(contactsContainer)

        slide.appendChild(imgWrap)
        slide.appendChild(content)

        slide.style.display = 'none'

        slider.appendChild(slide)

        const dot = document.createElement('button')
        dot.setAttribute('aria-label', `Show testimonial ${i + 1}`)
        if (i === 0) dot.classList.add('active')
        dot.addEventListener('click', () => showSlide(i))
        dotsContainer.appendChild(dot)
    })

    let current = 0
    let timer: number | undefined = undefined

    function showSlide(idx: number) {
    const slides = Array.from(slider!.children) as HTMLDivElement[]
        slides.forEach((s, i) => {
            s.style.display = i === idx ? 'flex' : 'none'
        })
    const dots = Array.from(dotsContainer!.children) as HTMLButtonElement[]
        dots.forEach((d, i) => d.classList.toggle('active', i === idx))
        current = idx
        resetTimer()
    }

    function prev() { showSlide((current - 1 + testimonials.length) % testimonials.length) }
    function next() { showSlide((current + 1) % testimonials.length) }

    if (prevBtn) prevBtn.addEventListener('click', prev)
    if (nextBtn) nextBtn.addEventListener('click', next)

    function resetTimer() {
        if (timer) window.clearInterval(timer)
        timer = window.setInterval(() => { next() }, 6000)
    }

    // start
    showSlide(0)
    resetTimer()
}
