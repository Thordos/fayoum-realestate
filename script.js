// „ €Ì—«  «· ÿ»Ìﬁ
let currentStep = 'propertyType';
let selectedType = '';
let selectedArea = '';
let favorites = [];

// »Ì«‰«  «·⁄ﬁ«—« 
const properties = {
    houses: {
        '«·”Ê«ﬁÌ': [
            {
                id: 1,
                title: '›Ì·« ›«Œ—… ›Ì «·”Ê«ﬁÌ',
                price: 2500000,
                area: 350,
                rooms: 4,
                bathrooms: 3,
                description: '›Ì·« ÕœÌÀ… » ‘ÿÌ» ”Ê»— ·Êﬂ”° ÕœÌﬁ… Œ«’…° Ã—«Ã ·”Ì«— Ì‰',
                images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400'],
                contact: '01012345678',
                features: ['ÕœÌﬁ… Œ«’…', 'Ã—«Ã', '„ﬂÌ›', '√„‰ ÊÕ—«”…']
            },
            {
                id: 2,
                title: '‘ﬁ… ⁄«∆·Ì… „„Ì“…',
                price: 850000,
                area: 180,
                rooms: 3,
                bathrooms: 2,
                description: '‘ﬁ… Ê«”⁄… ›Ì „Êﬁ⁄ Â«œ∆° ﬁ—Ì»… „‰ «·Œœ„« ',
                images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400'],
                contact: '01087654321',
                features: ['»·ﬂÊ‰… Ê«”⁄…', '„ÿ»Œ „ÃÂ“', 'ﬁ—Ì» „‰ «·„œ«—”']
            }
        ],
        'ﬂÌ„«‰ ›«—”': [
            {
                id: 3,
                title: '»Ì  ‘⁄»Ì √’Ì·',
                price: 1200000,
                area: 200,
                rooms: 3,
                bathrooms: 2,
                description: '»Ì   —«ÀÌ „Ãœœ »«·ﬂ«„·° ›Ì ﬁ·» ﬂÌ„«‰ ›«—”',
                images: ['https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400'],
                contact: '01098765432',
                features: ['ÿ—«“  —«ÀÌ', 'ÕÊ‘ Ê«”⁄', 'ﬁ—Ì» „‰ «·”Êﬁ']
            }
        ],
        '«·›ÌÊ„ «·„œÌ‰…': [
            {
                id: 4,
                title: '‘ﬁ… ÕœÌÀ… Ê”ÿ «·„œÌ‰…',
                price: 950000,
                area: 140,
                rooms: 2,
                bathrooms: 1,
                description: '‘ﬁ… ⁄„·Ì… ›Ì „Êﬁ⁄ ÕÌÊÌ° ﬁ—Ì»… „‰ ﬂ· «·Œœ„« ',
                images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400'],
                contact: '01034567890',
                features: ['„Êﬁ⁄ ÕÌÊÌ', '„Ê«’·«  „ Ê›—…', '≈ÿ·«·… „„Ì“…']
            }
        ]
    },
    lands: {
        '«·”Ê«ﬁÌ': [
            {
                id: 5,
                title: '√—÷ “—«⁄Ì… Œ’»…',
                price: 180000,
                area: 2400,
                description: '√—÷ “—«⁄Ì… ⁄·Ï «· —⁄…° ’«·Õ… ·Ã„Ì⁄ «·„Õ«’Ì·',
                images: ['https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400'],
                contact: '01156789012',
                features: ['⁄·Ï «· —⁄…', ' —»… Œ’»…', '”‰œ „·ﬂÌ…']
            }
        ],
        '√ÿ”«': [
            {
                id: 6,
                title: '√—÷ ··«” À„«—',
                price: 300000,
                area: 1000,
                description: '√—÷ „„Ì“… ··»‰«¡ √Ê «·«” À„«— ›Ì „‰ÿﬁ… ‰«„Ì…',
                images: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400'],
                contact: '01123456789',
                features: ['„Êﬁ⁄ «” —« ÌÃÌ', 'ﬁ—Ì» „‰ «·ÿ—Ìﬁ «·—∆Ì”Ì', 'ﬂÂ—»«¡ „ Ê›—…']
            }
        ],
        'ÿ«„Ì…': [
            {
                id: 7,
                title: '√—÷ “—«⁄Ì… Ê«”⁄…',
                price: 450000,
                area: 4200,
                description: '√—÷ “—«⁄Ì… ﬂ»Ì—… „‰«”»… ··„‘«—Ì⁄ «·“—«⁄Ì… «·ﬂ»Ì—…',
                images: ['https://images.unsplash.com/photo-1574263867128-8a8d9b7c0b95?w=400'],
                contact: '01098765433',
                features: ['„”«Õ… ﬂ»Ì—…', '„Ì«Â ÃÊ›Ì…', 'ÿ—Ìﬁ „—’Ê›']
            }
        ]
    }
};

// ﬁ«∆„… «·„‰«ÿﬁ
const areas = ['«·”Ê«ﬁÌ', 'ﬂÌ„«‰ ›«—”', '«·›ÌÊ„ «·„œÌ‰…', '√ÿ”«', 'ÿ«„Ì…', '”‰Ê—”', '≈»‘Ê«Ì', 'ÌÊ”› «·’œÌﬁ'];

// œ«·…  ‰”Ìﬁ «·√”⁄«—
function formatPrice(price) {
    return new Intl.NumberFormat('ar-EG').format(price) + ' Ã‰ÌÂ';
}

// œ«·… ≈ŸÂ«—/≈Œ›«¡ «·’›Õ« 
function showPage(pageId) {
    const pages = ['propertyTypePage', 'areaPage', 'propertiesPage', 'propertyDetailsPage'];
    pages.forEach(page => {
        document.getElementById(page).classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
    document.getElementById(pageId).classList.add('fade-in');
}

// œ«·… ≈ŸÂ«—/≈Œ›«¡ “— «·⁄Êœ…
function toggleBackButton(show) {
    const backBtn = document.getElementById('backBtn');
    if (show) {
        backBtn.classList.remove('hidden');
    } else {
        backBtn.classList.add('hidden');
    }
}

// œ«·… ≈‰‘«¡ »ÿ«ﬁ… «·⁄ﬁ«—
function createPropertyCard(property, type) {
    return `
        <div class="property-card">
            <div style="position: relative;">
                <img src="${property.images[0]}" alt="${property.title}" class="property-image">
                <button onclick="toggleFavorite(${property.id})" 
                    class="absolute top-3 right-3 p-2 rounded-full ${favorites.includes(property.id) ? 'bg-red-500 text-white' : 'bg-white text-gray-600'}">
                    ??
                </button>
            </div>
            
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-price">
                    ?? ${formatPrice(property.price)}
                </div>
                
                <div class="property-details">
                    <div class="property-detail">
                        ?? ${property.area} „≤
                    </div>
                    ${type === 'houses' ? `
                        <div class="property-detail">
                            ??? ${property.rooms} €—›
                        </div>
                        ${property.bathrooms ? `
                            <div class="property-detail">
                                ?? ${property.bathrooms} Õ„«„
                            </div>
                        ` : ''}
                    ` : ''}
                </div>
                
                <p class="property-description">${property.description}</p>
                
                <div class="property-actions">
                    <button onclick="showPropertyDetails(${property.id})" class="btn-primary">
                        ⁄—÷ «· ›«’Ì·
                    </button>
                    <button class="btn-secondary">
                        ??
                    </button>
                </div>
            </div>
        </div>
    `;
}

// œ«·… ⁄—÷  ›«’Ì· «·⁄ﬁ«—
function showPropertyDetails(propertyId) {
    const property = findPropertyById(propertyId);
    if (!property) return;

    const detailsPage = document.getElementById('propertyDetailsPage');
    detailsPage.innerHTML = `
        <div class="details-header">
            <button onclick="goBack()" class="flex items-center text-blue-600 hover:text-blue-700">
                ? «·⁄Êœ…
            </button>
            <h1 class="font-bold text-lg"> ›«’Ì· «·⁄ﬁ«—</h1>
            <div class="flex gap-2">
                <button onclick="toggleFavorite(${property.id})" class="p-2 text-gray-600 hover:text-red-500">
                    ??
                </button>
                <button class="p-2 text-gray-600 hover:text-blue-500">
                    ??
                </button>
            </div>
        </div>

        <div class="details-content">
            <!-- ’Ê— «·⁄ﬁ«— -->
            <div class="details-images">
                <img src="${property.images[0]}" alt="${property.title}" class="main-image">
                ${property.images.length > 1 ? `
                    <div class="thumbnail-images">
                        ${property.images.slice(1).map(img => `
                            <img src="${img}" alt="’Ê—… ≈÷«›Ì…" class="thumbnail">
                        `).join('')}
                    </div>
                ` : ''}
            </div>

            <!-- „⁄·Ê„«  √”«”Ì… -->
            <div class="info-card">
                <h2 class="text-xl font-bold mb-3 text-gray-800">${property.title}</h2>
                <div class="text-blue-600 font-bold text-2xl mb-4">
                    ?? ${formatPrice(property.price)}
                </div>
                
                <div class="info-grid">
                    <div class="info-item">
                        ?? «·„”«Õ…: ${property.area} „≤
                    </div>
                    ${selectedType === 'houses' ? `
                        <div class="info-item">
                            ??? «·€—›: ${property.rooms}
                        </div>
                        ${property.bathrooms ? `
                            <div class="info-item">
                                ?? «·Õ„«„« : ${property.bathrooms}
                            </div>
                        ` : ''}
                    ` : ''}
                    <div class="info-item">
                        ?? ${selectedArea}
                    </div>
                </div>
            </div>

            <!-- «·Ê’› -->
            <div class="info-card">
                <h3 class="font-bold text-lg mb-3 text-gray-800">«·Ê’›</h3>
                <p class="text-gray-600 leading-relaxed">${property.description}</p>
            </div>

            <!-- «·„„Ì“«  -->
            ${property.features ? `
                <div class="info-card">
                    <h3 class="font-bold text-lg mb-3 text-gray-800">«·„„Ì“« </h3>
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

            <!-- „⁄·Ê„«  «·« ’«· -->
            <div class="info-card">
                <h3 class="font-bold text-lg mb-3 text-gray-800">··«” ›”«—</h3>
                <a href="tel:${property.contact}" class="contact-btn">
                    ?? « ’· «·¬‰: ${property.contact}
                </a>
            </div>
        </div>
    `;

    showPage('propertyDetailsPage');
    currentStep = 'details';
}

// œ«·… «·»ÕÀ ⁄‰ «·⁄ﬁ«— »«·—ﬁ„
function findPropertyById(id) {
    for (let type in properties) {
        for (let area in properties[type]) {
            const property = properties[type][area].find(p => p.id === id);
            if (property) return property;
        }
    }
    return null;
}

// œ«·… ≈÷«›…/≈“«·… «·„›÷·…
function toggleFavorite(propertyId) {
    if (favorites.includes(propertyId)) {
        favorites = favorites.filter(id => id !== propertyId);
    } else {
        favorites.push(propertyId);
    }
}

// œ«·… «·⁄Êœ… ··Œ·›
function goBack() {
    if (currentStep === 'details') {
        showPropertiesPage();
    } else if (currentStep === 'properties') {
        showAreaPage();
    } else if (currentStep === 'area') {
        showPropertyTypePage();
    }
}

// œ«·… ⁄—÷ ’›Õ… ‰Ê⁄ «·⁄ﬁ«—
function showPropertyTypePage() {
    showPage('propertyTypePage');
    toggleBackButton(false);
    currentStep = 'propertyType';
}

// œ«·… ⁄—÷ ’›Õ… «·„‰«ÿﬁ
function showAreaPage() {
    const areasGrid = document.getElementById('areasGrid');
    areasGrid.innerHTML = areas.map(area => `
        <button onclick="selectArea('${area}')" class="area-btn">
            ?? ${area}
        </button>
    `).join('');
    
    showPage('areaPage');
    toggleBackButton(true);
    currentStep = 'area';
}

// œ«·… ⁄—÷ ’›Õ… «·⁄ﬁ«—« 
function showPropertiesPage() {
    const propertiesList = document.getElementById('propertiesList');
    const propertiesTitle = document.getElementById('propertiesTitle');
    const propertiesCount = document.getElementById('propertiesCount');
    const noProperties = document.getElementById('noProperties');

    const typeText = selectedType === 'houses' ? '„‰«“·' : '√—«÷Ì';
    propertiesTitle.textContent = `${typeText} ${selectedArea}`;

    const areaProperties = properties[selectedType][selectedArea] || [];
    propertiesCount.textContent = `${areaProperties.length} ⁄ﬁ«—`;

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

// œ«·… «Œ Ì«— ‰Ê⁄ «·⁄ﬁ«—
function selectPropertyType(type) {
    selectedType = type;
    showAreaPage();
}

// œ«·… «Œ Ì«— «·„‰ÿﬁ…
function selectArea(area) {
    selectedArea = area;
    showPropertiesPage();
}

// ≈⁄œ«œ «·√Õœ«À ⁄‰œ  Õ„Ì· «·’›Õ…
document.addEventListener('DOMContentLoaded', function() {
    // √Õœ«À √“—«— ‰Ê⁄ «·⁄ﬁ«—
    document.getElementById('housesBtn').addEventListener('click', () => selectPropertyType('houses'));
    document.getElementById('landsBtn').addEventListener('click', () => selectPropertyType('lands'));
    
    // ÕœÀ “— «·⁄Êœ…
    document.getElementById('backBtn').addEventListener('click', goBack);
    
    // ⁄—÷ «·’›Õ… «·√Ê·Ï
    showPropertyTypePage();
});

console.log('??  ÿ»Ìﬁ ⁄ﬁ«—«  «·›ÌÊ„ Ã«Â“ ··«” Œœ«„!');