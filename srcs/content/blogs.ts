export const blogs = [
  {
    id: 1,
    title: 'SCRAPING BILLBOARD AND IMDB USING PYTHON SELENIUM',
    description: 'Here we will use Selenium to navigate between web pages, and try to scrape data from them.',
    date: 'Aug 7, 2020',
    image: 'https://1.bp.blogspot.com/-6vZQoWcIZeo/Xvw5ZD5Y53I/AAAAAAAABgI/GH2b5OuMaXAKuigK4diBbeYDW6dD3qVvgCK4BGAsYHg/w400-h225/selenium.jpg',
    url: 'https://hackzism.blogspot.com/2020/07/scraping-billboard-and-imdb-using.html'
  },
  {
    id: 2,
    title: 'CHECK WEATHER FROM TERMINAL USING WTTR.IN',
    description: 'wttr.in is a console-oriented weather forecast service that supports various information representation methods like ANSI-sequences for console HTTP clients, HTML, or PNG.',
    date: 'Aug 11, 2020',
    image: 'https://1.bp.blogspot.com/-OW7jX57tea4/XvnGxuEOslI/AAAAAAAABW0/R8lVT1AXDSwnvE0EGA9Ra49-LDm1ACwDgCK4BGAsYHg/s1216/wttr1.png',
    url: 'https://hackzism.blogspot.com/2020/06/check-weather-from-terminal-using-wttrin.html'
  }
]

export type Blog = {
  id: number
  title: string
  description: string
  date: string
  image?: string
  url?: string
}

export function addBlog(blog: Blog, index: number, blogListElement: HTMLDivElement, projectTemplateElement: HTMLTemplateElement, delay: number) {
    const newCard = projectTemplateElement.cloneNode(true) as HTMLDivElement

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
