// ������� �������
let currentStep = 'propertyType';
let selectedType = '';
let selectedArea = '';
let favorites = [];

// ������ ��������
const properties = {
    houses: {
        '�������': [
            {
                id: 1,
                title: '���� ����� �� �������',
                price: 2500000,
                area: 350,
                rooms: 4,
                bathrooms: 3,
                description: '���� ����� ������ ���� ���ӡ ����� ���ɡ ���� ��������',
                images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400'],
                contact: '01012345678',
                features: ['����� ����', '����', '����', '��� ������']
            },
            {
                id: 2,
                title: '��� ������ �����',
                price: 850000,
                area: 180,
                rooms: 3,
                bathrooms: 2,
                description: '��� ����� �� ���� ���ơ ����� �� �������',
                images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400'],
                contact: '01087654321',
                features: ['������ �����', '���� ����', '���� �� �������']
            }
        ],
        '����� ����': [
            {
                id: 3,
                title: '��� ���� ����',
                price: 1200000,
                area: 200,
                rooms: 3,
                bathrooms: 2,
                description: '��� ����� ���� ������� �� ��� ����� ����',
                images: ['https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400'],
                contact: '01098765432',
                features: ['���� �����', '��� ����', '���� �� �����']
            }
        ],
        '������ �������': [
            {
                id: 4,
                title: '��� ����� ��� �������',
                price: 950000,
                area: 140,
                rooms: 2,
                bathrooms: 1,
                description: '��� ����� �� ���� ���� ����� �� �� �������',
                images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400'],
                contact: '01034567890',
                features: ['���� ����', '������� ������', '������ �����']
            }
        ]
    },
    lands: {
        '�������': [
            {
                id: 5,
                title: '��� ������ ����',
                price: 180000,
                area: 2400,
                description: '��� ������ ��� �����ɡ ����� ����� ��������',
                images: ['https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400'],
                contact: '01156789012',
                features: ['��� ������', '���� ����', '��� �����']
            }
        ],
        '����': [
            {
                id: 6,
                title: '��� ���������',
                price: 300000,
                area: 1000,
                description: '��� ����� ������ �� ��������� �� ����� �����',
                images: ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400'],
                contact: '01123456789',
                features: ['���� ���������', '���� �� ������ �������', '������ ������']
            }
        ],
        '�����': [
            {
                id: 7,
                title: '��� ������ �����',
                price: 450000,
                area: 4200,
                description: '��� ������ ����� ������ �������� �������� �������',
                images: ['https://images.unsplash.com/photo-1574263867128-8a8d9b7c0b95?w=400'],
                contact: '01098765433',
                features: ['����� �����', '���� �����', '���� �����']
            }
        ]
    }
};

// ����� �������
const areas = ['�������', '����� ����', '������ �������', '����', '�����', '�����', '������', '���� ������'];

// ���� ����� �������
function formatPrice(price) {
    return new Intl.NumberFormat('ar-EG').format(price) + ' ����';
}

// ���� �����/����� �������
function showPage(pageId) {
    const pages = ['propertyTypePage', 'areaPage', 'propertiesPage', 'propertyDetailsPage'];
    pages.forEach(page => {
        document.getElementById(page).classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
    document.getElementById(pageId).classList.add('fade-in');
}

// ���� �����/����� �� ������
function toggleBackButton(show) {
    const backBtn = document.getElementById('backBtn');
    if (show) {
        backBtn.classList.remove('hidden');
    } else {
        backBtn.classList.add('hidden');
    }
}

// ���� ����� ����� ������
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
                        ?? ${property.area} �
                    </div>
                    ${type === 'houses' ? `
                        <div class="property-detail">
                            ??? ${property.rooms} ���
                        </div>
                        ${property.bathrooms ? `
                            <div class="property-detail">
                                ?? ${property.bathrooms} ����
                            </div>
                        ` : ''}
                    ` : ''}
                </div>
                
                <p class="property-description">${property.description}</p>
                
                <div class="property-actions">
                    <button onclick="showPropertyDetails(${property.id})" class="btn-primary">
                        ��� ��������
                    </button>
                    <button class="btn-secondary">
                        ??
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ���� ��� ������ ������
function showPropertyDetails(propertyId) {
    const property = findPropertyById(propertyId);
    if (!property) return;

    const detailsPage = document.getElementById('propertyDetailsPage');
    detailsPage.innerHTML = `
        <div class="details-header">
            <button onclick="goBack()" class="flex items-center text-blue-600 hover:text-blue-700">
                ? ������
            </button>
            <h1 class="font-bold text-lg">������ ������</h1>
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
            <!-- ��� ������ -->
            <div class="details-images">
                <img src="${property.images[0]}" alt="${property.title}" class="main-image">
                ${property.images.length > 1 ? `
                    <div class="thumbnail-images">
                        ${property.images.slice(1).map(img => `
                            <img src="${img}" alt="���� ������" class="thumbnail">
                        `).join('')}
                    </div>
                ` : ''}
            </div>

            <!-- ������� ������ -->
            <div class="info-card">
                <h2 class="text-xl font-bold mb-3 text-gray-800">${property.title}</h2>
                <div class="text-blue-600 font-bold text-2xl mb-4">
                    ?? ${formatPrice(property.price)}
                </div>
                
                <div class="info-grid">
                    <div class="info-item">
                        ?? �������: ${property.area} �
                    </div>
                    ${selectedType === 'houses' ? `
                        <div class="info-item">
                            ??? �����: ${property.rooms}
                        </div>
                        ${property.bathrooms ? `
                            <div class="info-item">
                                ?? ��������: ${property.bathrooms}
                            </div>
                        ` : ''}
                    ` : ''}
                    <div class="info-item">
                        ?? ${selectedArea}
                    </div>
                </div>
            </div>

            <!-- ����� -->
            <div class="info-card">
                <h3 class="font-bold text-lg mb-3 text-gray-800">�����</h3>
                <p class="text-gray-600 leading-relaxed">${property.description}</p>
            </div>

            <!-- �������� -->
            ${property.features ? `
                <div class="info-card">
                    <h3 class="font-bold text-lg mb-3 text-gray-800">��������</h3>
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

            <!-- ������� ������� -->
            <div class="info-card">
                <h3 class="font-bold text-lg mb-3 text-gray-800">���������</h3>
                <a href="tel:${property.contact}" class="contact-btn">
                    ?? ���� ����: ${property.contact}
                </a>
            </div>
        </div>
    `;

    showPage('propertyDetailsPage');
    currentStep = 'details';
}

// ���� ����� �� ������ ������
function findPropertyById(id) {
    for (let type in properties) {
        for (let area in properties[type]) {
            const property = properties[type][area].find(p => p.id === id);
            if (property) return property;
        }
    }
    return null;
}

// ���� �����/����� �������
function toggleFavorite(propertyId) {
    if (favorites.includes(propertyId)) {
        favorites = favorites.filter(id => id !== propertyId);
    } else {
        favorites.push(propertyId);
    }
}

// ���� ������ �����
function goBack() {
    if (currentStep === 'details') {
        showPropertiesPage();
    } else if (currentStep === 'properties') {
        showAreaPage();
    } else if (currentStep === 'area') {
        showPropertyTypePage();
    }
}

// ���� ��� ���� ��� ������
function showPropertyTypePage() {
    showPage('propertyTypePage');
    toggleBackButton(false);
    currentStep = 'propertyType';
}

// ���� ��� ���� �������
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

// ���� ��� ���� ��������
function showPropertiesPage() {
    const propertiesList = document.getElementById('propertiesList');
    const propertiesTitle = document.getElementById('propertiesTitle');
    const propertiesCount = document.getElementById('propertiesCount');
    const noProperties = document.getElementById('noProperties');

    const typeText = selectedType === 'houses' ? '�����' : '�����';
    propertiesTitle.textContent = `${typeText} ${selectedArea}`;

    const areaProperties = properties[selectedType][selectedArea] || [];
    propertiesCount.textContent = `${areaProperties.length} ����`;

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

// ���� ������ ��� ������
function selectPropertyType(type) {
    selectedType = type;
    showAreaPage();
}

// ���� ������ �������
function selectArea(area) {
    selectedArea = area;
    showPropertiesPage();
}

// ����� ������� ��� ����� ������
document.addEventListener('DOMContentLoaded', function() {
    // ����� ����� ��� ������
    document.getElementById('housesBtn').addEventListener('click', () => selectPropertyType('houses'));
    document.getElementById('landsBtn').addEventListener('click', () => selectPropertyType('lands'));
    
    // ��� �� ������
    document.getElementById('backBtn').addEventListener('click', goBack);
    
    // ��� ������ ������
    showPropertyTypePage();
});

console.log('?? ����� ������ ������ ���� ���������!');