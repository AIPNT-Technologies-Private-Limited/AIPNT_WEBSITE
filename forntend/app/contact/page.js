"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import styles from "./page.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [id]: value,
    }));

    // Clear the field-specific error once the user edits that field.
    setFieldErrors((previousErrors) => ({
      ...previousErrors,
      [id]: "",
    }));

    setErrorMessage("");
    setSuccessMessage("");
  };

  const validateForm = () => {
    const errors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const company = formData.company.trim();
    const interest = formData.interest.trim();
    const message = formData.message.trim();

    if (!name) {
      errors.name = "Please enter your full name.";
    } else if (name.length > 100) {
      errors.name = "Name must be 100 characters or less.";
    }

    if (!email) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please provide a valid email address.";
    }

    if (!phone) {
      errors.phone = "Please enter your phone number.";
    } else {
      const phoneDigits = phone.replace(/\D/g, "");

      if (
        !/^[+()\-\s\d]+$/.test(phone) ||
        phoneDigits.length < 10 ||
        phoneDigits.length > 15
      ) {
        errors.phone = "Phone number must be between 10 and 15 characters.";
      }
    }

    if (!interest) {
      errors.interest = "Please select an area of interest.";
    }

    if (!message) {
      errors.message = "Please enter your message.";
    } else if (message.length > 5000) {
      errors.message = "Message must be 5000 characters or less.";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setSuccessMessage("");
    setErrorMessage("");

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "";
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          interest: formData.interest,
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 400 && data?.errors) {
          setFieldErrors(data.errors);
          setErrorMessage(
            data.message || "Please check the submitted information."
          );
        } else if (response.status === 429) {
          setErrorMessage(
            data?.message ||
              "Too many requests. Please try again later."
          );
        } else {
          setErrorMessage(
            data?.message ||
              "Something went wrong while submitting your enquiry. Please try again later."
          );
        }

        return;
      }

      setSuccessMessage(
        data?.message ||
          "Thank you for contacting us. We have received your enquiry."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setErrorMessage(
        "Unable to submit your enquiry right now. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>GET IN TOUCH</span>
          <h1>Contact Our Team</h1>
          <p>
            Whether you're looking for AI-powered enterprise solutions, healthcare platforms,
            GovTech systems, intelligent learning tools, or specialized training, our team is ready to help.
          </p>
        </div>
      </section>

      <main>
        <section className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div className={styles.infoCol}>
              <h2>Contact Information</h2>
              <p className={styles.infoSub}>
                Reach out to us directly through any of the channels below.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconWrap}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3>Email Us</h3>
                    <p>
                      <a
                        href="mailto:info@aipnt.in"
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                        }}
                      >
                        info@aipnt.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrap}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 77880 16666</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconWrap}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3>(Headquarters)</h3>
                    <p>
                      Room no 212, DLF Cyber City (Switchtech Incubation of
                      Silicon University) 516, Infocity Ave, Chandaka Industrial
                      Estate, Patia, Bhubaneswar, Odisha 751024.
                    </p>
                  </div>
                </div>

                {/* <div className={styles.infoItem}>
                  <div className={styles.iconWrap}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3>Bhubaneswar Campus</h3>
                    <p>
                      Switchtech Incubation Center, Silicon University,
                      Bhubaneswar, Odisha, India.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h2>Send a Message</h2>

                <form
                  className={styles.contactForm}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={100}
                      required
                    />
                    {fieldErrors.name && (
                      <p role="alert">{fieldErrors.name}</p>
                    )}
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {fieldErrors.email && (
                        <p role="alert">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      {fieldErrors.phone && (
                        <p role="alert">{fieldErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Company or organization name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="interest">Area of Interest</label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="enterprise_ai">
                        Enterprise AI & Custom Solutions
                      </option>
                      <option value="govtech">
                        GovTech & Grievance Redressal (DigiTech)
                      </option>
                      <option value="medtech">
                        MedTech & Connected Healthcare (DigiSwasth)
                      </option>
                      <option value="edutech">
                        EduTech & AI Learning Platforms (ATAT / Prarambh)
                      </option>
                      <option value="corporate">
                        Corporate & Institutional Training
                      </option>
                      <option value="software_solutions">
                        Software Solutions
                      </option>
                      <option value="other">
                        Strategic Partnership / Other Inquiry
                      </option>
                    </select>

                    {fieldErrors.interest && (
                      <p role="alert">{fieldErrors.interest}</p>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={5000}
                      required
                    ></textarea>

                    {fieldErrors.message && (
                      <p role="alert">{fieldErrors.message}</p>
                    )}
                  </div>

                  {successMessage && (
                    <p role="status" aria-live="polite">
                      {successMessage}
                    </p>
                  )}

                  {errorMessage && (
                    <p role="alert" aria-live="assertive">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                  >
                    <FaPaperPlane />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mapSection}>
          <iframe
            src="https://www.google.com/maps?q=DLF+Cyber+City,+Patia,+Bhubaneswar,+Odisha&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AIPNT Office Location"
          ></iframe>
        </section>
      </main>

      <Footer />

      <a
        href="https://api.whatsapp.com/send?phone=917788016666"
        className="phone-button"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}