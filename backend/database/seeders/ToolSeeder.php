<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ToolSeeder extends Seeder
{
    public function run()
    {
        // Prevent duplicate entries by truncating or checking
        // DB::table('tools')->truncate(); // Uncomment if you want to clear old tools first

        $tools = [
            [
                "name" => "Suno AI",
                "category" => "صوت",
                "price" => "مجاني / مدفوع",
                "desc" => "أداة ثورية لإنشاء أغاني كاملة مع الكلمات والألحان.",
                "long_desc" => "يمكن لـ Suno إنشاء أغاني بجودة استوديو احترافية من مجرد وصف نصي بسيط، مع إمكانية التحكم في النمط والكلمات.",
                "pros" => json_encode(["جودة صوت مذهلة", "يدعم اللغة العربية في الغناء", "سهل الاستخدام للغاية"]),
                "cons" => json_encode(["حقوق الملكية معقدة في النسخة المجانية", "مدة الأغنية محدودة"]),
                "alternatives" => json_encode(["Udio", "Soundraw"]),
                "official_link" => "https://suno.com",
                "image" => "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400",
                "slug" => "suno-ai",
            ],
            [
                "name" => "Google Gemini",
                "category" => "نصوص",
                "price" => "مجاني / مدفوع",
                "desc" => "أقوى نموذج ذكاء اصطناعي من جوجل متعدد الوسائط.",
                "long_desc" => "Gemini هو رد جوجل على ChatGPT، يتميز بقدرته على فهم الفيديو والصور والنصوص وتكامل عميق مع خدمات جوجل.",
                "pros" => json_encode(["تكامل مع Google Docs و Drive", "نافذة سياق ضخمة (1.5 مليون توكن)", "سريع جداً"]),
                "cons" => json_encode(["قيود صارمة على بعض المحتوى", "واجهة المستخدم مازالت تتطور"]),
                "alternatives" => json_encode(["ChatGPT", "Claude"]),
                "official_link" => "https://gemini.google.com",
                "image" => "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "Magnific AI",
                "category" => "صور",
                "price" => "مدفوع",
                "desc" => "أداة لرفع دقة الصور وإضافة تفاصيل خيالية لها.",
                "long_desc" => "تستخدم Magnific الذكاء الاصطناعي ليس فقط لتكبير الصور، بل لإعادة تخيل التفاصيل وإضافة ملامس ووضوح لا يصدق.",
                "pros" => json_encode(["نتائج 'سحرية' في تحسين الصور", "تحكم دقيق في مقدار 'الإبداع'", "سهل الاستخدام"]),
                "cons" => json_encode(["سعر الاشتراك مرتفع", "بطيء قليلاً في المعالجة"]),
                "alternatives" => json_encode(["Topaz Gigapixel", "Krea AI"]),
                "official_link" => "https://magnific.ai",
                "image" => "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "HeyGen",
                "category" => "فيديو",
                "price" => "مجاني / مدفوع",
                "desc" => "إنشاء فيديوهات تسويقية بشخصيات افتراضية واقعية جداً.",
                "long_desc" => "يتميز HeyGen بقدرته على ترجمة الفيديو الخاص بك إلى لغات أخرى مع تعديل حركة الشفاه لتطابق اللغة الجديدة تلقائياً.",
                "pros" => json_encode(["ترجمة الفيديو (Video Translate)", "شخصيات واقعية جداً", "سهولة الاستخدام"]),
                "cons" => json_encode(["نظام الكريدت قد يكون مكلفاً", "انتظار المعالجة قد يطول"]),
                "alternatives" => json_encode(["Synthesia", "D-ID"]),
                "official_link" => "https://www.heygen.com",
                "image" => "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "Notion AI",
                "category" => "نصوص",
                "price" => "مدفوع (إضافة)",
                "desc" => "مساعد ذكي مدمج داخل مساحة عمل Notion.",
                "long_desc" => "يساعدك Notion AI على تلخيص الملاحظات، كتابة المسودات، وتحسين جودة الكتابة مباشرة داخل صفحاتك.",
                "pros" => json_encode(["مدمج تماماً في سير العمل", "ممتاز في التلخيص والتنظيم", "سعر معقول"]),
                "cons" => json_encode(["ليس بقوة GPT-4 في المهام المعقدة", "يعمل داخل Notion فقط"]),
                "alternatives" => json_encode(["Evernote AI", "Mem.ai"]),
                "official_link" => "https://www.notion.so/product/ai",
                "image" => "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "Beautiful.ai",
                "category" => "نصوص",
                "price" => "مدفوع",
                "desc" => "تصميم عروض تقديمية احترافية تلقائياً.",
                "long_desc" => "تتكفل Beautiful.ai بجميع أمور التصميم والتنسيق، ما عليك سوى إضافة المحتوى وستقوم الأداة بإنشاء شرائح مذهلة.",
                "pros" => json_encode(["تصاميم لا يمكن أن تبدو سيئة", "مكتبة صور وأيقونات ضخمة", "يوفر ساعات من العمل"]),
                "cons" => json_encode(["حرية التعديل اليدوي مقيدة قليلاً", "الاشتراك سنوي في الغالب"]),
                "alternatives" => json_encode(["Gamma", "PowerPoint Designer"]),
                "official_link" => "https://www.beautiful.ai",
                "image" => "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "Mistral AI",
                "category" => "برمجة",
                "price" => "مجاني / مدفوع",
                "desc" => "نماذج لغوية مفتوحة المصدر من فرنسا تنافس الكبار.",
                "long_desc" => "تشتهر Mistral بنماذجها القوية والمفتوحة المصدر التي يمكن تشغيلها محلياً، وتتفوق في البرمجة والمنطق.",
                "pros" => json_encode(["مفتوح المصدر", "أداء عالي جداً مقارنة بالحجم", "يمكن تشغيله محلياً"]),
                "cons" => json_encode(["يحتاج خبرة تقنية للاستفادة القصوى", "أقل شهرة من GPT"]),
                "alternatives" => json_encode(["Llama 3", "Falcon"]),
                "official_link" => "https://mistral.ai",
                "image" => "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "Krea AI",
                "category" => "صور",
                "price" => "مجاني / مدفوع",
                "desc" => "توليد صور في الوقت الفعلي (Real-time Generation).",
                "long_desc" => "تسمح لك Krea برسم 'خربشات' بسيطة وتراها تتحول إلى صور فنية مذهلة في نفس اللحظة.",
                "pros" => json_encode(["سرعة خيالية (Real-time)", "تحكم إبداعي عالي", "واجهة ممتعة"]),
                "cons" => json_encode(["جودة التفاصيل قد تكون أقل من Midjourney", "مازالت في مرحلة البيتا"]),
                "alternatives" => json_encode(["Freepik Pikaso", "Leonardo Live"]),
                "official_link" => "https://www.krea.ai",
                "image" => "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "Hugging Face",
                "category" => "برمجة",
                "price" => "مجاني",
                "desc" => "مجتمع الـ AI ومستودع النماذج المفتوحة المصدر.",
                "long_desc" => "يعتبر 'GitHub للذكاء الاصطناعي'، حيث يمكنك تجربة وتحميل آلاف النماذج مجاناً.",
                "pros" => json_encode(["مكتبة ضخمة من النماذج", "مجانية تماماً", "مجتمع تعليمي رائع"]),
                "cons" => json_encode(["واجهة للمطورين فقط", "التشغيل يتطلب موارد (GPUs)"]),
                "alternatives" => json_encode(["Kaggle", "GitHub"]),
                "official_link" => "https://huggingface.co",
                "image" => "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "Replika",
                "category" => "نصوص",
                "price" => "مجاني / مدفوع",
                "desc" => "رفيق ذكاء اصطناعي يهتم بصحتك النفسية ومحادثتك.",
                "long_desc" => "صمم Replika ليكون صديقاً افتراضياً يستمع إليك ويتذكر تفاصيل حياتك ويتطور معك.",
                "pros" => json_encode(["تجربة محادثة عاطفية", "يتذكر التفاصيل الشخصية", "أفاتار ثلاثي الأبعاد"]),
                "cons" => json_encode(["قد يصبح متعلقاً بك جداً", "الميزات المتقدمة مدفوعة"]),
                "alternatives" => json_encode(["Character.ai", "Pi"]),
                "official_link" => "https://replika.com",
                "image" => "https://images.unsplash.com/photo-1534067783865-9abd352323d2?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "Sora",
                "category" => "فيديو",
                "price" => "غير متاح للعامة",
                "desc" => "نموذج OpenAI الثوري لتحويل النص إلى فيديو واقعي.",
                "long_desc" => "قادر على إنشاء مشاهد فيديو معقدة بشخصيات متعددة وحركات دقيقة بجودة سينمائية.",
                "pros" => json_encode(["واقعية غير مسبوقة", "فيزياء حركة دقيقة", "جودة عالية"]),
                "cons" => json_encode(["غير متاح للجمهور بعد", "يتطلب موارد هائلة"]),
                "alternatives" => json_encode(["Runway Gen-3", "Luma Dream Machine"]),
                "official_link" => "https://openai.com/sora",
                "image" => "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "Zapier AI",
                "category" => "برمجة",
                "price" => "مدفوع",
                "desc" => "أتمتة المهام بين التطبيقات المختلفة باستخدام أوامر طبيعية.",
                "long_desc" => "يمكنك الآن إنشاء تدفقات عمل معقدة (Workflows) بمجرد وصف ما تريد فعله نصياً.",
                "pros" => json_encode(["يربط 5000+ تطبيق", "يوفر ساعات عمل يدوية", "سهل للبشر غير التقنيين"]),
                "cons" => json_encode(["قد يصبح مكلفاً مع زيادة المهام", "يحتاج تعلم منطق الأتمتة"]),
                "alternatives" => json_encode(["Make", "IFTTT"]),
                "official_link" => "https://zapier.com/ai",
                "image" => "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "Character.ai",
                "category" => "نصوص",
                "price" => "مجاني / مدفوع",
                "desc" => "الدردشة مع شخصيات مشهورة أو خيالية.",
                "long_desc" => "منصة تتيح لك إنشاء شخصيات ذات طباع وأساليب كلام محددة والدردشة معها.",
                "pros" => json_encode(["ممتع جداً للترفيه", "إمكانية تخصيص لا نهائية", "مجاني إلى حد كبير"]),
                "cons" => json_encode(["الفلتر قد يكون صارماً", "الذاكرة قصيرة المدى أحياناً"]),
                "alternatives" => json_encode(["Chai", "JanitorAI"]),
                "official_link" => "https://character.ai",
                "image" => "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400",
            ],
            [
                "name" => "Copy.ai",
                "category" => "نصوص",
                "price" => "مجاني / مدفوع",
                "desc" => "منصة أتمتة كتابة المحتوى للتسويق والمبيعات.",
                "long_desc" => "مثالي لفرق التسويق، يمكنه كتابة مئات المقالات ومنشورات التواصل الاجتماعي في دقائق.",
                "pros" => json_encode(["سير عمل (Workflows) قوي", "يدعم البحث في الإنترنت", "خطة مجانية جيدة"]),
                "cons" => json_encode(["جودة الكتابة تحتاج مراجعة بشرية", "التركيز على التسويق فقط"]),
                "alternatives" => json_encode(["Jasper", "Anyword"]),
                "official_link" => "https://www.copy.ai",
                "image" => "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=400",
            ],
             [
                "name" => "Pika Labs",
                "category" => "فيديو",
                "price" => "مجاني / مدفوع",
                "desc" => "أداة تحريك الصور وتحويل النص لفيديو بأساليب كرتونية وواقعية.",
                "long_desc" => "تتميز Pika بقدرتها العالية على تحريك أجزاء معينة من الصور (Motion Brush) وسهولة استخدامها عبر ديسكورد والويب.",
                "pros" => json_encode(["تحكم ممتاز في الحركة", "مجتمع نشط ومبدع", "مؤثرات صوتية مدمجة"]),
                "cons" => json_encode(["مدة الفيديو قصيرة (3 ثوان)", "جودة الدقة تحتاج تحسين"]),
                "alternatives" => json_encode(["Runway", "Kaiber"]),
                "official_link" => "https://pika.art",
                "image" => "https://images.unsplash.com/photo-1626544827763-d516dce335ca?auto=format&fit=crop&q=80&w=400",
            ]
        ];

        foreach ($tools as $tool) {
            DB::table('tools')->updateOrInsert(
                ['name' => $tool['name']], // Check by name to avoid duplicates
                array_merge($tool, [
                    'created_at' => now(),
                    'updated_at' => now(),
                    'slug' => \Illuminate\Support\Str::slug($tool['name'])
                ])
            );
        }
    }
}
