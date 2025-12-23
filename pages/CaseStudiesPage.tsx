
import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/contact', label: 'Contact' }
];

const allCaseStudies = [
    { category: 'SEO', title: 'TechCorp - SEO Overhaul', result: '2x Increase in Organic Traffic', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtywRxZd-tc0hqvYsjMn_fpFdVbmz4nBNQxj2zOFfBnQ57zoxYXJ47cihj8v-jDIU5gQQEP87WlQDPc-iKEMmAvLFOp3ohL-zXDdctVHuFHFriIun6xZ8Ylh4vI0P6GiPXRCGdjbrKkQeZgDHbVJP8o5hO7F1PE_kVYDNjfooN9Ea3JxREhlCsz8NmFtqcZnsxulxc4KaDPe6DzmCZDlU85tfDvJx3V7oeFMtylCN_RtuUvocuJq4f4_ketheM45vdWPVRC_Z_XA', gradient: 'from-blue/90' },
    { category: 'Paid Advertising', title: 'Innovate Ltd - PPC Campaign', result: '+150% Return on Ad Spend', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY-xQlzUJhLgHYdXtgi_QaRDa1D32cB89tHw2Gf8EkGaeG_tO6kIBOphQEDRtOymQxFI4q3FVzGD8XEvM-p414gyoGDtY2pwbB8LT9W4gHowOQEsMqO-ZUJwO6mP2UqDSf44v5pUmrji2NFMFV0pQWL93EEmkZQTZN6r23QO9zBIH7BIPcMx-VgweIeO60hLveOHRQGRNjcWo4GRMANQeOaU5I8dCAQAsGX5JpVq_P5i5nCzx9MkT6fEt06TjEBZKYC-xTwv1VEg', gradient: 'from-green/90' },
    { category: 'Social Media Marketing', title: 'Lifestyle Brand - Social Media Growth', result: '500k Follower Increase in 6 Months', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABXdVY5fYcZS01TAYfw0qyg2NaMGya-90tVxWs2G9wdz-hOPJ4TErn40zhRYhyKvTKIigxA9p1Iik7RCfHAjhUHdSEh1_9FHmEz_Y1ZqCQjj4xx_jEX-6SwzNT7KO6bZ8mm79waIGjbZ8eD3ihi5xA4Ps1LPAhUhrmxiHQjdocl6XNmRFOoYwL4JszU8S4EwAc6qUeu3DTbrdpee-E3duvj_JvQkDkTqCC3wxsG64turd6ZA2CjuiHV-lqh-mpxle0AN3QeJpLKg', gradient: 'from-sky/90' },
    { category: 'Content Strategy', title: 'FinServ Co - Content Strategy', result: 'Top 3 Ranking for 10+ Keywords', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBchKlbIHrg-rqBB6Lt4jC58xXSsLpERub2-HXklm3waBdFyaQDzlrAtlU14MPkiH9nvQIvqiSMoqsyBZNDhVTDn9PxQ__hHMkjcrvgjvok7EaQ5aJ0T_5o1vQKV2HLRqBPGVJdPQjuq8MXNa1wwWfNTtqIfjJSSDcOGmuin7mj3t7XTJZ3WvM_AbWJItGDKaVhXmfZalkDMV96riWrYKiSReNIUOuN4v84drpQHhZfLXLbWza4Ks0nKsYY9snQlTDHZPqKskR_Uw', gradient: 'from-yellow/90' },
    { category: 'Paid Advertising', title: 'Retail Giant - Paid Advertising', result: '30% Decrease in Cost-Per-Acquisition', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3iJa8uNqD2S2pWZzPjTeTKfVfTWYYbiR7MMP16sDBHn0mkqWeuWUdtT2vCD9s-2JS2nChUEPDzEx7aCtZmAZuqzobOL-fYgZWmlXMgFvYVyEfVebLP-vqGSm1p3AM1Jgy2fGgYz8rJyd7vhY0ndGMsxGqvYV9pGnhDSP2Bvuvzggy-WD6iDM5RzHNTgVCUjx67CurAydGu6FxcCeZZYMNgL7EJzD6rCNMzwJETIA8hG6OYDNLogbwaCRxdGSs5HXCbMrO9A12eQ', gradient: 'from-green/90' },
    { category: 'Content Strategy', title: 'Startup Inc - Full Funnel Marketing', result: 'From 0 to $1M in Annual Revenue', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP6zxB_WqdnUV4HUuoy3oGcrFiEWwMPGnmHUuz_Pwdm4ME4U6dJefLq6f_3Am9qYulB-Y_-8b4xOhPOyHZa5hcygZ1MXXKsIROHrH74FWGhDWxSIh2-cTRJIFnwVk7BP8ajQ_N03PeE5X58HCCvYCzypUiDP43CPhVCRqbkRPUPgQV9eHtJFxrD0StVsbCAGw5FAQ2L3BAB2JtNglBrWeCoFfoRBGFcMVFoV2oyyTEC_9yJNpS15rLKBBMZAYN5Mk5NGIG2vfDVg', gradient: 'from-primary/90' },
];

const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, TechCorp', quote: '"Printline Media Solutions completely transformed our online presence. Their SEO strategy was a game-changer, putting us on the first page for all our target keywords."', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQsAPgR361vx4a-59keulVb0K3tUEW5kdoQhMaSf603PED4mmJIhsJF3lzu_r2FD_ROrirXYfJtzahwqwZgK-HAmx4E0xAWF8pDABdsuI6km03UTyoaIKSK4rUrVAwUzRrr04Duj0XqwrmBehqV6l0k8CQQVhF-iCxwVdSh1ejHRZnBYUItdhxpssJkmc-9aLNMsphGB-fkj_Z6WmS6QUEmtkRLddrySXLIHG0zy1eMnq1vL6UCDnh6xO8ACsNA_faC0JppRy28A', color: 'border-blue' },
    { name: 'Michael Chen', role: 'Marketing Director, Innovate Ltd', quote: '"The PPC campaigns managed by Printline have delivered an incredible ROI. Their team is data-driven, transparent, and always available to discuss strategy."', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkboF7d8IFW5IcuYIz0yI5ThEK1Hmnc-0JGYeFOxOhKGMoxUxxqT1oW7_XHaG3lKzfcbm0uZkg1AvK6CVJYqBotjNAZqpHpGgC6uft7XtxmY0L-vfw3sW-u6XNpu7x1U1BaVZKMRaG3CH48QBdrKY2W9NjmTmQ0mwjU_L84rzbFR0qysICnKs52bYzOzOu9JJ-zeQvo746w-OtaaB4lfgqEAGxydjtZn1yjArlHLudlvK0RVFHHMEiVe2O676nwU46YRmGA3BR1Q', color: 'border-green' },
    { name: 'Jessica Williams', role: 'Founder, Lifestyle Brand', quote: '"Our social media engagement has skyrocketed since we started working with them. They understand our brand voice perfectly and create content that resonates with our audience."', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU49mvYVLJYBZ8ScaygT2FoUgLcD1wvRR2dZqw2_DFLO0DPk-jNSA6fNPKfpVznpV7jH5NPCRGZ1WeAnERA9MMaS6XVPZsUcqbPuXgCRB_6tJKqsOTRACedR-NZMBf6LjiOAcfqrrRDS981e-r_I3qdVSS2HdwzscmBM6B8v6gQmlaPRwi2D8qFz9p8f3yVLsJnGM6r59Uxq0em2mqNO6kbyD4TQtUqdS9l3sfQvMXmlJX_OdqIBrxWv-OsNncUKBEPFBIWHK4gQ', color: 'border-sky' }
];

const filters = ['All', 'SEO', 'Paid Advertising', 'Social Media Marketing', 'Content Strategy'];
const filterColors = {
    'SEO': 'hover:bg-blue',
    'Paid Advertising': 'hover:bg-green',
    'Social Media Marketing': 'hover:bg-sky',
    'Content Strategy': 'hover:bg-yellow'
}

const CaseStudiesPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredStudies = useMemo(() => {
        if (activeFilter === 'All') return allCaseStudies;
        return allCaseStudies.filter(study => study.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="bg-white font-display text-gray-800">
            <Header navLinks={navLinks} ctaText="Get a Quote" ctaPath='/contact' />
            <main className="flex flex-1 flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-7xl">
                    <div className="w-full @container animate-fade-in">
                        <div className="min-h-[480px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-center justify-center p-8 text-center" style={{ backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-XtzNvK9eTAHVvEN1LaJaSn0y6KIJ-7t3Bwo8Kh3qYG8L-2Ke0YZX75gSxpdnusQAMlLS-VdR2M4Cil_08gOvHuOLkL3ZRG3zC30j9UYn0OUhJEvv5b9t0a_ZiNRiZs2lbV6q-Nj_aoquh1VwrWcjQhBcZMA01MKnVq3esDPb7T7ur2wSUk55rozEBZkfbs8tcrs6ODM_vexKOXBqi5Wp7kf8taw7H5xj1l4I2OdGrOa9KUXVyx6xO3Fqe-EqJiiYU2wptN_g0w")` }}>
                            <div className="flex flex-col gap-4 animate-fade-in-up">
                                <h1 className="text-white text-4xl font-black leading-tight tracking-tighter @[480px]:text-6xl">Our Blueprint for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow to-sky">Digital Success</span></h1>
                                <h2 className="text-gray-300 text-base font-normal leading-normal @[480px]:text-lg max-w-3xl mx-auto">Explore how we partner with leading brands to transform their digital presence and deliver exceptional results.</h2>
                            </div>
                            <NavLink to="/contact">
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-transform hover:scale-105">
                                    <span className="truncate">View Our Work</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    <div className="flex justify-center py-10 animate-fade-in-up">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-5 text-sm font-semibold transition-transform hover:scale-105 ${activeFilter === filter ? 'bg-primary text-white' : `bg-gray-100 text-gray-700 ${filterColors[filter as keyof typeof filterColors]} hover:text-white`}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredStudies.map((study, index) => (
                            <div key={index} className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center p-6 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-fade-in" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(17, 22, 33, 0) 60%), url("${study.image}")`}}>
                                <h3 className="text-xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-2">{study.title}</h3>
                                <p className="text-sm text-gray-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{study.result}</p>
                            </div>
                        ))}
                    </div>

                    <div className="py-16 sm:py-24 animate-fade-in-up">
                        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Partners Say</h2>
                        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {testimonials.map((t, i) => (
                                <div key={i} className={`flex flex-col rounded-xl bg-gray-50 p-8 border-l-4 ${t.color}`}>
                                    <p className="flex-grow text-gray-700">{t.quote}</p>
                                    <div className="mt-6 flex items-center gap-4">
                                        <img className="h-12 w-12 rounded-full object-cover" alt={`Portrait of ${t.name}`} src={t.image} />
                                        <div>
                                            <p className="font-semibold text-gray-900">{t.name}</p>
                                            <p className="text-sm text-gray-600">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                     <div className="my-16 rounded-xl bg-gray-50 p-12 text-center animate-fade-in-up">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Write Your Success Story?</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700">Let's collaborate to build a powerful digital strategy that drives results. Contact us today for a free consultation.</p>
                        <div className="mt-8 flex justify-center">
                            <NavLink to="/contact">
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-transform hover:scale-105">
                                    <span className="truncate">Get in Touch</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CaseStudiesPage;
