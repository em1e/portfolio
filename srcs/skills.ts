import { projects } from "./content/projects"
import { experiences } from "./content/experience"
import { education } from "./content/education"
import { certifications } from "./content/certifications"
import { tech } from "./content/technologies"
import type { technologies as TechKey } from "./content/technologies"

// Skill descriptions and how they're used
const skillDescriptions: Record<string, string> = {
  ts: "TypeScript is my go-to language for type-safe JavaScript development. I use it extensively in frontend projects with React and backend development with Node.js, ensuring code reliability and developer experience.",
  python: "Python is my primary tool for data engineering, automation, and backend development. I've used it for web scraping, data pipeline orchestration with Airflow, and general-purpose scripting.",
  java: "Java has been essential for building robust applications and understanding object-oriented principles. I've used it for plugin development and system-level programming.",
  c: "C taught me low-level programming and memory management. I've used it for game development and system utilities, building performance-critical applications.",
  cpp: "C++ is my choice for performance-critical applications and game development. I've used it with SFML for graphics and for competitive programming challenges.",
  react: "React is my primary frontend framework. I build interactive, component-based UIs with React, leveraging hooks and modern patterns for responsive applications.",
  node: "Node.js enables me to use JavaScript/TypeScript for backend development. I've built REST APIs, server applications, and integrated backend services.",
  docker: "Docker containerizes my applications for consistent deployment across environments. I use it for microservices, data pipelines, and local development environments.",
  postgresql: "PostgreSQL is my relational database of choice. I use it for structured data storage in web applications and data engineering projects.",
  git: "Git is fundamental to my workflow. I use it for version control, collaboration, and maintaining project history across all my projects.",
  html: "HTML is the foundation of web development. I write semantic HTML to ensure accessibility and proper document structure.",
  css: "CSS is essential for styling and creating responsive designs. I use modern CSS features like Grid and Flexbox for layout.",
  js: "JavaScript is versatile and powerful. I use it for both frontend and backend development, building interactive web applications.",
  airflow: "Apache Airflow orchestrates my data pipelines. I've used it to schedule and monitor complex ETL workflows with Python.",
  flutter: "Flutter enables me to build cross-platform mobile applications. I've developed features with Dart for iOS and Android platforms.",
  dart: "Dart is the language behind Flutter. I've used it to build mobile app logic and UI components.",
  md: "Markdown is my documentation language. I use it for project READMEs, technical documentation, and knowledge sharing.",
  json: "JSON is essential for data interchange. I use it extensively in APIs, configuration files, and data storage.",
  sh: "Shell scripting helps me automate tasks and write deployment scripts. I use bash and shell scripts for DevOps tasks.",
  nginx: "Nginx is my reverse proxy and web server of choice. I've configured it for load balancing and serving static content.",
  mariadb: "MariaDB provides reliable SQL database functionality. I've used it in Docker-based environments for data persistence.",
  wp: "WordPress powers content-driven websites. I've configured and customized WordPress for client projects.",
  yaml: "YAML is used for configuration files and IaC. I work with it regularly for Docker Compose, Kubernetes, and other tools.",
  cmake: "CMake is my build system for C++ projects. I've used it to manage compilation and dependencies in game development.",
  sfml: "SFML is a graphics library for C++. I've used it to create 2D games and interactive graphics applications."
}

type CountMap = Partial<Record<TechKey, number>>

type Category = 'language' | 'library' | 'tool' | 'data-format'
function getCategory(key: string): Category {
  const def = (tech as any)[key]
  const t = def?.type as string | undefined
  if (t === 'language' || t === 'library' || t === 'tool' || t === 'data-format') return t
  return 'tool'
}

export function renderSkillsPageContent() {
    const app = document.getElementById('app') as HTMLDivElement | null
    if (!app) return

    app.innerHTML = renderSkillsPage()
    renderSkills()
    initializeSkillDetails()
}


export function renderSkillsPage(): string {
    return `
    <div id="skills" style="padding:2rem 3rem;">
      <a href="/portfolio/" style="display:inline-block; margin-bottom:1rem; text-decoration:none;">← Back</a>
      <h2>Skills Overview</h2>
      <p class="panel" style="max-width: 66.67%; margin: 1rem auto;">These skills are automatically counted from projects, certificates and experience listed in this portfolio</p>
      <div id="skill-cards" style="width: 80%; margin: 2rem auto;"></div>
    </div>
    <div id="skill-detail" class="skill-detail" style="display: none; padding: 2rem 3rem; background: linear-gradient(135deg, rgba(30, 30, 30, 1), rgba(40, 35, 45, 1));">
      <div style="display: flex; gap: 2rem; height: 100%;">
        <!-- Sub navbar for categories -->
        <div class="skill-categories" style="flex: 0 0 250px; border-right: 1px solid rgba(208, 129, 89, 0.3); padding-right: 2rem;">
          <h3 style="margin-top: 0;">Categories</h3>
          <div class="category-nav" style="display: flex; flex-direction: column; gap: 1rem;">
            <button class="category-btn" data-category="language" style="padding: 0.75rem 1rem; background: none; border: none; text-align: left; cursor: pointer; font-size: 1rem; color: inherit; border-bottom: 3px solid transparent; transition: border-color 0.3s; border-bottom-color: var(--pop);">Languages</button>
            <button class="category-btn" data-category="library" style="padding: 0.75rem 1rem; background: none; border: none; text-align: left; cursor: pointer; font-size: 1rem; color: inherit; border-bottom: 3px solid transparent; transition: border-color 0.3s;">Libraries & Frameworks</button>
            <button class="category-btn" data-category="tool" style="padding: 0.75rem 1rem; background: none; border: none; text-align: left; cursor: pointer; font-size: 1rem; color: inherit; border-bottom: 3px solid transparent; transition: border-color 0.3s;">Tools & Platforms</button>
            <button class="category-btn" data-category="data-format" style="padding: 0.75rem 1rem; background: none; border: none; text-align: left; cursor: pointer; font-size: 1rem; color: inherit; border-bottom: 3px solid transparent; transition: border-color 0.3s;">Data Formats</button>
          </div>
        </div>
        
        <!-- Skills list for current category -->
        <div class="skill-sidebar" style="flex: 0 0 200px; border-right: 1px solid rgba(208, 129, 89, 0.3); padding-right: 2rem;">
          <h3 style="margin-top: 0;">Skills</h3>
          <div id="skill-list" class="skill-list" style="display: flex; flex-direction: column; gap: 0.5rem;"></div>
        </div>
        
        <!-- Skill detail content -->
        <div class="skill-content" style="flex: 1; min-width: 0;">
          <div id="skill-display" style="display: none;">
            <h2 id="skill-name"></h2>
            <p id="skill-description" style="font-size: 1.1rem; line-height: 1.6; margin: 1.5rem 0;"></p>
            <h3>Used in:</h3>
            <div id="skill-items" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;"></div>
          </div>
          <div id="skill-empty" style="text-align: center; color: rgba(255, 255, 255, 0.6); padding: 2rem;">
            <p>Select a skill to see details</p>
          </div>
        </div>
      </div>
    </div>
    `
}


export function renderSkills(): void {
  const counts: CountMap = {}

  const addFrom = (arr: Array<{ technologies?: TechKey[] }>) => {
    arr.forEach(item => {
      if (!item.technologies) return
      item.technologies.forEach(t => {
        if (!t) return
        counts[t as TechKey] = ((counts[t as TechKey] || 0) + 1)
      })
    })
  }

  addFrom(projects)
  addFrom(experiences)
  addFrom(education)
  addFrom(certifications)

  const entries = (Object.entries(counts) as Array<[TechKey, number]>).sort((a, b) => b[1] - a[1])
  if (entries.length === 0) return

  const skillsSection = document.getElementById('skills')
  if (!skillsSection) return

  const existing = document.getElementById('skills-list')
  if (existing) existing.remove()

  const grouped: Record<string, Array<[string, number]>> = {
    language: [],
    library: [],
    tool: [],
    'data-format': []
  }

  entries.forEach(e => {
    const key = e[0]
    const cat = getCategory(key as string)
    grouped[cat].push(e as [string, number])
  })

  const wrapper = document.createElement('div')
  wrapper.id = 'skills-list'
  wrapper.className = 'skills-list'
  wrapper.style.display = 'grid'
  wrapper.style.gridTemplateColumns = 'repeat(4, 1fr)'
  wrapper.style.gap = '12px'
  wrapper.style.marginTop = '1rem'

  const maxGlobal = entries[0][1]

  const makeColumn = (title: string, items: Array<[string, number]>) => {
    const col = document.createElement('div')
    col.className = 'skills-column'

    const h = document.createElement('h4')
    h.textContent = title
    h.style.margin = '0 0 0.5rem 0'
    h.style.fontSize = '1rem'
    h.style.fontWeight = '700'
    col.appendChild(h)

    items.forEach(([key, count]) => {
      const techDef = (tech as any)[key]
      const name = techDef?.name || key
      const icon = techDef?.icon || key

      const row = document.createElement('div')
      row.className = 'skills-row'
      row.style.display = 'flex'
      row.style.flexDirection = 'column'
      row.style.gap = '6px'
      row.style.marginBottom = '10px'

      const top = document.createElement('div')
      top.style.display = 'flex'
      top.style.alignItems = 'center'
      top.style.gap = '0.5rem'

      const img = document.createElement('img')
      img.setAttribute('alt', name)
      if (name.toLowerCase() === 'java') 
        img.setAttribute('src', `https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png`)
      else
        img.setAttribute('src', `https://cdn.simpleicons.org/${icon}`)
      img.style.width = '18px'
      img.style.height = '18px'
      img.style.objectFit = 'contain'

      const label = document.createElement('div')
      label.textContent = name
      label.style.fontSize = '0.95rem'
      label.style.fontWeight = '600'

      const badge = document.createElement('div')
      badge.textContent = String(count)
      badge.style.marginLeft = 'auto'
      badge.style.fontSize = '0.85rem'
      badge.style.opacity = '0.9'

      top.appendChild(img)
      top.appendChild(label)
      top.appendChild(badge)

      const barOuter = document.createElement('div')
      barOuter.style.width = '100%'
      barOuter.style.height = '8px'
      barOuter.style.background = 'rgba(0,0,0,0.06)'
      barOuter.style.borderRadius = '6px'

      const pct = Math.round((count / maxGlobal) * 100)
      const barInner = document.createElement('div')
      barInner.style.width = `${pct}%`
      barInner.style.height = '100%'
      barInner.style.background = 'linear-gradient(90deg,var(--a0), var(--pop))'
      barInner.style.borderRadius = '6px'

      barOuter.appendChild(barInner)

      row.appendChild(top)
      row.appendChild(barOuter)
      col.appendChild(row)
    })

    return col
  }

  wrapper.appendChild(makeColumn('Languages', grouped.language))
  wrapper.appendChild(makeColumn('Libraries & Frameworks', grouped.library))
  wrapper.appendChild(makeColumn('Tools & Platforms', grouped.tool))
  wrapper.appendChild(makeColumn('Data formats', grouped['data-format']))

  wrapper.style.gridTemplateColumns = 'repeat(4, 1fr)'
  wrapper.style.width = '100%'

  const heading = skillsSection.querySelector('h2')
  if (heading && heading.parentElement) {
    heading.insertAdjacentElement('afterend', wrapper)
  } else {
    skillsSection.appendChild(wrapper)
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => renderSkills())
} else {
  renderSkills()
}

// SKILL DETAILS SECTION ========================================

interface SkillItem {
  name: string
  type: 'project' | 'experience' | 'education' | 'certification'
  link: string
}

function buildSkillCounts(): Map<string, { count: number; items: SkillItem[] }> {
  const skillCounts = new Map<string, { count: number; items: SkillItem[] }>()

  const addFrom = (arr: Array<{ technologies?: TechKey[]; name?: string; title?: string; certificate?: string; url?: string; github?: string }>, type: SkillItem['type']) => {
    arr.forEach(item => {
      if (!item.technologies) return
      item.technologies.forEach(t => {
        if (!t) return
        if (!skillCounts.has(t as string)) {
          skillCounts.set(t as string, { count: 0, items: [] })
        }
        const skillData = skillCounts.get(t as string)!
        skillData.count++
        skillData.items.push({
          name: item.name || item.title || item.certificate || 'Unknown',
          type,
          link: (item as any).url || (item as any).github || ''
        })
      })
    })
  }

  addFrom(projects as any, 'project')
  addFrom(experiences as any, 'experience')
  addFrom(education as any, 'education')
  addFrom(certifications as any, 'certification')

  return skillCounts
}

function initializeSkillDetails() {
  const skillCounts = buildSkillCounts()
  const skillDetail = document.getElementById('skill-detail') as HTMLDivElement | null
  const skillDisplay = document.getElementById('skill-display') as HTMLDivElement | null
  const skillEmpty = document.getElementById('skill-empty') as HTMLDivElement | null
  const skillName = document.getElementById('skill-name') as HTMLHeadingElement | null
  const skillDescription = document.getElementById('skill-description') as HTMLParagraphElement | null
  const skillItems = document.getElementById('skill-items') as HTMLDivElement | null
  const skillList = document.getElementById('skill-list') as HTMLDivElement | null

  if (!skillDetail || !skillDisplay || !skillEmpty || !skillList) return

  skillDetail.style.display = 'block'
  const grouped: Record<string, Array<[string, number]>> = {
    language: [],
    library: [],
    tool: [],
    'data-format': []
  }

  skillCounts.forEach((data, skillKey) => {
    const cat = getCategory(skillKey)
    grouped[cat].push([skillKey, data.count])
  })

  Object.keys(grouped).forEach(cat => {
    grouped[cat].sort((a, b) => b[1] - a[1])
  })

  const categoryBtns = document.querySelectorAll('.category-btn') as NodeListOf<HTMLButtonElement>
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category') as string
      categoryBtns.forEach(b => {
        b.style.borderBottomColor = 'transparent'
      })
      btn.style.borderBottomColor = 'var(--pop)'
      displaySkillsForCategory(category, grouped)
    })
  })

  displaySkillsForCategory('language', grouped)

  function displaySkillsForCategory(category: string, grouped: Record<string, Array<[string, number]>>) {
    skillList.innerHTML = ''
    const skills = grouped[category] || []
    skills.forEach(([skillKey, count]) => {
      const btn = document.createElement('button')
      btn.style.padding = '0.5rem 1rem'
      btn.style.background = 'rgba(208, 129, 89, 0.2)'
      btn.style.border = 'none'
      btn.style.borderRadius = '4px'
      btn.style.cursor = 'pointer'
      btn.style.fontSize = '0.9rem'
      btn.style.color = 'inherit'
      btn.style.transition = 'background 0.3s'
      btn.textContent = `${(tech as any)[skillKey]?.name || skillKey}`
      btn.addEventListener('mouseenter', () => {
        btn.style.background = 'rgba(208, 129, 89, 0.4)'
      })
      btn.addEventListener('mouseleave', () => {
        btn.style.background = 'rgba(208, 129, 89, 0.2)'
      })
      btn.addEventListener('click', () => displaySkillDetail(skillKey, skillCounts))
      skillList.appendChild(btn)
    })
  }

  function displaySkillDetail(skillKey: string, skillCounts: Map<string, any>) {
    const data = skillCounts.get(skillKey)
    if (!data) return

    if (skillName) skillName.textContent = (tech as any)[skillKey]?.name || skillKey
    if (skillDescription) skillDescription.textContent = skillDescriptions[skillKey as keyof typeof skillDescriptions] || 'No description available'
    if (skillItems) {
      skillItems.innerHTML = ''
      data.items.forEach((item: SkillItem) => {
        const card = document.createElement('div')
        card.style.padding = '1rem'
        card.style.background = 'rgba(0, 0, 0, 0.3)'
        card.style.borderRadius = '6px'
        card.style.borderLeft = '3px solid var(--pop)'
        card.innerHTML = `
          <div style="font-weight: 600; margin-bottom: 0.5rem;">${item.name}</div>
          <div style="font-size: 0.85rem; color: rgba(255, 255, 255, 0.7); margin-bottom: 0.5rem; text-transform: capitalize;">${item.type}</div>
          ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" style="color: var(--pop); text-decoration: none; font-size: 0.9rem;">Learn more →</a>` : ''}
        `
        skillItems.appendChild(card)
      })
    }

    skillEmpty!.style.display = 'none'
    skillDisplay!.style.display = 'block'
  }
}

