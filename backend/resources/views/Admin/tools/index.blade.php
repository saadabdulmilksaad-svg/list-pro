@extends('admin.layouts.app')

@section('title', 'إدارة الأدوات')
@section('page-title', 'إدارة الأدوات')

@section('content')
<!-- Header Stats -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between h-full relative overflow-hidden group">
        <div class="flex justify-between items-start z-10">
            <div>
                <p class="text-slate-500 font-bold text-[11px] uppercase tracking-wider mb-1">إجمالي الأدوات</p>
                <h3 class="text-3xl font-black text-slate-800 tracking-tight">{{ $tools->total() }}</h3>
            </div>
            <div class="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <i class="fas fa-tools text-lg"></i>
            </div>
        </div>
        <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-primary-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between h-full relative overflow-hidden group">
        <div class="flex justify-between items-start z-10">
            <div>
                <p class="text-slate-500 font-bold text-[11px] uppercase tracking-wider mb-1">أدوات مجانية</p>
                <h3 class="text-3xl font-black text-slate-800 tracking-tight">{{ $tools->whereNull('price')->count() }}</h3>
            </div>
            <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <i class="fas fa-gift text-lg"></i>
            </div>
        </div>
        <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between h-full relative overflow-hidden group">
        <div class="flex justify-between items-start z-10">
            <div>
                <p class="text-slate-500 font-bold text-[11px] uppercase tracking-wider mb-1">أدوات مدفوعة</p>
                <h3 class="text-3xl font-black text-slate-800 tracking-tight">{{ $tools->whereNotNull('price')->count() }}</h3>
            </div>
            <div class="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <i class="fas fa-gem text-lg"></i>
            </div>
        </div>
        <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between h-full relative overflow-hidden group">
        <div class="flex justify-between items-start z-10">
            <div>
                <p class="text-slate-500 font-bold text-[11px] uppercase tracking-wider mb-1">تصنيفات</p>
                <h3 class="text-3xl font-black text-slate-800 tracking-tight">{{ $categories->count() }}</h3>
            </div>
            <div class="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <i class="fas fa-layer-group text-lg"></i>
            </div>
        </div>
        <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
</div>

<!-- Actions & Filters -->
<div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
    <!-- Filter Section -->
    <div class="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
        <form method="GET" action="{{ route('admin.tools.index') }}" class="flex flex-col md:flex-row gap-4">
            <div class="flex-1 relative group">
                <input type="text" 
                       name="search" 
                       value="{{ request('search') }}" 
                       placeholder="بحث عن اسم الأداة..." 
                       class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white transition-all text-sm outline-none">
                <i class="fas fa-search absolute left-3 top-3.5 text-slate-400 group-focus-within:text-primary-500 transition-colors"></i>
            </div>
            
            <div class="w-full md:w-48">
                <select name="category" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white transition-all text-sm outline-none cursor-pointer">
                    <option value="">جميع الفئات</option>
                    @foreach($categories as $category)
                        <option value="{{ $category }}" {{ request('category') == $category ? 'selected' : '' }}>
                            {{ $category }}
                        </option>
                    @endforeach
                </select>
            </div>
            
            <button type="submit" class="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-600/40">
                تصفية
            </button>
            <a href="{{ route('admin.tools.index') }}" class="px-4 py-2.5 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors flex items-center justify-center border border-transparent hover:border-slate-200">
                <i class="fas fa-undo"></i>
            </a>
        </form>
    </div>

    <!-- Quick Actions -->
    <div class="lg:col-span-1 flex flex-col gap-3">
        <a href="{{ route('admin.tools.create') }}" class="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-lg shadow-slate-900/20 font-bold transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
            <i class="fas fa-plus code-sm"></i> إضافة أداة جديدة
        </a>
        <div class="grid grid-cols-2 gap-3">
            <button onclick="toggleImportModal()" class="w-full py-2.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary-600 hover:border-primary-200 rounded-xl text-sm font-bold transition-all">
                <i class="fas fa-file-import mr-1"></i> استيراد
            </button>
            <a href="{{ route('admin.tools.export') }}" class="w-full py-2.5 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary-600 hover:border-primary-200 rounded-xl text-sm font-bold transition-all flex items-center justify-center">
                <i class="fas fa-file-export mr-1"></i> تصدير
            </a>
        </div>
    </div>
</div>

<!-- Tools Table -->
<div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
    @if($tools->count() > 0)
    <div class="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3">
            <div class="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm">
                <input type="checkbox" id="selectAll" class="rounded text-primary-600 focus:ring-primary-500 border-gray-300 w-4 h-4 cursor-pointer">
                <label for="selectAll" class="text-xs font-bold text-slate-600 cursor-pointer select-none">تحديد الكل</label>
            </div>
            <span class="text-slate-300 text-sm">|</span>
            <button onclick="bulkAction('delete')" class="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" id="btnDeleteSelected">
                <i class="fas fa-trash-alt"></i> حذف المحدد
            </button>
        </div>
        <div class="text-xs font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-100">
            عرض {{ $tools->firstItem() }}-{{ $tools->lastItem() }} من {{ $tools->total() }}
        </div>
    </div>
    @endif
    
    <div class="overflow-x-auto">
        <table class="w-full">
            <thead class="bg-slate-50 border-b border-slate-100">
                <tr>
                    <th class="w-12 px-6 py-4"></th>
                    <th class="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">الأداة</th>
                    <th class="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">التصنيف</th>
                    <th class="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">السعر</th>
                    <th class="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">تاريخ الإضافة</th>
                    <th class="px-6 py-4 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">إجراءات</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
                @forelse($tools as $tool)
                    <tr class="hover:bg-slate-50/80 transition-colors group">
                        <td class="px-6 py-4 text-center">
                            <input type="checkbox" name="tools[]" value="{{ $tool->id }}" class="tool-checkbox rounded text-primary-600 focus:ring-primary-500 border-slate-300 w-4 h-4 cursor-pointer">
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 border border-slate-200 group-hover:border-primary-200 transition-colors relative">
                                    @if($tool->image)
                                        <img src="{{ asset($tool->image) }}" alt="{{ $tool->name }}" class="w-full h-full object-cover">
                                    @else
                                        <div class="w-full h-full flex items-center justify-center text-slate-400 bg-slate-50">
                                            <i class="fas fa-image text-lg"></i>
                                        </div>
                                    @endif
                                </div>
                                <div class="min-w-0">
                                    <h4 class="text-sm font-bold text-slate-800 mb-0.5 truncate group-hover:text-primary-600 transition-colors">{{ $tool->name }}</h4>
                                    <p class="text-xs text-slate-500 truncate max-w-[200px]">{{ $tool->desc }}</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-primary-50 text-primary-700 border border-primary-100">
                                {{ $tool->category }}
                            </span>
                        </td>
                        <td class="px-6 py-4">
                            @if($tool->price)
                                <span class="text-sm font-bold text-slate-700">{{ $tool->price }}</span>
                            @else
                                <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                                    <i class="fas fa-check-circle mr-1 text-[10px]"></i> مجاني
                                </span>
                            @endif
                        </td>
                        <td class="px-6 py-4">
                            <span class="text-xs text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded-md">{{ optional($tool->created_at)->format('Y-m-d') ?? '-' }}</span>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <a href="{{ route('admin.tools.edit', $tool) }}" class="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 rounded-lg transition-all shadow-sm" title="تعديل">
                                    <i class="fas fa-pen text-xs"></i>
                                </a>
                                <form action="{{ route('admin.tools.destroy', $tool) }}" method="POST" onsubmit="return confirm('هل أنت متأكد من الحذف؟')" class="inline-block">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-300 hover:bg-red-50 rounded-lg transition-all shadow-sm" title="حذف">
                                        <i class="fas fa-trash-alt text-xs"></i>
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6" class="px-6 py-16 text-center">
                            <div class="flex flex-col items-center justify-center">
                                <div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-300">
                                    <i class="fas fa-search text-3xl"></i>
                                </div>
                                <h3 class="text-lg font-bold text-slate-800 mb-1">لا توجد نتائج</h3>
                                <p class="text-slate-500 text-sm mb-6 max-w-sm mx-auto">لم نعثر على أي أدوات تطابق معايير البحث الحالية. حاول تغيير كلمات البحث أو الفلاتر.</p>
                                <a href="{{ route('admin.tools.create') }}" class="px-6 py-2.5 bg-primary-600 text-white rounded-xl text-sm font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20">
                                    إضافة أداة جديدة
                                </a>
                            </div>
                        </td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
    
    @if($tools->hasPages())
    <div class="px-6 py-4 border-t border-slate-100 bg-slate-50">
        {{ $tools->links('pagination::tailwind') }}
    </div>
    @endif
</div>

<!-- Import Modal -->
<div id="importModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 transition-all opacity-0 pointer-events-none" style="transition: opacity 0.3s ease;">
    <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform scale-95 transition-all duration-300" id="importModalContent">
        <div class="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 class="font-bold text-slate-800 text-lg">استيراد الأدوات</h3>
            <button onclick="toggleImportModal()" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <form action="{{ route('admin.tools.import') }}" method="POST" enctype="multipart/form-data" class="p-6">
            @csrf
            <div class="mb-6">
                <label class="block text-sm font-bold text-slate-700 mb-2">ملف البيانات (Excel/CSV)</label>
                <div class="relative border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-primary-400 hover:bg-primary-50/30 transition-all cursor-pointer group bg-slate-50/30">
                    <input type="file" name="file" accept=".xlsx,.xls,.csv" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" required onchange="updateFileName(this)">
                    <div class="mb-3 w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto text-primary-500 border border-slate-100 group-hover:scale-110 transition-transform">
                        <i class="fas fa-cloud-upload-alt text-2xl"></i>
                    </div>
                    <p class="text-sm text-slate-700 font-bold mb-1" id="fileName">اضغط أو اسحب الملف هنا</p>
                    <p class="text-xs text-slate-400">يدعم XLSX, CSV (الحد الأقصى 10MB)</p>
                </div>
            </div>
            
            <div class="flex gap-3">
                <button type="submit" class="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30">
                    استيراد الآن
                </button>
                <button type="button" onclick="toggleImportModal()" class="flex-1 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 py-3 rounded-xl font-bold transition-all">
                    إلغاء
                </button>
            </div>
        </form>
    </div>
</div>
@endsection

@push('scripts')
<script>
    // File upload visual feedback
    function updateFileName(input) {
        if(input.files && input.files[0]) {
            document.getElementById('fileName').textContent = input.files[0].name;
            document.getElementById('fileName').classList.add('text-primary-600');
        }
    }

    // Select All Checkbox
    document.getElementById('selectAll').addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('.tool-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
    });
    
    // Toggle Import Modal
    function toggleImportModal() {
        const modal = document.getElementById('importModal');
        const content = document.getElementById('importModalContent');
        
        if (modal.classList.contains('hidden')) {
            // Open
            modal.classList.remove('hidden');
            modal.classList.remove('pointer-events-none');
            // Trigger reflow
            void modal.offsetWidth;
            modal.classList.remove('opacity-0');
            content.classList.remove('scale-95');
            content.classList.add('scale-100');
        } else {
            // Close
            modal.classList.add('opacity-0');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.add('pointer-events-none');
            }, 300);
        }
    }
    
    // Bulk Actions (Simplified)
    function bulkAction(action) {
        const selectedTools = document.querySelectorAll('.tool-checkbox:checked');
        if (selectedTools.length === 0) {
            alert('يرجى تحديد أدوات أولاً');
            return;
        }
        
        if (action === 'delete') {
            if (confirm(`هل أنت متأكد من حذف ${selectedTools.length} أدوات؟`)) {
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = '{{ route('admin.tools.bulk') }}';
                
                const csrfToken = document.createElement('input');
                csrfToken.type = 'hidden';
                csrfToken.name = '_token';
                csrfToken.value = '{{ csrf_token() }}';
                form.appendChild(csrfToken);
                
                const actionInput = document.createElement('input');
                actionInput.type = 'hidden';
                actionInput.name = 'action';
                actionInput.value = 'delete';
                form.appendChild(actionInput);
                
                selectedTools.forEach(checkbox => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = 'tools[]';
                    input.value = checkbox.value;
                    form.appendChild(input);
                });
                
                document.body.appendChild(form);
                form.submit();
            }
        }
    }
</script>
@endpush
