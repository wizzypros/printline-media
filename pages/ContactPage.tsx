
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
];

const socialLinks = [
    { name: 'LinkedIn', icon: 'alternate_email', color: 'primary-lightblue' },
    { name: 'Twitter', icon: 'code', color: 'primary-green' },
    { name: 'Instagram', icon: 'photo_camera', color: 'primary-yellow' }
];

interface FormData {
    fullName: string;
    companyName: string;
    workEmail: string;
    message: string;
}

interface FormErrors {
    fullName?: string;
    workEmail?: string;
    message?: string;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        companyName: '',
        workEmail: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required.';
        }
        if (!formData.workEmail.trim()) {
            newErrors.workEmail = 'Work email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
            newErrors.workEmail = 'Email address is invalid.';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
        }
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id as keyof FormErrors]) {
             setErrors(prev => ({...prev, [id]: undefined}));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmissionStatus('idle');
            return;
        }
        setErrors({});
        setSubmissionStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            // Simulate a successful submission
            setSubmissionStatus('success');
            setFormData({ fullName: '', companyName: '', workEmail: '', message: '' });

            // To test error state, uncomment the following lines:
            // setSubmissionStatus('error');
        }, 1500);
    };

    return (
        <div className="bg-white font-display">
            <div className="flex justify-center py-5 px-4 sm:px-10 lg:px-20 min-h-screen">
                <div className="flex flex-col w-full max-w-6xl flex-1">
                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-4 py-4 md:px-10">
                        <NavLink to="/" className="flex items-center gap-4 text-text-primary">
                            <Logo />
                            <h2 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">Printline Media Solutions</h2>
                        </NavLink>
                        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                            <nav className="flex items-center gap-9">
                                {navLinks.map(link => (
                                    <NavLink key={link.path} to={link.path} className={({isActive}) => `relative pb-1 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium leading-normal after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary-red after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive ? 'text-primary font-bold after:scale-x-100' : ''}`}>{link.label}</NavLink>
                                ))}
                            </nav>
                            <NavLink to="/contact">
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary-red text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary-red/90 transition-colors">
                                    <span className="truncate">Contact Us</span>
                                </button>
                            </NavLink>
                        </div>
                    </header>
                    <main className="flex-1 py-12 md:py-20 lg:py-24 animate-fade-in-up">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-3 px-4">
                                    <h1 className="text-gradient text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Let's Connect</h1>
                                    <p className="text-text-secondary text-base font-normal leading-normal max-w-md">Printing the Line to Digital Success. Reach out to see how we can help your brand achieve it.</p>
                                </div>
                                <div className="p-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-5">
                                    <div className="col-span-2 grid grid-cols-subgrid border-t border-t-gray-200 py-5">
                                        <p className="text-text-secondary text-sm">Office Address</p>
                                        <p className="text-text-primary text-sm">123 Business Avenue, Bandra West, Mumbai, Maharashtra 400050, India</p>
                                    </div>
                                    <div className="col-span-2 grid grid-cols-subgrid border-t border-t-gray-200 py-5">
                                        <p className="text-text-secondary text-sm">Phone Number</p>
                                        <p className="text-text-primary text-sm">+91 22 1234 5678</p>
                                    </div>
                                    <div className="col-span-2 grid grid-cols-subgrid border-t border-t-gray-200 py-5">
                                        <p className="text-text-secondary text-sm">Email Address</p>
                                        <p className="text-text-primary text-sm">contact@printlinemedia.com</p>
                                    </div>
                                </div>
                                <div className="px-4 flex flex-wrap justify-start gap-4">
                                    {socialLinks.map(link => (
                                        <a key={link.name} className="flex flex-col items-center gap-2 p-2.5 text-center w-20 group" href="#">
                                            <div className={`rounded-full bg-slate-100 group-hover:bg-${link.color}/20 p-3.5 transition-colors`}>
                                                <span className={`material-symbols-outlined text-${link.color}`} style={{ fontSize: '24px' }}>{link.icon}</span>
                                            </div>
                                            <p className="text-text-secondary group-hover:text-text-primary transition-colors text-sm font-medium leading-normal">{link.name}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-xl flex flex-col gap-8 border border-gray-200">
                                <div className="flex flex-col gap-2">
                                     <h2 className="text-text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] text-left">Send us a Message</h2>
                                     {submissionStatus === 'success' && <p className="text-green-600 text-sm">Your message has been sent successfully!</p>}
                                     {submissionStatus === 'error' && <p className="text-red-600 text-sm">Something went wrong. Please try again later.</p>}
                                </div>
                                <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-text-secondary text-sm font-medium" htmlFor="fullName">Full Name</label>
                                        <input className={`bg-white border rounded-lg h-11 px-3 text-text-primary placeholder-text-secondary/60 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-shadow ${errors.fullName ? 'border-red-500' : 'border-gray-200'}`} id="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" type="text" required/>
                                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-text-secondary text-sm font-medium" htmlFor="companyName">Company Name</label>
                                        <input className="bg-white border border-gray-200 rounded-lg h-11 px-3 text-text-primary placeholder-text-secondary/60 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-shadow" id="companyName" value={formData.companyName} onChange={handleChange} placeholder="Your Company Inc." type="text"/>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-text-secondary text-sm font-medium" htmlFor="workEmail">Work Email</label>
                                        <input className={`bg-white border rounded-lg h-11 px-3 text-text-primary placeholder-text-secondary/60 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-shadow ${errors.workEmail ? 'border-red-500' : 'border-gray-200'}`} id="workEmail" value={formData.workEmail} onChange={handleChange} placeholder="you@company.com" type="email" required/>
                                        {errors.workEmail && <p className="text-red-500 text-xs mt-1">{errors.workEmail}</p>}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-text-secondary text-sm font-medium" htmlFor="message">Message</label>
                                        <textarea className={`bg-white border rounded-lg p-3 text-text-primary placeholder-text-secondary/60 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-shadow resize-none ${errors.message ? 'border-red-500' : 'border-gray-200'}`} id="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={4} required></textarea>
                                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                    </div>
                                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary-blue text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-blue/90 disabled:bg-primary-blue/50 disabled:cursor-not-allowed transition-colors" type="submit" disabled={submissionStatus === 'submitting'}>
                                        <span className="truncate">{submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
