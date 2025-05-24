document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.getElementById('pageTitle');
    const serviceTitle = document.getElementById('serviceTitle');
    const serviceImage = document.getElementById('serviceImage');
    const serviceDescription = document.getElementById('serviceDescription');
    const serviceFeatures = document.getElementById('serviceFeatures');

    // 1. Define your service content data
    const servicesData = {
        'roofing': {
            title: 'Roofing Solutions',
            image: 'images/roofing.jpg', // Make sure you have this image in an 'images' folder
            description: 'From minor repairs to complete roof replacements, our team provides durable and aesthetically pleasing roofing solutions tailored to your property\'s needs. We work with various materials including asphalt, tile, metal, and flat roofs.',
            features: [
                'New Roof Installation',
                'Roof Repair & Maintenance',
                'Gutter Installation',
                'Leak Detection & Prevention',
                'Emergency Roofing Services'
            ]
        },
        'plumbing': {
            title: 'Plumbing Services',
            image: 'images/plumbing.jpg', // Make sure you have this image
            description: 'Our certified plumbers handle everything from leaky faucets to complex pipe installations. We ensure efficient and reliable water systems for both residential and commercial properties.',
            features: [
                'Pipe Repair & Replacement',
                'Drain Cleaning',
                'Water Heater Installation',
                'Fixture Installation (sinks, toilets, showers)',
                'Emergency Plumbing'
            ]
        },
        'electrical': {
            title: 'Electrical Installations',
            image: 'images/electrical.jpg', // Make sure you have this image
            description: 'Safe and efficient electrical systems are crucial. Our licensed electricians provide comprehensive services, from new wiring to panel upgrades and troubleshooting, ensuring your property is powered safely.',
            features: [
                'New Wiring & Rewiring',
                'Panel Upgrades',
                'Lighting Installation (indoor/outdoor)',
                'Outlet & Switch Repair',
                'Electrical Inspections'
            ]
        },
        'landscaping': {
            title: 'Landscaping & Outdoor',
            image: 'images/landscaping.jpg', // Make sure you have this image
            description: 'Transform your outdoor spaces into beautiful and functional areas. We offer design, installation, and maintenance for gardens, patios, walkways, and more.',
            features: [
                'Garden Design & Installation',
                'Patio & Deck Construction',
                'Fence Installation',
                'Irrigation Systems',
                'Tree & Shrub Planting'
            ]
        },
        'renovation': {
            title: 'Home Renovations',
            image: 'images/renovation.jpg', // Make sure you have this image
            description: 'Whether it\'s a kitchen remodel, bathroom update, or a full home renovation, we bring your vision to life with quality craftsmanship and attention to detail, enhancing your living space.',
            features: [
                'Kitchen Remodeling',
                'Bathroom Renovations',
                'Basement Finishing',
                'Room Additions',
                'Interior Design Consultation'
            ]
        }
        // Add more services here
    };

    // 2. Get the service key from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceKey = urlParams.get('service'); // 'service' is the name of our URL parameter

    // 3. Populate the page with content based on the serviceKey
    if (serviceKey && servicesData[serviceKey]) {
        const service = servicesData[serviceKey];

        // Update page title
        pageTitle.textContent = `${service.title} - Service Details`;

        // Update main title
        serviceTitle.textContent = service.title;

        // Update image
        if (service.image) {
            serviceImage.src = service.image;
            serviceImage.alt = service.title;
            serviceImage.style.display = 'block'; // Show the image
        } else {
            serviceImage.style.display = 'none'; // Hide if no image
        }

        // Update description
        serviceDescription.textContent = service.description;

        // Update features list
        serviceFeatures.innerHTML = ''; // Clear existing list items
        if (service.features && service.features.length > 0) {
            service.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                serviceFeatures.appendChild(li);
            });
        } else {
            // If no features, you might hide the ul or show a message
            serviceFeatures.style.display = 'none';
        }

    } else {
        // Handle cases where the service key is invalid or not found
        pageTitle.textContent = 'Service Not Found';
        serviceTitle.textContent = 'Service Not Found';
        serviceDescription.textContent = 'The service you are looking for could not be found. Please go back to our <a href="services.html">Services Page</a>.';
        serviceImage.style.display = 'none'; // Hide image
        serviceFeatures.style.display = 'none'; // Hide features
    }
});