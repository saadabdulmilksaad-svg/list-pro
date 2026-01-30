import React from 'react';
import { Sparkles, Github, Linkedin , Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative pt-24 pb-12 border-t border-white/5 bg-[#010413] text-center overflow-hidden">
            {/* Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-20">
                    <Link to="/" className="flex items-center gap-3 mb-6 group">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-500">
                            <Sparkles className="text-white w-7 h-7" />
                        </div>
                        <span className="font-black text-3xl tracking-tight text-white group-hover:text-blue-400 transition-colors">العالم الذكي</span>
                    </Link>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-light">
                        منصتكم الأولى لاستكشاف وفهم تقنيات الذكاء الاصطناعي.
                        <br />
                        نصنع المستقبل، سطراً تلو الآخر.
                    </p>

                    <div className="flex gap-4 justify-center mb-16">
                        {[Twitter, Linkedin, Github, Youtube].map((Icon, i) => (
                            <a key={i} href="#" className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-gray-400 hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg">
                                <Icon size={22} />
                            </a>
                        ))}
                    </div>

                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center border-t border-white/5 pt-16">
                        <div className="flex flex-col gap-5">
                            <h4 className="text-white font-bold text-lg">استكشف</h4>
                            <Link to="/" className="text-gray-500 hover:text-blue-400 transition-colors">الرئيسية</Link>
                            <Link to="/tools" className="text-gray-500 hover:text-blue-400 transition-colors">دليل الأدوات</Link>
                            <Link to="/guide" className="text-gray-500 hover:text-blue-400 transition-colors">دليل المبتدئين</Link>
                            <Link to="/sitemap" className="text-gray-500 hover:text-blue-400 transition-colors">خريطة الموقع</Link>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h4 className="text-white font-bold text-lg">الخدمات</h4>
                            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">الاستشارات</a>
                            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">التدريب</a>
                            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">حلول الأعمال</a>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h4 className="text-white font-bold text-lg">الشركة</h4>
                            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">من نحن</a>
                            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">وظائف</a>
                            <Link to="/contact" className="text-gray-500 hover:text-blue-400 transition-colors">اتصل بنا</Link>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h4 className="text-white font-bold text-lg">قانوني</h4>
                            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">الخصوصية</a>
                            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">الشروط</a>
                            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">الكوكيز</a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-4">
                    <p className="text-gray-600 font-medium dir-ltr">© 2026 Smart World Platform. All rights reserved.</p>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
