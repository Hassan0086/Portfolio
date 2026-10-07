import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';
import { servicesData } from '../data/servicesData';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaExternalLinkAlt
} from 'react-icons/fa';

const Contact = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    service: [],
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: prev.service.includes(preselectedService)
          ? prev.service
          : [...prev.service, preselectedService]
      }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'service' && type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        service: checked
          ? [...prev.service, value]
          : prev.service.filter((selectedService) => selectedService !== value)
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.service.length ? formData.service.join(', ') : 'General Software Engineering'} - from Portfolio`
    );
    const body = encodeURIComponent(
      `Hello Hassan,\n\nI reached out via your portfolio website with the following details:\n\n` +
        `• Email: ${formData.email}\n` +
        `• Phone Number: ${formData.phone}\n` +
        `• Selected Services: ${formData.service.length ? formData.service.join(', ') : 'Not specified'}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Best regards,\n${formData.email}`
    );
    return `mailto:hassan.ashraf12@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.phone || formData.service.length === 0 || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Please fill in all required fields, including selecting a service.'
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (accessKey && accessKey.trim() !== '') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Portfolio Inquiry - ${formData.service.join(', ')} from ${formData.email}`,
            from_name: 'Portfolio Contact Form',
            to_email: 'hassan.ashraf12@gmail.com',
            email: formData.email,
            phone: formData.phone,
            service_requested: formData.service.join(', '),
            message: formData.message
          })
        });

        const result = await response.json();

        if (result.success) {
          setStatus({ submitting: false, success: true, error: null });
          setFormData({ email: '', phone: '', service: [], message: '' });
          return;
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        console.error('Form submission error:', err);
        setStatus({
          submitting: false,
          success: false,
          error:
            'Could not transmit automatically via API. You can send directly using the Pre-filled Email button below.'
        });
      }
    } else {
      // Direct client fallback when access key is not yet set in production
      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      // Trigger pre-filled mail client
      window.location.href = generateMailtoUrl();
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <p className="section-tag">CONTACT</p>
          <h2 className="contact-title">
            Want to Build Something <span>Nice?</span>
          </h2>
          <p className="contact-subtitle">
            Whether you are looking for backend engineering, AI/LLM integration, enterprise Odoo ERP
            modules, or discussing an exciting collaboration, send a message below and it will be
            delivered directly to <strong>hassan.ashraf12@gmail.com</strong>.
          </p>
        </div>

        <div className="contact-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            {status.success && (
              <div className="alert-box success">
                <FaCheckCircle className="alert-icon" />
                <div>
                  <h4>Thank You! Your message is on its way.</h4>
                  <p>
                    I will review your inquiry and get back to you promptly at {formData.email || 'your email'}.
                  </p>
                </div>
              </div>
            )}

            {status.error && (
              <div className="alert-box error">
                <FaExclamationCircle className="alert-icon" />
                <div>
                  <p>{status.error}</p>
                  <a
                    href={generateMailtoUrl()}
                    className="mailto-fallback-btn"
                  >
                    <span>Click to Send via Email App (hassan.ashraf12@gmail.com)</span>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="req">*</span>
                </label>
                <div className="input-with-icon">
                  <FaEnvelope className="field-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number <span className="req">*</span>
                </label>
                <div className="input-with-icon">
                  <FaPhoneAlt className="field-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>
                Services You Want <span className="req">*</span>
              </label>
              <div className="services-checkbox-grid">
                {servicesData.map((svc) => (
                  <label
                    key={svc.id}
                    className={`service-checkbox-label ${
                      formData.service.includes(svc.title) ? 'selected' : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="service"
                      value={svc.title}
                      checked={formData.service.includes(svc.title)}
                      onChange={handleChange}
                    />
                    <span className="checkbox-mark" aria-hidden="true">
                      <span className="checkbox-check">✓</span>
                    </span>
                    <span className="checkbox-text">{svc.title}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Your Message / Project Details <span className="req">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project scope, requirements, timeline, or engineering goals..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-submit-row">
              <button
                type="submit"
                className="submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message Directly</span>
                  </>
                )}
              </button>

              <a
                href={generateMailtoUrl()}
                className="direct-mail-btn"
                title="Open your email client directly"
              >
                <FaEnvelope />
                <span>Open in Email Client</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
