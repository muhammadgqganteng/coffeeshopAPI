
async function fetchCoffeeData() {
    try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return [];
    }
}

export { fetchCoffeeData };