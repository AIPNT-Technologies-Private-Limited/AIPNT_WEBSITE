"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCogs, FaTools } from 'react-icons/fa';
import styles from './page.module.css';

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main className={styles.shopMain}>
        <div className={styles.comingSoonContainer}>
          <div className={styles.iconWrapper}>
            <FaCogs className={styles.gearIcon} />
          </div>
          <h1>Shop Coming Soon</h1>
          <p>
            We are building something amazing. Our intelligent hardware kits,
            IoT modules, and educational tech products will be available here soon!
          </p>
          <div className={styles.notifyBox}>
            <p>Stay tuned for our official launch.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
