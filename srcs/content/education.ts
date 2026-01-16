import type { technologies } from "./technologies";

export const education: Education[] = [
	{
		id: "kamk",
		title: "Bachelor’s Degree in Information Technology (Data Engineering)",
		school: "Kajaani University of Applied Sciences, Online",
		startDate: "2025-09",
		ongoing: true,
		description: "Studies have focused on Python, Docker, and GitLab, and I take evening classes so this is meant to be manageable alongside full-time work. The program emphasizes practical, project-based learning and hands-on use of advanced resources.",
		technologies: ['python', 'docker', 'git', 'airflow', 'postgresql', 'md'],
		links: [
			{
			    name: 'Program',
			    url: 'https://kamk.fi/koulutukset/tieto-ja-viestintatekniikan-insinoori-datasta-tekoalyyn-paakaupunkiseutu-monimuoto/'
			}
		]
	},
	{
		id: "hive",
		title: "Software Development Program",
		school: "Hive Helsinki, Finland",
		startDate: "2023-10",
		endDate: "2025-07",
		description: "Studies focused on C, C++, and Web development, through project-based learning with peer-to-peer collaboration. Also gained experience with CI/CD Pipelines, memory management, VMs, IP networking, game development, and more.",
		technologies: ['c', 'cpp', 'html', 'css', 'js', 'wp', 'docker', 'git', 'linux', 'nginx', 'mariadb', 'md'],
		links: [
			{
			    name: 'Website',
			    url: 'https://www.hive.fi/'
			},
			{
			    name: 'Certificate',
			    url: 'https://certificates.hive.fi/57edd765-e0c5-449e-bbca-522ac5c88119'
			}
		]
	},
	{
		id: "nyborg",
		title: "International Baccalaureate Diploma",
		school: "Nyborg Gymnasium, Denmark",
		startDate: "2020-08",
		endDate: "2022-05",
		links: [
			{
			    name: 'Program',
			    url: 'https://nyborg-gym.dk/en/ib/'
			}
		]
	},
	{
		id: "kallio",
		title: "Upper Secondary Education, Performing Arts",
		school: "Kallion Lukio, Finland",
		startDate: "2019-08",
		endDate: "2020-05",
		links: [
			{
			    name: 'Program',
			    url: 'https://www.hel.fi/en/childhood-and-education/kallio-upper-secondary-school'
			}
		]
	},
	{
		id: "meilahti",
		title: "Lower Secondary Education, Digital Arts",
		school: "Meilahden Ylläaste, Finland",
		startDate: "2016-08",
		endDate: "2019-05",
		technologies: ['figma', 'blender'],
		links: [
			{
			    name: 'Program',
			    url: 'https://www.hel.fi/en/childhood-and-education/meilahti-lower-secondary-school'
			}
		]
	}
]

export interface Education {
	id: string,
	title: string,
	school: string,
	startDate: string,
	endDate?: string,
	ongoing?: boolean,
	description?: string,
	technologies?: technologies[],
	links: URLLink[]
}

export interface URLLink {
    name: string,
    url: string
}

// Render function
export function addEducation(ed: Education, index: number, educationListElement: HTMLDivElement, projectTemplateElement: HTMLTemplateElement, tech: any, delay: number) {
    const newCard = projectTemplateElement.cloneNode(true) as HTMLDivElement

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
    nameElement.textContent = ed.title

    const schoolEl = document.createElement('h3')
    schoolEl.className = 'card-role'
    schoolEl.textContent = ed.school
    headerEl.insertBefore(schoolEl, descriptionElement)

    descriptionElement.textContent = ed.description || ''

    if (ed.links && ed.links.length > 0) {
        for (let i = 0; i < ed.links.length; i++) {
            const a = document.createElement('a')
            a.className = 'card-link'
            a.setAttribute('href', ed.links[i].url)
            a.setAttribute('target', '_blank')
            a.setAttribute('rel', 'noopener noreferrer')
            const btn = document.createElement('button')
            btn.textContent = ed.links[i].name
            a.appendChild(btn)
            linkElement.appendChild(a)
        }
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
