import type { technologies } from "./technologies";

export const education: Education[] = [
	{
		id: "kamk",
		major: "Bachelor’s Degree in Information Technology (Data Engineering)",
		school: "Kajaani University of Applied Sciences, Online",
		startDate: "2025-09",
		ongoing: true,
		description: "Studies have focused on Python, Docker, and GitLab, and are meant to be manageable alongside full-time work. The program emphasizes practical, project-based learning and hands-on use of advanced resources.",
		technologies: ['python', 'docker', 'git', 'airflow', 'postgresql', 'md'],
		url: "https://kamk.fi/en/"
	},
	{
		id: "hive",
		major: "Software Development Program",
		school: "Hive Helsinki, Finland",
		startDate: "2023-10",
		endDate: "2025-07",
		description: "Studies focused on C, C++, and Web development, through project-based learning with peer-to-peer collaboration. Gained experience with CI/CD Pipelines, memory management, VMs, IP networking, game development, and more.",
		technologies: ['c', 'cpp', 'html', 'css', 'js', 'python', 'wp', 'docker', 'git', 'linux', 'nginx', 'mariadb', 'md'],
		url: "https://www.hive.fi/"
	},
	{
		id: "nyborg",
		major: "International Baccalaureate Diploma",
		school: "Nyborg Gymnasium, Denmark",
		startDate: "2020-08",
		endDate: "2022-05",
		url: "https://nyborg-gym.dk/en/ib/"
	},
	{
		id: "kallio",
		major: "Upper Secondary Education, Performing Arts",
		school: "Kallion Lukio, Finland",
		startDate: "2019-08",
		endDate: "2020-05",
		url: "https://www.hel.fi/en/childhood-and-education/kallio-upper-secondary-school"
	},
	{
		id: "meilahti",
		major: "Lower Secondary Education, Digital Arts",
		school: "Meilahden Ylläaste, Finland",
		startDate: "2016-08",
		endDate: "2019-05",
		technologies: ['figma', 'blender'],
		url: "https://www.hel.fi/en/childhood-and-education/meilahti-lower-secondary-school"
	}
]

export interface Education {
	id: string,
	major: string,
	school: string,
	startDate: string,
	endDate?: string,
	ongoing?: boolean,
	description?: string,
	technologies?: technologies[],
	url: string
}
