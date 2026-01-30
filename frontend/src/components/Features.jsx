import React from 'react';
import { Layers, Zap, BarChart, Shield, Cpu, Globe, ArrowUpRight } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            title: "معالجة اللغة الطبيعية",
            desc: "فهم وتحليل اللغات البشرية بدقة متناهية وسرعة لم يسبق لها مثيل، مما يمكن الآلات من التواصل بطلاقة.",
            icon: <Layers size={32} />,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "group-hover:border-blue-500/50"
        },
        {
            title: "الرؤية الحاسوبية",
            desc: "تحليل الصور والفيديو في الوقت الفعلي لاكتشاف الأنماط والأشياء بدقة تفوق دقة العين البشرية.",
            icon: <Zap size={32} />,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "group-hover:border-purple-500/50"
        },
        {
            title: "تحليلات تنبؤية",
            desc: "توقع الاتجاهات المستقبلية لعملك بناءً على بياناتك التاريخية لاتخاذ قرارات استراتيجية مدروسة.",
            icon: <BarChart size={32} />,
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
            border: "group-hover:border-emerald-500/50"
        },
        {
            title: "أمن سيبراني ذكي",
            desc: "اكتشاف التهديدات الرقمية وإيقافها قبل حدوثها باستخدام خوارزميات تعلم آلة متطورة.",
            icon: <Shield size={32} />,
            color: "text-rose-400",
            bg: "bg-rose-400/10",
            border: "group-hover:border-rose-500/50"
        },
        {
            title: "أتمتة العمليات",
            desc: "تبسيط المهام المتكررة والروتينية وزيادة إنتاجية فريقك بشكل ملحوظ لتركز على ما يهم.",
            icon: <Cpu size={32} />,
            color: "text-amber-400",
            bg: "bg-amber-400/10",
            border: "group-hover:border-amber-500/50"
        },
        {
            title: "توسع عالمي",
            desc: "حلول تقنية قابلة للتطوير لتناسب نمو أعمالك وتصل إلى جمهور عالمي بلمح البصر.",
            icon: <Globe size={32} />,
            color: "text-cyan-400",
            bg: "bg-cyan-400/10",
            border: "group-hover:border-cyan-500/50"
        }
    ];

    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-black mb-8">
                        قدرات <span className="text-gradient">لا حدود لها</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                        نضع بين يديك تقنيات المستقبل اليوم. استكشف كيف يمكن لهذه الميزات أن تنقل مشروعك إلى البعد التالي.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className={`p-10 rounded-[40px] glass hover:bg-white/5 transition-all duration-500 group border border-white/5 ${f.border} hover:-translate-y-2`}
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className={`p-4 rounded-2xl ${f.bg} ${f.color} group-hover:scale-110 transition-transform duration-500`}>
                                    {f.icon}
                                </div>
                                <ArrowUpRight className={`w-6 h-6 ${f.color} opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                                {f.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
