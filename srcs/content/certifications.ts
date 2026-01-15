import type { technologies } from "./technologies";

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