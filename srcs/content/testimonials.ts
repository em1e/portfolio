export const testimonials: Testimonial[] = [
    {
        id: 't1',
        quote: ["I had the pleasure of managing, and working alongside, Vilja for over a year. During this time, she consistently demonstrated exceptional problem-solving skills and tackled any challenge that came her way with confidence and creativity.", "Vilja has an impressive ability to break down complex issues into actionable steps, all whilst keeping system efficiency and user experience in mind. She's proactive, reliable and detail-oriented, approaching every project with professionalism and enthusiasm.", "I would highly recommend Vilja to any organisation looking for not only a developer, but an invaluable team member, whose genuine passion for the industry helps drive success to any project."],
        name: 'Ryan Cockburn',
        role: 'Software Engineer at Pixelite Digital',
        avatar: 'assets/ryan.png',
        linkedin: 'https://www.linkedin.com/in/ryan-cockburn/',
        github: 'https://github.com/ryanrco'
    }
]

export interface Testimonial {
    id: string
    quote: string[]
    name: string
    role?: string
    avatar?: string
    github?: string
    linkedin?: string
    portfolio?: string
}

export function renderTestimonials(): void {
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

    showSlide(0)
    resetTimer()
}
