 "use client";

import { useState } from 'react';
import styles from '../styles/Portfolio.module.css';

export default function Portfoliop() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Website', value: 'web' },
    { label: 'Mobile App', value: 'app' },
    { label: 'Marketing', value: 'marketing' },
    { label: 'Branding', value: 'brand' },
  ];

  const projects = [
    {
      category: 'web',
      title: 'StyleMart E-Commerce',
      description: 'Custom WooCommerce store. 8,000 organic visits/month.',
      tag: 'Website',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=260&fit=crop',
    },
    {
      category: 'marketing',
      title: 'FitNow Meta Ads',
      description: 'ROAS went from 1.2× to 5.8× in 60 days.',
      tag: 'Performance Marketing',
      image:
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=260&fit=crop',
    },
    {
      category: 'app',
      title: 'DeliverEat App',
      description: 'Food delivery app. 10,000+ downloads in 3 months.',
      tag: 'Mobile App',
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=260&fit=crop',
    },
    {
      category: 'brand',
      title: 'LuxeHome Brand Identity',
      description: 'Complete rebrand with logo, colors & brand system.',
      tag: 'Branding',
      image:
        'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=260&fit=crop',
    },
    {
      category: 'web',
      title: 'MedCare Clinic Website',
      description: '300% increase in online bookings.',
      tag: 'Website',
      image:
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=260&fit=crop',
    },
    {
      category: 'marketing',
      title: 'TechSolve Lead Gen',
      description: '450 qualified B2B leads in Month 1.',
      tag: 'Lead Generation',
      image:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=260&fit=crop',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div id="page-portfolio" className={styles['page-view']}>

      {/* HERO */}
      <div className={styles['page-hero']}>
        <div className={styles['page-hero-inner']}>
          <div className={styles.tag}>Our Work</div>
          <h1>50+ Projects.<br />Real Results.</h1>
          <p className={styles['ph-sub']}>
            A curated selection of our best work across web, app, marketing and branding.
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div className={styles['filter-bar']}>
        {filters.map((f) => (
          <button
            key={f.value}
            className={`${styles['filter-btn']} ${activeFilter === f.value ? styles.active : ''}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className={styles['portfolio-grid']}>
        {filteredProjects.map((project, index) => (
          <div key={index} className={styles['port-card']}>

            <div className={styles['port-thumb']}>
              <img src={project.image} alt={project.title} />
            </div>

            <div className={styles['port-info']}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <span className={styles['port-tag']}>{project.tag}</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

