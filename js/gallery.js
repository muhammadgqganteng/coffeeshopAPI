import { fetchCoffeeData } from './service/api.js';


function buatImage(item) {

    const image = item.image || '../assets/image/product.png';
    const alt = item.title || 'Coffee';
    const title = item.title || 'Coffee Item';
    const description = item.description || 'Delicious coffee beverage.';

    return `
        <div class="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <a href="#">
                <img class="w-full h-64 object-cover" src="${image}" alt="${alt}" />
            </a>
            <div class="p-5">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${title}</h3>
                <p class="text-gray-600">${description}</p>
            </div>
        </div>
    `;
}


async function jalankanGallery() {
    const galleryContainer = document.getElementById('gallery-container');

 
    galleryContainer.innerHTML = '<p class="text-center text-gray-600">Loading coffee data...</p>';

    try {
        const coffeeItems = await fetchCoffeeData();
        galleryContainer.innerHTML = coffeeItems.map(buatImage).join('');
    } catch (error) {
        console.error('Error loading gallery:', error);
        galleryContainer.innerHTML = '<p class="text-center text-red-600">Error loading coffee data. harap coba lagi nanti.</p>';
    }
}


// document.addEventListener('DOMContentLoaded', jalankanGallery);
jalankanGallery();
