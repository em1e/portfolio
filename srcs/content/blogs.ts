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
