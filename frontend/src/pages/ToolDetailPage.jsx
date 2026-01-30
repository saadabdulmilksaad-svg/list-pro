import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchToolById } from "../services/api";
import {
  ArrowRight, ExternalLink, Check, X, Repeat, Sparkles,
  Star, Zap, Clock, Users, Globe, Shield, TrendingUp,
  Download, Share2, Heart, Bookmark, Eye, ChevronLeft,
  ChevronRight, AlertCircle, Play, BookOpen, Target,
  BarChart3, Cpu, Brain, Code, Palette, MessageSquare,
  Smartphone, Monitor, Award, Crown, ThumbsUp, TrendingDown
} from "lucide-react";

export default function ToolDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const loadTool = async () => {
      try {
        setLoading(true);
        const data = await fetchToolById(id);
        setTool(data);
        
        // Check if tool is in favorites
        const favorites = JSON.parse(localStorage.getItem('aiToolsFavorites') || '[]');
        setIsFavorite(favorites.includes(data.id));
      } catch (err) {
        setError("فشل في تحميل بيانات الأداة. قد تكون الأداة غير موجودة.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTool();
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('aiToolsFavorites') || '[]');
    const newFavorites = isFavorite
      ? favorites.filter(fav => fav !== tool.id)
      : [...favorites, tool.id];
    
    localStorage.setItem('aiToolsFavorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const shareTool = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: tool.name,
          text: tool.desc,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ رابط الأداة إلى الحافظة');
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#1E1B4B] flex items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 border-[3px] border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-blue-400 animate-pulse" />
        </div>
        <p className="mt-8 text-lg text-gray-400 text-center animate-pulse">جاري تحميل تفاصيل الأداة...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#1E1B4B] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
        <div className="relative">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-10 h-10 text-red-400" />
          </div>
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-500/20 rounded-full animate-ping"></div>
        </div>
        <h2 className="text-2xl font-bold text-white">{error}</h2>
        <p className="text-gray-400">يرجى التحقق من الرابط أو المحاولة مرة أخرى</p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all duration-300"
          >
            الرجوع
          </button>
          <Link
            to="/tools"
            className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-600/25 text-center"
          >
            تصفح الأدوات
          </Link>
        </div>
      </div>
    </div>
  );

  if (!tool) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#1E1B4B] text-white pt-4 pb-20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/30 via-purple-900/20 to-transparent"></div>
        <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/tools"
            className="inline-flex items-center gap-3 px-4 py-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-300 group"
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <span className="font-medium">العودة إلى الأدوات</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleFavorite}
              className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-400"}`} />
            </button>
            <button
              onClick={shareTool}
              className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-300"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all duration-300">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Tool Card */}
            <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                {imageError ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <Brain className="w-16 h-16 text-blue-400" />
                  </div>
                ) : (
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    onError={() => setImageError(true)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-sm font-bold text-white border border-white/10">
                      {tool.category}
                    </span>
                    {tool.isNew && (
                      <span className="px-3 py-1.5 bg-green-500/20 backdrop-blur-md rounded-full text-sm font-bold text-green-400 border border-green-500/30">
                        جديد
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-white line-clamp-2">{tool.name}</h1>
                  {tool.price && (
                    <span className={`px-3 py-1.5 rounded-lg text-sm font-bold ${tool.price.includes('Free') || tool.price.includes('مجاني')
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}>
                      {tool.price}
                    </span>
                  )}
                </div>

                {/* Rating */}
                {tool.rating && (
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(tool.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
                      ))}
                    </div>
                    <span className="text-lg font-bold text-white">{tool.rating}</span>
                    <span className="text-sm text-gray-400">({tool.reviews || 0} تقييم)</span>
                  </div>
                )}

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {tool.platforms && (
                    <div className="bg-white/5 p-3 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <Monitor className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-400">المنصة</span>
                      </div>
                      <span className="text-sm font-medium text-white">{tool.platforms}</span>
                    </div>
                  )}
                  
                  {tool.difficulty && (
                    <div className="bg-white/5 p-3 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-400">المستوى</span>
                      </div>
                      <span className="text-sm font-medium text-white">{tool.difficulty}</span>
                    </div>
                  )}
                  
                  {tool.updatedAt && (
                    <div className="bg-white/5 p-3 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-400">آخر تحديث</span>
                      </div>
                      <span className="text-sm font-medium text-white">{tool.updatedAt}</span>
                    </div>
                  )}
                  
                  {tool.users && (
                    <div className="bg-white/5 p-3 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-pink-400" />
                        <span className="text-sm text-gray-400">المستخدمين</span>
                      </div>
                      <span className="text-sm font-medium text-white">{tool.users}</span>
                    </div>
                  )}
                </div>

                {/* Primary CTA */}
                <a
                  href={tool.officialLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-95 group"
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  زيارة الموقع الرسمي
                </a>

                {/* Secondary Actions */}
                <div className="grid grid-cols-2 gap-3">
                  {tool.demoLink && (
                    <a
                      href={tool.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-medium transition-all duration-300"
                    >
                      <Play className="w-4 h-4" />
                      تجربة مباشرة
                    </a>
                  )}
                  {tool.docsLink && (
                    <a
                      href={tool.docsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-medium transition-all duration-300"
                    >
                      <BookOpen className="w-4 h-4" />
                      الوثائق
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Features Card */}
            {tool.features && tool.features.length > 0 && (
              <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  أبرز المميزات
                </h3>
                <div className="space-y-3">
                  {tool.features.slice(0, 5).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-sm text-gray-300 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">فئة الأداة</p>
                    <h2 className="text-lg font-bold text-white">{tool.category}</h2>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">التقييم العام</p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-white">{tool.rating || "N/A"}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">الشعبية</p>
                    <span className="text-lg font-bold text-white">{tool.popularity || "مرتفعة"}</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  {tool.name}
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">{tool.longDesc || tool.desc}</p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex overflow-x-auto scrollbar-hide border-b border-white/10">
              {["نظرة عامة", "المميزات", "الاستخدامات", "الدعم", "المراجعات"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 relative ${activeTab === tab
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-white"
                    }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              {activeTab === "نظرة عامة" && (
                <div className="space-y-6">
                  {tool.overview && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">مقدمة</h3>
                      <p className="text-gray-300 leading-relaxed">{tool.overview}</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tool.pros && tool.pros.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-green-400 flex items-center gap-2">
                          <ThumbsUp className="w-5 h-5" />
                          المميزات
                        </h4>
                        <div className="space-y-3">
                          {tool.pros.map((pro, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-green-500/5 rounded-xl border border-green-500/10">
                              <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {tool.cons && tool.cons.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-red-400 flex items-center gap-2">
                          <TrendingDown className="w-5 h-5" />
                          العيوب
                        </h4>
                        <div className="space-y-3">
                          {tool.cons.map((con, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-red-500/5 rounded-xl border border-red-500/10">
                              <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "المميزات" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tool.features?.map((feature, idx) => (
                    <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-blue-400" />
                      </div>
                      <h4 className="font-bold text-white mb-2">الميزة {idx + 1}</h4>
                      <p className="text-sm text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "الاستخدامات" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">أبرز حالات الاستخدام</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tool.useCases?.map((useCase, idx) => (
                      <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${idx % 3 === 0 ? "bg-blue-500/10" : idx % 3 === 1 ? "bg-purple-500/10" : "bg-green-500/10"}`}>
                            {idx % 3 === 0 && <Code className="w-5 h-5 text-blue-400" />}
                            {idx % 3 === 1 && <Palette className="w-5 h-5 text-purple-400" />}
                            {idx % 3 === 2 && <MessageSquare className="w-5 h-5 text-green-400" />}
                          </div>
                          <h4 className="font-bold text-white">{useCase.title}</h4>
                        </div>
                        <p className="text-gray-300 text-sm">{useCase.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === "المراجعات" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">آراء المستخدمين</h3>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-bold text-white hover:from-blue-500 hover:to-purple-500 transition-all">
                      أضف مراجعتك
                    </button>
                  </div>
                  <div className="space-y-4">
                    {tool.reviews?.slice(0, 3).map((review, idx) => (
                      <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                              <Users className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                              <h4 className="font-bold text-white">{review.user}</h4>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`w-3 h-3 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-gray-400">{review.date}</span>
                        </div>
                        <p className="text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Alternatives Section */}
            {tool.alternatives && tool.alternatives.length > 0 && (
              <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <Repeat className="w-6 h-6 text-blue-400" />
                    أدوات بديلة مقترحة
                  </h3>
                  <Link to="/tools" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    عرض جميع الأدوات
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tool.alternatives.slice(0, 6).map((alt, idx) => (
                    <div key={idx} className="group bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${idx % 3 === 0 ? "bg-blue-500/10" : idx % 3 === 1 ? "bg-purple-500/10" : "bg-green-500/10"}`}>
                          <Cpu className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{alt.name}</h4>
                          <p className="text-xs text-gray-400">{alt.category}</p>
                        </div>
                        <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Integration & Compatibility */}
            {(tool.integrations || tool.compatibility) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tool.integrations && (
                  <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-green-400" />
                      التكاملات المتاحة
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tool.integrations.map((integration, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10">
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {tool.compatibility && (
                  <div className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-blue-400" />
                      التوافق
                    </h3>
                    <div className="flex items-center gap-4">
                      {tool.compatibility.includes('Web') && (
                        <div className="flex items-center gap-2">
                          <Monitor className="w-5 h-5 text-blue-400" />
                          <span className="text-sm text-gray-300">ويب</span>
                        </div>
                      )}
                      {tool.compatibility.includes('Mobile') && (
                        <div className="flex items-center gap-2">
                          <Smartphone className="w-5 h-5 text-green-400" />
                          <span className="text-sm text-gray-300">موبايل</span>
                        </div>
                      )}
                      {tool.compatibility.includes('Desktop') && (
                        <div className="flex items-center gap-2">
                          <Monitor className="w-5 h-5 text-purple-400" />
                          <span className="text-sm text-gray-300">سطح المكتب</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">جاهز للبدء؟</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                ابدأ باستخدام {tool.name} اليوم واختبر قوة الذكاء الاصطناعي في عملك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={tool.officialLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center justify-center gap-3"
                >
                  <Crown className="w-5 h-5" />
                  البدء مجاناً
                </a>
                <Link
                  to="/tools"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Eye className="w-5 h-5" />
                  استكشاف أدوات أخرى
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}