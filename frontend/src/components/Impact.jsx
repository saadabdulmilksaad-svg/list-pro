import React from 'react';
import { Stethoscope, GraduationCap, Truck, Briefcase, ShieldCheck } from 'lucide-react';

const Impact = () => {
    const impacts = [
        {
            title: "الرعاية الصحية",
            desc: "تشخيص مبكر للأمراض بدقة 99% وتطوير أدوية جديدة بسرعة قياسية.",
            icon: <Stethoscope className="w-10 h-10 text-rose-400" />,
            bg: "bg-rose-500/10",
            border: "hover:border-rose-500/30"
        },
        {
            title: "التعليم",
            desc: "مناهج دراسية تتكيف مع مستوى كل طالب لضمان أقصى استفادة تعليمية.",
            icon: <GraduationCap className="w-10 h-10 text-amber-400" />,
            bg: "bg-amber-500/10",
            border: "hover:border-amber-500/30"
        },
        {
            title: "المدن الذكية",
            desc: "إدارة حركة المرور والطاقة لتقليل الانبعاثات بنسبة 30% وجعل المدن أكثر استدامة.",
            icon: <Truck className="w-10 h-10 text-emerald-400" />,
            bg: "bg-emerald-500/10",
            border: "hover:border-emerald-500/30"
        },
        {
            title: "قطاع الأعمال",
            desc: "أتمتة القرارات الروتينية لزيادة كفاءة الموظفين والتركيز على الابتكار.",
            icon: <Briefcase className="w-10 h-10 text-blue-400" />,
            bg: "bg-blue-500/10",
            border: "hover:border-blue-500/30"
        },
        {
            title: "الأمن الرقمي",
            desc: "أنظمة دفاعية تتطور ذاتياً للتصدى لأحدث أساليب الهجمات الإلكترونية.",
            icon: <ShieldCheck className="w-10 h-10 text-indigo-400" />,
            bg: "bg-indigo-500/10",
            border: "hover:border-indigo-500/30"
        }
    ];

    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-black mb-8">أثر يغير <span className="text-white">العالم</span></h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        الذكاء الاصطناعي ليس مجرد تقنية، بل هو قوة دافعة تعيد تشكيل كل قطاع نلمسه.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {impacts.map((item, i) => (
                        <div
                            key={i}
                            className={`p-10 rounded-[50px] glass w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] border border-white/5 transition-all duration-500 ${item.border} hover:-translate-y-2 group text-center`}
                        >
                            <div className={`mb-8 w-24 h-24 mx-auto rounded-full ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
