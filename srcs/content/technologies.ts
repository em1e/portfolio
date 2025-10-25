export const tech = {
    c: {
        name: 'C',
        type: 'language',
        icon: 'c'
    },
    cpp: {
        name: 'C++',
        type: 'language',
        icon: 'cplusplus'
    },
    python: {
        name: 'Python',
        type: 'language',
        icon: 'python'
    },
    ts: {
        name: 'TypeScript',
        type: 'language',
        icon: 'typescript'
    },
    js: {
        name: 'JavaScript',
        type: 'language',
        icon: 'javascript'
    },
    html: {
        name: 'HTML',
        type: 'language',
        icon: 'html5'
    },
    css: {
        name: 'CSS',
        type: 'language',
        icon: 'css'
    },
    java: {
        name: 'Java',
        type: 'language',
        icon: 'java'
    },
    docker: {
        name: 'Docker',
        type: 'tool',
        icon: 'docker'
    },
    airflow: {
        name: 'Apache Airflow',
        type: 'tool',
        icon: 'apacheairflow'
    },
    postgresql: {
        name: 'PostgreSQL',
        type: 'tool',
        icon: 'postgresql'
    },
    md: {
        name: 'Markdown',
        type: 'data-format',
        icon: 'markdown'
    },
    json: {
        name: 'JSON',
        type: 'data-format',
        icon: 'json'
    },
    yaml: {
        name: 'YAML',
        type: 'data-format',
        icon: 'yaml'
    },
    sfml: {
        name: 'SFML',
        type: 'library',
        icon: 'sfml'
    },
    cmake: {
        name: 'CMake',
        type: 'tool',
        icon: 'cmake'
    },
    sh: {
        name: 'Shell',
        type: 'language',
        icon: 'shell'
    },
    mariadb: {
        name: 'MariaDB',
        type: 'tool',
        icon: 'mariadb'
    },
    nginx: {
        name: 'NGINX',
        type: 'tool',
        icon: 'nginx'
    },
    wp: {
        name: 'WordPress',
        type: 'library',
        icon: 'wordpress'
    },
    git: {
        name: 'git',
        type: 'tool',
        icon: 'git'
    },
    linux: {
        name: 'Linux',
        type: 'tool',
        icon: 'linux'
    },
    figma: {
        name: 'Figma',
        type: 'tool',
        icon: 'figma'
    },
    blender: {
        name: 'Blender',
        type: 'tool',
        icon: 'blender'
    },
    react: {
        name: 'React',
        type: 'library',
        icon: 'react'
    },
    node: {
        name: 'node.js',
        type: 'library',
        icon: 'nodedotjs'
    },
    flutter: {
        name: 'Flutter',
        type: 'library',
        icon: 'flutter'
    },
    dart: {
        name: 'Dart',
        type: 'language',
        icon: 'dart'
    }
}

// NOTE FOR SELF: when adding a new technology, check link below first:
// https://github.com/simple-icons/simple-icons/blob/master/slugs.md
// if not iconfound, then add a new icon into /assets

export type technologies = keyof typeof tech