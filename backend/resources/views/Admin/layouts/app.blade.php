<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'لوحة التحكم - Bool Tools')</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
    <!-- Custom Configuration -->
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        'cairo': ['Cairo', 'sans-serif'],
                    },
                    colors: {
                        primary: {
                            50: '#eef2ff',
                            100: '#e0e7ff',
                            200: '#c7d2fe',
                            300: '#a5b4fc',
                            400: '#818cf8',
                            500: '#6366f1',
                            600: '#4f46e5',
                            700: '#4338ca',
                            800: '#3730a3',
                            900: '#312e81',
                            950: '#1e1b4b',
                        },
                        secondary: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            200: '#bae6fd',
                            300: '#7dd3fc',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e',
                            950: '#082f49',
                        },
                        dark: {
                            900: '#0f172a',
                            800: '#1e293b',
                            700: '#334155',
                        }
                    }
                }
            }
        }
    </script>
    
    <style>
        body {
            font-family: 'Cairo', sans-serif;
            background-color: #f8fafc;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 99px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
        
        /* Sidebar Glass Effect */
        .sidebar {
            background: #0f172a;
            position: relative;
            overflow: hidden;
        }
        
        .sidebar::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 40%),
                        radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.1), transparent 40%);
            pointer-events: none;
        }

        .sidebar-item {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        
        .sidebar-item:hover, .sidebar-item.active {
            background: rgba(255, 255, 255, 0.08);
            color: #ffffff;
        }

        .sidebar-item.active {
            background: linear-gradient(90deg, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.05) 100%);
            border-right: 3px solid #6366f1;
        }
        
        .sidebar-item:not(.active):hover {
            border-right: 3px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Smooth Fade In */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 font-cairo antialiased selection:bg-primary-500 selection:text-white">
    
    <!-- Mobile Menu Overlay -->
    <div id="mobileMenuOverlay" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 hidden lg:hidden transition-opacity"></div>
    
    <!-- Sidebar -->
    <aside id="sidebar" class="sidebar fixed top-0 right-0 h-full w-72 text-white shadow-2xl shadow-slate-900/20 z-50 transform translate-x-full lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300">
        
        <!-- Logo Section -->
        <div class="px-6 py-8 border-b border-white/5 relative z-10">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                    <i class="fas fa-brain text-white text-xl"></i>
                </div>
                <div>
                    <h1 class="text-2xl font-bold tracking-tight text-white">Bool Tools</h1>
                    <div class="flex items-center gap-1.5 mt-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        <p class="text-slate-400 text-xs font-medium">لوحة الإدارة</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- User Profile Short -->
        <div class="px-6 py-6 border-b border-white/5 bg-white/[0.02] relative z-10">
            <div class="flex items-center gap-4">
                <div class="relative group cursor-pointer">
                    <img src="https://ui-avatars.com/api/?name={{ Auth::guard('admin')->user()->name }}&background=6366f1&color=fff&size=48&bold=true" 
                         alt="{{ Auth::guard('admin')->user()->name }}" 
                         class="w-11 h-11 rounded-full border-2 border-white/10 group-hover:border-primary-500 transition-colors">
                    <div class="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
                </div>
                <div class="overflow-hidden">
                    <p class="font-bold text-sm text-slate-100 truncate">{{ Auth::guard('admin')->user()->name }}</p>
                    <p class="text-slate-500 text-xs truncate mt-0.5">{{ Auth::guard('admin')->user()->email }}</p>
                </div>
            </div>
        </div>
        
        <!-- Navigation Menu -->
        <nav class="p-4 space-y-1.5 overflow-y-auto h-[calc(100%-230px)] relative z-10 custom-scrollbar">
            <p class="px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3 mt-3">القائمة الرئيسية</p>
            
            <a href="{{ route('admin.dashboard') }}" 
               class="sidebar-item flex items-center gap-3.5 px-4 py-3 rounded-xl text-slate-300 {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}">
                <i class="fas fa-home w-5 text-center text-lg {{ request()->routeIs('admin.dashboard') ? 'text-primary-400' : 'text-slate-400' }}"></i>
                <span class="font-medium text-sm">الرئيسية</span>
            </a>
            
            <!-- Tools Dropdown -->
            <div class="menu-group">
                <button onclick="toggleSubmenu('toolsSubmenu')" 
                        class="sidebar-item w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-300 group {{ request()->routeIs('admin.tools.*') ? 'bg-white/5' : '' }}">
                    <div class="flex items-center gap-3.5">
                        <i class="fas fa-layer-group w-5 text-center text-lg {{ request()->routeIs('admin.tools.*') ? 'text-primary-400' : 'text-slate-400' }} group-hover:text-primary-400 transition-colors"></i>
                        <span class="font-medium text-sm">الأدوات</span>
                    </div>
                    <i class="fas fa-chevron-left w-3.5 h-3.5 text-[10px] transition-transform duration-200 opacity-60 group-hover:opacity-100" id="toolsSubmenuIcon"></i>
                </button>
                <div id="toolsSubmenu" class="{{ request()->routeIs('admin.tools.*') ? '' : 'hidden' }} pr-4 mt-2 mb-2 space-y-1">
                    <a href="{{ route('admin.tools.index') }}" class="flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-all {{ request()->routeIs('admin.tools.index') ? 'text-white bg-primary-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5' }}">
                        <span class="w-1.5 h-1.5 rounded-full {{ request()->routeIs('admin.tools.index') ? 'bg-primary-500' : 'bg-slate-600' }}"></span>
                         جميع الأدوات
                    </a>
                    <a href="{{ route('admin.tools.create') }}" class="flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-all {{ request()->routeIs('admin.tools.create') ? 'text-white bg-primary-500/10' : 'text-slate-400 hover:text-white hover:bg-white/5' }}">
                        <span class="w-1.5 h-1.5 rounded-full {{ request()->routeIs('admin.tools.create') ? 'bg-primary-500' : 'bg-slate-600' }}"></span>
                         إضافة أداة
                    </a>
                </div>
            </div>
            
            <p class="px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3 mt-8">الإدارة</p>

            <a href="#" class="sidebar-item flex items-center gap-3.5 px-4 py-3 rounded-xl text-slate-300">
                <i class="fas fa-users w-5 text-center text-lg text-slate-400"></i>
                <span class="font-medium text-sm">المستخدمين</span>
            </a>
            
            <a href="#" class="sidebar-item flex items-center gap-3.5 px-4 py-3 rounded-xl text-slate-300">
                <i class="fas fa-chart-pie w-5 text-center text-lg text-slate-400"></i>
                <span class="font-medium text-sm">التقارير</span>
            </a>
            
            <a href="#" class="sidebar-item flex items-center gap-3.5 px-4 py-3 rounded-xl text-slate-300">
                <i class="fas fa-cog w-5 text-center text-lg text-slate-400"></i>
                <span class="font-medium text-sm">الإعدادات</span>
            </a>
        </nav>
        
        <!-- Logout Button -->
        <div class="absolute bottom-0 w-full p-4 border-t border-white/5 bg-slate-900/50 backdrop-blur-md z-10">
            <form action="{{ route('admin.logout') }}" method="POST">
                @csrf
                <button type="submit" class="w-full flex items-center justify-center gap-2.5 px-4 py-3 bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white rounded-xl transition-all duration-300 group shadow-lg shadow-transparent hover:shadow-red-600/20">
                    <i class="fas fa-sign-out-alt group-hover:rotate-180 transition-transform duration-300"></i>
                    <span class="font-bold text-sm">تسجيل الخروج</span>
                </button>
            </form>
        </div>
    </aside>
    
    <!-- Main Content -->
    <div class="lg:mr-72 min-h-screen flex flex-col transition-all duration-300">
        
        <!-- Top Navigation -->
        <header class="bg-white/80 backdrop-blur-lg border-b border-slate-200/60 sticky top-0 z-30 shadow-sm">
            <div class="px-4 lg:px-8 py-3.5 flex items-center justify-between">
                
                <div class="flex items-center gap-4">
                    <button onclick="toggleMobileMenu()" class="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                    <h1 class="text-xl font-bold text-slate-800 tracking-tight">@yield('page-title')</h1>
                </div>
                
                <div class="flex items-center gap-4">
                    <!-- Search -->
                    <div class="hidden md:block relative group">
                        <input type="text" placeholder="بحث سريع..." class="w-64 pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white transition-all text-sm outline-none">
                        <i class="fas fa-search absolute left-3 top-3 text-slate-400 group-focus-within:text-primary-500 transition-colors"></i>
                    </div>
                    
                    <div class="flex items-center gap-2">
                        <button class="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-50 hover:text-primary-600 transition-all relative">
                            <i class="fas fa-bell"></i>
                            <span class="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        
                        <div class="h-8 w-px bg-slate-200 mx-1"></div>
                        
                        <div class="flex items-center gap-3 pl-2 cursor-pointer hover:bg-slate-50 p-1.5 rounded-xl transition-colors">
                            <img src="https://ui-avatars.com/api/?name={{ Auth::guard('admin')->user()->name }}&background=6366f1&color=fff&size=36" 
                                 class="w-9 h-9 rounded-lg shadow-sm">
                            <i class="fas fa-chevron-down text-xs text-slate-400"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
        <!-- Page Content -->
        <main class="flex-1 p-4 lg:p-8">
            <!-- Flash Messages -->
            @if(session('success'))
                <div class="mb-6 bg-emerald-50 text-emerald-700 px-5 py-4 rounded-xl border border-emerald-100 flex items-center gap-3 shadow-sm animate-fade-in">
                    <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-check text-emerald-600 text-sm"></i>
                    </div>
                    <span class="font-medium">{{ session('success') }}</span>
                </div>
            @endif
            
            @if(session('error'))
                <div class="mb-6 bg-red-50 text-red-700 px-5 py-4 rounded-xl border border-red-100 flex items-center gap-3 shadow-sm animate-fade-in">
                    <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-exclamation text-red-600 text-sm"></i>
                    </div>
                    <span class="font-medium">{{ session('error') }}</span>
                </div>
            @endif

            @yield('content')
        </main>
        
        <!-- Footer -->
        <footer class="p-6 border-t border-slate-200/60 text-center lg:text-right text-slate-500 text-sm bg-white/50">
            <div class="flex flex-col md:flex-row justify-between items-center gap-2">
                <p>&copy; {{ date('Y') }} Bool Tools. <span class="hidden sm:inline">جميع الحقوق محفوظة.</span></p>
                <div class="flex items-center gap-1">
                    <span>صنع بحب في</span>
                    <span class="font-bold text-primary-600">Smart World</span>
                </div>
            </div>
        </footer>
    </div>
    
    <!-- JavaScript -->
    <script>
        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobileMenuOverlay');
            
            if (sidebar.classList.contains('translate-x-full')) {
                sidebar.classList.remove('translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            } else {
                sidebar.classList.add('translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }
        
        document.getElementById('mobileMenuOverlay').addEventListener('click', toggleMobileMenu);
        
        function toggleSubmenu(menuId) {
            const submenu = document.getElementById(menuId);
            const icon = document.getElementById(menuId + 'Icon');
            
            submenu.classList.toggle('hidden');
            icon.classList.toggle('-rotate-90');
        }
    </script>
    
    @stack('scripts')
</body>
</html>
