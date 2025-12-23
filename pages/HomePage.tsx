
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';

const navLinks = [
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
];

const services = [
    { icon: 'search', title: 'SEO Strategy', description: 'Elevate your visibility and dominate search rankings with our data-driven SEO expertise.', color: 'text-primary-red' },
    { icon: 'ads_click', title: 'Performance Marketing', description: 'Maximize ROI through precision-targeted PPC campaigns that convert.', color: 'text-primary-green' },
    { icon: 'draw', title: 'Content Creation', description: 'Engage your audience with compelling, high-quality content that builds brand loyalty.', color: 'text-primary-lightblue' },
    { icon: 'group', title: 'Social Media Management', description: 'Craft a powerful social presence that resonates with your target demographic.', color: 'text-primary-yellow' }
];

const advantages = [
    { icon: 'target', title: 'Bespoke Strategies', description: 'Tailored digital marketing plans designed specifically for your unique business goals.', color: 'text-primary-red' },
    { icon: 'monitoring', title: 'Data-Driven Results', description: 'Leveraging advanced analytics to maximize your ROI and achieve measurable success.', color: 'text-primary-green' },
    { icon: 'support_agent', title: 'Unparalleled Service', description: 'Dedicated support and transparent communication to ensure a seamless partnership.', color: 'text-primary-lightblue' }
];


const HomePage: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="font-display bg-background-light">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="flex flex-col max-w-[960px] flex-1">
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 sm:px-10 py-3">
                            <NavLink to="/" className="flex items-center gap-4 text-text-primary">
                                <Logo />
                                <h2 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">Printline Media Solutions</h2>
                            </NavLink>
                            <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                                <nav className="flex items-center gap-9">
                                    {navLinks.map(link => (
                                        <NavLink key={link.path} to={link.path} className={({ isActive }) => `relative pb-1 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium leading-normal after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary-red after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive ? 'text-primary-red font-bold after:scale-x-100' : ''}`}>{link.label}</NavLink>
                                    ))}
                                </nav>
                                <NavLink to="/contact">
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary-red text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                                        <span className="truncate">Schedule a Consultation</span>
                                    </button>
                                </NavLink>
                            </div>
                        </header>

                        <main>
                            <div className="@container py-10 md:py-20 animate-fade-in-up">
                                <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4 relative overflow-hidden">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center @[480px]:rounded-lg z-0" 
                                        style={{ 
                                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgEi_akLZRSpfu54Bu8wg2QXqPmefY1k-yQPbnfHapQCnKTM93EN1dpS7oA7rTTco3IabJXLbi9zJAtxC5_NJ9KB8VZljJquRminXp85vZ7jWpGoMxu6PqM5wyXt2lHFqB5AIRI7BjGBbo3f5hAAt5Wsxo6mh_JqfMyq6C7Xhe82pgZ4YKoxD0TdSkDMt2eNUAOioRUNqIwxnP4yDpsnmwjdYMOWHnUEfP_wBjFKYx11Bac6u8T-2IlYjgPubpWwdi1fr8RDJlKQ')",
                                            transform: `translateY(${offsetY * 0.5}px) scale(1.1)`
                                        }}>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/70 @[480px]:rounded-lg z-10"></div>
                                    <div className="flex flex-col gap-4 text-center max-w-2xl z-20">
                                        <h1 className="text-text-primary text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">Printing the Line to Digital Success</h1>
                                        <p className="text-text-secondary text-base font-normal leading-normal @[480px]:text-lg">Mumbai's Premier Digital Marketing Consultancy for Elite Brands.</p>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary-red text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:opacity-90 transition-opacity z-20">
                                        <span className="truncate">Discover Our Solutions</span>
                                    </button>
                                </div>
                            </div>

                            <section className="py-10 md:py-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <div className="text-center">
                                    <h2 className="text-text-primary text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8">Our High-End Digital Marketing Services</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 text-center items-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
                                            <div className={`${service.color} text-4xl`}>
                                                <span className="material-symbols-outlined !text-4xl">{service.icon}</span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h3 className="text-text-primary text-lg font-bold leading-tight">{service.title}</h3>
                                                <p className="text-text-secondary text-sm font-normal leading-normal">{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="flex flex-col gap-10 px-4 py-10 md:py-16 @container animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <div className="flex flex-col gap-4 text-center items-center">
                                    <h2 className="text-text-primary tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-xl">The Printline Advantage</h2>
                                    <p className="text-text-secondary text-base font-normal leading-normal max-w-2xl">We deliver bespoke strategies, data-driven results, and unparalleled client service to elevate your brand.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {advantages.map((advantage, index) => (
                                        <div key={index} className="flex flex-1 gap-4 rounded-lg border border-gray-200 bg-white p-6 flex-col shadow-sm transition-all hover:shadow-md">
                                            <div className={advantage.color}>
                                                <span className="material-symbols-outlined !text-3xl">{advantage.icon}</span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h3 className="text-text-primary text-base font-bold leading-tight">{advantage.title}</h3>
                                                <p className="text-text-secondary text-sm font-normal leading-normal">{advantage.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="@container py-10 md:py-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 bg-primary-blue rounded-lg text-center items-center">
                                    <h2 className="text-white tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-xl">Ready to Elevate Your Digital Presence?</h2>
                                    <NavLink to="/contact">
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-white text-primary-blue text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base grow hover:bg-gray-100 transition-colors">
                                            <span className="truncate">Schedule Your Free Consultation</span>
                                        </button>
                                    </NavLink>
                                </div>
                            </section>
                        </main>

                        <footer className="border-t border-solid border-gray-200 mt-10 md:mt-16 bg-gray-50">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 py-12 max-w-[960px] mx-auto">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <Logo className="size-5 text-primary-red"/>
                                        <h3 className="text-text-primary text-base font-bold">Printline Media Solutions</h3>
                                    </div>
                                    <p className="text-text-secondary text-sm">Mumbai's Premier Digital Marketing Consultancy for Elite Brands.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-text-primary font-semibold">Quick Links</h4>
                                    <a className="text-text-secondary hover:text-text-primary text-sm" href="#/services">Services</a>
                                    <a className="text-text-secondary hover:text-text-primary text-sm" href="#/about">About Us</a>
                                    <a className="text-text-secondary hover:text-text-primary text-sm" href="#/contact">Contact</a>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-text-primary font-semibold">Contact</h4>
                                    <p className="text-text-secondary text-sm">contact@printline.media</p>
                                    <p className="text-text-secondary text-sm">+91 123 456 7890</p>
                                    <p className="text-text-secondary text-sm">Mumbai, Maharashtra, India</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-text-primary font-semibold">Follow Us</h4>
                                    <div className="flex gap-4">
                                        <a className="text-text-secondary hover:text-text-primary" href="#"><svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.288 2.633 7.923 6.273 9.49.458.084.625-.198.625-.44s0-.792 0-1.554c-2.556.555-3.095-1.233-3.095-1.233-.416-1.057-1.016-1.338-1.016-1.338-.832-.568.062-.556.062-.556.92.065 1.403.945 1.403.945.816 1.398 2.14 1 2.662.765.083-.595.318-1 .58-1.23-2.028-.23-4.158-1.012-4.158-4.512 0-.997.356-1.813.94-2.45-.095-.23-.408-1.16.09-2.415 0 0 .768-.245 2.512.94.728-.202 1.51-.303 2.288-.303.778 0 1.56.101 2.288.303 1.744-1.185 2.512-.94 2.512-.94.5 1.255.185 2.185.09 2.415.584.637.94 1.453.94 2.45 0 3.51-2.133 4.28-4.167 4.504.327.28.615.838.615 1.69 0 1.22-.01 2.203-.01 2.5 0 .245.164.53.63.44C19.37 19.92 22 16.286 22 12c0-5.523-4.477-10-10-10z" fill-rule="evenodd"></path></svg></a>
                                        <a className="text-text-secondary hover:text-text-primary" href="#"><svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.117 2H4.883A2.887 2.887 0 002 4.883v14.234A2.887 2.887 0 004.883 22h14.234A2.887 2.887 0 0022 19.117V4.883A2.887 2.887 0 0019.117 2zM8.711 18.355H5.53v-8.83h3.181v8.83zM7.121 8.21a1.59 1.59 0 110-3.18 1.59 1.59 0 010 3.18zm10.234 10.145h-3.181V13.89c0-1.065-.02-2.435-1.484-2.435-1.485 0-1.714 1.16-1.714 2.358v4.542H7.811v-8.83h3.053v1.399h.044c.423-.8 1.458-1.64 2.91-1.64 3.111 0 3.685 2.047 3.685 4.708v5.428z" fill-rule="evenodd"></path></svg></a>
                                    </div>
                                </div>
                            </div>
                            <div className="border-t border-solid border-gray-200 text-center py-4">
                                <p className="text-text-secondary text-sm">© 2024 Printline Media Solutions. All Rights Reserved.</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
