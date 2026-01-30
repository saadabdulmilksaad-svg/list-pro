import React from 'react';
import { BookOpen, Lightbulb, Compass, ShieldAlert, Rocket, MessageSquare, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuidePage = () => {
    const steps = [
        {
            icon: <BookOpen size={32} />,
            title: "1. ما هو الذكاء الاصطناعي التوليدي؟",
            desc: "الذكاء الاصطناعي التوليدي (Generative AI) هو نوع من الذكاء الاصطناعي القادر على إنشاء محتوى جديد (نصوص، صور، فيديو، صوت) بدلاً من مجرد تحليل البيانات الموجودة. يعتمد على نماذج ضخمة تدربت على مليارات البيانات لتعلم الأنماط وإنتاج محتوى شبيه بالبشر."
        },
        {
            icon: <MessageSquare size={32} />,
            title: "2. فن هندسة الأوامر (Prompt Engineering)",
            desc: "الجودة التي تحصل عليها تعتمد على جودة ما تطلبه. عند التحدث مع AI، كن محدداً. بدلاً من قول 'اكتب مقالاً'، قل: 'اكتب مقالاً من 500 كلمة عن فوائد القهوة بأسلوب مرح لجمهور من الشباب'. السياق والتفاصيل هما مفتاح النجاح."
        },
        {
            icon: <Compass size={32} />,
            title: "3. اختيار الأداة المناسبة",
            desc: "ليس كل أداة تصلح لكل شيء. استخدم ChatGPT أو Claude للمهام الكتابية والتحليلية المعقدة. استخدم Midjourney للصور الفنية عالية الجودة. استخدم Gamma للعروض التقديمية السريعة. معرفة نقاط قوة كل أداة يوفر عليك ساعات من العمل."
        },
        {
            icon: <ShieldAlert size={32} />,
            title: "4. الأخلاقيات والتحقق",
            desc: "الذكاء الاصطناعي قد يخطئ (يهلوس). لا تأخذ المعلومات كحقائق مطلقة دون تحقق، خاصة في المسائل الطبية أو القانونية. أيضاً، احترم حقوق الملكية الفكرية وكن شفافاً عند استخدام المحتوى المولد بواسطة AI في أعمالك."
        },
        {
            icon: <Rocket size={32} />,
            title: "5. التطوير المستمر",
            desc: "هذا المجال يتطور بسرعة مذهلة. ما هو مستحيل اليوم قد يصبح ممكناً غداً. تابع الأخبار التقنية، وجرب أدوات جديدة بانتظام. المهارة الحقيقية ليست في استخدام أداة معينة، بل في القدرة على التكيف مع الأدوات الجديدة."
        }
    ];

    return (
        <div className="pt-32 pb-32 min-h-screen relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-24" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-8 mx-auto backdrop-blur-sm">
                        <Lightbulb size={20} className="text-yellow-400" />
                        <span className="font-bold text-yellow-200">رحلة التعلم تبدأ من هنا</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                        دليل <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-purple-400">المبتدئين الشامل</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light opacity-90">
                        خارطة طريق مبسطة وواضحة لتأخذك من الصفر إلى الاحتراف في عالم الذكاء الاصطناعي.
                        تعلم الأساسيات، اتقن الأدوات، واستعد للمستقبل.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line - Hidden on Mobile */}
                    <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-transparent hidden md:block rounded-full transform translate-x-1/2 opacity-20"></div>

                    <div className="space-y-16 md:space-y-32 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                            >
                                {/* Center Node - Hidden on Mobile */}
                                <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 z-20">
                                    <div className="w-12 h-12 rounded-full bg-[#020617] border-4 border-blue-600 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                        <span className="text-sm font-bold">{index + 1}</span>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1 text-center md:text-right w-full">
                                    <div className={`p-8 md:p-12 rounded-[32px] glass-card border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden`}>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px] -mr-10 -mt-10 transition-colors group-hover:bg-blue-500/10"></div>

                                        <div className="relative z-10">
                                            <div className="mb-6 w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 mx-auto md:mr-0 md:ml-auto group-hover:scale-110 transition-transform duration-300">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
                                            <p className="text-gray-400 text-lg leading-loose font-light">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer Side */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 text-center" data-aos="zoom-in">
                    <div className="glass p-12 rounded-[40px] border border-white/10 max-w-4xl mx-auto bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-6">هل أنت مستعد للبدء؟</h2>
                            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                                أفضل طريقة للتعلم هي التجربة. اختر أداة من قائمة الأدوات وابدأ باللعب معها اليوم!
                            </p>
                            <Link
                                to="/tools"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black hover:bg-gray-200 rounded-full font-black text-lg shadow-xl shadow-white/10 transition-all hover:scale-105"
                            >
                                استكشف الأدوات الان
                                <ArrowLeft size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuidePage;
