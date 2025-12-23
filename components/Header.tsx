
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

interface NavLinkItem {
    path: string;
    label: string;
}

interface HeaderProps {
    navLinks: NavLinkItem[];
    ctaText: string;
    ctaPath?: string;
}

const Header: React.FC<HeaderProps> = ({ navLinks, ctaText, ctaPath }) => {
    const navLinkClass = "relative pb-1 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium leading-normal after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-primary-red after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100";
    const activeNavLinkClass = "text-primary-red font-bold after:scale-x-100";

    const CtaButton = () => (
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary-red text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate">{ctaText}</span>
        </button>
    );

    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/80 backdrop-blur-sm border-b border-gray-200">
            <div className="mx-auto flex max-w-7xl items-center justify-between whitespace-nowrap px-4 py-3 sm:px-6 lg:px-8">
                <NavLink to="/" className="flex items-center gap-4 text-text-primary">
                    <Logo />
                    <h2 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">Printline Media Solutions</h2>
                </NavLink>
                <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                    <nav className="flex items-center gap-9">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => `${navLinkClass} ${isActive ? activeNavLinkClass : ''}`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                    {ctaPath ? (
                        <NavLink to={ctaPath}>
                            <CtaButton />
                        </NavLink>
                    ) : (
                        <CtaButton />
                    )}
                </div>
                <button className="md:hidden p-2">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
