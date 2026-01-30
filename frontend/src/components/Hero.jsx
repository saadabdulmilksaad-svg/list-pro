import React from 'react';
import { Play, ArrowDown, Sparkles, Cpu } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative ml-0 mr-0 pt-32 pb-16 overflow-hidden flex flex-col items-center justify-center min-h-[100dvh]">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[80px] rounded-full opacity-20"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 shadow-lg shadow-black/20 hover:bg-white/10 transition-colors cursor-default">
                    <Sparkles size={18} className="text-yellow-400" />
                    <span className="text-sm font-bold text-gray-100 tracking-wide">مستقبل التكنولوجيا بين يديك</span>
                </div>

                {/* Headline */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[1.1] tracking-tight">
                    <span className="block text-white">اكتشف قدراتك</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient pb-4">
                        الذكاء الاصطناعي
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed mb-12 max-w-3xl mx-auto opacity-90">
                    منصتك الشاملة لاستكشاف أحدث أدوات الذكاء الاصطناعي التي تعيد تشكيل عالمنا.
                    <br className="hidden md:block" />
                    تعلم، ابتكر، وتطور مع أدوات المستقبل.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
                    <a
                        href="/tools"
                        className="group w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-black text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                        ابدأ الاستكشاف الآن
                    </a>
                    <a
                        href="/features"
                        className="group w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
                    >
                        كيف نعمل؟
                        <span className="bg-white rounded-full p-1 group-hover:scale-110 transition-transform">
                            <Play size={12} className="fill-black text-black ml-0.5" />
                        </span>
                    </a>
                </div>

                {/* Decorative Bottom Element */}
                <div className="mt-24 relative w-full h-32 md:h-48 flex justify-center">
                    <div className="absolute top-0 w-px h-full bg-gradient-to-b from-white/20 to-transparent"></div>

                    <div className="absolute -top-6 bg-[#020617] p-4 rounded-2xl border border-white/10 shadow-2xl shadow-blue-500/10 animate-float z-20">
                        <Cpu size={40} className="text-blue-400" />
                    </div>

                    <div className="absolute bottom-0 animate-bounce text-gray-500 flex flex-col items-center gap-2 opacity-50">
                        <span className="text-xs uppercase tracking-[0.2em]">Scroll Down</span>
                        <ArrowDown size={16} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
