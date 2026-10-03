"use client";

import { useEffect } from 'react';
import PrarambhPage from '../page';

export default function PrarambhProjectsRoute() {
  useEffect(() => {
    // Smoothly scroll to the Project Hub section
    const el = document.getElementById('projects');
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return <PrarambhPage />;
}
