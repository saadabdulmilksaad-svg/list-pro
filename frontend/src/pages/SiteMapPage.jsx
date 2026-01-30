import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, BookOpen, Phone, Map, ArrowLeft, Globe, Users, Zap, Shield, Code, Image, Music, Video, FileText } from 'lucide-react';

const SiteMapPage = () => {
  const toolsByCategory = [
    {
      category: 'نصوص',
      icon: <FileText size={20} />,
      tools: ['ChatGPT', 'Claude', 'Google Gemini', 'Perplexity']
    },
    {
      category: 'صور',
      icon: <Image size={20} />,
      tools: ['Midjourney', 'DALL-E', 'Stable Diffusion']
    },
    {
      category: 'برمجة',
      icon: <Code size={20} />,
      tools: ['GitHub Copilot', 'Replit', 'Tabnine']
    },
    {
      category: 'صوت',
      icon: <Music size={20} />,
      tools: ['ElevenLabs', 'Murf.ai']
    },
    {
      category: 'فيديو',
      icon: <Video size={20} />,
      tools: ['RunwayML', 'Pika Labs']
    }
  ];

  const guideSteps = [
    { number: '1', title: 'فهم الأساسيات', desc: 'المفاهيم المبدئية للذكاء الاصطناعي' },
    { number: '2', title: 'فن هندسة الأوامر', desc: 'كيفية صياغة الأوامر بفعالية' },
    { number: '3', title: 'اختيار الأداة المناسبة', desc: 'تحديد الأداة التي تناسب الاحتياجات' },
    { number: '4', title: 'الأخلاقيات والتحقق', desc: 'التعامل مع محتوى الـ AI بمسؤولية' },
    { number: '5', title: 'التطوير المستمر', desc: 'مواكبة التطورات السريعة في المجال' }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 mx-auto backdrop-blur-sm">
            <Map size={20} className="text-blue-400" />
            <span className="font-bold text-blue-200">خريطة الموقع الكاملة</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            استكشف <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-purple-400">العالم الذكي</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light opacity-90">
            دليل شامل لجميع صفحات ومحتوى منصتك للذكاء الاصطناعي
          </p>
        </div>

        {/* Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 hover:bg-white/10 transition-all mb-12"
        >
          <ArrowLeft size={20} />
          <span>العودة للرئيسية</span>
        </Link>

        {/* Pages Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Home Page */}
          <div className="glass p-8 rounded-[2rem] border border-white/10" data-aos="fade-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-blue-500/20">
                <Home size={24} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">الصفحة الرئيسية</h3>
                <p className="text-gray-400 mb-4">واجهة ترحيبية تعريفية تقدم الموقع ومحتواه الرئيسي</p>
                <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">زيارة الصفحة →</Link>
              </div>
            </div>
            <div className="space-y-3 text-right">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>قسم البطل (Hero) مع شعار الموقع</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>المميزات (Features) - قدرات الذكاء الاصطناعي</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>الأثر (Impact) - تأثير الـ AI على المجتمع</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>نموذج تواصل تفاعلي</span>
              </div>
            </div>
          </div>

          {/* Tools Page */}
          <div className="glass p-8 rounded-[2rem] border border-white/10" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-green-500/20">
                <Wrench size={24} className="text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">الأدوات الذكية</h3>
                <p className="text-gray-400 mb-4">دليل شامل لأقوى أدوات الذكاء الاصطناعي المتاحة</p>
                <Link to="/tools" className="text-green-400 hover:text-green-300 transition-colors">زيارة الصفحة →</Link>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-gray-300 mb-3">
                <strong>15+ أداة في 5 تصنيفات:</strong>
              </div>
              {toolsByCategory.map((cat, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="flex items-center gap-1">
                    {cat.icon} {cat.category}: {cat.tools.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Guide Page */}
          <div className="glass p-8 rounded-[2rem] border border-white/10" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-yellow-500/20">
                <BookOpen size={24} className="text-yellow-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">دليل المبتدئين</h3>
                <p className="text-gray-400 mb-4">مسار تعليمي متكامل للمبتدئين في عالم الذكاء الاصطناعي</p>
                <Link to="/guide" className="text-yellow-400 hover:text-yellow-300 transition-colors">زيارة الصفحة →</Link>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-gray-300 mb-3">
                <strong>5 خطوات تعليمية:</strong>
              </div>
              {guideSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span>{step.number}. {step.title} - {step.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Page */}
          <div className="glass p-8 rounded-[2rem] border border-white/10" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-purple-500/20">
                <Phone size={24} className="text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">التواصل</h3>
                <p className="text-gray-400 mb-4">واجهة للتواصل المباشر مع فريق الموقع</p>
                <Link to="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">زيارة الصفحة →</Link>
              </div>
            </div>
            <div className="space-y-3 text-right">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span>نموذج اتصال تفاعلي</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span>معلومات التواصل المتاحة</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span>خيارات التواصل الاجتماعي</span>
              </div>
            </div>
          </div>

        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass p-6 rounded-[1.5rem] border border-white/10 text-center" data-aos="zoom-in">
            <div className="p-3 rounded-full bg-blue-500/20 w-fit mx-auto mb-4">
              <Wrench size={24} className="text-blue-400" />
            </div>
            <h4 className="text-3xl font-bold mb-2">15+</h4>
            <p className="text-gray-400">أداة ذكاء اصطناعي</p>
          </div>
          <div className="glass p-6 rounded-[1.5rem] border border-white/10 text-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="p-3 rounded-full bg-green-500/20 w-fit mx-auto mb-4">
              <BookOpen size={24} className="text-green-400" />
            </div>
            <h4 className="text-3xl font-bold mb-2">5</h4>
            <p className="text-gray-400">خطوات تعليمية</p>
          </div>
          <div className="glass p-6 rounded-[1.5rem] border border-white/10 text-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="p-3 rounded-full bg-purple-500/20 w-fit mx-auto mb-4">
              <Globe size={24} className="text-purple-400" />
            </div>
            <h4 className="text-3xl font-bold mb-2">4</h4>
            <p className="text-gray-400">صفحات متكاملة</p>
          </div>
        </div>

        {/* Features */}
        <div className="glass p-8 rounded-[2rem] border border-white/10" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6 text-center">مميزات الموقع التقنية</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 w-fit mx-auto mb-3">
                <Zap size={20} className="text-blue-400" />
              </div>
              <h5 className="font-bold mb-1">سرعة فائقة</h5>
              <p className="text-sm text-gray-400">تحميل فوري بفضل Vite و React 19</p>
            </div>
            <div className="text-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 w-fit mx-auto mb-3">
                <Shield size={20} className="text-green-400" />
              </div>
              <h5 className="font-bold mb-1">تصميم عصري</h5>
              <p className="text-sm text-gray-400">واجهة زجاجية وتأثيرات بصرية متقدمة</p>
            </div>
            <div className="text-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-green-500/20 w-fit mx-auto mb-3">
                <Users size={20} className="text-yellow-400" />
              </div>
              <h5 className="font-bold mb-1">دعم عربي كامل</h5>
              <p className="text-sm text-gray-400">تصميم RTL ومحتوى عربي متكامل</p>
            </div>
            <div className="text-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 w-fit mx-auto mb-3">
                <Code size={20} className="text-purple-400" />
              </div>
              <h5 className="font-bold mb-1">SPA متقدم</h5>
              <p className="text-sm text-gray-400">تصفح سلس بدون إعادة تحميل الصفحات</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SiteMapPage;
