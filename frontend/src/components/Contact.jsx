import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setTimeout(() => setIsSent(false), 3000);
            setFormState({ name: '', email: '', service: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="relative min-h-screen flex items-center justify-center py-12 md:py-24 overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-[#0f0f23]">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 -right-24 w-[600px] h-[600px] bg-gradient-to-r from-primary/30 via-secondary/20 to-transparent rounded-full blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -left-24 w-[600px] h-[600px] bg-gradient-to-l from-accent/20 via-primary/10 to-transparent rounded-full blur-[128px] animate-pulse"></div>
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"></div>
                
                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section - Centered */}
                <div className="text-center mb-12 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/10 border border-primary/30 text-primary mb-8 mx-auto relative group overflow-hidden">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/80"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-sm font-bold tracking-wide">تواصل معنا</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                        ابدأ{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                                رحلتك
                            </span>
                            <Sparkles className="absolute -top-2 -right-4 w-6 h-6 text-yellow-400" />
                        </span>{' '}
                        <br className="hidden md:block" />
                        نحو المستقبل الرقمي
                    </h2>

                    <p className="text-xl text-gray-300/80 max-w-3xl mx-auto leading-relaxed font-light">
                        فريقنا من الخبراء جاهز لمساعدتك في تحويل أفكارك إلى حلول رقمية مبتكرة. 
                        تواصل معنا اليوم وابدأ رحلة التحول الرقمي.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    {/* Enhanced Information Side */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl blur-3xl"></div>
                        <div className="relative bg-gradient-to-br from-black/60 to-gray-900/40 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
                            <div className="mb-10 text-center lg:text-right">
                                <h3 className="text-3xl font-bold text-white mb-3">معلومات الاتصال</h3>
                                <p className="text-gray-400">تواصل معنا عبر أي من القنوات التالية</p>
                            </div>

                            <div className="space-y-6">
                                <ContactCheckItem
                                    icon={<Mail className="w-6 h-6" />}
                                    title="البريد الإلكتروني"
                                    value="info@example.com"
                                    color="text-primary"
                                    bg="bg-gradient-to-br from-primary/20 to-primary/5"
                                />
                                <ContactCheckItem
                                    icon={<Phone className="w-6 h-6" />}
                                    title="الهاتف"
                                    value="+967779830449"
                                    color="text-secondary"
                                    bg="bg-gradient-to-br from-secondary/20 to-secondary/5"
                                />
                                <ContactCheckItem
                                    icon={<MapPin className="w-6 h-6" />}
                                    title="العنوان"
                                    value="اليمن، صنعاء"
                                    color="text-accent"
                                    bg="bg-gradient-to-br from-accent/20 to-accent/5"
                                />
                            </div>

                            {/* Stats Section */}
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="p-4">
                                        <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                                        <div className="text-sm text-gray-400">دعم فني</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-3xl font-bold text-secondary mb-1">99%</div>
                                        <div className="text-sm text-gray-400">رضا العملاء</div>
                                    </div>
                                    <div className="p-4">
                                        <div className="text-3xl font-bold text-accent mb-1">2h</div>
                                        <div className="text-sm text-gray-400">متوسط الرد</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Form Side */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-[32px] blur-lg opacity-30 animate-pulse"></div>
                        <div className="relative bg-gradient-to-b from-[#0a0a0a] to-[#111111] border border-white/10 p-8 md:p-10 rounded-[30px] shadow-2xl backdrop-blur-sm">
                            <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                                <MessageSquare className="w-8 h-8 text-primary" />
                            </div>

                            <div className="mb-10 text-center lg:text-right">
                                <h3 className="text-3xl font-bold text-white mb-3">أرسل لنا رسالة</h3>
                                <p className="text-gray-400">سنقوم بالرد عليك في أقرب وقت ممكن</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-gray-300 block text-right">الاسم الكامل</label>
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full bg-[#151515]/50 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 placeholder:text-gray-500 hover:border-primary/30 text-right group-hover:shadow-lg group-hover:shadow-primary/10"
                                                placeholder="أحمد محمد"
                                                required
                                            />
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/5 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-gray-300 block text-right">البريد الإلكتروني</label>
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full bg-[#151515]/50 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 placeholder:text-gray-500 hover:border-primary/30 text-right group-hover:shadow-lg group-hover:shadow-primary/10"
                                                placeholder="example@mail.com"
                                                dir="ltr"
                                                required
                                            />
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/5 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-gray-300 block text-right">نوع الخدمة</label>
                                    <div className="relative group">
                                        <select
                                            name="service"
                                            value={formState.service}
                                            onChange={handleChange}
                                            className="w-full bg-[#151515]/50 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 hover:border-primary/30 cursor-pointer appearance-none text-right pr-12"
                                            required
                                        >
                                            <option value="" disabled className="bg-[#151515] text-white">اختر الخدمة المطلوبة...</option>
                                            <option value="consulting" className="bg-[#151515] text-white">استشارة تقنية</option>
                                            <option value="development" className="bg-[#151515] text-white">تطوير برمجيات</option>
                                            <option value="ai" className="bg-[#151515] text-white">حلول الذكاء الاصطناعي</option>
                                            <option value="design" className="bg-[#151515] text-white">تصميم تجربة المستخدم</option>
                                            <option value="marketing" className="bg-[#151515] text-white">تسويق رقمي</option>
                                        </select>
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/5 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-gray-300 block text-right">رسالتك</label>
                                    <div className="relative group">
                                        <textarea
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full bg-[#151515]/50 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 text-white hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 placeholder:text-gray-500 resize-none h-40 text-right group-hover:shadow-lg group-hover:shadow-primary/10"
                                            placeholder="اكتب تفاصيل مشروعك أو استفسارك هنا..."
                                            required
                                        ></textarea>
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary/5 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-5 rounded-2xl font-bold text-white text-lg transition-all duration-500 flex items-center justify-center gap-3 group/btn overflow-hidden relative ${
                                        isSent 
                                            ? 'bg-gradient-to-r from-green-600 to-green-500 shadow-lg shadow-green-500/30' 
                                            : 'bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]'
                                    }`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                                    
                                    {isSent ? (
                                        <>
                                            <span className="relative z-10">تم الإرسال بنجاح!</span>
                                            <CheckCircle2 size={22} className="relative z-10 animate-bounce" />
                                        </>
                                    ) : (
                                        <>
                                            <span className="relative z-10">
                                                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                                            </span>
                                            {!isSubmitting ? (
                                                <Send size={20} className="relative z-10 rtl:rotate-180 transition-transform group-hover/btn:translate-x-1" />
                                            ) : (
                                                <div className="relative z-10 w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            )}
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-8 text-center">
                                <p className="text-sm text-gray-500">
                                    بالضغط على إرسال، فإنك توافق على{' '}
                                    <a href="#" className="text-primary hover:text-secondary transition-colors">
                                        سياسة الخصوصية
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactCheckItem = ({ icon, title, value, color, bg }) => (
    <div 
        className="flex items-center gap-6 p-5 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
    >
        <div className={`flex-shrink-0 w-16 h-16 ${bg} rounded-2xl flex items-center justify-center ${color} group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
            {icon}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="text-right flex-1">
            <p className="text-sm text-gray-400 mb-2">{title}</p>
            <p className="text-lg font-semibold text-white tracking-wide" dir="ltr">{value}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
    </div>
);

export default Contact;