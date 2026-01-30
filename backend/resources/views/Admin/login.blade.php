<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تسجيل الدخول - Bool Tools Admin</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    
    <!-- Custom Configuration -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'cairo': ['Cairo', 'sans-serif'],
                    },
                    colors: {
                        'primary': '#6366f1',
                        'primary-dark': '#4f46e5',
                        'secondary': '#8b5cf6',
                        'accent': '#ec4899',
                    }
                }
            }
        }
    </script>
    
    <style>
        * {
            font-family: 'Cairo', sans-serif;
        }
        
        /* Animated Background */
        .animated-bg {
            background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        /* Floating Shapes */
        .shape {
            position: absolute;
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .shape-1 {
            top: 10%;
            right: 10%;
            width: 80px;
            height: 80px;
            background: white;
            border-radius: 50%;
            animation-delay: 0s;
        }
        
        .shape-2 {
            top: 70%;
            left: 10%;
            width: 60px;
            height: 60px;
            background: white;
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            animation-delay: 2s;
        }
        
        .shape-3 {
            top: 20%;
            left: 20%;
            width: 100px;
            height: 100px;
            background: white;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            animation-delay: 4s;
        }
        
        /* Glassmorphism Effect */
        .glass {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        
        /* Input Focus Effects */
        .input-group {
            position: relative;
        }
        
        .input-group input:focus + label,
        .input-group input:not(:placeholder-shown) + label {
            transform: translateY(-25px) scale(0.85);
            color: #6366f1;
        }
        
        .input-group label {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            transition: all 0.3s ease;
            pointer-events: none;
            color: #6b7280;
            font-size: 16px;
        }
        
        /* Button Hover Effect */
        .btn-luxury {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .btn-luxury::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
        }
        
        .btn-luxury:hover::before {
            left: 100%;
        }
        
        .btn-luxury:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }
        
        /* Loading Spinner */
        .spinner {
            border: 2px solid #f3f4f6;
            border-top: 2px solid #6366f1;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Error Shake Animation */
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
        
        .shake {
            animation: shake 0.5s ease-in-out;
        }
    </style>
</head>
<body class="animated-bg min-h-screen flex items-center justify-center p-4">
    
    <!-- Floating Background Shapes -->
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
    
    <!-- Login Container -->
    <div class="w-full max-w-md">
        
        <!-- Logo Section -->
        <div class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-2xl mb-4">
                <i class="fas fa-brain text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"></i>
            </div>
            <h1 class="text-3xl font-bold text-white mb-2">Bool Tools</h1>
            <p class="text-white/80 text-lg">لوحة التحكم المتقدمة</p>
        </div>
        
        <!-- Login Form -->
        <div class="glass rounded-2xl p-8 shadow-2xl">
            
            <!-- Welcome Message -->
            <div class="text-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">مرحباً بك!</h2>
                <p class="text-gray-600">قم بتسجيل الدخول للوصول إلى لوحة التحكم</p>
            </div>
            
            <!-- Flash Messages -->
            @if(session('success'))
                <div class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                    <i class="fas fa-check-circle ml-2"></i>
                    {{ session('success') }}
                </div>
            @endif
            
            @if(session('error'))
                <div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center shake">
                    <i class="fas fa-exclamation-circle ml-2"></i>
                    {{ session('error') }}
                </div>
            @endif
            
            @if($errors->any())
                <div class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center shake">
                    <i class="fas fa-exclamation-triangle ml-2"></i>
                    {{ $errors->first() }}
                </div>
            @endif
            
            <!-- Login Form -->
            <form method="POST" action="{{ route('admin.login.post') }}" class="space-y-6" id="loginForm">
                @csrf
                
                <!-- Email Field -->
                <div class="input-group">
                    <input type="email" 
                           name="email" 
                           id="email"
                           value="{{ old('email') }}" 
                           placeholder=" "
                           class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                           required>
                    <label for="email">البريد الإلكتروني</label>
                    <i class="fas fa-envelope absolute left-3 top-3.5 text-gray-400"></i>
                </div>
                
                <!-- Password Field -->
                <div class="input-group">
                    <input type="password" 
                           name="password" 
                           id="password"
                           placeholder=" "
                           class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                           required>
                    <label for="password">كلمة المرور</label>
                    <button type="button" 
                            onclick="togglePassword()" 
                            class="absolute left-3 top-3.5 text-gray-400 hover:text-gray-600">
                        <i class="fas fa-eye" id="passwordIcon"></i>
                    </button>
                </div>
                
                <!-- Remember Me & Forgot Password -->
                <div class="flex items-center justify-between">
                    <label class="flex items-center cursor-pointer">
                        <input type="checkbox" name="remember" class="ml-2 text-primary focus:ring-primary rounded">
                        <span class="text-sm text-gray-600">تذكرني</span>
                    </label>
                    <a href="#" class="text-sm text-primary hover:text-primary-dark transition-colors">
                        نسيت كلمة المرور؟
                    </a>
                </div>
                
                <!-- Submit Button -->
                <button type="submit" 
                        class="btn-luxury w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                        id="loginBtn">
                    <i class="fas fa-sign-in-alt"></i>
                    <span>تسجيل الدخول</span>
                </button>
            </form>
            
            <!-- Security Notice -->
            <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div class="flex items-start">
                    <i class="fas fa-shield-alt text-blue-500 ml-2 mt-1"></i>
                    <div>
                        <p class="text-sm text-blue-800 font-semibold">حماية متقدمة</p>
                        <p class="text-xs text-blue-600 mt-1">
                            يتم تأمين اتصالك بأحدث تقنيات التشفير
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Footer Info -->
            <div class="mt-6 text-center">
                <p class="text-xs text-gray-500">
                    © 2024 Bool Tools. جميع الحقوق محفوظة.
                </p>
            </div>
        </div>
        
        <!-- Quick Access Info -->
        <div class="mt-6 text-center">
            <p class="text-white/70 text-sm">
                تحتاج مساعدة؟ 
                <a href="#" class="text-white hover:underline ml-1">
                    <i class="fas fa-headset ml-1"></i>
                    اتصل بالدعم الفني
                </a>
            </p>
        </div>
    </div>
    
    <!-- JavaScript -->
    <script>
        // Toggle Password Visibility
        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const passwordIcon = document.getElementById('passwordIcon');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordIcon.classList.remove('fa-eye');
                passwordIcon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                passwordIcon.classList.remove('fa-eye-slash');
                passwordIcon.classList.add('fa-eye');
            }
        }
        
        // Form Loading State
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            const submitBtn = document.getElementById('loginBtn');
            const originalContent = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<div class="spinner mx-auto"></div>';
            submitBtn.disabled = true;
            
            // Reset button after 5 seconds (in case of network issues)
            setTimeout(() => {
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
            }, 5000);
        });
        
        // Auto-focus email field
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('email').focus();
        });
        
        // Add enter key support for password field
        document.getElementById('password').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('loginForm').submit();
            }
        });
    </script>
</body>
</html>
