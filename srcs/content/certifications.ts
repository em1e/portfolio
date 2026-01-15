import type { technologies } from "./technologies";
import { tech } from "./technologies";

const delay = 50

export const certifications: Certification[] = [
	{
		id: "project",
		certificate: "Google Project Management: Professional Certificate",
		given_by: "Google via Coursera",
		Date: "2024-10",
		isshowed: true,
		description: "A professional certificate program that equips learners with essential project management skills, including project planning, execution, and leadership.",
		link: ""
	},
	{
		id: "web",
		certificate: "The Complete Web Developer in 2023: Zero to Mastery",
		given_by: "Zero to Mastery",
		Date: "2023-08",
		isshowed: true,
		description: "A comprehensive course covering full-stack web development, including HTML, CSS, JavaScript, React, Node.js, and more, aimed at taking learners from beginner to job-ready developer.",
		technologies: ['html', 'css', 'js', 'react', 'node', 'postgresql', 'git'],
		link: ""
	},
	{
		id: "python",
		certificate: "Complete Python Developer in 2023: Zero to Mastery",
		given_by: "Zero to Mastery",
		Date: "2023-09",
		isshowed: true,
		description: "An all-encompassing Python programming course that guides learners through the fundamentals to advanced topics, including web development, data analysis, and automation using Python.",
		technologies: ['python', 'git'],
		link: ""
	},
	{
		id: "test",
		certificate: "test test test test",
		given_by: "aaaaaa",
		Date: "2023-09",
		isshowed: false,
		description: "test test test test test",
		technologies: ['python', 'git'],
		link: ""
	},
	{
		id: "test",
		certificate: "test test test test",
		given_by: "aaaaaa",
		Date: "2023-09",
		isshowed: false,
		description: "test test test test test",
		technologies: ['python', 'git'],
		link: ""
	},
	{
		id: "test",
		certificate: "test test test test",
		given_by: "aaaaaa",
		Date: "2023-09",
		isshowed: false,
		description: "test test test test test",
		technologies: ['python', 'git'],
		link: ""
	},
	{
		id: "test",
		certificate: "test test test test",
		given_by: "aaaaaa",
		Date: "2023-09",
		isshowed: false,
		description: "test test test test test",
		technologies: ['python', 'git'],
		link: ""
	},
	{
		id: "test",
		certificate: "test test test test",
		given_by: "aaaaaa",
		Date: "2023-09",
		isshowed: false,
		description: "test test test test test",
		technologies: ['python', 'git'],
		link: ""
	}
]

export interface Certification {
	id: string,
	certificate: string,
	given_by: string,
	Date: string,
	isshowed?: boolean,
	description?: string,
	technologies?: technologies[],
	link: string,
}

export function renderCertificatesPageContent() {
	const app = document.getElementById('app') as HTMLDivElement | null
	if (!app) return

	app.innerHTML = renderCertificatesPage()
	const certificationListElement = document.getElementById('certification-cards')! as HTMLDivElement
	const projectTemplateElement = document.getElementById('card-template')! as HTMLTemplateElement
	certifications.forEach((cert, index) => addCertification(cert, index, certificationListElement, projectTemplateElement, tech, delay))

	projectTemplateElement.remove()
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

export function addCertification(cert: Certification, index: number, certificationListElement: HTMLDivElement, projectTemplateElement: HTMLTemplateElement, tech: any, delay: number) {
    const newCard = projectTemplateElement.cloneNode(true) as HTMLDivElement

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