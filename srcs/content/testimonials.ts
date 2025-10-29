export const testimonials: Testimonial[] = [
    {
        id: 't1',
        quote: "This course changed my career — the content, the pacing and the instructor were top notch.",
        name: 'Alex Johnson',
        role: 'Software Engineer at Acme',
        avatar: 'assets/review1.jpg'
    },
    {
        id: 't2',
        quote: "I landed a job within months. Highly practical and modern curriculum.",
        name: 'Priya Sharma',
        role: 'Frontend Developer',
        avatar: 'assets/review2.jpg'
    },
    {
        id: 't3',
        quote: "Well-structured and motivating. The projects helped me build a strong portfolio.",
        name: 'Marco Silva',
        role: 'Full-stack Developer',
        avatar: 'assets/review3.jpg'
    }
]

export interface Testimonial {
    id: string
    quote: string
    name: string
    role?: string
    avatar?: string
}