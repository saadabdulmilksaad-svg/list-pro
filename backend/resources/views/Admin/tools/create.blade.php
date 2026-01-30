@extends('admin.layouts.app')

@section('title', 'إضافة أداة جديدة')
@section('page-title', 'إضافة أداة جديدة')

@section('content')
<!-- Header Section -->
<div class="mb-8">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-3xl font-bold text-gray-800 mb-2">➕ إضافة أداة جديدة</h1>
            <p class="text-gray-600">أدخل معلومات الأداة الجديدة</p>
        </div>
        <a href="{{ route('admin.tools.index') }}" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors font-medium">
            <i class="fas fa-arrow-right ml-2"></i>
            العودة للأدوات
        </a>
    </div>
</div>

<!-- Form Container -->
<div class="bg-white rounded-lg shadow-lg">
    <form action="{{ route('admin.tools.store') }}" method="POST" enctype="multipart/form-data" class="p-6 space-y-6">
        @csrf
        
        <!-- Basic Information Section -->
        <div class="border-b border-gray-200 pb-6">
            <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <i class="fas fa-info-circle ml-2 text-primary-600"></i>
                المعلومات الأساسية
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Tool Name -->
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                        اسم الأداة <span class="text-red-500">*</span>
                    </label>
                    <input type="text" 
                           name="name" 
                           id="name"
                           value="{{ old('name') }}" 
                           required
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                           placeholder="أدخل اسم الأداة">
                    @error('name')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Category -->
                <div>
                    <label for="category" class="block text-sm font-medium text-gray-700 mb-2">
                        الفئة <span class="text-red-500">*</span>
                    </label>
                    <div class="relative">
                        <input type="text" 
                               name="category" 
                               id="category"
                               value="{{ old('category') }}" 
                               required
                               list="categories-list"
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                               placeholder="اختر أو أدخل فئة جديدة">
                        <datalist id="categories-list">
                            @foreach($categories as $category)
                                <option value="{{ $category }}">
                            @endforeach
                        </datalist>
                        <i class="fas fa-layer-group absolute left-3 top-3 text-gray-400"></i>
                    </div>
                    @error('category')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Price -->
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700 mb-2">
                        السعر
                        <span class="text-gray-400 text-xs">(اتركه فارغاً للأدوات المجانية)</span>
                    </label>
                    <div class="relative">
                        <input type="text" 
                               name="price" 
                               id="price"
                               value="{{ old('price') }}" 
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                               placeholder="مثال: $9.99 أو مجاني">
                        <i class="fas fa-dollar-sign absolute left-3 top-3 text-gray-400"></i>
                    </div>
                    @error('price')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Official Link -->
                <div>
                    <label for="officialLink" class="block text-sm font-medium text-gray-700 mb-2">
                        الرابط الرسمي
                    </label>
                    <div class="relative">
                        <input type="url" 
                               name="officialLink" 
                               id="officialLink"
                               value="{{ old('officialLink') }}" 
                               class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                               placeholder="https://example.com">
                        <i class="fas fa-link absolute left-3 top-3 text-gray-400"></i>
                    </div>
                    @error('officialLink')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>
            </div>
        </div>

        <!-- Description Section -->
        <div class="border-b border-gray-200 pb-6">
            <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <i class="fas fa-align-left ml-2 text-primary-600"></i>
                الوصف
            </h2>
            
            <!-- Short Description -->
            <div class="mb-4">
                <label for="desc" class="block text-sm font-medium text-gray-700 mb-2">
                    وصف قصير <span class="text-red-500">*</span>
                    <span class="text-gray-400 text-xs">(حد أقصى 500 حرف)</span>
                </label>
                <textarea name="desc" 
                          id="desc"
                          rows="3" 
                          maxlength="500"
                          required
                          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                          placeholder="وصف موجز للأداة...">{{ old('desc') }}</textarea>
                <div class="text-left text-xs text-gray-500 mt-1">
                    <span id="desc-counter">0</span>/500
                </div>
                @error('desc')
                    <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                @enderror
            </div>

            <!-- Long Description -->
            <div>
                <label for="long_desc" class="block text-sm font-medium text-gray-700 mb-2">
                    وصف مفصل
                </label>
                <textarea name="long_desc" 
                          id="long_desc"
                          rows="6" 
                          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                          placeholder="وصف تفصيلي للأداة، المميزات، الاستخدامات...">{{ old('long_desc') }}</textarea>
                @error('long_desc')
                    <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                @enderror
            </div>
        </div>

        <!-- Image Upload -->
        <div class="border-b border-gray-200 pb-6">
            <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <i class="fas fa-image ml-2 text-primary-600"></i>
                الصورة
            </h2>
            
            <div class="flex items-center space-x-6 space-x-reverse">
                <div class="flex-shrink-0">
                    <div id="image-preview" class="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        <i class="fas fa-cloud-upload-alt text-gray-400 text-2xl"></i>
                    </div>
                </div>
                <div class="flex-1">
                    <label for="image" class="block text-sm font-medium text-gray-700 mb-2">
                        صورة الأداة
                        <span class="text-gray-400 text-xs">(PNG, JPG, GIF, SVG - حد أقصى 2MB)</span>
                    </label>
                    <input type="file" 
                           name="image" 
                           id="image"
                           accept="image/*"
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    @error('image')
                        <p class="mt-1 text-sm text-red-600">{{ $message }}</p>
                    @enderror
                </div>
            </div>
        </div>

        <!-- Pros and Cons -->
        <div class="border-b border-gray-200 pb-6">
            <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <i class="fas fa-balance-scale ml-2 text-primary-600"></i>
                الإيجابيات والسلبيات
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Pros -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        الإيجابيات
                    </label>
                    <div id="pros-container" class="space-y-2">
                        <div class="pros-item flex items-center space-x-2 space-x-reverse">
                            <input type="text" 
                                   name="pros[]" 
                                   class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                   placeholder="أدخل إيجابية...">
                            <button type="button" onclick="removeProsItem(this)" class="text-red-500 hover:text-red-700">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <button type="button" onclick="addProsItem()" class="mt-2 text-green-600 hover:text-green-800 text-sm font-medium">
                        <i class="fas fa-plus ml-1"></i>
                        إضافة إيجابية
                    </button>
                </div>

                <!-- Cons -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        السلبيات
                    </label>
                    <div id="cons-container" class="space-y-2">
                        <div class="cons-item flex items-center space-x-2 space-x-reverse">
                            <input type="text" 
                                   name="cons[]" 
                                   class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                   placeholder="أدخل سلبية...">
                            <button type="button" onclick="removeConsItem(this)" class="text-red-500 hover:text-red-700">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <button type="button" onclick="addConsItem()" class="mt-2 text-red-600 hover:text-red-800 text-sm font-medium">
                        <i class="fas fa-plus ml-1"></i>
                        إضافة سلبية
                    </button>
                </div>
            </div>
        </div>

        <!-- Alternatives -->
        <div class="pb-6">
            <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <i class="fas fa-exchange-alt ml-2 text-primary-600"></i>
                البدائل
            </h2>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                    بدائل الأداة
                </label>
                <div id="alternatives-container" class="space-y-2">
                    <div class="alternatives-item flex items-center space-x-2 space-x-reverse">
                        <input type="text" 
                               name="alternatives[]" 
                               class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                               placeholder="أدخل بديلاً...">
                        <button type="button" onclick="removeAlternativeItem(this)" class="text-red-500 hover:text-red-700">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <button type="button" onclick="addAlternativeItem()" class="mt-2 text-purple-600 hover:text-purple-800 text-sm font-medium">
                    <i class="fas fa-plus ml-1"></i>
                    إضافة بديل
                </button>
            </div>
        </div>

        <!-- Form Actions -->
        <div class="flex items-center justify-between pt-6 border-t border-gray-200">
            <a href="{{ route('admin.tools.index') }}" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg transition-colors font-medium">
                <i class="fas fa-times ml-2"></i>
                إلغاء
            </a>
            <div class="space-x-3 space-x-reverse">
                <button type="button" onclick="resetForm()" class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors font-medium">
                    <i class="fas fa-redo ml-2"></i>
                    إعادة تعيين
                </button>
                <button type="submit" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors font-medium">
                    <i class="fas fa-save ml-2"></i>
                    حفظ الأداة
                </button>
            </div>
        </div>
    </form>
</div>
@endsection

@push('scripts')
<script>
    // Character counter for description
    document.getElementById('desc').addEventListener('input', function() {
        const counter = document.getElementById('desc-counter');
        counter.textContent = this.value.length;
    });

    // Image preview
    document.getElementById('image').addEventListener('change', function(e) {
        const file = e.target.files[0];
        const preview = document.getElementById('image-preview');
        
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.innerHTML = `<img src="${e.target.result}" class="w-full h-full object-cover rounded-lg">`;
            }
            reader.readAsDataURL(file);
        } else {
            preview.innerHTML = '<i class="fas fa-cloud-upload-alt text-gray-400 text-2xl"></i>';
        }
    });

    // Add/Remove Pros Items
    function addProsItem() {
        const container = document.getElementById('pros-container');
        const item = document.createElement('div');
        item.className = 'pros-item flex items-center space-x-2 space-x-reverse';
        item.innerHTML = `
            <input type="text" 
                   name="pros[]" 
                   class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                   placeholder="أدخل إيجابية...">
            <button type="button" onclick="removeProsItem(this)" class="text-red-500 hover:text-red-700">
                <i class="fas fa-times"></i>
            </button>
        `;
        container.appendChild(item);
    }

    function removeProsItem(button) {
        const container = document.getElementById('pros-container');
        if (container.children.length > 1) {
            button.parentElement.remove();
        }
    }

    // Add/Remove Cons Items
    function addConsItem() {
        const container = document.getElementById('cons-container');
        const item = document.createElement('div');
        item.className = 'cons-item flex items-center space-x-2 space-x-reverse';
        item.innerHTML = `
            <input type="text" 
                   name="cons[]" 
                   class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                   placeholder="أدخل سلبية...">
            <button type="button" onclick="removeConsItem(this)" class="text-red-500 hover:text-red-700">
                <i class="fas fa-times"></i>
            </button>
        `;
        container.appendChild(item);
    }

    function removeConsItem(button) {
        const container = document.getElementById('cons-container');
        if (container.children.length > 1) {
            button.parentElement.remove();
        }
    }

    // Add/Remove Alternatives Items
    function addAlternativeItem() {
        const container = document.getElementById('alternatives-container');
        const item = document.createElement('div');
        item.className = 'alternatives-item flex items-center space-x-2 space-x-reverse';
        item.innerHTML = `
            <input type="text" 
                   name="alternatives[]" 
                   class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                   placeholder="أدخل بديلاً...">
            <button type="button" onclick="removeAlternativeItem(this)" class="text-red-500 hover:text-red-700">
                <i class="fas fa-times"></i>
            </button>
        `;
        container.appendChild(item);
    }

    function removeAlternativeItem(button) {
        const container = document.getElementById('alternatives-container');
        if (container.children.length > 1) {
            button.parentElement.remove();
        }
    }

    // Reset form
    function resetForm() {
        if (confirm('هل أنت متأكد من إعادة تعيين النموذج؟')) {
            document.querySelector('form').reset();
            document.getElementById('image-preview').innerHTML = '<i class="fas fa-cloud-upload-alt text-gray-400 text-2xl"></i>';
            document.getElementById('desc-counter').textContent = '0';
            
            // Reset dynamic fields to single items
            ['pros-container', 'cons-container', 'alternatives-container'].forEach(containerId => {
                const container = document.getElementById(containerId);
                while (container.children.length > 1) {
                    container.removeChild(container.lastChild);
                }
            });
        }
    }

    // Initialize character counter
    document.getElementById('desc-counter').textContent = document.getElementById('desc').value.length;
</script>
@endpush
