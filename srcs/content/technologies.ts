export const tech = {
    c: {
        name: 'C',
        icon: 'c'
    },
    cpp: {
        name: 'C++',
        icon: 'cplusplus'
    },
    python: {
        name: 'Python',
        icon: 'python'
    },
    ts: {
        name: 'TypeScript',
        icon: 'typescript'
    },
    js: {
        name: 'JavaScript',
        icon: 'javascript'
    },
    html: {
        name: 'HTML',
        icon: 'html5'
    },
    css: {
        name: 'CSS',
        icon: 'css'
    },
    java: {
        name: 'Java',
        icon: 'java'
    },
    docker: {
        name: 'Docker',
        icon: 'docker'
    },
    airflow: {
        name: 'Apache Airflow',
        icon: 'apacheairflow'
    },
    postgresql: {
        name: 'PostgreSQL',
        icon: 'postgresql'
    },
    md: {
        name: 'Markdown',
        icon: 'markdown'
    },
    json: {
        name: 'JSON',
        icon: 'json'
    },
    yaml: {
        name: 'YAML',
        icon: 'yaml'
    },
    sfml: {
        name: 'SFML',
        icon: 'sfml'
    },
    cmake: {
        name: 'CMake',
        icon: 'cmake'
    },
    sh: {
        name: 'Shell',
        icon: 'shell'
    },
    mariadb: {
        name: 'MariaDB',
        icon: 'mariadb'
    },
    nginx: {
        name: 'NGINX',
        icon: 'nginx'
    },
    wp: {
        name: 'WordPress',
        icon: 'wordpress'
    },
    git: {
        name: 'git',
        icon: 'git'
    },
    linux: {
        name: 'Linux',
        icon: 'linux'
    },
    figma: {
        name: 'Figma',
        icon: 'figma'
    },
    blender: {
        name: 'Blender',
        icon: 'blender'
    },
    react: {
        name: 'React',
        icon: 'react'
    },
    node: {
        name: 'node.js',
        icon: 'nodedotjs'
    },
}

// NOTE FOR SELF: when adding a new technology, check link below first:
// https://github.com/simple-icons/simple-icons/blob/master/slugs.md
// if not found, then add a new icon into /assets

export type technologies = keyof typeof tech