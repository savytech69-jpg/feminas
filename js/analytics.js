/**
 * Google Analytics (GA4) Centralized Tracking Script
 * Feminas Family Makeover Studio
 */

const GA_MEASUREMENT_ID = 'G-GXE9JRNYSH'; // REPLACE WITH ACTUAL ID

// Initialize GA4
function initGA() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        'send_page_view': true,
        'anonymize_ip': true
    });
}

// Track Custom Events
function trackEvent(eventName, eventParams = {}) {
    if (typeof gtag === 'function') {
        gtag('event', eventName, eventParams);
    }
}

// Setup Event Listeners for User Actions
document.addEventListener('DOMContentLoaded', () => {
    initGA();

    // Track WhatsApp Clicks
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('whatsapp_click', {
                'event_category': 'Engagement',
                'event_label': link.href
            });
            trackEvent('generate_lead', {
                'method': 'whatsapp'
            });
        });
    });

    // Track Phone Call Clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('phone_call_click', {
                'event_category': 'Engagement',
                'event_label': link.href
            });
            trackEvent('generate_lead', {
                'method': 'phone'
            });
        });
    });

    // Track Social Media Clicks
    document.querySelectorAll('a[href*="facebook.com"], a[href*="instagram.com"]').forEach(link => {
        link.addEventListener('click', () => {
            const platform = link.href.includes('facebook') ? 'facebook' : 'instagram';
            trackEvent('social_media_click', {
                'platform': platform,
                'url': link.href
            });
        });
    });

    // Track Contact Form Submissions
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            trackEvent('contact_form_submit', {
                'event_category': 'Form',
                'form_id': 'contact_form'
            });
            trackEvent('generate_lead', {
                'method': 'form'
            });
        });
    }

    // Track Gallery Image Opens (Fancybox integration)
    // Fancybox often uses data attributes or specific classes
    document.querySelectorAll('[data-fancybox]').forEach(item => {
        item.addEventListener('click', () => {
            trackEvent('view_gallery_item', {
                'item_id': item.getAttribute('href'),
                'category': item.getAttribute('data-category') || 'general'
            });
        });
    });
});
