document.addEventListener('DOMContentLoaded', () => {
    console.log('[particles] DOMContentLoaded handler running')
    const canvas = document.getElementById('background') as HTMLCanvasElement | null;
    if (!canvas) {
        console.warn('[particles] canvas not found, aborting particle init')
        return
    }
    const ctx = canvas.getContext('2d')!
    ctx.imageSmoothingEnabled = false;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];

    const mouse = {
        x: 0,
        y: 0,
        down: false
    };

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    window.addEventListener('mousedown', () => {
        mouse.down = true;
    });

    window.addEventListener('mouseup', () => {
        mouse.down = false;
    });

    class Particle {
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;

        constructor() {
            // canvas is non-null here because we early-return if it's not found
            this.x = Math.random() * (canvas!.width);
            this.y = Math.random() * (canvas!.height);
            this.vx = Math.random() * 0.5 - 0.25;
            this.vy = Math.random() * 0.5 - 0.25;
            this.size = Math.random() * 15 + 4;
        }
    }

    // Creates 80 particles on canvas :D
    for (let i = 0; i < 80; i++) {
        particles.push(new Particle());
    }

    function clamp(value: number, min: number, max: number) {
        return Math.min(Math.max(value, min), max);
    }

    function lerp(start: number, end: number, percent: number) {
        return start + (end - start) * percent;
    }

    function calculateGradient(from: string, to: string, percent: number) {
        const color1 = hexToRgb(from);
        const color2 = hexToRgb(to);

        const r = Math.round(lerp(color1.r, color2.r, percent));
        const g = Math.round(lerp(color1.g, color2.g, percent));
        const b = Math.round(lerp(color1.b, color2.b, percent));
        const a = lerp(color1.a, color2.a, percent);

        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    function hexToRgb(hex: string) {
        return {
            r: parseInt(hex.substring(1, 3), 16),
            g: parseInt(hex.substring(3, 5), 16),
            b: parseInt(hex.substring(5, 7), 16),
            a: (hex.length > 7 ? parseInt(hex.substring(7, 9), 16) : 255) / 255
        };
    }

    function update() {
        // canvas is non-null here
        ctx.clearRect(0, 0, canvas!.width, canvas!.height);

        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > canvas!.width) {
                particle.vx *= -1;
            }

            if (particle.y < 0 || particle.y > canvas!.height) {
                particle.vy *= -1;
            }

            const dx = particle.x - mouse.x;
            const dy = particle.y - mouse.y;
            const distance = Math.hypot(dx, dy);

            const directionX = distance === 0 ? 0 : dx / distance;
            const directionY = distance === 0 ? 0 : dy / distance;

            const maxDistance = 500;
            const strength = mouse.down ? 0.05 : 0.02;

            const force = (maxDistance - distance) / maxDistance * strength;

            const forceDirectionX = directionX * force;
            const forceDirectionY = directionY * force;

            if (distance < maxDistance) {
                particle.vx -= forceDirectionX;
                particle.vy -= forceDirectionY;
            }

            const shade = clamp(1 - distance / maxDistance, 0, 1);
            ctx.fillStyle = calculateGradient('#ffffff33', '#F5AF72', shade);
            const s = particle.size;
            ctx.fillRect(Math.round(particle.x - s / 2), Math.round(particle.y - s / 2), s, s);
        });

        requestAnimationFrame(update);
    }

    update();
})

