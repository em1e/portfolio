import { projects } from "./content/projects"
import { experiences } from "./content/experience"
import { education } from "./content/education"
import { certifications } from "./content/certifications"
import { tech } from "./content/technologies"
import type { technologies as TechKey } from "./content/technologies"

type CountMap = Partial<Record<TechKey, number>>

type Category = 'language' | 'library' | 'tool' | 'data-format'
function getCategory(key: string): Category {
  const def = (tech as any)[key]
  const t = def?.type as string | undefined
  if (t === 'language' || t === 'library' || t === 'tool' || t === 'data-format') return t
  return 'tool'
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

  const skillsSection = document.getElementById('skill-cards')
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
