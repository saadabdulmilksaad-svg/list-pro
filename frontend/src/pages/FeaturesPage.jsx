import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturesSection from '../components/Features';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-bg to-bg/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 text-muted hover:text-text transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
            العودة إلى الرئيسية
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              مميزات <span className="text-gradient">متقدمة</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              استكشف مجموعة واسعة من التقنيات المتطورة التي نقدمها لمساعدتك في تحقيق أهدافك
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Additional Content */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              لماذا تختار منصتنا؟
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              نقدم لك أفضل الحلول التقنية بأحدث التقنيات وأعلى معايير الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-bg/50 border border-white/5">
              <div className="text-4xl font-bold text-primary mb-4">99.9%</div>
              <h3 className="text-xl font-semibold text-white mb-2">دقة عالية</h3>
              <p className="text-muted">نتائج دقيقة وموثوقة في جميع العمليات</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-bg/50 border border-white/5">
              <div className="text-4xl font-bold text-secondary mb-4">24/7</div>
              <h3 className="text-xl font-semibold text-white mb-2">دعم مستمر</h3>
              <p className="text-muted">فريق دعم متاح طوال الوقت لمساعدتك</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-bg/50 border border-white/5">
              <div className="text-4xl font-bold text-accent mb-4">أسرع</div>
              <h3 className="text-xl font-semibold text-white mb-2">أداء فائق</h3>
              <p className="text-muted">معالجة سريعة وفعالة لجميع المهام</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
