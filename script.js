// EZ Reports Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;
    
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherIcon = otherItem.querySelector('.faq-toggle-icon');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherIcon) otherIcon.textContent = '+';
        }
      });
      
      // Toggle current
      if (isOpen) {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        const icon = item.querySelector('.faq-toggle-icon');
        if (icon) icon.textContent = '+';
      } else {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        const icon = item.querySelector('.faq-toggle-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // 2. Interactive Analysis Simulator Modal
  const openDemoBtn = document.getElementById('openDemoBtn');
  const demoModal = document.getElementById('demoModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const dropzoneSim = document.getElementById('dropzoneSim');
  const simOutput = document.getElementById('simOutput');
  const sampleChips = document.querySelectorAll('.sim-chip');

  if (openDemoBtn && demoModal) {
    openDemoBtn.addEventListener('click', () => {
      demoModal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeModalBtn && demoModal) {
    closeModalBtn.addEventListener('click', () => {
      demoModal.classList.remove('is-active');
      document.body.style.overflow = '';
    });

    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        demoModal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  }

  // Handle sample file click in simulator
  sampleChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const sample = chip.getAttribute('data-sample');
      simulateAnalysis(sample);
    });
  });

  if (dropzoneSim) {
    dropzoneSim.addEventListener('click', () => {
      simulateAnalysis('financials');
    });
  }

  function simulateAnalysis(type) {
    if (!simOutput) return;
    
    // Animate processing state
    const title = document.getElementById('simReportTitle');
    const meta = document.getElementById('simReportMeta');
    const summary = document.getElementById('simReportSummary');
    const metric1 = document.getElementById('metric1');
    const metric2 = document.getElementById('metric2');
    const metric3 = document.getElementById('metric3');

    if (type === 'consulting') {
      if (title) title.textContent = 'Client Advisory Deliverable: Consulting Hours & Billing Audit';
      if (meta) meta.textContent = 'Analyzed 1 CSV export • 864 logged consultant entries';
      if (summary) summary.innerHTML = 'Total billable project hours reached <strong>1,840.5 hrs</strong> across 8 active customer accounts. Realized blended hourly yield registered at <strong>$185.00/hr</strong> with zero non-reconciled billable leaks.';
      if (metric1) metric1.textContent = '$340,492';
      if (metric2) metric2.textContent = '94.6%';
      if (metric3) metric3.textContent = '1,840.5h';
    } else {
      if (title) title.textContent = 'Executive Summary: Q3 Client Financial Performance';
      if (meta) meta.textContent = 'Analyzed 3 linked workbooks • 1,420 rows calculated';
      if (summary) summary.innerHTML = 'Total realized client billings reached <strong>$148,250</strong> across 14 engagements, demonstrating an <strong>18.4% YoY surge</strong> driven by advisory retainers. Average project cycle duration decreased from 28.4 days to 21.1 days.';
      if (metric1) metric1.textContent = '$148,250';
      if (metric2) metric2.textContent = '74.2%';
      if (metric3) metric3.textContent = '91.8%';
    }

    simOutput.classList.remove('is-ready');
    void simOutput.offsetWidth; // Trigger reflow
    simOutput.classList.add('is-ready');
  }

  // 3. Mobile menu toggler
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '72px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = '#FFFFFF';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        navLinks.style.borderBottom = '1px solid #E2E8F0';
      }
    });
  }

  // 4. Smooth Anchor Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // 5. Hero White & Blue Theme Toggle
  const heroThemeToggle = document.getElementById('heroThemeToggle');
  const heroWrapper = document.querySelector('.hero-wrapper-blue');
  if (heroThemeToggle && heroWrapper) {
    heroThemeToggle.addEventListener('click', () => {
      const isWhiteMode = heroWrapper.classList.toggle('theme-white-mode');
      if (isWhiteMode) {
        heroThemeToggle.textContent = '🎨 Theme: Crisp White & Blue';
        heroThemeToggle.style.background = '#FFFFFF';
        heroThemeToggle.style.color = '#1D4ED8';
      } else {
        heroThemeToggle.textContent = '🎨 Theme: Royal Blue & White';
        heroThemeToggle.style.background = '#2563EB';
        heroThemeToggle.style.color = '#FFFFFF';
      }
    });
  }
});

