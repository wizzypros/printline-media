
import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Logo from '../components/Logo';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
];

const stats = [
    { label: 'Years of Experience', value: '10+', color: 'text-primary' },
    { label: 'Clients Served', value: '500+', color: 'text-accent-green' },
    { label: 'Campaigns Launched', value: '2000+', color: 'text-accent-lightblue' }
];

const philosophies = [
    { icon: 'rocket_launch', title: 'Mission', description: 'To empower businesses with data-driven digital marketing strategies that deliver measurable results and sustainable growth.', color: 'text-accent-blue' },
    { icon: 'visibility', title: 'Vision', description: 'To be the leading digital consultancy in India, recognized for our innovative solutions, strategic excellence, and client-centric approach.', color: 'text-accent-yellow' },
    { icon: 'shield', title: 'Values', description: "Integrity, Partnership, and Innovation. We build trust, foster collaboration, and constantly push the boundaries of what's possible in digital.", color: 'text-accent-green' }
];

const experts = [
    { name: 'Rohan Sharma', role: 'Founder & CEO', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEztgkcOFHMGdA-ipWD7lnqS9UyNslrNr8R0AzciFzBz6bj9ulq18UMVpY8HQ3G8Pw5geN_8Z92-5M-xehr5SWhGGue1apyih14UAG1gltXC0LShkqxYM0wPtuNff9hdg3MshZnmqJYff8roVufA8y7V2zuWHxlak2h6x5vVLV2fk9KJDGjLp983Agq-pIVnAbANT9vST-rnX49h7eBWbckP6Cbz-JtUt-bKTEWUhA-P5q0rB6_TTEm8S8LAf79PohMcNaBwFT2g', color: 'border-accent-blue' },
    { name: 'Priya Singh', role: 'Head of Strategy', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIVkAL80Ep8hH5D_iEO77ZafVYOaiRvT82hUpCg02GxPFwswXJTxxk6L1vobaxsmhs8jbKtFNcy5kSDzL7uQRQuMHxzbgWsoLGu6Hv6SLtNqLxo70fjyjbdvqs4bwUociMzD_NatG3da8yHAAofdWHQHsx8GjjhD669XzDtUBXH8xa2lD73jbqoYGQKW1BNtUUvzxS7oNp-uO7LW-YKuMlKmgcf8FF5M_UISzlfPNvzXgclkrobAPRBke8EUYEzyAuuB2hkB7jEw', color: 'border-accent-yellow' },
    { name: 'Amit Patel', role: 'Lead SEO Specialist', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmmOGry7YDQB8dG2hveyA3D5Hwvpz5XGbuXszYL-ItMbz4DofMtE7yyTxRfR_rLPvRq0Lth8hKfxCM0HEVvlVB7R5wBImkE53lJYvFI7eVzgI4XCNa4kcBB-XrZohEgivXrU6fhUPe8tAGm_Nju-O4FfV6h7WEzkNzfC2I_XRUC8-Q5Tn5D0pyjAO4OZi79T1NZWVld7wWgWzKSjmZRETxvl_asB9MzJ8hSXx9wPZEe0qmsxdEbniCylbHbnv_ZH_1eV0ubVUnQ', color: 'border-accent-green' }
];


const AboutPage: React.FC = () => {
    return (
        <div className="font-display bg-background-light text-text-dark">
            <Header navLinks={navLinks} ctaText="Get In Touch" ctaPath="/contact" />
            <main className="flex flex-1 flex-col items-center">
                <div className="w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">
                        <div className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 text-center animate-fade-in" style={{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.7) 0%, rgba(17, 24, 39, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9Og6tE-lgVL-fwzmc3n-tKkIOvaBD_jjwhQZ9_UBFV2quDFa38LI5-6TNWBABbqZrQL2MRkiM3AOKLjt05P4lfup7w0hJiazF7SILn77pZLMcpcW_cU460OavZ1eIr0jiSdz5JYe8U3e3PlssRY8LGfrW-I6vQmayV92w-9RySU1CV-cWisZw23h88zzUFqiFZqAiJFAZdv2zeKkX2pt3ERt6ld3TmG3oCeaLdLfPkBg5j_N3J-OvTTrZH8hFb5A3q4A-v1YpjQ")` }}>
                            <div className="flex flex-col gap-4 animate-fade-in-up">
                                <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">About Printline Media Solutions</h1>
                                <h2 className="text-white/90 text-base font-normal leading-normal sm:text-lg">Printing the Line to Digital Success</h2>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-8">
                            <div className="flex flex-col gap-4 max-w-3xl animate-fade-in-up">
                                <h2 className="text-text-dark text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Our Story</h2>
                                <p className="text-text-muted text-base font-normal leading-relaxed sm:text-lg">Founded in the vibrant heart of Mumbai, Printline Media Solutions began with a singular mission: to bridge the gap between traditional marketing and the burgeoning digital world. Our journey is one of passion, innovation, and an unwavering commitment to propelling businesses forward in an ever-evolving landscape.</p>
                            </div>
                            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex flex-1 flex-col gap-2 rounded-lg border border-gray-200 bg-gray-50/50 p-6 text-left animate-fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                                        <p className="text-text-dark text-base font-medium leading-normal">{stat.label}</p>
                                        <p className={`${stat.color} tracking-light text-3xl font-bold leading-tight`}>{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-8">
                            <h2 className="text-text-dark text-3xl font-bold leading-tight tracking-tight sm:text-4xl animate-fade-in-up">Our Philosophy</h2>
                            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                                {philosophies.map((item, index) => (
                                    <div key={index} className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-gray-50/50 p-6 text-left animate-fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                                        <div className="flex items-center gap-3">
                                            <span className={`material-symbols-outlined ${item.color} text-3xl`}>{item.icon}</span>
                                            <h3 className="text-text-dark text-xl font-bold">{item.title}</h3>
                                        </div>
                                        <p className="text-text-muted text-base leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-8">
                            <h2 className="text-text-dark text-3xl font-bold leading-tight tracking-tight sm:text-4xl animate-fade-in-up">Meet the Experts</h2>
                            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {experts.map((expert, index) => (
                                     <div key={index} className="flex flex-col items-center gap-4 rounded-lg border border-gray-200 bg-gray-50/50 p-6 transition-transform duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                                        <img alt={`Headshot of ${expert.name}`} className={`h-32 w-32 rounded-full object-cover border-4 ${expert.color}`} src={expert.image} />
                                        <div className="text-center">
                                            <h3 className="text-text-dark text-lg font-bold">{expert.name}</h3>
                                            <p className={`text-sm font-medium ${expert.color.replace('border-', 'text-')}`}>{expert.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-primary/5 border border-primary/10 p-8 text-center lg:p-12 animate-fade-in-up">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-text-dark text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Let's Build Your Success</h2>
                                <p className="text-text-muted text-base font-normal leading-relaxed sm:text-lg max-w-2xl">Ready to elevate your digital presence? Partner with us to craft a strategy that drives results and defines your brand's future.</p>
                            </div>
                            <NavLink to="/services">
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                                    <span className="truncate">View Our Services</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="w-full bg-gray-900 text-white">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex items-center gap-3">
                            <Logo className="size-5 text-primary" />
                            <span className="text-white/80 text-sm">© 2024 Printline Media Solutions. All Rights Reserved.</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white transition-colors">
                                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.117 2H4.883A2.887 2.887 0 002 4.883v14.234A2.887 2.887 0 004.883 22h14.234A2.887 2.887 0 0022 19.117V4.883A2.887 2.887 0 0019.117 2zM8.711 18.355H5.53v-8.83h3.181v8.83zM7.121 8.21a1.59 1.59 0 110-3.18 1.59 1.59 0 010 3.18zm10.234 10.145h-3.181V13.89c0-1.065-.02-2.435-1.484-2.435-1.485 0-1.714 1.16-1.714 2.358v4.542H7.811v-8.83h3.053v1.399h.044c.423-.8 1.458-1.64 2.91-1.64 3.111 0 3.685 2.047 3.685 4.708v5.428z" fillRule="evenodd"></path></svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="text-white/80 hover:text-white transition-colors">
                                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </a>
                            <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
                                <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path></svg>
                            </a>
                            <a className="text-white/80 hover:text-white text-sm transition-colors" href="#">Privacy Policy</a>
                            <a className="text-white/80 hover:text-white text-sm transition-colors" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;
