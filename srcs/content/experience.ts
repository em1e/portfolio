import type { technologies } from "./technologies";

export const experiences: Experience[] = [
  {
    id: "freelance",
    title: "Software Developer & Project Manager",
    company: "Freelance",
    startDate: "2023-03-06",
    endDate: "2025-10-31",
    company_description: "Worked in long and short term projects, as a developer, QA tester and project manager.",
    work_description: "Clients include: Blocky.so, Gamiffynia, Youthful Impact, Violets",
    technologies: ['java', 'yaml', 'ts', 'wp', 'react', 'docker', 'git', 'python', 'md'],
    links: [
      { name: "Reference", url: "https://www.linkedin.com/in/ryan-cockburn/" },
      { name: "Bocky.so", url: "https://blocky.so/" },
      { name: "YouthfulImpact", url: "https://www.youthfulimpact.org/" },
      { name: "Gamiffynia", url: "https://gamiffynia.me/" }
    ]
  },
  {
    id: "hexagon",
    title: "Event Coordinator",
    company: "Hexagon RY",
    startDate: "2024-01-22",
    endDate: "2025-02-15",
    company_description: "Hive Helsinki student organization.",
    work_description: "Organized events for the student organization.",
    technologies: [],
    links: [
      { name: "Instagram", url: "https://www.instagram.com/hive_hexagon/" }
    ]
  },
  {
    id: "citybox",
    title: "Housekeeper",
    company: "Citybox Helsinki",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    company_description: "Citybox Helsinki is a modern, budget-friendly hotel located in the city center, known for its self-service check-in and eco-friendly practices.",
    work_description: "Maintained cleanliness and orderliness of rooms and common areas, ensuring a comfortable stay for all guests.",
    technologies: [],
    links: [
      { name: "Website", url: "https://cityboxhotels.com/hotels/helsinki/helsinki" },
      { name: "Email", url: "mailto:helsinki@cityboxhotels.com" }
    ]
  },
  {
    id: "haven",
    title: "Waitress",
    company: "Hotel Haven",
    startDate: "2023-12-05",
    endDate: "2024-04-30",
    company_description: "An elegant hotel located in the heart of Helsinki, offering a blend of modern luxury and classic elegance.",
    work_description: "Provided exceptional dining service to guests, ensuring a memorable breakfast experience.",
    technologies: [],
    links: [
      { name: "Website", url: "https://www.hotelhaven.fi/en/" }
    ]
  },
  {
    id: "lasipalatsi",
    title: "Cafe Worker",
    company: "Cafe Lasipalatsi",
    startDate: "2022-09-12",
    endDate: "2023-02-28",
    ongoing: false,
    company_description: "Cafe Lasipalatsi is a popular cafe located in the Lasipalatsi building in Helsinki, known for its cozy atmosphere and delicious pastries.",
    work_description: "Provided excellent customer service, prepared and served food and beverages, and maintained cleanliness in the cafe.",
    technologies: [],
    links: [
      { name: "Website", url: "https://www.raflaamo.fi/en/restaurant/helsinki/cafe-lasipalatsi" }
    ]
  },
  {
    id: "nuortenääni",
    title: "Journalist & photographer",
    company: "Nuorten Ääni-toimitus (hobby)",
    startDate: "2017-09-01",
    endDate: "2020-03-31",
    ongoing: false,
    company_description: "Nuorten Ääni is a youth group based in Helsinki, focusing on topics that young people find important.",
    work_description: "Wrote articles and took photographs, covering various topics relevant to youth culture, issues and interests.",
    technologies: [],
    links: [
      { name: "Website", url: "https://nuorten.hel.fi/nuorisotalot/nuorten-aani/" }
    ]
  }
]

export interface Experience {
  id: string,
  title: string,
  company: string,
  startDate: string,
  endDate?: string,
  ongoing?: boolean,
  company_description: string,
  work_description: string,
  technologies: technologies[],
  links: ExperienceLink[],
}

export interface ExperienceLink {
  name: string,
  url: string
}