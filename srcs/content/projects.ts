import type { technologies } from "./technologies";

export const projects: Project[] = [
    {
        id: 'tetris',
        name: 'Tetris Clone',
        genre: ['game'],
        description: 'A classic Tetris game clone developed in C++ using the SFML library; includes smooth gameplay, scoring system, and level progression.',
        technologies: ['cpp', 'sfml', 'cmake'],
        date: '2025-10-25',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/Tetris'
            }
        ],
        hidden: false
    },
    {
        id: 'jobcord',
        name: 'JobCord',
        genre: ['automation', 'data'],
        description: 'An automated web scraper for job search and application; allowing users to search for jobs, save listings, and track their applications easily.',
        technologies: ['ts', 'python', 'docker', 'postgresql', 'airflow', 'git'],
        date: '2025-10-22',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/JobCord'
            }
        ],
        hidden: false
    },
    {
        id: 'youtubetrends',
        name: 'YoutubeTrends',
        genre: ['automation', 'data'],
        description: 'Automated data pipeline for fetching YouTube trending videos and loading them into a database.',
        technologies: ['python', 'docker', 'postgresql', 'airflow', 'git'],
        date: '2025-10-14',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/YouTubeTrends'
            }
        ],
        hidden: false
    },
    {
        id: 'easyconfigs',
        name: 'EasyConfigs',
        genre: ['web'],
        description: 'Software that transforms the tedious process of manually writing configuration files into a visual, error-free experience.',
        technologies: ['ts', 'docker', 'json', 'md', 'git'],
        date: '2025-08-09',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/EasyConfigs'
            },
            {
                name: 'Website',
                url: 'https://easyconfigs.com'
            }
        ],
        hidden: false
    },
    {
        id: 'inception',
        name: 'Inception',
        genre: ['other'],
        description: 'Docker-based web server application, comtains wordpress, mariadb, and nginx. Optimized for deployment on a VM.',
        technologies: ['docker', 'nginx', 'mariadb', 'sh', 'git'],
        date: '2025-02-05',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/inception'
            }
        ],
        hidden: false
    },
    {
        id: 'trancendance',
        name: 'Trancendance',
        genre: ['web'],
        description: 'Simple one page web application for playing pong, with user authentication, tournaments, game settings and multiplayer functionality.',
        technologies: ['js', 'json'],
        date: '2025-02-03',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/LucasOpoka/transcendence'
            }
        ],
        hidden: false
    },
    {
        id: 'aidly',
        name: 'Aidly',
        genre: ['web', 'mobile'],
        description: 'Software that connects volunteers with people in need of assistance through a user-friendly platform.',
        technologies: ['flutter', 'dart', 'python', 'docker', 'postgresql'],
        date: '2025-01-02',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/Aidly'
            }
        ],
        hidden: false
    },
    {
        id: 'ft_irc',
        name: 'FT IRC',
        genre: ['other'],
        description: 'IRC (Internet Relay Chat) server written in C++ that supports multiple channels, private messaging, user authentication and more.',
        technologies: ['cpp', 'git'],
        date: '2024-11-18',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/irc'
            }
        ],
        hidden: false
    },
    {
        id: 'survive',
        name: 'Survive',
        genre: ['game'],
        description: '2D space survival game made with C++ and SFML, where the player must fight alien ships to survive as long as possible. This was my submission for the Supercell Coding Challenge 2024.',
        technologies: ['cpp', 'cmake', 'sfml'],
        date: '2024-11-11',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/supercell_coding_challenge'
            }
        ],
        hidden: false
    },
    {
        id: 'cub3d',
        name: 'Cub3D',
        genre: ['game'],
        description: '3D Raycasting game written in C, based on 2d maps and inspired by the classic game Wolfenstein 3D.',
        technologies: ['c', 'git'],
        date: '2024-10-29',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/solong'
            }
        ],
        hidden: false
    },
    {
        id: 'cpp_modules',
        name: 'C++ Modules',
        genre: ['other'],
        description: 'A collection of 10 C++ modules that taught me all the basics of C++ programming, from simple I/O to complex data structures and algorithms.',
        technologies: ['cpp'],
        date: '2024-07-17',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/42_cpp_modules'
            }
        ],
        hidden: false
    },
    {
        id: 'vlinks',
        name: 'vLinks',
        genre: ['other'],
        description: 'A simple minecraft plugin, created to learn the basics of plugin development with the Bukkit API.',
        technologies: ['java'],
        date: '2024-07-04',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/vLinks'
            }
        ],
        hidden: false
    },
    {
        id: 'minishell',
        name: 'Minishell',
        genre: ['other'],
        description: 'Minishell is a recreation of bash, designed to help you understand how command-line interpreters work.',
        technologies: ['c', 'sh'],
        date: '2024-05-25',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/minishell'
            }
        ],
        hidden: false
    },
    {
        id: 'solong',
        name: 'So Long',
        genre: ['game'],
        description: 'Simple 2D game written in C using the MinilibX library, where the player controls a character to collect items and reach the exit while avoiding enemies.',
        technologies: ['c'],
        date: '2024-03-22',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/solong'
            }
        ],
        hidden: false
    },
    {
        id: '3d_sphere',
        name: '3D Sphere',
        genre: ['web'],
        description: 'Interactive 3D sphere created with JavaScript and three.js.',
        technologies: ['js', 'threejs'],
        date: '2022-12-27',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/3d-rgb-sphere'
            },
            {
                name: 'Website',
                url: 'https://rbgsphere.netlify.app/'
            }
        ],
        hidden: false
    }
]

export interface Project {
    id: string,
    name: string,
    genre: string[] | 'web' | 'mobile' | 'web-mobile' | 'game' | 'other' | 'automation' | 'data',
    description: string,
    technologies: technologies[],
    date: string,
    links: ProjectLink[],
    hidden?: boolean
}

export interface ProjectLink {
    name: string,
    url: string
}