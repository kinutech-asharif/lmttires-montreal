/**
 * LMT Tires Form Handler
 * Handles form submissions to Cloudflare Worker
 * Supports both appointment and newsletter forms in EN/FR
 */

(function() {
  'use strict';

  // Configuration
  const WORKER_URL = 'https://lmt-form-handler.09a0acf915cb9b6089b37da1f7468bd4.workers.dev';

  // Get language from page (check html lang attribute or URL)
  function getPageLanguage() {
    const htmlLang = document.documentElement.lang;
    if (htmlLang === 'fr' || window.location.pathname.includes('FR')) {
      return 'fr';
    }
    return 'en';
  }

  /**
   * Show loading state on submit button
   */
  function setLoadingState(button, isLoading) {
    if (isLoading) {
      button.disabled = true;
      button.dataset.originalText = button.textContent;
      button.textContent = getPageLanguage() === 'fr' ? 'Envoi en cours...' : 'Sending...';
    } else {
      button.disabled = false;
      button.textContent = button.dataset.originalText || button.textContent;
    }
  }

  /**
   * Display message to user
   */
  function showMessage(message, type = 'success') {
    // Create message container if it doesn't exist
    let messageContainer = document.getElementById('form-message');
    if (!messageContainer) {
      messageContainer = document.createElement('div');
      messageContainer.id = 'form-message';
      messageContainer.style.cssText = 'margin: 20px 0; padding: 15px; border-radius: 5px; font-size: 16px;';
    }

    // Set message and style based on type
    if (type === 'success') {
      messageContainer.style.backgroundColor = '#d4edda';
      messageContainer.style.color = '#155724';
      messageContainer.style.border = '1px solid #c3e6cb';
    } else {
      messageContainer.style.backgroundColor = '#f8d7da';
      messageContainer.style.color = '#721c24';
      messageContainer.style.border = '1px solid #f5c6cb';
    }

    messageContainer.textContent = message;

    // Insert at top of form or after heading
    const form = document.querySelector('form.main_form, form.form_news');
    if (form) {
      form.insertAdjacentElement('beforebegin', messageContainer);
    }

    // Scroll to message
    messageContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Auto-hide success messages after 10 seconds
    if (type === 'success') {
      setTimeout(() => {
        messageContainer.style.opacity = '0';
        setTimeout(() => messageContainer.remove(), 500);
      }, 10000);
    }
  }

  /**
   * Remove any existing messages
   */
  function clearMessages() {
    const messageContainer = document.getElementById('form-message');
    if (messageContainer) {
      messageContainer.remove();
    }
  }

  /**
   * Handle appointment form submission
   */
  function handleAppointmentSubmit(event) {
    event.preventDefault();
    clearMessages();

    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"], button.send_btn');

    // Collect form data
    const formData = {
      formType: 'appointment',
      language: getPageLanguage(),
      name: form.querySelector('[name*="Name"]')?.value?.trim() || '',
      phone: form.querySelector('[name*="Phone"]')?.value?.trim() || '',
      email: form.querySelector('[name*="Email"]')?.value?.trim() || '',
      address: form.querySelector('[name*="Address"]')?.value?.trim() || '',
      city: form.querySelector('[name*="City"]')?.value?.trim() || '',
      postalCode: form.querySelector('[name*="Postal"]')?.value?.trim() || '',
      numVehicles: form.querySelector('[name="num_vehicles"]')?.value || '',
      appointmentChoice1: form.querySelector('[name="appt_choice1"]')?.value || '',
      timeChoice1: form.querySelector('[name="time_choice_1"]')?.value || '',
      appointmentChoice2: form.querySelector('[name="appt_choice2"]')?.value || '',
      timeChoice2: form.querySelector('[name="time_choice_2"]')?.value || '',
      tireMounting: form.querySelector('[name="tire_mounting"]:checked')?.value || '',
      comments: form.querySelector('[name*="Comments"], textarea')?.value?.trim() || '',
      honeypot: form.querySelector('[name="website"]')?.value || '' // Anti-spam field
    };

    setLoadingState(submitButton, true);

    // Send to Cloudflare Worker
    fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setLoadingState(submitButton, false);

      if (data.success) {
        showMessage(data.message, 'success');
        form.reset(); // Clear the form
      } else {
        showMessage(data.message || 'An error occurred. Please try again.', 'error');
      }
    })
    .catch(error => {
      setLoadingState(submitButton, false);
      console.error('Form submission error:', error);

      const errorMessage = getPageLanguage() === 'fr'
        ? 'Une erreur s\'est produite. Veuillez réessayer ou appelez-nous au +1 514-909-8473.'
        : 'An error occurred. Please try again or call us at +1 514-909-8473.';

      showMessage(errorMessage, 'error');
    });
  }

  /**
   * Handle newsletter form submission
   */
  function handleNewsletterSubmit(event) {
    event.preventDefault();
    clearMessages();

    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"], button.sunm_btn');

    // Collect form data
    const formData = {
      formType: 'newsletter',
      language: getPageLanguage(),
      email: form.querySelector('[name*="email"]')?.value?.trim() || '',
      honeypot: form.querySelector('[name="website"]')?.value || '' // Anti-spam field
    };

    setLoadingState(submitButton, true);

    // Send to Cloudflare Worker
    fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setLoadingState(submitButton, false);

      if (data.success) {
        showMessage(data.message, 'success');
        form.reset(); // Clear the form
      } else {
        showMessage(data.message || 'An error occurred. Please try again.', 'error');
      }
    })
    .catch(error => {
      setLoadingState(submitButton, false);
      console.error('Form submission error:', error);

      const errorMessage = getPageLanguage() === 'fr'
        ? 'Une erreur s\'est produite. Veuillez réessayer.'
        : 'An error occurred. Please try again.';

      showMessage(errorMessage, 'error');
    });
  }

  /**
   * Initialize form handlers when DOM is ready
   */
  function initFormHandlers() {
    // Appointment form
    const appointmentForm = document.getElementById('request');
    if (appointmentForm) {
      // Remove old action and method
      appointmentForm.removeAttribute('action');
      appointmentForm.removeAttribute('method');
      appointmentForm.removeAttribute('enctype');

      // Add honeypot field (hidden from users, catches bots)
      const honeypot = document.createElement('input');
      honeypot.type = 'text';
      honeypot.name = 'website';
      honeypot.style.cssText = 'position: absolute; left: -9999px; width: 1px; height: 1px;';
      honeypot.tabIndex = -1;
      honeypot.autocomplete = 'off';
      appointmentForm.appendChild(honeypot);

      // Attach submit handler
      appointmentForm.addEventListener('submit', handleAppointmentSubmit);
    }

    // Newsletter form
    const newsletterForm = document.querySelector('form.form_news');
    if (newsletterForm) {
      // Remove old action and method
      newsletterForm.removeAttribute('action');
      newsletterForm.removeAttribute('method');
      newsletterForm.removeAttribute('enctype');

      // Add honeypot field
      const honeypot = document.createElement('input');
      honeypot.type = 'text';
      honeypot.name = 'website';
      honeypot.style.cssText = 'position: absolute; left: -9999px; width: 1px; height: 1px;';
      honeypot.tabIndex = -1;
      honeypot.autocomplete = 'off';
      newsletterForm.appendChild(honeypot);

      // Attach submit handler
      newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormHandlers);
  } else {
    initFormHandlers();
  }
})();
