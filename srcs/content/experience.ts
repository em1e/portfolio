import type { technologies } from "./technologies";

export const experiences: Experience[] = [
  {
    id: "youtfulimpact",
    title: "Web Developer",
    company: "Youthful Impact",
    startDate: "2023-03-01",
    endDate: "2023-07-31",
    ongoing: false,
    company_description: "Youthful Impact helps youth ages 14–24 build entrepreneurial, digital, and financial skills to create positive change in their communities.",
    work_description: "Worked as a WordPress developer, optimizing website performance, enhancing user experience through SEO and implementing responsive design.",
    technologies: ['wp', 'css'],
    links: [
      { name: "Company Website", url: "https://www.youthfulimpact.org/" }
    ]
  },
  {
    id: "violetsmc",
    title: "Content Manager | Developer",
    company: "VioletsMC",
    startDate: "2023-12-02",
    ongoing: true,
    company_description: "The best community and economy based Minecraft server.",
    work_description: "The most advanced Minecraft Towny server.",
    technologies: ["python", "docker"],
    links: [
      { name: "OpenAI", url: "https://openai.com" }
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