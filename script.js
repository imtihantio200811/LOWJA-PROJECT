/* =========================================
   LOWJA — Interactivity
========================================= */

// ---------- Data ----------
const palette = ['#2563eb','#1d4ed8','#0ea5e9','#3b82f6','#1e40af','#0284c7','#4f46e5','#0891b2'];
const colorFor = (s) => palette[[...s].reduce((a,c)=>a+c.charCodeAt(0),0) % palette.length];
const initials = (s) => s.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();

const jobs = [
  {id:1, company:"Tokopedia", title:"Senior Product Designer", location:"Jakarta", type:"Full-time", mode:"Hybrid", salary:"Rp 25–40jt",
    desc:"Lead end-to-end design for our merchant tools, shaping experiences used by millions of Indonesian sellers.",
    requirements:["5+ years of product design experience","Strong portfolio with shipped consumer products","Proficiency in Figma and design systems","Excellent communication in English and Bahasa Indonesia"],
    responsibilities:["Own design for one of our core product surfaces","Partner with PMs and engineers from discovery to launch","Conduct user research and usability testing","Contribute to and evolve our design system"],
    benefits:["Competitive salary and equity","Premium health insurance for you and family","Annual learning stipend","Flexible hybrid working model"]},
  {id:2, company:"GoTo Group", title:"Backend Engineer (Go)", location:"Jakarta", type:"Full-time", mode:"Remote", salary:"Rp 30–55jt",
    desc:"Build resilient, high-throughput services that power Gojek, Tokopedia, and GoTo Financial.",
    requirements:["3+ years building production backend systems","Strong Go or Java experience","Experience with Kafka, PostgreSQL, gRPC","Comfortable in a fast-paced engineering culture"],
    responsibilities:["Design and ship scalable microservices","Own services end-to-end including on-call","Mentor junior engineers and review code","Drive engineering excellence and best practices"],
    benefits:["Top of market compensation","Stock options","Remote-first culture","Generous PTO and parental leave"]},
  {id:3, company:"Traveloka", title:"Data Analyst", location:"Jakarta", type:"Full-time", mode:"On-site", salary:"Rp 15–25jt",
    desc:"Turn travel data into actionable insights that shape product decisions across Southeast Asia.",
    requirements:["2+ years in analytics or data science","Advanced SQL and Python","Experience with dashboarding (Looker, Tableau)","Strong storytelling with data"],
    responsibilities:["Partner with product on experiment design","Build dashboards and self-serve analytics","Define and track north-star metrics","Present insights to senior leadership"],
    benefits:["Travel allowance and discounts","Health and dental coverage","Modern office in SCBD","Quarterly team retreats"]},
  {id:4, company:"Bank Mandiri", title:"Cybersecurity Specialist", location:"Jakarta", type:"Full-time", mode:"On-site", salary:"Rp 20–35jt",
    desc:"Protect Indonesia's largest bank — defend critical infrastructure and customer trust.",
    requirements:["4+ years in security engineering or SOC","Familiarity with SIEM, EDR, and threat hunting","Relevant certifications (CISSP, OSCP)","Strong understanding of financial regulations"],
    responsibilities:["Lead incident response and forensics","Run red/blue team exercises","Maintain compliance with OJK regulations","Build security awareness across the bank"],
    benefits:["Government-grade pension","Comprehensive medical","Annual bonus","Career growth in BUMN ecosystem"]},
  {id:5, company:"Bukalapak", title:"Mobile Engineer (Android)", location:"Bandung", type:"Full-time", mode:"Hybrid", salary:"Rp 18–32jt",
    desc:"Craft the Android experience used by tens of millions of warung owners across Indonesia.",
    requirements:["3+ years Android development","Strong Kotlin and Jetpack Compose","Experience with offline-first architectures","Care about app performance and UX detail"],
    responsibilities:["Ship features in our flagship Android app","Improve app startup and rendering performance","Collaborate with iOS, backend, and design","Mentor and review pull requests"],
    benefits:["Latest MacBook Pro","Generous device allowance","Health insurance","Hybrid working from Bandung HQ"]},
  {id:6, company:"Telkomsel", title:"Digital Marketing Manager", location:"Jakarta", type:"Full-time", mode:"On-site", salary:"Rp 22–38jt",
    desc:"Lead performance and brand campaigns for Indonesia's largest mobile operator.",
    requirements:["5+ years in digital marketing","Proven track record managing 7-figure budgets","Strong analytical and creative balance","Leadership experience"],
    responsibilities:["Own multi-channel acquisition strategy","Manage a team of specialists and agencies","Report performance to C-level","Drive innovation in MarTech stack"],
    benefits:["Top-tier salary","Bonus tied to KPIs","Telco perks","Leadership development program"]},
  {id:7, company:"Ruangguru", title:"Content Producer", location:"Yogyakarta", type:"Contract", mode:"Remote", salary:"Rp 10–16jt",
    desc:"Create engaging educational content that helps Indonesian students learn and thrive.",
    requirements:["Background in education or media production","Strong scripting and storyboarding","Video editing skills (Premiere/Final Cut)","Passion for learning and pedagogy"],
    responsibilities:["Produce 5–10 lessons per month","Collaborate with subject experts","Review and refine content for clarity","Stay on top of curriculum trends"],
    benefits:["Fully remote","Project bonuses","Free access to all Ruangguru content","Education-first culture"]},
  {id:8, company:"Indofood", title:"Supply Chain Analyst", location:"Surabaya", type:"Full-time", mode:"On-site", salary:"Rp 12–20jt",
    desc:"Optimize one of Indonesia's largest FMCG supply chains across distribution and procurement.",
    requirements:["2+ years in supply chain or operations","Strong Excel and SAP experience","Analytical and detail-oriented","Willing to travel within East Java"],
    responsibilities:["Analyze inventory and demand patterns","Identify cost savings opportunities","Coordinate with plants and distributors","Build forecasting models"],
    benefits:["13th-month salary","Annual bonus","Pension fund","Stable, large-company environment"]},
  {id:9, company:"Xendit", title:"Frontend Engineer (React)", location:"Jakarta", type:"Full-time", mode:"Remote", salary:"Rp 28–48jt",
    desc:"Build delightful payment experiences used by leading businesses across SEA.",
    requirements:["3+ years React/TypeScript","Strong CSS and accessibility fundamentals","Experience with design systems","English fluency for remote collaboration"],
    responsibilities:["Ship features across Xendit's dashboard","Improve performance and developer experience","Collaborate with design and product","Mentor and grow the frontend chapter"],
    benefits:["Top remote-first comp","Stock options","Home-office stipend","Annual offsite"]},
];

const testimonials = [
  {name:"Andini Putri", role:"Product Designer at Tokopedia", text:"LOWJA's recruiters truly understood what I was looking for. Within three weeks I was interviewing at my dream company, and I started a month later."},
  {name:"Budi Santoso", role:"Backend Engineer at GoTo", text:"The level of preparation and clarity I got from the LOWJA team was on another level. Verified roles, real recruiters, no ghosting."},
  {name:"Citra Lestari", role:"Marketing Manager at Traveloka", text:"I had almost given up after months of searching. LOWJA matched me with a role that fit not just my skills but my values."},
  {name:"Dimas Pratama", role:"Data Analyst at Bank Mandiri", text:"Transparent salary ranges, clear timelines, and a recruiter who actually answered my questions. Hiring should always feel like this."},
  {name:"Eka Wulandari", role:"UI Designer at Bukalapak", text:"Beautiful, intuitive platform — and behind it real humans who cared about helping me find the right role."},
  {name:"Fajar Nugraha", role:"DevOps Engineer at Xendit", text:"From application to signed offer in under a month. The process was the smoothest I've ever experienced in my career."},
];

// ---------- Page Router ----------
const pages = ['home','jobs','gallery','contact','detail'];
function go(page, data){
  pages.forEach(p => {
    const el = document.getElementById('page-'+p);
    if(el) el.classList.toggle('active', p===page);
  });
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.page===page);
  });
  window.scrollTo({top:0, behavior:'smooth'});
  document.getElementById('navLinks').classList.remove('open');
  if(page==='detail' && data!=null) renderDetail(data);
  // re-trigger reveal for the active page
  setTimeout(initReveal, 50);
}

document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-page]');
  if(!t) return;
  e.preventDefault();
  go(t.dataset.page);
});

// ---------- Render Jobs ----------
function jobCardHTML(job){
  return `
    <article class="job-card reveal" data-id="${job.id}">
      <div class="jc-top">
        <div class="jc-logo" style="background:linear-gradient(135deg, ${colorFor(job.company)}, ${colorFor(job.company+'x')})">${initials(job.company)}</div>
        <div>
          <div class="jc-company">${job.company}</div>
          <div class="jc-title">${job.title}</div>
        </div>
      </div>
      <p class="jc-desc">${job.desc}</p>
      <div class="jc-meta">
        <span><i class="fa-solid fa-location-dot"></i>${job.location}</span>
        <span><i class="fa-solid fa-clock"></i>${job.type}</span>
        <span><i class="fa-solid fa-laptop"></i>${job.mode}</span>
        <span><i class="fa-solid fa-money-bill-wave"></i>${job.salary}</span>
      </div>
      <button class="jc-apply" data-apply="${job.id}">Apply Now <i class="fa-solid fa-arrow-right"></i></button>
    </article>`;
}
function renderJobs(filter=''){
  const grid = document.getElementById('jobsGrid');
  const q = filter.trim().toLowerCase();
  const list = jobs.filter(j => !q || (j.title+j.company+j.location).toLowerCase().includes(q));
  grid.innerHTML = list.length ? list.map(jobCardHTML).join('') :
    `<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:40px">No vacancies match your search.</p>`;
  initReveal();
}
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-apply]');
  if(!a) return;
  go('detail', parseInt(a.dataset.apply,10));
});
document.addEventListener('input', (e) => {
  if(e.target.id==='jobSearch') renderJobs(e.target.value);
});

// ---------- Render Detail ----------
function renderDetail(id){
  const job = jobs.find(j=>j.id===id);
  if(!job) return;
  const el = document.getElementById('detailContent');
  el.innerHTML = `
    <div class="detail-main reveal">
      <div class="detail-head">
        <div class="jc-logo" style="background:linear-gradient(135deg, ${colorFor(job.company)}, ${colorFor(job.company+'x')})">${initials(job.company)}</div>
        <div>
          <div class="jc-company">${job.company}</div>
          <h1>${job.title}</h1>
        </div>
      </div>
      <div class="detail-section">
        <h3><i class="fa-solid fa-file-lines"></i> Job Description</h3>
        <p>${job.desc} As part of the ${job.company} team, you'll work alongside passionate professionals committed to building products that matter for Indonesia and the region.</p>
      </div>
      <div class="detail-section">
        <h3><i class="fa-solid fa-list-check"></i> Requirements</h3>
        <ul>${job.requirements.map(r=>`<li>${r}</li>`).join('')}</ul>
      </div>
      <div class="detail-section">
        <h3><i class="fa-solid fa-bullseye"></i> Responsibilities</h3>
        <ul>${job.responsibilities.map(r=>`<li>${r}</li>`).join('')}</ul>
      </div>
      <div class="detail-section">
        <h3><i class="fa-solid fa-gift"></i> Benefits & Compensation</h3>
        <ul>${job.benefits.map(r=>`<li>${r}</li>`).join('')}</ul>
      </div>
      <div class="detail-section">
        <h3><i class="fa-solid fa-circle-info"></i> Additional Details</h3>
        <p>Application closes within 14 days of posting. Shortlisted candidates will be contacted within 5 business days. ${job.company} is an equal opportunity employer.</p>
      </div>
    </div>
    <aside class="detail-side reveal">
      <h4>Job Overview</h4>
      <div class="info-row"><span>Company</span><strong>${job.company}</strong></div>
      <div class="info-row"><span>Location</span><strong>${job.location}</strong></div>
      <div class="info-row"><span>Type</span><strong>${job.type}</strong></div>
      <div class="info-row"><span>Work Mode</span><strong>${job.mode}</strong></div>
      <div class="info-row"><span>Salary</span><strong>${job.salary}</strong></div>
      <button class="btn btn-primary" id="applyBtn">Apply for this Role <i class="fa-solid fa-paper-plane"></i></button>
    </aside>`;
  el.querySelector('#applyBtn').addEventListener('click', () => {
    alert(`Application submitted for ${job.title} at ${job.company}. Our team will be in touch!`);
  });
}

// ---------- Render Testimonials ----------
function renderTestimonials(){
  const grid = document.getElementById('testiGrid');
  grid.innerHTML = testimonials.map(t => `
    <article class="testi-card reveal">
      <i class="fa-solid fa-quote-right quote-icon"></i>
      <div class="testi-stars">${'<i class="fa-solid fa-star"></i>'.repeat(5)}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-user">
        <div class="testi-avatar" style="background:linear-gradient(135deg, ${colorFor(t.name)}, ${colorFor(t.name+'x')})">${initials(t.name)}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${t.role}</div>
        </div>
      </div>
    </article>`).join('');
  initReveal();
}

// ---------- Reveal on scroll ----------
let io;
function initReveal(){
  if(io) io.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
}

// ---------- Nav scroll + burger ----------
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY>10));
document.getElementById('navBurger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ---------- Contact form ----------
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const ok = document.getElementById('formSuccess');
  ok.classList.add('show');
  e.target.reset();
  setTimeout(() => ok.classList.remove('show'), 4500);
});

// ---------- Init ----------
document.getElementById('year').textContent = new Date().getFullYear();
renderJobs();
renderTestimonials();
initReveal();
