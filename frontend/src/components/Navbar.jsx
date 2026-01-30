import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'الرئيسية', path: '/' },
        { name: 'الأدوات', path: '/tools' },
        { name: 'دليل المبتدئين', path: '/guide' },
        { name: 'تواصل معنا', path: '/contact' },
    ];
   

    return (
        <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 w-full ${scrolled ? 'py-4 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                            <Sparkles className="text-white w-5 h-5" />
                        </div>
                        <span className="text-2xl font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                            العالم الذكي
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-all duration-300 hover:text-white relative px-2 ${isActive ? 'text-white font-bold' : 'text-gray-400'}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        {isActive && (
                                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></span>
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/tools"
                            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-95 transform hover:-translate-y-0.5"
                        >
                            تصفح الأدوات
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 top-[70px] bg-[#020617]/95 backdrop-blur-xl p-6 z-40 animate-in slide-in-from-top-10 fade-in duration-300 border-t border-white/10">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => `
                                    text-lg font-bold p-4 rounded-2xl transition-all
                                    ${isActive
                                        ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                                        : 'text-gray-300 hover:bg-white/5 hover:text-white'}
                                `}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/tools"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 block text-center py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/20 active:scale-95"
                        >
                            استكشف الأدوات
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;