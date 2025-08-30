// متغيرات التطبيق
let currentStep = 'propertyType';
let selectedType = '';
let selectedArea = '';
let favorites = [];

// بيانات العقارات
const properties = {
    houses: {
        'السواقي': [
            {
                id: 1,
                title: 'فيلا فاخرة في السواقي',
                price: 2500000,
                area: 350,
                rooms: 4,
                bathrooms: 3,
                description: 'فيلا حديثة بتشطيب سوبر لوكس، حديقة خاصة، جراج لسيارتين',
                images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400'],
                contact: '01012345678',
                features: ['حديقة خاصة', 'جراج', 'مكيف', 'أمن وحراسة']
            },
            {
                id: 2,
                title: 'شقة عائلية مميزة',
                price: 850000,
                area: 180,
                rooms: 3,
                bathrooms: 2,
                description: 'شقة واسعة في موقع هادئ، قريبة من الخدمات',
                images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400'],
                contact: '01087654321',
                features: ['بلكونة واسعة', 'مطبخ مجهز', 'قريب من المدارس']
            },
            {
    id: 20,
    title: 'عمارة للبيع في الحواتم - 5 أدوار مرخصة',
    price: 2250000,
    area: 65,
    rooms: null,
    bathrooms: null,
    description: 'عمارة للبيع 65م أرض و70م فوق عمدان، في الحواتم، مكونة من 5 أدوار مرخصة، مشطبة بالكامل ومؤجرة 4 شقق سوبر لوكس ومحل، جميع العدادات راكبة، على شارع عمومي.',
    images: [
        'https://i.ibb.co/sdhqWkWB/image.png'
    ],
    contact: '01044787523',
    features: [
        '5 أدوار مرخصة',
        '4 شقق مؤجرة سوبر لوكس',
        'مبني على شارع عمومي',
        'راكب جميع العدادات',
        'تشطيب كامل',
        'يوجد محل'
    ]
}

        ],
        'كيمان فارس': [
            {
                id: 3,
                title: 'بيت شعبي أصيل',
                price: 1200000,
                area: 200,
                rooms: 3,
                bathrooms: 2,
                description: 'بيت تراثي مجدد بالكامل، في قلب كيمان فارس',
                images: ['https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400'],
                contact: '01098765432',
                features: ['طراز تراثي', 'حوش واسع', 'قريب من السوق']
            }
        ],
        'الفيوم المدينة': [
            {
                id: 4,
                title: 'شقة حديثة وسط المدينة',
                price: 950000,
                area: 140,
                rooms: 2,
                bathrooms: 1,
                description: 'شقة عملية في موقع حيوي، قريبة من كل الخدمات',
                images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400'],
                contact: '01034567890',
                features: ['موقع حيوي', 'مواصلات متوفرة', 'إطلالة مميزة']
            }
        ]
    },
    lands: {
        'السواقي': [
            {
                id: 5,
                title: 'أرض زراعية خصبة',
                price: 180000,
                area: 2400,
                description: 'أرض زراعية على الترعة، صالحة لجميع المحاصيل',
                images: ['https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400'],
                contact: '01156789012',
                features: ['على الترعة', 'تربة خصبة', 'سند ملكية']
            }
        ],
        'أطسا': [
            {
                id: 6,
                title: 'أرض للاستثمار',
                price: 300000,
                area: 1000,
                description: 'أرض مميزة للبناء أو الاستثمار في منطقة نامية',
                images: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400'],
                contact: '01123456789',
                features: ['موقع استراتيجي', 'قريب من الطريق الرئيسي', 'كهرباء متوفرة']
            }
        ],
        'طامية': [
            {
                id: 7,
                title: 'أرض زراعية واسعة',
                price: 450000,
                area: 4200,
                description: 'أرض زراعية كبيرة مناسبة للمشاريع الزراعية الكبيرة',
                images: ['https://images.unsplash.com/photo-1574263867128-8a8d9b7c0b95?w=400'],
                contact: '01098765433',
                features: ['مساحة كبيرة', 'مياه جوفية', 'طريق مرصوف']
            }
        ]
    }
};

// قائمة المناطق
const areas = ['السواقي', 'كيمان فارس', 'المسلة', 'الفنية', 'مصطفى كامل', 'دار رماد', 'إبشواي', 'يوسف الصديق'];

// دالة تنسيق الأسعار
function formatPrice(price) {
    return new Intl.NumberFormat('ar-EG').format(price) + ' جنيه';
}

// دالة إظهار/إخفاء الصفحات
function showPage(pageId) {
    const pages = ['propertyTypePage', 'areaPage', 'propertiesPage', 'propertyDetailsPage'];
    pages.forEach(page => {
        document.getElementById(page).classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
    document.getElementById(pageId).classList.add('fade-in');
}

// دالة إظهار/إخفاء زر العودة
function toggleBackButton(show) {
    const backBtn = document.getElementById('backBtn');
    if (show) {
        backBtn.classList.remove('hidden');
    } else {
        backBtn.classList.add('hidden');
    }
}

// دالة إنشاء بطاقة العقار
function createPropertyCard(property, type) {
    return `
        <div class="property-card">
            <div style="position: relative;">
                <img src="${property.images[0]}" alt="${property.title}" class="property-image">
                <button onclick="toggleFavorite(${property.id})" 
                    class="absolute top-3 right-3 p-2 rounded-full ${favorites.includes(property.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-600'}">
                    ❤️
                </button>
            </div>
            
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-price">
                    💰 ${formatPrice(property.price)}
                </div>
                
                <div class="property-details">
                    <div class="property-detail">
                        📐 ${property.area} م²
                    </div>
                    ${type === 'houses' ? `
                        <div class="property-detail">
                            🛏️ ${property.rooms} غرف
                        </div>
                        ${property.bathrooms ? `
                            <div class="property-detail">
                                🚿 ${property.bathrooms} حمام
                            </div>
                        ` : ''}
                    ` : ''}
                </div>
                
                <p class="property-description">${property.description}</p>
                
                <div class="property-actions">
                    <button onclick="showPropertyDetails(${property.id})" class="btn-primary">
                        عرض التفاصيل
                    </button>
                    <button class="btn-secondary">
                        📤
                    </button>
                </div>
            </div>
        </div>
    `;
}

// دالة عرض تفاصيل العقار
function showPropertyDetails(propertyId) {
    const property = findPropertyById(propertyId);
    if (!property) return;

    const detailsPage = document.getElementById('propertyDetailsPage');
    detailsPage.innerHTML = `
        <div class="details-header">
            <button onclick="goBack()" class="flex items-center text-blue-600 hover:text-blue-700">
                ← العودة
            </button>
            <h1 class="font-bold text-lg">تفاصيل العقار</h1>
            <div class="flex gap-2">
                <button onclick="toggleFavorite(${property.id})" class="p-2 text-gray-600 hover:text-red-500">
                    ❤️
                </button>
                <button class="p-2 text-gray-600 hover:text-blue-500">
                    📤
                </button>
            </div>
        </div>

        <div class="details-content">
            <!-- صور العقار -->
            <div class="details-images">
                <img src="${property.images[0]}" alt="${property.title}" class="main-image">
                ${property.images.length > 1 ? `
                    <div class="thumbnail-images">
                        ${property.images.slice(1).map(img => `
                            <img src="${img}" alt="صورة إضافية" class="thumbnail">
                        `).join('')}
                    </div>
                ` : ''}
            </div>

            <!-- معلومات أساسية -->
            <div class="info-card">
                <h2 class="text-xl font-bold mb-3 text-gray-800">${property.title}</h2>
                <div class="text-blue-600 font-bold text-2xl mb-4">
                    💰 ${formatPrice(property.price)}
                </div>
                
                <div class="info-grid">
                    <div class="info-item">
                        📐 المساحة: ${property.area} م²
                    </div>
                    ${selectedType === 'houses' ? `
                        <div class="info-item">
                            🛏️ الغرف: ${property.rooms}
                        </div>
                        ${property.bathrooms ? `
                            <div class="info-item">
                                🚿 الحمامات: ${property.bathrooms}
                            </div>
                        ` : ''}
                    ` : ''}
                    <div class="info-item">
                        📍 ${selectedArea}
                    </div>
                </div>
            </div>

            <!-- الوصف -->
            <div class="info-card">
                <h3 class="font-bold text-lg mb-3 text-gray-800">الوصف</h3>
                <p class="text-gray-600 leading-relaxed">${property.description}</p>
            </div>

            <!-- المميزات -->
            ${property.features ? `
                <div class="info-card">
                    <h3 class="font-bold text-lg mb-3 text-gray-800">المميزات</h3>
                    <div class="features-grid">
                        ${property.features.map(feature => `
                            <div class="feature-item">
                                <div class="feature-dot"></div>
                                ${feature}
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- معلومات الاتصال -->
            <div class="info-card">
                <h3 class="font-bold text-lg mb-3 text-gray-800">للاستفسار</h3>
                <a href="tel:${property.contact}" class="contact-btn">
                    📞 اتصل الآن: ${property.contact}
                </a>
            </div>
        </div>
    `;

    showPage('propertyDetailsPage');
    currentStep = 'details';
}

// دالة البحث عن العقار بالرقم
function findPropertyById(id) {
    for (let type in properties) {
        for (let area in properties[type]) {
            const property = properties[type][area].find(p => p.id === id);
            if (property) return property;
        }
    }
    return null;
}

// دالة إضافة/إزالة المفضلة
function toggleFavorite(propertyId) {
    if (favorites.includes(propertyId)) {
        favorites = favorites.filter(id => id !== propertyId);
    } else {
        favorites.push(propertyId);
    }
}

// دالة العودة للخلف
function goBack() {
    if (currentStep === 'details') {
        showPropertiesPage();
    } else if (currentStep === 'properties') {
        showAreaPage();
    } else if (currentStep === 'area') {
        showPropertyTypePage();
    }
}

// دالة عرض صفحة نوع العقار
function showPropertyTypePage() {
    showPage('propertyTypePage');
    toggleBackButton(false);
    currentStep = 'propertyType';
}

// دالة عرض صفحة المناطق
function showAreaPage() {
    const areasGrid = document.getElementById('areasGrid');
    areasGrid.innerHTML = areas.map(area => `
        <button onclick="selectArea('${area}')" class="area-btn">
            📍 ${area}
        </button>
    `).join('');
    
    showPage('areaPage');
    toggleBackButton(true);
    currentStep = 'area';
}

// دالة عرض صفحة العقارات
function showPropertiesPage() {
    const propertiesList = document.getElementById('propertiesList');
    const propertiesTitle = document.getElementById('propertiesTitle');
    const propertiesCount = document.getElementById('propertiesCount');
    const noProperties = document.getElementById('noProperties');

    const typeText = selectedType === 'houses' ? 'منازل' : 'أراضي';
    propertiesTitle.textContent = `${typeText} ${selectedArea}`;

    const areaProperties = properties[selectedType][selectedArea] || [];
    propertiesCount.textContent = `${areaProperties.length} عقار`;

    if (areaProperties.length > 0) {
        propertiesList.innerHTML = areaProperties.map(property => 
            createPropertyCard(property, selectedType)
        ).join('');
        propertiesList.classList.remove('hidden');
        noProperties.classList.add('hidden');
    } else {
        propertiesList.classList.add('hidden');
        noProperties.classList.remove('hidden');
    }

    showPage('propertiesPage');
    toggleBackButton(true);
    currentStep = 'properties';
}

// دالة اختيار نوع العقار
function selectPropertyType(type) {
    selectedType = type;
    showAreaPage();
}

// دالة اختيار المنطقة
function selectArea(area) {
    selectedArea = area;
    showPropertiesPage();
}

// إعداد الأحداث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // أحداث أزرار نوع العقار
    document.getElementById('housesBtn').addEventListener('click', () => selectPropertyType('houses'));
    document.getElementById('landsBtn').addEventListener('click', () => selectPropertyType('lands'));
    
    // حدث زر العودة
    document.getElementById('backBtn').addEventListener('click', goBack);
    
    // عرض الصفحة الأولى
    showPropertyTypePage();
});

console.log('🏡 تطبيق عقارات الفيوم جاهز للاستخدام!');
