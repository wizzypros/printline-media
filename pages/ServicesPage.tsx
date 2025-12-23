
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import Header from '../components/Header';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
];

const services = [
    { icon: 'stacks', title: 'Digital Media & Print Media', description: 'Integrating traditional print with modern digital strategies for cohesive brand messaging.', color: 'primary-red' },
    { icon: 'groups', title: 'Social Media Management', description: 'Expert management of your social channels to build community and drive engagement.', color: 'primary-green' },
    { icon: 'article', title: 'Social Media Content', description: 'Creating compelling, high-quality content that resonates with your audience and builds your brand.', color: 'primary-light-blue' },
    { icon: 'visibility', title: 'Brand Monitoring', description: "Monitoring your brand's online presence to manage reputation and gather key insights.", color: 'primary-yellow' },
    { icon: 'code', title: 'Web Development', description: 'Developing professional, high-performance websites that serve as the cornerstone of your digital presence.', color: 'primary-blue' },
    { icon: 'monetization_on', title: 'AdSense Monetization', description: 'Maximizing your revenue through strategic implementation and management of Google AdSense.', color: 'primary-red' },
    { icon: 'trending_up', title: 'Search Engine Optimization', description: 'Elevating your online visibility and dominating search rankings to drive organic traffic.', color: 'primary-green' },
    { icon: 'newspaper', title: 'Media Coverage', description: "Securing valuable media placements to enhance your brand's credibility and reach.", color: 'primary-light-blue' },
    { icon: 'campaign', title: 'Advertisement', description: 'Crafting targeted advertising campaigns across multiple platforms to deliver measurable results.', color: 'primary-yellow' }
];

const ServicesPage: React.FC = () => {
    return (
        <div className="font-display bg-background-light text-text-primary">
            <Header navLinks={navLinks} ctaText="Get a Quote" ctaPath='/contact' />
            <main className="flex-1">
                <div className="@container animate-fade-in">
                    <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-4 text-center" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpTlVbM6LSOncWSm2lY_8_wqs6yJeOw2ny8YS-hOAFOJ55cspYOBG03LsZOWgqPXf-KdEyn7fY9KN6AXJr_k98jg3ePozsmLzR4PQDmLs1fh8wqb2IKtadDopGdRSfAnAIZ21BsLvd-jweDz-INBmt4kuB58OM9hQDfQEQij9KbihDniDKd17HBjL2nxEYB0uyY3vuRmSqspgW2JwuYKKKtWUlsYngmjtkuz96b8ojau7GY8jDXfmE6Lb5pjjoCFnBpaBotBAqHg")` }}>
                        <div className="flex flex-col gap-2 animate-fade-in-up">
                            <h1 className="text-text-primary text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">Our Services</h1>
                            <p className="text-text-secondary text-sm font-normal leading-normal @[480px]:text-base max-w-2xl mx-auto">Printing the Line to Digital Success: A Suite of Solutions Designed for Growth.</p>
                        </div>
                    </div>
                </div>

                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 sm:py-24">
                    <div className="flex flex-col gap-12">
                        <div className='animate-fade-in-up'>
                            <h2 className="text-text-primary text-3xl font-bold leading-tight tracking-[-0.015em] text-center">A Suite of Solutions Designed for Growth</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="flex flex-1 flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <span className={`material-symbols-outlined text-${service.color} text-3xl`}>{service.icon}</span>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-text-primary text-lg font-bold leading-tight">{service.title}</h3>
                                        <p className="text-text-secondary text-sm font-normal leading-normal">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 sm:py-24 animate-fade-in-up">
                    <div className="bg-gray-100 rounded-xl flex flex-col items-center justify-center gap-6 text-center p-12">
                        <h2 className="text-text-primary text-4xl font-bold leading-tight tracking-[-0.033em] max-w-2xl">Ready to Elevate Your Brand?</h2>
                        <p className="text-text-secondary text-base font-normal leading-normal max-w-2xl">Let's discuss how Printline Media Solutions can help you achieve digital success.</p>
                         <NavLink to="/contact">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary-red text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-red/90 transition-colors">
                                <span className="truncate">Contact Us Now</span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </main>

            <footer className="bg-text-primary text-white">
                <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 text-white">
                                <Logo />
                                <h2 className="text-white text-lg font-bold leading-tight">Printline Media Solutions</h2>
                            </div>
                            <p className="text-white/70 text-sm">Printing the Line to Digital Success in Mumbai and beyond.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white font-semibold">Quick Links</h3>
                            <NavLink className="text-white/70 hover:text-primary-red transition-colors text-sm" to="/about">About Us</NavLink>
                            <NavLink className="text-white/70 hover:text-primary-red transition-colors text-sm" to="/services">Services</NavLink>
                            <NavLink className="text-white/70 hover:text-primary-red transition-colors text-sm" to="/contact">Contact</NavLink>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white font-semibold">Contact</h3>
                            <p className="text-white/70 text-sm">Mumbai, India</p>
                            <a className="text-white/70 hover:text-primary-red transition-colors text-sm" href="mailto:contact@printline.com">contact@printline.com</a>
                            <a className="text-white/70 hover:text-primary-red transition-colors text-sm" href="tel:+911234567890">+91 123 456 7890</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white font-semibold">Follow Us</h3>
                            <div className="flex items-center gap-4">
                                <a className="text-white/70 hover:text-primary-red transition-colors" href="#"><svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg></a>
                                <a className="text-white/70 hover:text-primary-red transition-colors" href="#"><svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
                        <p>© 2024 Printline Media Solutions. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ServicesPage;
