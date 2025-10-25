import type { technologies } from "./technologies";

export const projects: Project[] = [
    {
        id: 'youtubetrends',
        name: 'YoutubeTrends',
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
        description: 'Software that transforms the tedious process of manually writing configuration files into a visual, error-free experience.',
        technologies: ['ts', 'docker', 'html', 'css', 'json', 'md', 'git'],
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
        description: 'Simple one page web application for playing pong, with user authentication, tournaments, game settings and multiplayer functionality.',
        technologies: ['python', 'docker', 'js', 'html', 'css', 'json', 'git'],
        date: '2025-02-03',
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
        id: 'survive',
        name: 'Survive',
        description: '2D space survival game made with C++ and SFML, where the player must fight alien ships to survive as long as possible. This was my submission for the Supercell Coding Challenge 2024.',
        technologies: ['cpp', 'cmake', 'sfml', 'git'],
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
        id: 'minishell',
        name: 'Minishell',
        description: 'Minishell is a recreation of bash, designed to help you understand how command-line interpreters work.',
        technologies: ['c', 'sh', 'git'],
        date: '2024-09-19',
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
        name: 'so-long',
        description: 'Simple 2D game written in C using the MinilibX library, where the player controls a character to collect items and reach the exit while avoiding enemies.',
        technologies: ['c', 'git'],
        date: '2024-03-22',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/em1e/solong'
            }
        ],
        hidden: false
    }
]

export interface Project {
    id: string,
    name: string,
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