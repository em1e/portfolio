export const testimonials: Testimonial[] = [
    {
        id: 't1',
        quote: ["I had the pleasure of managing, and working alongside, Vilja for over a year. During this time, she consistently demonstrated exceptional problem-solving skills and tackled any challenge that came her way with confidence and creativity.", "Vilja has an impressive ability to break down complex issues into actionable steps, all whilst keeping system efficiency and user experience in mind. She's proactive, reliable and detail-oriented, approaching every project with professionalism and enthusiasm.", "I would highly recommend Vilja to any organisation looking for not only a developer, but an invaluable team member, whose genuine passion for the industry helps drive success to any project."],
        name: 'Ryan Cockburn',
        role: 'Software Engineer at Learning Curve Group',
        avatar: 'assets/ryan.png',
        linkedin: 'https://www.linkedin.com/in/ryan-cockburn/',
        github: 'https://github.com/ryanrco'
    },
    {
        id: 't2',
        quote: [],
        name: 'Priya Sharma',
        role: 'Frontend Developer',
        avatar: 'assets/review2.jpg'
    },
    {
        id: 't3',
        quote: [],
        name: 'Marco Silva',
        role: 'Full-stack Developer',
        avatar: 'assets/review3.jpg'
    }
]

export interface Testimonial {
    id: string
    quote: string[]
    name: string
    role?: string
    avatar?: string
    github?: string
    linkedin?: string
    portfolio?: string
}