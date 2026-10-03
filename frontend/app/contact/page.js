"use client";

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
                    <p><a href="mailto:info@aipnt.in" style={{ color: "inherit", textDecoration: "none" }}>info@aipnt.in</a></p>
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
                <form className={styles.contactForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="interest">Area of Interest</label>
                    <select id="interest" required>
                      <option value="">Select an option</option>
                      <option value="enterprise_ai">Enterprise AI & Custom Solutions</option>
                      <option value="govtech">GovTech & Grievance Redressal (DigiTech)</option>
                      <option value="medtech">MedTech & Connected Healthcare (DigiSwasth)</option>
                      <option value="edutech">EduTech & AI Learning Platforms (ATAT / Prarambh)</option>
                      <option value="corporate">Corporate & Institutional Training</option>
                      <option value="other">Strategic Partnership / Other Inquiry</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <FaPaperPlane /> Send Message
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
