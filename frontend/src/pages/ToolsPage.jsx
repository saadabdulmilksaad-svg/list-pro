import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { fetchTools } from "../services/api";
import {
  ExternalLink, Search, Filter, Sparkles, Star,
  Zap, Crown, Users, TrendingUp, Heart, Clock,
  MessageSquare, Image as ImageIcon, Video, Music,
  Code, Palette, FileText, Brain, Globe, Lock,
  Download, Award, Rocket, Check, ThumbsUp,
  BarChart3, Zap as Lightning, Eye
} from "lucide-react";

export default function ToolsPage() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [favorites, setFavorites] = useState([]);

  // أفضل أدوات الذكاء الاصطناعي مع صور حقيقية وتفاصيل شاملة
  const topAITools = useMemo(() => [
    {
      id: 1,
      name: "ChatGPT 4",
      desc: "أقوى مساعد ذكي للدردشة والكتابة من OpenAI، يدعم المهام المعقدة والبرمجة",
      category: "Chat & Assistants",
      price: "مدفوع",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://chat.openai.com",
      rating: 4.9,
      tags: ["نصوص", "برمجة", "إبداع"],
      features: ["دعم 50 لغة", "برمجة متقدمة", "تحليل بيانات"],
      users: "100M+"
    },
    {
      id: 2,
      name: "Midjourney",
      desc: "أفضل أداة لتوليد الصور الفنية والرسومات بواسطة الذكاء الاصطناعي بدقة خيالية",
      category: "Image Generation",
      price: "مدفوع",
      image: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://midjourney.com",
      rating: 4.8,
      tags: ["صور", "فن", "تصميم"],
      features: ["جودة 4K", "أنماط فنية متعددة", "سرعة عالية"],
      users: "15M+"
    },
    {
      id: 3,
      name: "GitHub Copilot",
      desc: "مساعد برمجي ذكي يقدم اقتراحات للكود أثناء الكتابة بدعم جميع اللغات",
      category: "Programming",
      price: "مدفوع",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://github.com/features/copilot",
      rating: 4.7,
      tags: ["برمجة", "تطوير", "مساعد"],
      features: ["دعم 30+ لغة", "تكامل مع VS Code", "تعلم تلقائي"],
      users: "2M+"
    },
    {
      id: 4,
      name: "DALL-E 3",
      desc: "منصة OpenAI لتوليد الصور من النصوص بدقة فائقة وتفاصيل واقعية",
      category: "Image Generation",
      price: "مجاني",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://openai.com/dall-e-3",
      rating: 4.6,
      tags: ["صور", "نصوص", "OpenAI"],
      features: ["جودة فائقة", "تفاصيل دقيقة", "مجاني للاستخدام"],
      users: "50M+"
    },
    {
      id: 5,
      name: "Claude AI",
      desc: "مساعد ذكي متقدم من Anthropic مع قدرات تحليلية فائقة وسياق طويل جداً",
      category: "Chat & Assistants",
      price: "مجاني",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://claude.ai",
      rating: 4.8,
      tags: ["دردشة", "تحليل", "بحث"],
      features: ["سياق 100K", "تحليل مستندات", "تفكير منطقي"],
      users: "10M+"
    },
    {
      id: 6,
      name: "Stable Diffusion",
      desc: "أداة مفتوحة المصدر لتوليد الصور مع تحكم كامل في المعايير والإعدادات",
      category: "Image Generation",
      price: "مجاني",
      image: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://stability.ai",
      rating: 4.5,
      tags: ["صور", "مفتوح المصدر", "متقدم"],
      features: ["مفتوح المصدر", "تحكم كامل", "قابل للتخصيص"],
      users: "8M+"
    },
    {
      id: 7,
      name: "Grammarly AI",
      desc: "مساعد كتابة ذكي يحسن النصوص وينقحها مع اقتراحات إبداعية",
      category: "Chat & Assistants",
      price: "Freemium",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://grammarly.com",
      rating: 4.7,
      tags: ["كتابة", "تدقيق", "إنتاجية"],
      features: ["تدقيق لغوي", "تحسين أسلوب", "اقتراحات ذكية"],
      users: "30M+"
    },
    {
      id: 8,
      name: "Runway ML",
      desc: "منصة متكاملة للفيديو والرسوم المتحركة باستخدام الذكاء الاصطناعي",
      category: "Video & Animation",
      price: "مدفوع",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://runwayml.com",
      rating: 4.6,
      tags: ["فيديو", "رسوم متحركة", "إبداع"],
      features: ["تعديل فيديو", "توليد حركات", "مؤثرات خاصة"],
      users: "5M+"
    },
    {
      id: 9,
      name: "Notion AI",
      desc: "دمج الذكاء الاصطناعي في أداة الإنتاجية الأشهر لإدارة المهام والملاحظات",
      category: "Productivity",
      price: "مدفوع",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://notion.so",
      rating: 4.4,
      tags: ["إنتاجية", "تنظيم", "كتابة"],
      features: ["تنظيم مشاريع", "كتابة ذكية", "قوالب جاهزة"],
      users: "20M+"
    },
    {
      id: 10,
      name: "ElevenLabs",
      desc: "أفضل منصة لتوليد الصوت البشري الطبيعي باستخدام الذكاء الاصطناعي",
      category: "Voice AI",
      price: "Freemium",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://elevenlabs.io",
      rating: 4.7,
      tags: ["صوت", "توليد", "طبيعي"],
      features: ["أصوات طبيعية", "دعم عربي", "تحكم في المشاعر"],
      users: "3M+"
    },
    {
      id: 11,
      name: "Jasper AI",
      desc: "أداة كتابة تسويقية محترفة تدعم إنشاء محتوى بأكثر من 30 لغة",
      category: "Marketing",
      price: "مدفوع",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://jasper.ai",
      rating: 4.5,
      tags: ["تسويق", "كتابة", "محتوى"],
      features: ["قوالب تسويقية", "تحسين SEO", "تحليل جمهور"],
      users: "1M+"
    },
    {
      id: 12,
      name: "Leonardo AI",
      desc: "منصة متقدمة لتوليد الصور مع أدوات تحرير وتعديل قوية للأصول الفنية",
      category: "Image Generation",
      price: "Freemium",
      image: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://leonardo.ai",
      rating: 4.3,
      tags: ["صور", "تصميم", "فن"],
      features: ["أدوات تحرير", "أنماط متعددة", "جودة عالية"],
      users: "2M+"
    },
    {
      id: 13,
      name: "Descript",
      desc: "أداة ثورية لتحرير الصوت والفيديو تجعل تحرير الوسائط سهلاً مثل تحرير المستندات النصية",
      category: "Video & Animation",
      price: "Freemium",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.descript.com",
      rating: 4.6,
      tags: ["فيديو", "صوت", "تحرير"],
      features: ["تحرير نصي", "إزالة الصمت", "استنساخ الصوت"],
      users: "5M+"
    },
    {
      id: 14,
      name: "Synthesia",
      desc: "أنشئ فيديوهات احترافية بمقدمين افتراضيين (AI Avatars) من خلال كتابة النص فقط",
      category: "Video & Animation",
      price: "مدفوع",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.synthesia.io",
      rating: 4.7,
      tags: ["فيديو", "أفاتار", "نصوص"],
      features: ["120+ لغة", "أفاتار واقعي", "قوالب جاهزة"],
      users: "1M+"
    },
    {
      id: 15,
      name: "Beautiful.ai",
      desc: "صمم عروضاً تقديمية مبهرة في دقائق حيث يتكفل الذكاء الاصطناعي بالتنسيق والتصميم",
      category: "Productivity",
      price: "مدفوع",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.beautiful.ai",
      rating: 4.5,
      tags: ["عرض تقديمي", "تصميم", "أعمال"],
      features: ["تصميم ذكي", "قوالب مرنة", "رسسوم بيانية"],
      users: "2M+"
    },
    {
      id: 16,
      name: "Perplexity AI",
      desc: "محرك بحث مدعوم بالذكاء الاصطناعي يقدم إجابات دقيقة مع مصادر موثوقة في الوقت الفعلي",
      category: "Chat & Assistants",
      price: "مجاني",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.perplexity.ai",
      rating: 4.8,
      tags: ["بحث", "معرفة", "مصادر"],
      features: ["بحث مباشر", "مصادر موثوقة", "تطبيق جوال"],
      users: "10M+"
    },
    {
      id: 17,
      name: "Copy.ai",
      desc: "منصة كتابة تسويقية تساعدك على إنشاء محتوى عالي الجودة للمدونات والإعلانات والبريد الإلكتروني",
      category: "Marketing",
      price: "Freemium",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.copy.ai",
      rating: 4.6,
      tags: ["تسويق", "كتابة", "إعلانات"],
      features: ["90+ قالب", "لغات متعددة", "تحسين محركات البحث"],
      users: "8M+"
    },
    {
      id: 18,
      name: "Otter.ai",
      desc: "مساعد اجتماعات ذكي يقوم بتسجيل الاجتماعات وتحويل الصوت إلى نص وتلخيص النقاط الرئيسية",
      category: "Productivity",
      price: "Freemium",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://otter.ai",
      rating: 4.5,
      tags: ["اجتماعات", "تلخيص", "صوت"],
      features: ["نسخ تلقائي", "تلخيص ذكي", "تكامل Zoom"],
      users: "12M+"
    },
    {
      id: 19,
      name: "Gamma",
      desc: "وسيلة جديدة لعرض الأفكار، مدعومة بالذكاء الاصطناعي. أنشئ عروضاً تقديمية ومستندات ومواقع ويب جميلة",
      category: "Productivity",
      price: "Freemium",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://gamma.app",
      rating: 4.7,
      tags: ["عروض", "وثائق", "ويب"],
      features: ["إنشاء بنقر واحدة", "تنسيق مرن", "تفاعل حي"],
      users: "4M+"
    },
    {
      id: 20,
      name: "Krea AI",
      desc: "أداة توليد وتحسين الصور في الوقت الفعلي، تمنحك سيطرة كاملة على التكوين والأسلوب بدقة عالية",
      category: "Image Generation",
      price: "Freemium",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "https://www.krea.ai",
      rating: 4.6,
      tags: ["صور", "ريل تايم", "تصميم"],
      features: ["توليد فوري", "تحسين الجودة", "تحكم بالأدوات"],
      users: "1M+"
    }
  ], []);

  useEffect(() => {
    const loadTools = async () => {
      try {
        setLoading(true);
        const data = await fetchTools();
        setTools(data.length > 0 ? data : topAITools);
      } catch (err) {
        console.error("Error loading tools:", err);
        setTools(topAITools);
      } finally {
        setLoading(false);
      }
    };

    loadTools();
  }, [topAITools]);

  const categories = useMemo(() => {
    // Calculate counts dynamically
    const counts = topAITools.reduce((acc, tool) => {
      acc[tool.category] = (acc[tool.category] || 0) + 1;
      return acc;
    }, {});

    return [
      { id: "all", name: "جميع الأدوات", icon: <Brain className="w-5 h-5" />, count: topAITools.length },
      { id: "Chat & Assistants", name: "مساعدات ذكية", icon: <MessageSquare className="w-5 h-5" />, count: counts["Chat & Assistants"] || 0 },
      { id: "Image Generation", name: "توليد الصور", icon: <ImageIcon className="w-5 h-5" />, count: counts["Image Generation"] || 0 },
      { id: "Video & Animation", name: "فيديو ورسوم", icon: <Video className="w-5 h-5" />, count: counts["Video & Animation"] || 0 },
      { id: "Productivity", name: "إنتاجية", icon: <Zap className="w-5 h-5" />, count: counts["Productivity"] || 0 },
      { id: "Marketing", name: "تسويق ومحتوى", icon: <FileText className="w-5 h-5" />, count: counts["Marketing"] || 0 },
      { id: "Programming", name: "برمجة وتطوير", icon: <Code className="w-5 h-5" />, count: counts["Programming"] || 0 },
      { id: "Voice AI", name: "أصوات ذكية", icon: <Music className="w-5 h-5" />, count: counts["Voice AI"] || 0 },
    ];
  }, [topAITools]);

  const filteredTools = useMemo(() => {
    return topAITools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;

      const matchesPrice = priceFilter === "all" ||
        (priceFilter === "free" && tool.price === "مجاني") ||
        (priceFilter === "paid" && tool.price === "مدفوع") ||
        (priceFilter === "freemium" && tool.price === "Freemium");

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [topAITools, searchTerm, selectedCategory, priceFilter]);

  const stats = useMemo(() => ({
    total: topAITools.length,
    free: topAITools.filter(t => t.price === "مجاني").length,
    paid: topAITools.filter(t => t.price === "مدفوع").length,
    freemium: topAITools.filter(t => t.price === "Freemium").length,
    categories: new Set(topAITools.map(t => t.category)).size,
    averageRating: (topAITools.reduce((acc, t) => acc + t.rating, 0) / topAITools.length).toFixed(1),
    totalUsers: "200M+"
  }), [topAITools]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative inline-block">
            <div className="w-24 h-24 border-[3px] border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
            <Sparkles className="absolute inset-0 m-auto w-10 h-10 text-blue-400 animate-pulse" />
          </div>
          <div>
            <p className="text-2xl text-white font-bold mb-2">🎯 جار تحميل أقوى أدوات الذكاء الاصطناعي</p>
            <p className="text-gray-400">نعد لك تجربة استثنائية مع أفضل الأدوات العالمية</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <div className="pt-20 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-full border border-white/10 mb-6">
              <Rocket className="w-5 h-5 text-blue-400 animate-bounce" />
              <span className="text-sm font-bold text-blue-400">موسوعة الذكاء الاصطناعي 2024</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-400"></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
                مستقبل الإبداع
              </span>
              <br />
              <span className="text-white/90">بين يديك</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              اكتشف أقوى {stats.total} أداة ذكاء اصطناعي تُستخدم من قبل أكثر من {stats.totalUsers} شخص حول العالم
              لتحويل أفكارك إلى واقع ملموس.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-12">
            <div className="col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-500/10 to-blue-900/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">إجمالي الأدوات</p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">{stats.total}</span>
                    <span className="text-sm text-blue-400">أداة</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-900/10 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">مجانية</p>
                  <span className="text-2xl font-bold text-green-400">{stats.free}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-900/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">متوسط التقييم</p>
                  <span className="text-2xl font-bold text-purple-400">{stats.averageRating}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-pink-900/10 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">التصنيفات</p>
                  <span className="text-2xl font-bold text-pink-400">{stats.categories}</span>
                </div>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-2 bg-gradient-to-br from-orange-500/10 to-orange-900/10 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">إجمالي المستخدمين</p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">{stats.totalUsers}</span>
                    <span className="text-sm text-orange-400">مستخدم</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Search */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="بحث في الأدوات..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl py-3 pr-10 pl-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 placeholder:text-gray-500"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-purple-400" />
                  تصنيفات الأدوات
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${selectedCategory === cat.id ? 'bg-blue-500/20' : 'bg-white/5'}`}>
                          {cat.icon}
                        </div>
                        <span className="text-sm font-medium">{cat.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${selectedCategory === cat.id ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-400'}`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5">
                <h3 className="text-lg font-bold text-white mb-4">نوع السعر</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "all", label: "الكل", color: "bg-blue-500/20 text-blue-400" },
                    { id: "free", label: "مجانية", color: "bg-green-500/20 text-green-400" },
                    { id: "paid", label: "مدفوعة", color: "bg-purple-500/20 text-purple-400" },
                    { id: "freemium", label: "Freemium", color: "bg-orange-500/20 text-orange-400" }
                  ].map((price) => (
                    <button
                      key={price.id}
                      onClick={() => setPriceFilter(price.id)}
                      className={`p-3 rounded-xl border transition-all duration-300 ${priceFilter === price.id
                        ? `${price.color} border-current`
                        : 'border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <span className="text-sm font-medium">{price.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Features */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-white/10 p-5">
                <h3 className="text-lg font-bold text-white mb-4">✨ مميزات فريدة</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <Lightning className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-gray-300">أدوات تستخدمها الشركات العالمية</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <Lock className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-gray-300">مجانية بنسبة {Math.round((stats.free / stats.total) * 100)}%</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-300">تصنيف عالي {stats.averageRating}/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="lg:col-span-3">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedCategory === "all" ? "أفضل أدوات الذكاء الاصطناعي" :
                      categories.find(c => c.id === selectedCategory)?.name}
                  </h2>
                  <p className="text-gray-400">
                    <span className="text-white font-bold">{filteredTools.length}</span> أداة متاحة
                    {searchTerm && ` للبحث عن "${searchTerm}"`}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-xl p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-all ${viewMode === "grid"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">◼◼</div>
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-lg transition-all ${viewMode === "list"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                    >
                      <div className="w-5 h-5 flex items-center justify-center">☰</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Tools Display */}
              {filteredTools.length > 0 ? (
                <div className={viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-6"
                }>
                  {filteredTools.map((tool) => (
                    <div
                      key={tool.id}
                      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${viewMode === "grid"
                        ? "bg-gradient-to-b from-white/5 to-transparent border-white/10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
                        : "bg-white/5 border-white/10 hover:border-purple-500/50 flex flex-col md:flex-row"
                        }`}
                    >
                      {/* Premium Badge */}
                      {tool.rating >= 4.7 && (
                        <div className="absolute top-3 left-3 z-20">
                          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white">
                            <Star className="w-3 h-3 fill-white" />
                            <span>الأفضل</span>
                          </div>
                        </div>
                      )}

                      {/* Favorite Button */}
                      <button className="absolute top-3 right-3 z-20 p-2 bg-black/60 backdrop-blur-md rounded-full hover:bg-black/80 transition-all">
                        <Heart className="w-5 h-5 text-gray-400 hover:text-red-400" />
                      </button>

                      {/* Image */}
                      <div className={`relative overflow-hidden ${viewMode === "grid" ? "h-56" : "md:w-64 h-56 md:h-auto"}`}>
                        <img
                          src={tool.image}
                          alt={tool.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                        {/* Overlay Info */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between">
                            <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-sm font-bold text-white">
                              {tool.category}
                            </span>
                            <div className="flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-md rounded-full">
                              <Users className="w-3 h-3 text-gray-300" />
                              <span className="text-xs text-gray-300">{tool.users}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`p-5 flex-1 ${viewMode === "list" ? "flex flex-col justify-between" : ""}`}>
                        <div>
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                              {tool.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-lg text-xs font-bold ${tool.price === "مجاني"
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : tool.price === "مدفوع"
                                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                  : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                }`}>
                                {tool.price}
                              </span>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="text-sm font-bold text-white">{tool.rating}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                            {tool.desc}
                          </p>

                          {/* Features */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {tool.features.slice(0, 2).map((feature, idx) => (
                              <span key={idx} className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-md text-xs text-gray-400">
                                <Check className="w-3 h-3 text-green-400" />
                                {feature}
                              </span>
                            ))}
                          </div>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {tool.tags.map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md text-xs text-blue-400">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Actions */}
                        <div className="flex gap-3">
                          <Link
                            to={`/tools/${tool.id}`}
                            className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-semibold transition-colors group/btn"
                          >
                            <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                            عرض التفاصيل
                          </Link>
                          <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/25 group/btn"
                          >
                            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                            زيارة الموقع
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm rounded-3xl border border-white/10">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-6">
                    <Search className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">لا توجد نتائج</h3>
                  <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                    جرب استخدام فلترات مختلفة أو تصفح جميع الفئات
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                      setPriceFilter("all");
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-600/25"
                  >
                    عرض جميع الأدوات
                  </button>
                </div>
              )}
              {/* Recommendation */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <ThumbsUp className="w-5 h-5 text-blue-400" />
                      اكتشف أدوات تناسب احتياجاتك
                    </h4>
                    <p className="text-gray-400">
                      أدواتنا مصنفة بناءً على آراء أكثر من {stats.totalUsers} مستخدم حول العالم
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all">
                      <Download className="w-4 h-4 inline mr-2" />
                      دليل PDF
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white hover:from-blue-500 hover:to-purple-500 transition-all">
                      اشترك في التحديثات
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



