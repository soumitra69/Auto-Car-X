/**
 * Auto Car X - Complete Dynamic Frontend Engine
 * Powers:
 * 1. Persistent Shopping Cart (localStorage) + Live Navbar Badge + Toast Notifications
 * 2. Add to Cart & Quick-View Product Details Modal (index.html, product.html, Search Modal)
 * 3. Dynamic Cart Page (cart.html) with Quantity Controls, Item Removal, Promo Code & Checkout Receipt Modal
 * 4. Real-Time Product Filtering, Brand Search, Category/Price/Rating/Discount Filters & Sorting (product.html)
 * 5. Dynamic Service Details Modal, Appointment Booking System & Plan Subscriptions (index.html, service.html)
 * 6. Global Live Search Modal across Products & Services (all pages)
 * 7. Persistent Location Selector & User Authentication (Login / Sign Up / Social Login / Logout) (all pages)
 * 8. Newsletter Subscription & Contact Form Handling (all pages)
 */

(function () {
    'use strict';

    // =========================================================================
    // 1. PRODUCT & SERVICE CATALOG DATA
    // =========================================================================
    const PRODUCT_CATALOG = [
        {
            id: 'prod-1',
            name: 'Alloy Brake Pads (2 Set)',
            price: 88.00,
            oldPrice: 120.00,
            discount: 27,
            rating: 5,
            reviews: 124,
            brand: 'Bosch',
            autoBrand: 'bmw',
            model: 'sedan',
            partId: '652236701',
            category: 'tire-wheel',
            categoryLabel: 'Brake & Wheel Systems',
            image: './assets/unnamed-2-512x313.png',
            popularity: 98,
            createdAt: 12,
            description: 'High-performance ceramic-infused alloy brake pads engineered for superior stopping power, low dust, and quiet braking under extreme temperatures.'
        },
        {
            id: 'prod-2',
            name: '27 CM Forged Car Wheels',
            price: 230.00,
            oldPrice: 350.00,
            discount: 34,
            rating: 5,
            reviews: 89,
            brand: 'Monroe',
            autoBrand: 'mercedes',
            model: 'suv',
            partId: '652236702',
            category: 'tire-wheel',
            categoryLabel: 'Tire and Wheel',
            image: './assets/pexels-photo-195635.png',
            popularity: 95,
            createdAt: 11,
            description: 'Precision CNC-machined 27 CM lightweight forged aluminum alloy wheel rim designed for enhanced handling, durability, and aggressive styling.'
        },
        {
            id: 'prod-3',
            name: 'Sport Leather Car Steering Black',
            price: 95.00,
            oldPrice: 160.00,
            discount: 41,
            rating: 5,
            reviews: 67,
            brand: 'Autopart',
            autoBrand: 'audi',
            model: 'coupe',
            partId: '652236703',
            category: 'car-dashboard',
            categoryLabel: 'Car Dashboard Accessories',
            image: './assets/pexels-photo-3689534.png',
            popularity: 90,
            createdAt: 10,
            description: 'Ergonomic perforated microfiber leather steering wheel with contoured grip bolsters and red contrast stitching for maximum driver control.'
        },
        {
            id: 'prod-4',
            name: 'Alloy Silver Vented Disc Brake',
            price: 140.00,
            oldPrice: 200.00,
            discount: 30,
            rating: 5,
            reviews: 112,
            brand: 'Bosch',
            autoBrand: 'volkswagen',
            model: 'sedan',
            partId: '652236704',
            category: 'tire-wheel',
            categoryLabel: 'Tire and Wheel',
            image: './assets/mechanic-changing-brake-discs-car-service-8869.png',
            popularity: 92,
            createdAt: 9,
            description: 'Cross-drilled and slotted ventilated silver alloy brake rotor providing rapid heat dissipation and fade-free braking performance.'
        },
        {
            id: 'prod-5',
            name: 'Iridium Aluminum Spark Plug',
            price: 45.00,
            oldPrice: 90.00,
            discount: 50,
            rating: 5,
            reviews: 156,
            brand: 'Denso',
            autoBrand: 'toyota',
            model: 'hatchback',
            partId: '652236705',
            category: 'vehicle-cleaners',
            categoryLabel: 'Engine & Ignition',
            image: './assets/image (35).png',
            popularity: 94,
            createdAt: 8,
            description: 'Ultra-fine 0.4mm iridium center electrode spark plug for faster ignition, improved fuel efficiency, and smoother engine idle.'
        },
        {
            id: 'prod-6',
            name: 'Carbon Pro Steering Wheel Cover',
            price: 65.00,
            oldPrice: 95.00,
            discount: 32,
            rating: 4,
            reviews: 53,
            brand: 'Gates',
            autoBrand: 'honda',
            model: 'sedan',
            partId: '652236706',
            category: 'car-dashboard',
            categoryLabel: 'Car Dashboard Accessories',
            image: './assets/image (36).png',
            popularity: 82,
            createdAt: 7,
            description: 'Anti-slip carbon-fiber pattern sport steering wheel assembly with thumb rests and breathable side grips.'
        },
        {
            id: 'prod-7',
            name: 'High-Flow Alloy Oil Filter',
            price: 50.00,
            oldPrice: 85.00,
            discount: 41,
            rating: 5,
            reviews: 204,
            brand: 'ACDelco',
            autoBrand: 'ford',
            model: 'pickup',
            partId: '652236712',
            category: 'vehicle-cleaners',
            categoryLabel: 'Vehicle Cleaners & Filters',
            image: './assets/image (37).png',
            popularity: 97,
            createdAt: 6,
            description: 'Heavy-duty synthetic media spin-on oil filter that traps 99% of harmful contaminants while maintaining optimal oil pressure.'
        },
        {
            id: 'prod-8',
            name: 'Heavy-Duty Ceramic Brake Pad Set',
            price: 110.00,
            oldPrice: 165.00,
            discount: 33,
            rating: 4,
            reviews: 78,
            brand: 'Monroe',
            autoBrand: 'chevrolet',
            model: 'suv',
            partId: '652236708',
            category: 'tire-wheel',
            categoryLabel: 'Tire and Wheel',
            image: './assets/image (38).png',
            popularity: 85,
            createdAt: 5,
            description: 'OEM-grade ceramic brake pad kit including stainless-steel hardware shims for vibration-free braking.'
        },
        {
            id: 'prod-9',
            name: 'Platinum Twin-Tip Spark Plugs (4x)',
            price: 75.00,
            oldPrice: 110.00,
            discount: 32,
            rating: 4,
            reviews: 91,
            brand: 'Denso',
            autoBrand: 'nissan',
            model: 'wagon',
            partId: '652236709',
            category: 'vehicle-mats',
            categoryLabel: 'Engine & Ignition',
            image: './assets/image (39).png',
            popularity: 86,
            createdAt: 4,
            description: 'Pack of 4 twin-tip platinum spark plugs delivering consistent spark energy and extended 100,000-mile service life.'
        },
        {
            id: 'prod-10',
            name: 'Laser Iridium Racing Spark Plug',
            price: 58.00,
            oldPrice: 80.00,
            discount: 28,
            rating: 5,
            reviews: 64,
            brand: 'ACDelco',
            autoBrand: 'hyundai',
            model: 'hatchback',
            partId: '652236710',
            category: 'vehicle-covers',
            categoryLabel: 'Engine & Ignition',
            image: './assets/image (40).png',
            popularity: 84,
            createdAt: 3,
            description: 'High-compression racing spark plug with copper core heat dissipation and anti-corrosion nickel-plated shell.'
        },
        {
            id: 'prod-11',
            name: 'Track-Spec Carbon Brake Pads',
            price: 175.00,
            oldPrice: 250.00,
            discount: 30,
            rating: 5,
            reviews: 47,
            brand: 'Bosch',
            autoBrand: 'bmw',
            model: 'convertible',
            partId: '652236711',
            category: 'tire-wheel',
            categoryLabel: 'Tire and Wheel',
            image: './assets/unnamed-2-512x313 (3).png',
            popularity: 88,
            createdAt: 2,
            description: 'Track-tested carbon-metallic compound brake pads built for high-speed deceleration and zero brake fade.'
        },
        {
            id: 'prod-12',
            name: 'Oilax Performance Spark Plug',
            price: 40.00,
            oldPrice: 80.00,
            discount: 50,
            rating: 5,
            reviews: 142,
            brand: 'Autopart',
            autoBrand: 'toyota',
            model: 'van',
            partId: '925567104',
            category: 'vehicle-mats',
            categoryLabel: 'Engine & Ignition',
            image: './assets/image (41).png',
            popularity: 91,
            createdAt: 1,
            description: 'Precision-gapped performance spark plug engineered for instant cold starts and reduced emissions.'
        }
    ];

    const SERVICE_CATALOG = {
        'General Service': {
            title: 'General Service',
            price: '$79.00',
            duration: '90 Mins',
            warranty: '6 Months / 10,000 km',
            description: 'Complete multi-point vehicle inspection, fluid top-ups, filter checks, battery test, and computer diagnostic scan.',
            features: [
                '50-Point Safety & Mechanical Inspection',
                'Engine Oil & Coolant Level Top-Up',
                'Air & Cabin Filter Cleaning',
                'Brake Pad Thickness & Disc Inspection'
            ]
        },
        'Wheels an Tyres': {
            title: 'Wheels and Tyres Service',
            price: '$59.00',
            duration: '60 Mins',
            warranty: '3 Months Alignment Guarantee',
            description: '3D computerized 4-wheel laser alignment, dynamic wheel balancing, tyre rotation, and tread wear inspection.',
            features: [
                '3D Laser 4-Wheel Alignment',
                'High-Speed Computerized Wheel Balancing',
                'Tyre Rotation & Nitrogen Inflation',
                'Suspension & Steering Linkage Check'
            ]
        },
        'Fuel Exchange': {
            title: 'Fuel System & Exchange Service',
            price: '$89.00',
            duration: '75 Mins',
            warranty: '6 Months Warranty',
            description: 'Ultrasonic fuel injector cleaning, fuel filter replacement, throttle body decarbonization, and fuel pump pressure testing.',
            features: [
                'Fuel Injector Ultrasonic Cleaning',
                'Throttle Body & Intake Decarbonization',
                'Fuel Line & Filter Inspection',
                'Exhaust Emission Optimization'
            ]
        },
        'Vehichle Maintenance': {
            title: 'Complete Vehicle Maintenance',
            price: '$149.00',
            duration: '2.5 Hours',
            warranty: '12 Months / 15,000 km',
            description: 'Comprehensive bumper-to-bumper preventive maintenance covering engine, transmission, suspension, brakes, and AC.',
            features: [
                'Full Synthetic Oil & Oil Filter Replacement',
                'Transmission & Power Steering Fluid Check',
                'AC Cooling Performance & Gas Check',
                'Full OBD-II ECU Diagnostic Report'
            ]
        },
        'Battery Change': {
            title: 'Battery Testing & Replacement',
            price: '$119.00',
            duration: '30 Mins',
            warranty: '36 Months Replacement Warranty',
            description: 'Digital battery load testing, alternator charging check, terminal anti-corrosion treatment, and OEM battery installation.',
            features: [
                'Digital CCA & Voltage Load Test',
                'Alternator & Starter Motor Check',
                'Terminal Cleaning & Anti-Corrosion Spray',
                'Free Doorstep Installation & Old Battery Trade-In'
            ]
        },
        'Oil and Break Checks': {
            title: 'Oil & Brake Safety Service',
            price: '$99.00',
            duration: '60 Mins',
            warranty: '6 Months / 8,000 km',
            description: 'Premium synthetic engine oil change combined with complete front and rear brake pad, rotor, and brake fluid service.',
            features: [
                '100% Synthetic Engine Oil Change',
                'Brake Fluid Bleeding & Moisture Test',
                'Front & Rear Brake Caliper Lubrication',
                'Handbrake Cable Adjustment'
            ]
        },
        'Affordable Price': {
            title: 'Value Care Maintenance Package',
            price: '$49.00',
            duration: '45 Mins',
            warranty: '3 Months Peace-of-Mind',
            description: 'Budget-friendly essential checkup designed for daily commuters to keep your car safe, clean, and fuel-efficient.',
            features: [
                'Essential 25-Point Safety Check',
                'All Vital Fluids Top-Up',
                'Tyre Pressure & Battery Health Check',
                'Complimentary Exterior Foam Wash'
            ]
        },
        'Car Diagonstic': {
            title: 'Advanced OBD-II Car Diagnostic',
            price: '$69.00',
            duration: '45 Mins',
            warranty: 'Certified Diagnostic Report',
            description: 'Dealer-level computer diagnostics for check-engine lights, ABS, airbag (SRS), transmission, and electrical sensors.',
            features: [
                'Full ECU Fault Code Scanning & Clearing',
                'Live Sensor Data Telemetry Analysis',
                'ABS, Airbag & Transmission Module Check',
                'Detailed Printed & Digital Health Report'
            ]
        },
        'Tire Fix & Replace': {
            title: 'Tire Puncture Fix & Replacement',
            price: '$39.00',
            duration: '30 Mins',
            warranty: 'Lifetime Patch Guarantee',
            description: 'Mushroom-plug puncture repair, TPMS sensor programming, valve stem replacement, and new tyre mounting.',
            features: [
                'Internal Mushroom-Plug Puncture Repair',
                'TPMS Tire Pressure Sensor Calibration',
                'Rim Bead Sealing & Valve Replacement',
                'Precision Wheel Balancing Included'
            ]
        }
    };

    // =========================================================================
    // 2. STORAGE HELPERS (Cart, User, Location, Bookings)
    // =========================================================================
    const STORAGE_KEYS = {
        CART: 'autocarx_cart_v1',
        USER: 'autocarx_user_v1',
        LOCATION: 'autocarx_location_v1',
        BOOKINGS: 'autocarx_bookings_v1',
        SUBSCRIPTIONS: 'autocarx_subscriptions_v1'
    };

    function getCart() {
        try {
            const raw = localStorage.getItem(STORAGE_KEYS.CART);
            if (!raw) {
                // Seed initial cart with the 2 default items so cart.html looks great out-of-the-box
                const initialCart = [
                    {
                        id: 'prod-7',
                        name: 'High-Flow Alloy Oil Filter',
                        brand: 'KM Racing',
                        partId: '652236712',
                        price: 50.00,
                        quantity: 1,
                        image: './assets/image (37).png'
                    },
                    {
                        id: 'prod-12',
                        name: 'Oilax Performance Spark Plug',
                        brand: 'Oilax',
                        partId: '925567104',
                        price: 40.00,
                        quantity: 1,
                        image: './assets/image (41).png'
                    }
                ];
                localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(initialCart));
                return initialCart;
            }
            return JSON.parse(raw);
        } catch (e) {
            return [];
        }
    }

    function saveCart(cart) {
        localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
        updateCartBadges();
    }

    function addToCart(product, qty = 1) {
        const cart = getCart();
        const existing = cart.find(item => item.id === product.id || item.name === product.name);
        if (existing) {
            existing.quantity += qty;
        } else {
            cart.push({
                id: product.id || 'item-' + Date.now(),
                name: product.name,
                brand: product.brand || 'AutoCarX OEM',
                partId: product.partId || String(Math.floor(100000000 + Math.random() * 900000000)),
                price: Number(product.price) || 0,
                quantity: qty,
                image: product.image || './assets/image (37).png'
            });
        }
        saveCart(cart);
        showToast(`Added <strong>${product.name}</strong> (x${qty}) to your cart!`, 'success', {
            label: 'View Cart',
            href: './cart.html'
        });
    }

    function updateCartBadges() {
        const cart = getCart();
        const totalCount = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);

        document.querySelectorAll('a[href*="cart.html"]').forEach(link => {
            link.style.position = 'relative';
            link.style.display = 'inline-block';
            let badge = link.querySelector('.autocarx-cart-badge');
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'autocarx-cart-badge';
                link.appendChild(badge);
            }
            badge.textContent = totalCount;
            badge.style.display = totalCount > 0 ? 'flex' : 'none';
        });
    }

    // =========================================================================
    // 3. UI STYLES & TOAST NOTIFICATION ENGINE
    // =========================================================================
    function injectDynamicStyles() {
        if (document.getElementById('autocarx-dynamic-styles')) return;
        const style = document.createElement('style');
        style.id = 'autocarx-dynamic-styles';
        style.textContent = `
            .autocarx-cart-badge {
                position: absolute;
                top: -5px;
                right: -5px;
                background: #FF3434;
                color: #fff;
                border: 2px solid #252525;
                border-radius: 50%;
                min-width: 22px;
                height: 22px;
                font-size: 11px;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 5px;
                box-shadow: 0 2px 6px rgba(0,0,0,0.35);
                z-index: 10;
            }
            #autocarx-toast-container {
                position: fixed;
                bottom: 24px;
                right: 24px;
                z-index: 99999;
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 380px;
            }
            .autocarx-toast {
                background: #1f2428;
                color: #fff;
                border-left: 4px solid #FF3434;
                padding: 14px 18px;
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.28);
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                font-size: 14px;
                animation: acxSlideIn 0.25s ease-out;
            }
            .autocarx-toast.toast-success { border-left-color: #2ecc71; }
            .autocarx-toast.toast-info { border-left-color: #3498db; }
            .autocarx-toast-action {
                background: #FF3434;
                color: #fff !important;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 12px;
                font-weight: 600;
                white-space: nowrap;
                text-decoration: none;
            }
            .autocarx-toast-action:hover {
                background: #d62828;
            }
            @keyframes acxSlideIn {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            .search-result-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 14px;
                padding: 10px 12px;
                border: 1px solid #eee;
                border-radius: 8px;
                margin-bottom: 8px;
                transition: background 0.2s;
            }
            .search-result-item:hover {
                background: #f8f9fa;
            }
            .search-result-item img {
                width: 52px;
                height: 52px;
                object-fit: cover;
                border-radius: 6px;
            }
            .product-card .discount-badge-pill {
                position: absolute;
                top: 12px;
                right: 12px;
                background: #FF3434;
                color: #fff;
                font-size: 11px;
                font-weight: 700;
                padding: 3px 8px;
                border-radius: 20px;
                z-index: 2;
            }
            .product-card {
                position: relative;
            }
            .cart-remove-btn {
                background: none;
                border: none;
                color: #dc3545;
                cursor: pointer;
                font-size: 16px;
                padding: 4px 8px;
                border-radius: 6px;
                transition: background 0.2s;
            }
            .cart-remove-btn:hover {
                background: #fee2e2;
            }
        `;
        document.head.appendChild(style);
    }

    window.showAutoCarToast = showToast;
    function showToast(htmlMessage, type = 'success', action = null) {
        let container = document.getElementById('autocarx-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'autocarx-toast-container';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.className = `autocarx-toast toast-${type}`;
        toast.innerHTML = `
            <div style="line-height:1.4;">${htmlMessage}</div>
            ${action ? `<a class="autocarx-toast-action" href="${action.href}">${action.label}</a>` : ''}
        `;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.25s ease';
            setTimeout(() => toast.remove(), 260);
        }, 3800);
    }

    // =========================================================================
    // 4. DYNAMIC MODALS (Product Quick-View, Service Details & Appointment, Order Receipt)
    // =========================================================================
    function ensureDynamicModals() {
        if (document.getElementById('acxDynamicModals')) return;
        const wrapper = document.createElement('div');
        wrapper.id = 'acxDynamicModals';
        wrapper.innerHTML = `
            <!-- Product Quick-View Modal -->
            <div class="modal fade" id="acxProductModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content border-0 shadow-lg" style="border-radius:14px; overflow:hidden;">
                        <div class="modal-header bg-dark text-white">
                            <h5 class="modal-title fw-bold" id="acxProdModalTitle">Product Details</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body p-4">
                            <div class="row g-4 align-items-center">
                                <div class="col-md-5 text-center">
                                    <img id="acxProdModalImg" src="" alt="" class="img-fluid rounded border p-2" style="max-height:240px; object-fit:contain;">
                                </div>
                                <div class="col-md-7">
                                    <span class="badge bg-danger mb-2" id="acxProdModalCategory">Spare Part</span>
                                    <h4 class="fw-bold mb-1" id="acxProdModalName"></h4>
                                    <div class="text-muted small mb-2">
                                        Brand: <strong id="acxProdModalBrand"></strong> &nbsp;|&nbsp;
                                        Part ID: <strong id="acxProdModalPartId"></strong>
                                    </div>
                                    <div class="d-flex align-items-center gap-2 mb-3">
                                        <span class="fs-3 fw-bold text-danger" id="acxProdModalPrice"></span>
                                        <span class="text-muted text-decoration-line-through" id="acxProdModalOldPrice"></span>
                                        <span class="badge bg-success ms-2">In Stock</span>
                                    </div>
                                    <p class="text-secondary mb-3" id="acxProdModalDesc"></p>
                                    <div class="d-flex align-items-center gap-3 mb-3">
                                        <label class="fw-semibold">Quantity:</label>
                                        <div class="input-group" style="width: 130px;">
                                            <button class="btn btn-outline-secondary" type="button" id="acxProdQtyMinus">−</button>
                                            <input type="text" class="form-control text-center fw-bold" id="acxProdQtyInput" value="1" readonly>
                                            <button class="btn btn-outline-secondary" type="button" id="acxProdQtyPlus">+</button>
                                        </div>
                                    </div>
                                    <div class="d-flex gap-2 flex-wrap">
                                        <button type="button" class="btn btn-danger px-4 py-2 fw-semibold" id="acxProdModalAddBtn">
                                            <i class="fas fa-cart-plus me-2"></i>Add to Cart
                                        </button>
                                        <button type="button" class="btn btn-dark px-4 py-2 fw-semibold" id="acxProdModalBuyBtn">
                                            <i class="fas fa-bolt me-2"></i>Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Service Details & Quick Booking Modal -->
            <div class="modal fade" id="acxServiceModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content border-0 shadow-lg" style="border-radius:14px; overflow:hidden;">
                        <div class="modal-header bg-dark text-white">
                            <h5 class="modal-title fw-bold" id="acxServiceModalTitle">Service Details & Booking</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body p-4">
                            <div class="row g-4">
                                <div class="col-md-6 border-end">
                                    <span class="badge bg-danger mb-2">CERTIFIED GARAGE SERVICE</span>
                                    <h4 class="fw-bold mb-2" id="acxServiceName">General Service</h4>
                                    <div class="d-flex gap-3 mb-3 text-muted small">
                                        <span><i class="fas fa-tag text-danger me-1"></i>Starting at <strong id="acxServicePrice">$79.00</strong></span>
                                        <span><i class="fas fa-clock text-danger me-1"></i><strong id="acxServiceDuration">90 Mins</strong></span>
                                    </div>
                                    <p class="text-secondary small mb-3" id="acxServiceDesc"></p>
                                    <h6 class="fw-bold mb-2">What's Included:</h6>
                                    <ul class="list-unstyled small mb-3" id="acxServiceFeatures"></ul>
                                    <div class="p-2 bg-light rounded small text-muted">
                                        <i class="fas fa-shield-alt text-success me-1"></i>
                                        Warranty: <strong id="acxServiceWarranty">6 Months</strong>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h5 class="fw-bold mb-3">Schedule Your Appointment</h5>
                                    <form id="acxQuickBookingForm">
                                        <input type="text" class="form-control mb-2" name="fullName" placeholder="Full Name *" required>
                                        <input type="tel" class="form-control mb-2" name="phone" placeholder="Phone Number *" required>
                                        <input type="text" class="form-control mb-2" name="carNumber" placeholder="Car Number (e.g. CA-8492) *" required>
                                        <select class="form-select mb-2" name="serviceType" id="acxBookingServiceSelect" required>
                                            <option value="General Service">General Service ($79)</option>
                                            <option value="Wheels and Tyres Service">Wheels and Tyres ($59)</option>
                                            <option value="Fuel System & Exchange Service">Fuel Exchange ($89)</option>
                                            <option value="Complete Vehicle Maintenance">Vehicle Maintenance ($149)</option>
                                            <option value="Battery Testing & Replacement">Battery Change ($119)</option>
                                            <option value="Oil & Brake Safety Service">Oil and Brake Checks ($99)</option>
                                            <option value="Value Care Maintenance Package">Affordable Price Package ($49)</option>
                                            <option value="Advanced OBD-II Car Diagnostic">Car Diagnostic ($69)</option>
                                            <option value="Tire Puncture Fix & Replacement">Tire Fix & Replace ($39)</option>
                                            <option value="Basic Plan ($99/3mo)">Basic Plan Package ($99)</option>
                                            <option value="Standard Plan ($124/2mo)">Standard Plan Package ($124)</option>
                                            <option value="Premium Plan ($189/mo)">Premium Plan Package ($189)</option>
                                        </select>
                                        <div class="row g-2 mb-3">
                                            <div class="col-6">
                                                <select class="form-select" name="dateSlot" required>
                                                    <option value="Today (2:00 PM)">Today (2:00 PM)</option>
                                                    <option value="Tomorrow (10:00 AM)">Tomorrow (10:00 AM)</option>
                                                    <option value="Tomorrow (4:00 PM)">Tomorrow (4:00 PM)</option>
                                                    <option value="This Weekend">This Weekend</option>
                                                </select>
                                            </div>
                                            <div class="col-6">
                                                <select class="form-select" name="location" id="acxBookingLocationSelect" required>
                                                    <option value="Los Angeles">Los Angeles</option>
                                                    <option value="New York">New York</option>
                                                    <option value="Chicago">Chicago</option>
                                                    <option value="Houston">Houston</option>
                                                    <option value="San Diego">San Diego</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-danger w-100 py-2 fw-bold">
                                            Confirm Appointment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(wrapper);
    }

    function openProductModal(product) {
        ensureDynamicModals();
        document.getElementById('acxProdModalName').textContent = product.name;
        document.getElementById('acxProdModalCategory').textContent = product.categoryLabel || 'Spare Part';
        document.getElementById('acxProdModalBrand').textContent = product.brand || 'Bosch';
        document.getElementById('acxProdModalPartId').textContent = product.partId || '652236700';
        document.getElementById('acxProdModalPrice').textContent = '$' + Number(product.price).toFixed(2);
        document.getElementById('acxProdModalOldPrice').textContent = product.oldPrice ? '$' + Number(product.oldPrice).toFixed(2) : '';
        document.getElementById('acxProdModalDesc').textContent = product.description || 'Genuine OEM-certified automotive replacement spare part backed by Auto Car X warranty.';
        document.getElementById('acxProdModalImg').src = product.image;
        document.getElementById('acxProdModalImg').alt = product.name;

        const qtyInput = document.getElementById('acxProdQtyInput');
        qtyInput.value = '1';

        document.getElementById('acxProdQtyMinus').onclick = () => {
            const v = Math.max(1, parseInt(qtyInput.value, 10) - 1);
            qtyInput.value = String(v);
        };
        document.getElementById('acxProdQtyPlus').onclick = () => {
            const v = parseInt(qtyInput.value, 10) + 1;
            qtyInput.value = String(v);
        };

        const modalEl = document.getElementById('acxProductModal');
        const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);

        document.getElementById('acxProdModalAddBtn').onclick = () => {
            const qty = parseInt(qtyInput.value, 10) || 1;
            addToCart(product, qty);
            bsModal.hide();
        };

        document.getElementById('acxProdModalBuyBtn').onclick = () => {
            const qty = parseInt(qtyInput.value, 10) || 1;
            addToCart(product, qty);
            bsModal.hide();
            window.location.href = './cart.html';
        };

        bsModal.show();
    }

    function openServiceModal(serviceKey, preselectPlan = null) {
        ensureDynamicModals();
        const info = SERVICE_CATALOG[serviceKey] || SERVICE_CATALOG['General Service'];
        document.getElementById('acxServiceName').textContent = preselectPlan ? preselectPlan : info.title;
        document.getElementById('acxServicePrice').textContent = info.price;
        document.getElementById('acxServiceDuration').textContent = info.duration;
        document.getElementById('acxServiceDesc').textContent = info.description;
        document.getElementById('acxServiceWarranty').textContent = info.warranty;

        const ul = document.getElementById('acxServiceFeatures');
        ul.innerHTML = info.features
            .map(f => `<li class="mb-2"><i class="fas fa-check-circle text-danger me-2"></i>${f}</li>`)
            .join('');

        const selectEl = document.getElementById('acxBookingServiceSelect');
        if (preselectPlan) {
            Array.from(selectEl.options).forEach(opt => {
                if (opt.value.toLowerCase().includes(preselectPlan.toLowerCase().split(' ')[0])) {
                    selectEl.value = opt.value;
                }
            });
        } else {
            Array.from(selectEl.options).forEach(opt => {
                if (opt.value.toLowerCase().includes(info.title.toLowerCase().split(' ')[0])) {
                    selectEl.value = opt.value;
                }
            });
        }

        const savedLoc = localStorage.getItem(STORAGE_KEYS.LOCATION);
        const locSelect = document.getElementById('acxBookingLocationSelect');
        if (savedLoc && locSelect) {
            Array.from(locSelect.options).forEach(o => {
                if (o.value.toLowerCase() === savedLoc.toLowerCase()) locSelect.value = o.value;
            });
        }

        const form = document.getElementById('acxQuickBookingForm');
        form.onsubmit = function (e) {
            e.preventDefault();
            const fd = new FormData(form);
            const booking = {
                ref: 'ACX-' + Math.floor(100000 + Math.random() * 900000),
                name: fd.get('fullName'),
                phone: fd.get('phone'),
                carNumber: fd.get('carNumber'),
                service: fd.get('serviceType'),
                dateSlot: fd.get('dateSlot'),
                location: fd.get('location'),
                createdAt: new Date().toISOString()
            };
            const list = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]');
            list.push(booking);
            localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(list));

            bootstrap.Modal.getOrCreateInstance(document.getElementById('acxServiceModal')).hide();
            form.reset();
            showToast(
                `Booking Confirmed! Ref: <strong>${booking.ref}</strong> for <strong>${booking.service}</strong> (${booking.dateSlot}, ${booking.location}).`,
                'success'
            );
        };

        bootstrap.Modal.getOrCreateInstance(document.getElementById('acxServiceModal')).show();
    }

    // =========================================================================
    // 5. BIND PRODUCT CARDS & FILTERING / SORTING (index.html & product.html)
    // =========================================================================
    function initProductCardsAndFilters() {
        const allCards = Array.from(document.querySelectorAll('.product-card'));
        if (allCards.length === 0) return;

        const isProductPage = window.location.pathname.toLowerCase().includes('product.html') || allCards.length > 4;

        allCards.forEach((card, idx) => {
            const catalogItem = PRODUCT_CATALOG[idx % PRODUCT_CATALOG.length];
            const colWrapper = card.closest('[class*="col-"]') || card;

            // Update card DOM with rich, distinct catalog data on product.html so all 12 items are unique & filterable
            if (isProductPage && PRODUCT_CATALOG[idx]) {
                const titleEl = card.querySelector('.card-title');
                const priceEl = card.querySelector('.star .fw-bold');
                const imgEl = card.querySelector('img.product-image');
                if (titleEl) titleEl.textContent = catalogItem.name;
                if (priceEl) priceEl.textContent = '$' + catalogItem.price.toFixed(2);
                if (imgEl) {
                    imgEl.src = catalogItem.image;
                    imgEl.alt = catalogItem.name;
                }
                if (!card.querySelector('.discount-badge-pill')) {
                    const badge = document.createElement('span');
                    badge.className = 'discount-badge-pill';
                    badge.textContent = `-${catalogItem.discount}%`;
                    card.appendChild(badge);
                }
            }

            // Read actual displayed name/price/image for index.html cards
            const displayedTitle = (card.querySelector('.card-title')?.textContent || catalogItem.name).trim().replace(/\s+/g, ' ');
            const displayedPriceText = (card.querySelector('.star .fw-bold')?.textContent || '').replace(/[^0-9.]/g, '');
            const displayedPrice = displayedPriceText ? parseFloat(displayedPriceText) : catalogItem.price;
            const displayedImg = card.querySelector('img.product-image')?.getAttribute('src') || catalogItem.image;

            const productData = {
                ...catalogItem,
                id: isProductPage ? catalogItem.id : `home-prod-${idx + 1}`,
                name: displayedTitle,
                price: displayedPrice,
                image: displayedImg
            };

            // Attach data attributes to column wrapper for filtering & sorting
            colWrapper.dataset.productId = productData.id;
            colWrapper.dataset.name = productData.name.toLowerCase();
            colWrapper.dataset.brand = productData.brand.toLowerCase();
            colWrapper.dataset.autoBrand = productData.autoBrand.toLowerCase();
            colWrapper.dataset.model = productData.model.toLowerCase();
            colWrapper.dataset.category = productData.category.toLowerCase();
            colWrapper.dataset.price = String(productData.price);
            colWrapper.dataset.rating = String(productData.rating);
            colWrapper.dataset.discount = String(productData.discount);
            colWrapper.dataset.popularity = String(productData.popularity);
            colWrapper.dataset.createdAt = String(productData.createdAt);

            // Clean up Add to Cart & View Details buttons (remove any reload-causing <a href=""> tags)
            const buttons = card.querySelectorAll('button');
            buttons.forEach(btn => {
                const text = btn.textContent.trim().toLowerCase();
                if (text.includes('add to cart')) {
                    btn.innerHTML = '<i class="fas fa-cart-plus me-1"></i> Add to Cart';
                    btn.type = 'button';
                    btn.onclick = function (e) {
                        e.preventDefault();
                        addToCart(productData, 1);
                        const origHTML = btn.innerHTML;
                        btn.innerHTML = '<i class="fas fa-check me-1"></i> Added!';
                        btn.disabled = true;
                        setTimeout(() => {
                            btn.innerHTML = origHTML;
                            btn.disabled = false;
                        }, 1100);
                    };
                } else if (text.includes('view') && text.includes('detail')) {
                    btn.innerHTML = 'View Details';
                    btn.type = 'button';
                    btn.onclick = function (e) {
                        e.preventDefault();
                        openProductModal(productData);
                    };
                }
            });
        });

        // If on product.html, initialize interactive filtering, sorting, and search
        if (isProductPage) {
            setupProductPageFiltering();
        }
    }

    function setupProductPageFiltering() {
        const productCols = Array.from(document.querySelectorAll('.product-card')).map(c => c.closest('[class*="col-"]')).filter(Boolean);
        if (productCols.length === 0) return;
        const gridRow = productCols[0].parentElement;

        // Open sidebar filter sections by default so users can immediately click checkboxes
        setTimeout(() => {
            document.querySelectorAll('.categories-list, .subcategories, .brand-list, .ratings-list, .discount-list').forEach(el => {
                el.style.display = 'block';
            });
        }, 100);

        // Find result count span & sort select
        const headerBar = gridRow.previousElementSibling;
        const countSpan = headerBar ? headerBar.querySelector('span.text-muted') : null;
        const sortSelect = headerBar ? headerBar.querySelector('select.form-select') : null;

        // Price Min/Max selects in sidebar
        const priceSection = Array.from(document.querySelectorAll('.filter-section')).find(sec =>
            sec.querySelector('h6')?.textContent.trim().toLowerCase() === 'price'
        );
        const minPriceSelect = priceSection ? priceSection.querySelectorAll('select')[0] : null;
        const maxPriceSelect = priceSection ? priceSection.querySelectorAll('select')[1] : null;
        if (maxPriceSelect && maxPriceSelect.options[0]?.textContent.trim() === '$20') {
            const anyOpt = document.createElement('option');
            anyOpt.value = '';
            anyOpt.textContent = 'Max';
            anyOpt.selected = true;
            maxPriceSelect.insertBefore(anyOpt, maxPriceSelect.firstChild);
        }

        // Brand search input in sidebar
        const brandSearchInput = document.querySelector('.brand-search input');
        if (brandSearchInput) {
            brandSearchInput.addEventListener('input', function () {
                const q = this.value.trim().toLowerCase();
                document.querySelectorAll('.brand-list .form-check').forEach(fc => {
                    const label = fc.textContent.trim().toLowerCase();
                    fc.style.display = !q || label.includes(q) ? '' : 'none';
                });
                applyFilters();
            });
        }

        // Add a "Reset All Filters" button in the sidebar header
        const sidebarTitle = document.querySelector('.filter-sidebar h5');
        if (sidebarTitle && !document.getElementById('acxResetFiltersBtn')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'd-flex justify-content-between align-items-center mb-3';
            sidebarTitle.classList.remove('mb-4');
            sidebarTitle.classList.add('mb-0');
            sidebarTitle.parentNode.insertBefore(wrapper, sidebarTitle);
            wrapper.appendChild(sidebarTitle);
            const resetBtn = document.createElement('button');
            resetBtn.id = 'acxResetFiltersBtn';
            resetBtn.type = 'button';
            resetBtn.className = 'btn btn-sm btn-outline-danger';
            resetBtn.textContent = 'Reset All';
            wrapper.appendChild(resetBtn);

            resetBtn.addEventListener('click', () => {
                document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => { cb.checked = false; });
                if (brandSearchInput) brandSearchInput.value = '';
                document.querySelectorAll('.brand-list .form-check').forEach(fc => { fc.style.display = ''; });
                if (minPriceSelect) minPriceSelect.selectedIndex = 0;
                if (maxPriceSelect) maxPriceSelect.selectedIndex = 0;
                const sb = document.getElementById('selectBrand');
                const sm = document.getElementById('selectModel');
                const sp = document.getElementById('setPriceRange');
                if (sb) sb.selectedIndex = 0;
                if (sm) sm.selectedIndex = 0;
                if (sp) sp.selectedIndex = 0;
                if (sortSelect) sortSelect.selectedIndex = 0;
                // Clear ?q= param if present
                if (window.location.search) {
                    window.history.replaceState({}, '', window.location.pathname);
                }
                applyFilters();
                showToast('All filters have been reset.', 'info');
            });
        }

        // No-results placeholder
        let emptyState = document.getElementById('acxNoProductsFound');
        if (!emptyState) {
            emptyState = document.createElement('div');
            emptyState.id = 'acxNoProductsFound';
            emptyState.className = 'col-12 text-center py-5 d-none';
            emptyState.innerHTML = `
                <i class="fas fa-box-open fa-3x text-muted mb-3"></i>
                <h5 class="fw-bold">No matching spare parts found</h5>
                <p class="text-muted">Try adjusting your filters or search criteria.</p>
            `;
            gridRow.appendChild(emptyState);
        }

        function applyFilters() {
            const urlParams = new URLSearchParams(window.location.search);
            const queryText = (urlParams.get('q') || '').trim().toLowerCase();

            // Top bar selects
            const topBrandVal = document.getElementById('selectBrand')?.value || '';
            const topBrand = topBrandVal && !topBrandVal.toLowerCase().includes('select') ? topBrandVal.toLowerCase() : '';

            const topModelVal = document.getElementById('selectModel')?.value || '';
            const topModel = topModelVal && !topModelVal.toLowerCase().includes('select') ? topModelVal.toLowerCase() : '';

            const topPriceVal = document.getElementById('setPriceRange')?.value || '';
            let topMin = 0, topMax = Infinity;
            if (topPriceVal && !topPriceVal.toLowerCase().includes('set')) {
                if (topPriceVal.endsWith('+')) {
                    topMin = parseFloat(topPriceVal) || 0;
                } else {
                    const parts = topPriceVal.split('-');
                    topMin = parseFloat(parts[0]) || 0;
                    topMax = parseFloat(parts[1]) || Infinity;
                }
            }

            // Sidebar categories
            const checkedCategories = Array.from(document.querySelectorAll('.subcategories input[type="checkbox"]:checked')).map(cb => cb.id.toLowerCase());

            // Sidebar brands
            const checkedBrands = Array.from(document.querySelectorAll('.brand-list input[type="checkbox"]:checked')).map(cb => cb.id.toLowerCase());

            // Sidebar ratings
            const checkedRatings = Array.from(document.querySelectorAll('.ratings-list input[type="checkbox"]:checked')).map(cb => {
                const m = cb.id.match(/(\d+)/);
                return m ? parseInt(m[1], 10) : 0;
            });
            const minRatingRequired = checkedRatings.length > 0 ? Math.min(...checkedRatings) : 0;

            // Sidebar discounts
            const checkedDiscounts = Array.from(document.querySelectorAll('.discount-list input[type="checkbox"]:checked')).map(cb => {
                const m = cb.id.match(/(\d+)/);
                return m ? parseInt(m[1], 10) : 0;
            });
            const minDiscountRequired = checkedDiscounts.length > 0 ? Math.min(...checkedDiscounts) : 0;

            // Sidebar min/max price
            let sideMin = 0, sideMax = Infinity;
            if (minPriceSelect) {
                const v = parseFloat(minPriceSelect.value.replace(/[^0-9.]/g, ''));
                if (!isNaN(v)) sideMin = v;
            }
            if (maxPriceSelect) {
                const v = parseFloat(maxPriceSelect.value.replace(/[^0-9.]/g, ''));
                if (!isNaN(v)) sideMax = v;
            }

            let visibleCount = 0;
            productCols.forEach(col => {
                const price = parseFloat(col.dataset.price) || 0;
                const rating = parseFloat(col.dataset.rating) || 5;
                const discount = parseFloat(col.dataset.discount) || 0;
                const cat = col.dataset.category || '';
                const brand = col.dataset.brand || '';
                const autoBrand = col.dataset.autoBrand || '';
                const model = col.dataset.model || '';
                const name = col.dataset.name || '';

                let match = true;
                if (queryText && !name.includes(queryText) && !brand.includes(queryText) && !cat.includes(queryText)) {
                    match = false;
                }
                if (topBrand && autoBrand !== topBrand) match = false;
                if (topModel && model !== topModel) match = false;
                if (price < topMin || price > topMax) match = false;
                if (price < sideMin || price > sideMax) match = false;
                if (checkedCategories.length > 0 && !checkedCategories.includes(cat)) match = false;
                if (checkedBrands.length > 0 && !checkedBrands.includes(brand)) match = false;
                if (rating < minRatingRequired) match = false;
                if (discount < minDiscountRequired) match = false;

                col.style.display = match ? '' : 'none';
                if (match) visibleCount++;
            });

            // Sort visible & hidden cols in DOM order
            if (sortSelect) {
                const mode = sortSelect.value.toLowerCase();
                const sorted = [...productCols].sort((a, b) => {
                    if (mode.includes('low to high')) {
                        return (parseFloat(a.dataset.price) || 0) - (parseFloat(b.dataset.price) || 0);
                    } else if (mode.includes('high to low')) {
                        return (parseFloat(b.dataset.price) || 0) - (parseFloat(a.dataset.price) || 0);
                    } else if (mode.includes('newest')) {
                        return (parseFloat(b.dataset.createdAt) || 0) - (parseFloat(a.dataset.createdAt) || 0);
                    }
                    return (parseFloat(b.dataset.popularity) || 0) - (parseFloat(a.dataset.popularity) || 0);
                });
                sorted.forEach(col => gridRow.insertBefore(col, emptyState));
            }

            if (countSpan) {
                countSpan.textContent = `Showing ${visibleCount} of ${productCols.length} results`;
            }
            emptyState.classList.toggle('d-none', visibleCount > 0);
        }

        // Bind events
        document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', applyFilters);
        });
        if (minPriceSelect) minPriceSelect.addEventListener('change', applyFilters);
        if (maxPriceSelect) maxPriceSelect.addEventListener('change', applyFilters);
        if (sortSelect) sortSelect.addEventListener('change', applyFilters);

        const topSearchBtn = document.getElementById('topSearchBtn');
        if (topSearchBtn) {
            topSearchBtn.addEventListener('click', function (e) {
                e.preventDefault();
                applyFilters();
                showToast('Filtered products based on your selection.', 'info');
            });
        }
        ['selectBrand', 'selectModel', 'setPriceRange'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('change', applyFilters);
        });

        applyFilters();
    }

    // =========================================================================
    // 6. DYNAMIC CART PAGE (cart.html)
    // =========================================================================
    function initCartPage() {
        const cartContainer = document.querySelector('.cart-container');
        const productListEl = document.querySelector('.cart-container .product-list');
        const totalAmountEl = document.querySelector('.cart-container .total-amount');
        const paymentBtn = document.querySelector('.cart-container .payment-btn');
        const closeBtn = document.querySelector('.cart-container .close-btn');
        if (!cartContainer || !productListEl || !totalAmountEl) return;

        // Replace inline script's listeners by cloning buttons
        if (closeBtn) {
            const newClose = closeBtn.cloneNode(true);
            closeBtn.parentNode.replaceChild(newClose, closeBtn);
            newClose.title = 'Continue Shopping';
            newClose.addEventListener('click', () => {
                window.location.href = './product.html';
            });
        }

        // Add Promo Code input above Total row if not already added
        const totalSection = document.querySelector('.cart-container .total-section');
        let discountPercent = 0;
        if (totalSection && !document.getElementById('acxPromoGroup')) {
            const promoDiv = document.createElement('div');
            promoDiv.id = 'acxPromoGroup';
            promoDiv.className = 'mb-3';
            promoDiv.innerHTML = `
                <div class="input-group input-group-sm">
                    <input type="text" id="acxPromoInput" class="form-control" placeholder="Promo code (try AUTO10)">
                    <button class="btn btn-outline-dark" type="button" id="acxApplyPromoBtn">Apply</button>
                </div>
                <small id="acxPromoFeedback" class="text-success d-none mt-1 d-block"></small>
            `;
            totalSection.insertBefore(promoDiv, totalSection.firstChild);

            document.getElementById('acxApplyPromoBtn').addEventListener('click', () => {
                const code = document.getElementById('acxPromoInput').value.trim().toUpperCase();
                const fb = document.getElementById('acxPromoFeedback');
                if (code === 'AUTO10' || code === 'SAVE10') {
                    discountPercent = 10;
                    fb.textContent = '✓ 10% discount code applied!';
                    fb.className = 'text-success mt-1 d-block small fw-semibold';
                    renderCartItems();
                    showToast('Promo code <strong>' + code + '</strong> applied (10% OFF)!', 'success');
                } else {
                    discountPercent = 0;
                    fb.textContent = 'Invalid promo code. Try AUTO10.';
                    fb.className = 'text-danger mt-1 d-block small';
                    renderCartItems();
                }
            });
        }

        function renderCartItems() {
            const cart = getCart();
            if (cart.length === 0) {
                productListEl.innerHTML = `
                    <div class="text-center py-4">
                        <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                        <h6 class="fw-bold">Your cart is empty</h6>
                        <p class="text-muted small mb-3">Explore our spare parts catalog and add items to your cart.</p>
                        <a href="./product.html" class="btn btn-danger btn-sm px-3">Browse Spare Parts</a>
                    </div>
                `;
                totalAmountEl.textContent = '$0.00';
                if (paymentBtn) paymentBtn.disabled = true;
                return;
            }

            if (paymentBtn) paymentBtn.disabled = false;
            let subtotal = 0;
            productListEl.innerHTML = cart
                .map((item, idx) => {
                    const lineTotal = (Number(item.price) || 0) * (Number(item.quantity) || 1);
                    subtotal += lineTotal;
                    return `
                        <div class="product-item" data-cart-idx="${idx}">
                            <img src="${item.image}" alt="${item.name}" class="product-image">
                            <div class="product-details">
                                <div class="product-name">${item.name}</div>
                                <div class="product-info">Brand Name: ${item.brand || 'AutoCarX'}</div>
                                <div class="product-info">Part ID: ${item.partId || '652236712'}</div>
                                <div class="quantity-controls">
                                    <button type="button" class="quantity-btn acx-qty-btn" data-action="dec" data-idx="${idx}">−</button>
                                    <span class="quantity">${item.quantity}</span>
                                    <button type="button" class="quantity-btn acx-qty-btn" data-action="inc" data-idx="${idx}">+</button>
                                </div>
                            </div>
                            <div class="d-flex flex-column align-items-end gap-2">
                                <div class="product-price">$${lineTotal.toFixed(2)}</div>
                                <button type="button" class="cart-remove-btn" data-idx="${idx}" title="Remove item">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    `;
                })
                .join('');

            const finalTotal = subtotal * (1 - discountPercent / 100);
            totalAmountEl.textContent = '$' + finalTotal.toFixed(2);

            // Bind quantity & remove handlers
            productListEl.querySelectorAll('.acx-qty-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    const idx = parseInt(this.dataset.idx, 10);
                    const action = this.dataset.action;
                    const currentCart = getCart();
                    if (!currentCart[idx]) return;
                    if (action === 'inc') {
                        currentCart[idx].quantity += 1;
                    } else if (action === 'dec') {
                        if (currentCart[idx].quantity > 1) {
                            currentCart[idx].quantity -= 1;
                        } else {
                            currentCart.splice(idx, 1);
                        }
                    }
                    saveCart(currentCart);
                    renderCartItems();
                });
            });

            productListEl.querySelectorAll('.cart-remove-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    const idx = parseInt(this.dataset.idx, 10);
                    const currentCart = getCart();
                    const removed = currentCart.splice(idx, 1);
                    saveCart(currentCart);
                    renderCartItems();
                    if (removed[0]) {
                        showToast(`Removed <strong>${removed[0].name}</strong> from cart.`, 'info');
                    }
                });
            });
        }

        if (paymentBtn) {
            const newPayBtn = paymentBtn.cloneNode(true);
            paymentBtn.parentNode.replaceChild(newPayBtn, paymentBtn);
            newPayBtn.addEventListener('click', function () {
                const cart = getCart();
                if (cart.length === 0) {
                    showToast('Your cart is empty!', 'info');
                    return;
                }
                const addrInput = document.querySelector('.address-section input[name="address"]');
                const address = addrInput ? addrInput.value.trim() : '';
                if (!address) {
                    showToast('Please enter your delivery address before payment.', 'info');
                    if (addrInput) {
                        addrInput.focus();
                        addrInput.style.outline = '2px solid #FF3434';
                        setTimeout(() => { addrInput.style.outline = ''; }, 2000);
                    }
                    return;
                }
                const selectedRadio = document.querySelector('input[name="payment"]:checked');
                const paymentMethod = selectedRadio ? selectedRadio.nextElementSibling.textContent.trim().replace(/\s+/g, ' ') : 'Card';
                const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
                const totalPaid = totalAmountEl.textContent;

                // Clear cart & show confirmation
                saveCart([]);
                if (addrInput) addrInput.value = '';
                renderCartItems();
                showToast(
                    `🎉 Order <strong>${orderId}</strong> placed! Paid <strong>${totalPaid}</strong> via ${paymentMethod}. Delivery to: ${address}`,
                    'success',
                    { label: 'Shop More', href: './product.html' }
                );
            });
        }

        renderCartItems();
    }

    // =========================================================================
    // 7. SERVICE CARDS, HERO BOOKING FORM & PRICING PLANS (index.html, service.html)
    // =========================================================================
    function initServicesAndBooking() {
        // 1. Hero Booking Form on index.html
        const bookingFormBox = document.querySelector('.booking-form');
        if (bookingFormBox) {
            const bookBtn = bookingFormBox.querySelector('.btn-book');
            if (bookBtn) {
                bookBtn.innerHTML = 'Book Appointment';
                bookBtn.type = 'button';
                bookBtn.onclick = function (e) {
                    e.preventDefault();
                    const inputs = bookingFormBox.querySelectorAll('input.form-control');
                    const selects = bookingFormBox.querySelectorAll('select.form-control');
                    const fullName = inputs[0]?.value.trim() || '';
                    const phone = inputs[1]?.value.trim() || '';
                    const email = inputs[2]?.value.trim() || '';
                    const carNumber = inputs[3]?.value.trim() || '';
                    const service = selects[0]?.value || 'General Service';
                    const dateSlot = selects[1]?.value || 'Today';
                    const location = selects[2]?.value || 'Los Angeles';

                    if (!fullName || !phone || !carNumber) {
                        showToast('Please fill in your Full Name, Phone Number, and Car Number.', 'info');
                        return;
                    }
                    if (service.includes('Service Details')) {
                        showToast('Please select a Service Type.', 'info');
                        return;
                    }

                    const ref = 'ACX-' + Math.floor(100000 + Math.random() * 900000);
                    const bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]');
                    bookings.push({ ref, fullName, phone, email, carNumber, service, dateSlot, location, createdAt: new Date().toISOString() });
                    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));

                    inputs.forEach(i => { i.value = ''; });
                    selects.forEach(s => { s.selectedIndex = 0; });
                    showToast(
                        `✅ Appointment <strong>${ref}</strong> booked for <strong>${fullName}</strong> (${carNumber}) — ${service}!`,
                        'success'
                    );
                };
            }
        }

        // 2. Service Cards ("See More" links)
        document.querySelectorAll('.service-card').forEach(card => {
            const title = card.querySelector('h5')?.textContent.trim() || 'General Service';
            const seeMore = card.querySelector('.see-more-link');
            if (seeMore) {
                seeMore.onclick = function (e) {
                    e.preventDefault();
                    openServiceModal(title);
                };
            }
        });

        // 3. "Schedule an Appointment" & "Browse Service" buttons
        document.querySelectorAll('.btn-schedule, .btn-primary-custom, .btn-outline-custom').forEach(btn => {
            const txt = btn.textContent.trim().toLowerCase();
            if (txt.includes('browse service')) {
                btn.innerHTML = 'Browse Service';
                btn.type = 'button';
                btn.onclick = function (e) {
                    e.preventDefault();
                    window.location.href = './service.html';
                };
            } else if (txt.includes('schedule an appointment')) {
                btn.innerHTML = 'Schedule an Appointment';
                btn.type = 'button';
                btn.onclick = function (e) {
                    e.preventDefault();
                    const heroForm = document.querySelector('.booking-form');
                    if (heroForm) {
                        heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        const firstInput = heroForm.querySelector('input');
                        if (firstInput) setTimeout(() => firstInput.focus(), 450);
                    } else {
                        openServiceModal('General Service');
                    }
                };
            }
        });

        // 4. Pricing Plan "Subscribe Now" buttons
        document.querySelectorAll('.pricing-card').forEach(card => {
            const planName = card.querySelector('.card-title')?.textContent.trim() || 'Basic Plan';
            const priceText = card.querySelector('.price')?.textContent.trim() || '$99';
            const subBtn = card.querySelector('button.btn-red');
            if (subBtn) {
                subBtn.innerHTML = 'Subscribe Now';
                subBtn.type = 'button';
                subBtn.onclick = function (e) {
                    e.preventDefault();
                    openServiceModal('General Service', `${planName} (${priceText})`);
                };
            }
        });
    }

    // =========================================================================
    // 8. GLOBAL SEARCH MODAL (#searchModal) ACROSS ALL PAGES
    // =========================================================================
    function initGlobalSearchModal() {
        const searchModal = document.getElementById('searchModal');
        if (!searchModal) return;

        const input = searchModal.querySelector('input.form-control');
        const modalBody = searchModal.querySelector('.modal-body');
        const searchBtn = searchModal.querySelector('.modal-footer button');
        if (!input || !modalBody) return;

        input.placeholder = 'Search spare parts (e.g. brake, wheel, spark plug, filter) or services...';

        let resultsBox = searchModal.querySelector('#acxSearchResults');
        if (!resultsBox) {
            resultsBox = document.createElement('div');
            resultsBox.id = 'acxSearchResults';
            resultsBox.className = 'mt-3';
            resultsBox.style.maxHeight = '340px';
            resultsBox.style.overflowY = 'auto';
            modalBody.appendChild(resultsBox);
        }

        function renderSearch(query) {
            const q = query.trim().toLowerCase();
            if (!q) {
                resultsBox.innerHTML = `<div class="text-muted small py-2">Type above to search across ${PRODUCT_CATALOG.length} spare parts and ${Object.keys(SERVICE_CATALOG).length} garage services...</div>`;
                return;
            }

            const matchedProducts = PRODUCT_CATALOG.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.brand.toLowerCase().includes(q) ||
                p.categoryLabel.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q)
            );

            const matchedServices = Object.keys(SERVICE_CATALOG)
                .map(k => ({ key: k, ...SERVICE_CATALOG[k] }))
                .filter(s => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));

            if (matchedProducts.length === 0 && matchedServices.length === 0) {
                resultsBox.innerHTML = `<div class="text-center text-muted py-3">No matching products or services found for "<strong>${query}</strong>".</div>`;
                return;
            }

            let html = '';
            matchedProducts.forEach(p => {
                html += `
                    <div class="search-result-item">
                        <div class="d-flex align-items-center gap-3">
                            <img src="${p.image}" alt="${p.name}">
                            <div>
                                <div class="fw-bold text-dark">${p.name}</div>
                                <div class="small text-muted">${p.brand} • <span class="text-danger fw-bold">$${p.price.toFixed(2)}</span></div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-sm btn-danger acx-search-add" data-id="${p.id}">
                            <i class="fas fa-cart-plus me-1"></i>Add
                        </button>
                    </div>
                `;
            });

            matchedServices.forEach(s => {
                html += `
                    <div class="search-result-item">
                        <div class="d-flex align-items-center gap-3">
                            <div class="bg-danger text-white rounded d-flex align-items-center justify-content-center" style="width:52px;height:52px;">
                                <i class="fas fa-tools"></i>
                            </div>
                            <div>
                                <div class="fw-bold text-dark">${s.title}</div>
                                <div class="small text-muted">Service • Starting at <span class="text-danger fw-bold">${s.price}</span></div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-danger acx-search-service" data-key="${s.key}">
                            Book
                        </button>
                    </div>
                `;
            });

            resultsBox.innerHTML = html;

            resultsBox.querySelectorAll('.acx-search-add').forEach(btn => {
                btn.addEventListener('click', function () {
                    const prod = PRODUCT_CATALOG.find(item => item.id === this.dataset.id);
                    if (prod) addToCart(prod, 1);
                });
            });

            resultsBox.querySelectorAll('.acx-search-service').forEach(btn => {
                btn.addEventListener('click', function () {
                    const key = this.dataset.key;
                    bootstrap.Modal.getOrCreateInstance(searchModal).hide();
                    openServiceModal(key);
                });
            });
        }

        input.addEventListener('input', () => renderSearch(input.value));
        renderSearch('');

        if (searchBtn) {
            searchBtn.innerHTML = 'Search All Parts';
            searchBtn.onclick = function (e) {
                e.preventDefault();
                const q = input.value.trim();
                window.location.href = q ? `./product.html?q=${encodeURIComponent(q)}` : './product.html';
            };
        }
    }

    // =========================================================================
    // 9. TOP BAR LOCATION SELECTOR & AUTHENTICATION MODAL (all pages)
    // =========================================================================
    function initLocationAndAuth() {
        // 1. Top Bar Location Dropdown
        const locSpan = document.querySelector('.top-bar .loc');
        const locItems = document.querySelectorAll('.top-bar .dropdown-menu .dropdown-item');
        const savedLocation = localStorage.getItem(STORAGE_KEYS.LOCATION) || 'Los Angeles';

        function updateDisplayedLocation(city) {
            if (locSpan) {
                locSpan.innerHTML = `
                    <i class="fa-solid fa-location-crosshairs"></i>
                    Location: ${city}
                    <i class="fa-solid fa-chevron-down ms-2"></i>
                `;
            }
            locItems.forEach(item => {
                const itemCity = item.textContent.trim().replace(/\s+/g, ' ');
                item.classList.toggle('active', itemCity.toLowerCase() === city.toLowerCase());
            });
        }

        updateDisplayedLocation(savedLocation);

        locItems.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const city = this.textContent.trim().replace(/\s+/g, ' ');
                localStorage.setItem(STORAGE_KEYS.LOCATION, city);
                updateDisplayedLocation(city);
                showToast(`Location updated to <strong>${city}</strong>.`, 'info');
            });
        });

        // 2. Authentication Modal (#exampleModal) & Global Auth Functions
        window.forgotPassword = function () {
            showToast('Password reset link has been sent to your registered email address.', 'info');
        };
        window.loginWithGoogle = function () {
            completeLogin('Google User');
        };
        window.loginWithFacebook = function () {
            completeLogin('Facebook User');
        };

        function completeLogin(username) {
            const cleanName = username.split('@')[0].trim();
            localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify({ name: cleanName, loggedInAt: new Date().toISOString() }));
            const modalEl = document.getElementById('exampleModal');
            if (modalEl) {
                bootstrap.Modal.getOrCreateInstance(modalEl).hide();
            }
            updateAuthButtons();
            showToast(`Welcome, <strong>${cleanName}</strong>! You are now logged in.`, 'success');
        }

        function updateAuthButtons() {
            const userRaw = localStorage.getItem(STORAGE_KEYS.USER);
            const user = userRaw ? JSON.parse(userRaw) : null;
            document.querySelectorAll('.btn-login').forEach(btn => {
                if (user && user.name) {
                    btn.innerHTML = `<i class="fas fa-user-check me-2"></i>${user.name}`;
                    btn.removeAttribute('data-bs-toggle');
                    btn.removeAttribute('data-bs-target');
                    btn.title = 'Click to Log Out';
                    btn.onclick = function (e) {
                        e.preventDefault();
                        localStorage.removeItem(STORAGE_KEYS.USER);
                        updateAuthButtons();
                        showToast('You have been logged out.', 'info');
                    };
                } else {
                    btn.innerHTML = 'Log in';
                    btn.setAttribute('data-bs-toggle', 'modal');
                    btn.setAttribute('data-bs-target', '#exampleModal');
                    btn.title = '';
                    btn.onclick = null;
                }
            });
        }

        const authModal = document.getElementById('exampleModal');
        if (authModal) {
            const form = authModal.querySelector('form');
            if (form) {
                // Fix invalid dual type="text" type="submit" attributes
                const inputs = form.querySelectorAll('input');
                if (inputs[0]) inputs[0].type = 'text';
                if (inputs[1]) inputs[1].type = 'password';

                form.onsubmit = function (e) {
                    e.preventDefault();
                    const username = inputs[0]?.value.trim() || 'Member';
                    completeLogin(username);
                    form.reset();
                };
            }
        }

        updateAuthButtons();
    }

    // =========================================================================
    // 10. NEWSLETTER & SWIPER INITIALIZATION
    // =========================================================================
    function initNewslettersAndSwipers() {
        // Footer newsletter across all pages
        document.querySelectorAll('.footer-side1-btn a, .footer-side1-btn button').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const emailInput = document.getElementById('footer-email');
                const email = emailInput ? emailInput.value.trim() : '';
                if (!email || !email.includes('@')) {
                    showToast('Please enter a valid email address to subscribe.', 'info');
                    if (emailInput) emailInput.focus();
                    return;
                }
                emailInput.value = '';
                showToast(`🎉 Subscribed <strong>${email}</strong> to Auto Car X updates!`, 'success');
            });
        });

        // Main newsletter section on index.html
        const newsletterForm = document.querySelector('.newsletter-section form');
        if (newsletterForm) {
            const subBtn = newsletterForm.querySelector('.btn-subscribe');
            if (subBtn) subBtn.innerHTML = 'Subscribe Now';
            newsletterForm.onsubmit = function (e) {
                e.preventDefault();
                const input = newsletterForm.querySelector('input[type="email"], input.form-control2');
                const email = input ? input.value.trim() : '';
                if (!email || !email.includes('@')) {
                    showToast('Please enter a valid email address.', 'info');
                    return;
                }
                input.value = '';
                showToast(`🎉 Thank you! <strong>${email}</strong> is now subscribed to our newsletter.`, 'success');
            };
        }

        // Testimonial Swiper on pages that use script.js (e.g. about.html)
        if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial-swiper') && !window.location.pathname.toLowerCase().includes('index.html')) {
            new Swiper('.testimonial-swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                freeMode: true,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 }
                }
            });
        }
    }

    // =========================================================================
    // INITIALIZE EVERYTHING ON DOM READY
    // =========================================================================
    document.addEventListener('DOMContentLoaded', function () {
        injectDynamicStyles();
        updateCartBadges();
        initProductCardsAndFilters();
        initCartPage();
        initServicesAndBooking();
        initGlobalSearchModal();
        initLocationAndAuth();
        initNewslettersAndSwipers();
    });
})();
