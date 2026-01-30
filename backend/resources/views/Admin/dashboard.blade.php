@extends('admin.layouts.app')

@section('title', 'لوحة التحكم - Bool Tools')
@section('page-title', 'لوحة التحكم')

@section('content')
<!-- Welcome Section -->
<div class="mb-8">
    <div class="bg-gradient-to-r from-primary-800 to-primary-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl"></div>
        
        <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between">
            <div>
                <h1 class="text-4xl font-black mb-3 text-white tracking-tight">مرحباً بك، {{ Auth::guard('admin')->user()->name }}! 👋</h1>
                <p class="text-primary-100 text-lg font-medium">لوحة تحكم متقدمة لإدارة منصة الذكاء الاصطناعي الخاصة بك.</p>
            </div>
            <div class="mt-6 lg:mt-0">
                <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 flex items-center gap-4">
                    <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                        <i class="fas fa-calendar-alt text-xl"></i>
                    </div>
                    <div>
                        <p class="text-xs text-primary-200 font-bold uppercase tracking-wider">التاريخ الحالي</p>
                        <p class="text-xl font-bold text-white font-mono">{{ now()->format('d M Y') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Statistics Cards -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <!-- Total Tools Card -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
        <div class="flex justify-between items-start z-10 relative">
            <div>
                <p class="text-slate-500 font-bold text-[11px] uppercase tracking-wider mb-2">إجمالي الأدوات</p>
                <h3 class="text-4xl font-black text-slate-800 tracking-tight">{{ $stats['total_tools'] }}</h3>
            </div>
            <div class="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <i class="fas fa-tools text-xl"></i>
            </div>
        </div>
        <div class="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-lg">
            <i class="fas fa-arrow-up text-xs"></i>
            <span>+{{ $recentTools->count() }} جديدة</span>
        </div>
    </div>

    <!-- Categories Card -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
        <div class="flex justify-between items-start z-10 relative">
            <div>
                <p class="text-slate-500 font-bold text-[11px] uppercase tracking-wider mb-2">الفئات</p>
                <h3 class="text-4xl font-black text-slate-800 tracking-tight">{{ $stats['total_categories'] }}</h3>
            </div>
            <div class="w-12 h-12 bg-secondary-50 rounded-2xl flex items-center justify-center text-secondary-600 group-hover:bg-secondary-600 group-hover:text-white transition-all duration-300">
                <i class="fas fa-layer-group text-xl"></i>
            </div>
        </div>
         <div class="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500">
            <span>تنوع في القسم</span>
        </div>
    </div>

    <!-- Admin Users Card -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
        <div class="flex justify-between items-start z-10 relative">
            <div>
                <p class="text-slate-500 font-bold text-[11px] uppercase tracking-wider mb-2">الأدمن النشطين</p>
                <h3 class="text-4xl font-black text-slate-800 tracking-tight">{{ $stats['active_admins'] }}</h3>
            </div>
            <div class="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <i class="fas fa-users-cog text-xl"></i>
            </div>
        </div>
        <div class="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500">
            <span>من أصل {{ $stats['total_admins'] }} إجمالي</span>
        </div>
    </div>

    <!-- Tools Growth Card -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
         <div class="flex justify-between items-start z-10 relative">
            <div>
                <p class="text-slate-500 font-bold text-[11px] uppercase tracking-wider mb-2">نمو المنصة</p>
                <h3 class="text-4xl font-black text-slate-800 tracking-tight">+12%</h3>
            </div>
            <div class="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <i class="fas fa-chart-line text-xl"></i>
            </div>
        </div>
        <div class="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-lg">
            <i class="fas fa-arrow-up text-xs"></i>
            <span>أداء ممتاز</span>
        </div>
    </div>
</div>

<!-- Charts Section -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    <!-- Line Chart - Tools Added Over Time -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span class="w-1 h-6 bg-primary-500 rounded-full"></span>
                نمو الأدوات
            </h3>
            <div class="flex items-center space-x-2 space-x-reverse text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                <i class="fas fa-chart-line"></i>
                <span>آخر 30 يوم</span>
            </div>
        </div>
        <div class="relative h-72">
            <canvas id="toolsGrowthChart"></canvas>
        </div>
    </div>

    <!-- Pie Chart - Tools by Category -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span class="w-1 h-6 bg-secondary-500 rounded-full"></span>
                توزيع الفئات
            </h3>
        </div>
        <div class="relative h-72 flex justify-center">
            <canvas id="categoriesChart"></canvas>
        </div>
    </div>
</div>

<!-- Recent Tools & Activity -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
    <!-- Recent Tools Table -->
    <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span class="w-1 h-6 bg-emerald-500 rounded-full"></span>
                أحدث الأدوات
            </h3>
            <a href="{{ route('admin.tools.index') }}" class="text-primary-600 hover:text-primary-700 text-sm font-bold flex items-center gap-1 transition-colors">
                عرض الكل <i class="fas fa-arrow-left"></i>
            </a>
        </div>
        
        <div class="space-y-4">
            @forelse($recentTools as $tool)
                <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200 group">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <i class="fas fa-rocket text-xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-800">{{ $tool->name }}</h4>
                            <p class="text-xs text-slate-500 font-medium">{{ $tool->category }}</p>
                        </div>
                    </div>
                    <div class="text-left">
                        <div class="text-xs font-bold text-slate-400 mb-1">{{ $tool->created_at->format('d/m/Y') }}</div>
                        @if($tool->price)
                            <span class="inline-block px-2 py-0.5 bg-slate-200 text-slate-600 text-[10px] font-bold rounded-md">{{ $tool->price }}</span>
                        @else
                            <span class="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded-md">مجاني</span>
                        @endif
                    </div>
                </div>
            @empty
                <div class="text-center py-12 text-slate-400">
                    <i class="fas fa-inbox text-4xl mb-3 opacity-50"></i>
                    <p class="font-medium">لا توجد أدوات جديدة</p>
                </div>
            @endforelse
        </div>
    </div>

    <!-- Popular Tools (Simplified Activity for now) -->
    <div class="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div class="flex items-center justify-between mb-6">
             <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span class="w-1 h-6 bg-purple-500 rounded-full"></span>
                شائع الآن
            </h3>
        </div>
        
        <div class="space-y-3">
             @forelse($popularTools->take(4) as $tool)
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
                        <span class="font-bold text-sm">{{ substr($tool->name, 0, 1) }}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h5 class="font-bold text-slate-800 text-sm truncate">{{ $tool->name }}</h5>
                        <div class="flex items-center gap-2">
                            <span class="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">{{ $tool->category }}</span>
                        </div>
                    </div>
                    <i class="fas fa-chevron-left text-slate-300 text-xs group-hover:text-primary-500 transition-colors"></i>
                </div>
             @empty
                <p class="text-center text-slate-400 py-4 text-sm">لا توجد بيانات كافية</p>
             @endforelse
        </div>
        
        <div class="mt-6 pt-6 border-t border-slate-100">
             <h4 class="font-bold text-slate-800 text-sm mb-4">إجراءات سريعة</h4>
             <div class="grid grid-cols-2 gap-3">
                 <a href="{{ route('admin.tools.create') }}" class="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-colors group border border-transparent hover:border-primary-100">
                     <i class="fas fa-plus-circle text-xl mb-2 text-slate-400 group-hover:text-primary-500"></i>
                     <span class="text-xs font-bold">إضافة أداة</span>
                 </a>
                 <button class="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-xl hover:bg-secondary-50 hover:text-secondary-600 transition-colors group border border-transparent hover:border-secondary-100">
                     <i class="fas fa-file-csv text-xl mb-2 text-slate-400 group-hover:text-secondary-500"></i>
                     <span class="text-xs font-bold">تصدير</span>
                 </button>
             </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
    // Common Chart Options
    Chart.defaults.font.family = 'Cairo';
    Chart.defaults.color = '#64748b';
    
    // Tools Growth Chart
    const toolsGrowthCtx = document.getElementById('toolsGrowthChart').getContext('2d');
    new Chart(toolsGrowthCtx, {
        type: 'line',
        data: {
            labels: @json($chartData['labels']),
            datasets: [{
                label: 'الأدوات',
                data: @json($chartData['data']),
                borderColor: '#6366f1',
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.2)');
                    gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
                    return gradient;
                },
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#6366f1',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e293b',
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false,
                    titleFont: { size: 13 },
                    bodyFont: { size: 14, weight: 'bold' }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { borderDash: [4, 4], color: '#f1f5f9' },
                    ticks: { stepSize: 1 }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });

    // Categories Pie Chart
    const categoriesCtx = document.getElementById('categoriesChart').getContext('2d');
    new Chart(categoriesCtx, {
        type: 'doughnut',
        data: {
            labels: @json($toolsByCategory->pluck('category')),
            datasets: [{
                data: @json($toolsByCategory->pluck('count')),
                backgroundColor: [
                    '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e',
                    '#f59e0b', '#10b981', '#06b6d4', '#3b82f6'
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 20,
                        font: { size: 11 }
                    }
                }
            },
            cutout: '75%'
        }
    });
</script>
@endpush
