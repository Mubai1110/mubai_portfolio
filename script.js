// === i18n ===
const translations = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.insights': 'Focus Areas',
    'nav.contact': 'Contact',
    'hero.badge': 'PE/VC Investment Professional',
    'hero.desc': 'B.B.A. & M.Sc. Finance at <strong>CUHK</strong>. Investment analyst with hands-on experience across RMB & USD VC funds. Deeply passionate about <strong>Physical AI</strong> and frontier tech investing. Driven by curiosity, committed to long-termism.',
    'hero.viewwork': 'View My Work',
    'hero.stat.projects': 'Investment Projects',
    'hero.stat.lps': 'LPs Contacted',
    'hero.stat.funds': 'Fund Types',
    'about.title': 'About Me',
    'about.education': 'Education',
    'about.edu.content': '<p><strong>The Chinese University of Hong Kong</strong><br>M.Sc. in Finance | 2024–2025<br>Quantitative Methods, Python, M&A, PE&VC</p><p><strong>CUHK-Shenzhen</strong><br>B.B.A. in Finance | 2020–2024<br>Corporate Finance, Portfolio Analysis, Behavioral Finance</p><p><strong>Copenhagen Business School</strong><br>Exchange Student</p>',
    'about.philosophy': 'Investment Philosophy',
    'about.philosophy.content': '<p>Embrace value investing with a long-termist mindset. I believe the best investments come from genuinely understanding the technology and the people behind it — not just the numbers.</p><p>Energetic, resilient, and low on internal friction. I stay clear-headed under pressure, dig deep into every problem, and commit fully to what I believe in.</p>',
    'about.toolkit': 'Professional Toolkit',
    'about.skill.finance': 'Finance & Modeling',
    'about.skill.tech': 'Tech & Data',
    'about.skill.soft': 'Soft Skills',
    'skill.bilingual': 'Bilingual (EN/CN)',
    'skill.lp': 'LP Relations',
    'skill.roadshow': 'Roadshow & Pitching',
    'exp.title': 'Experience',
    'exp.present': 'Present',
    'exp.cc.role': 'Investment Analyst',
    'exp.cc.company': 'Chase Chuang VC & Empyrean Global Investments',
    'exp.cc.rmb': 'RMB VC Fund',
    'exp.cc.rmb.items': '<li>Led & supported end-to-end investment processes for <strong>3 projects</strong> — Pre-IPO metal 3D printing, Series A humanoid robotics, angel-stage smart cleaning robotics</li><li>Assisted portfolio companies in government investment attraction — site selection, agreement drafting, cross-party coordination</li>',
    'exp.cc.usd': 'USD AI & Robotics VC Fund',
    'exp.cc.usd.items': '<li>Led bilingual fundraising materials — pitch decks, one-pagers, deal pipelines</li><li>Sourced <strong>100+ institutional LPs</strong> via Pitchbook/Preqin across HK, Singapore, Middle East & Europe</li><li>Sourced a European distributor group with <strong>USD 2M committed intent</strong>; led dedicated fund roadshows</li>',
    'exp.qa.role': 'PE Investment Analyst',
    'exp.qa.company': 'Qianhai Ark Assets Management · Received Return Offer',
    'exp.qa.items': '<li>Full-cycle participation in <strong>low-altitude economy</strong> (aircraft, flight control, avionics, communication, data) and cleaning robotics projects</li><li>On-site executive interviews & DD for <strong>4 projects</strong>; authored 2 investment proposals with datapack, financial models, and industry research</li><li>Post-investment: managed 100+ portfolio companies, identified support needs (factory siting, client resources, repurchase triggers)</li>',
    'exp.dc.role': 'Investor Relations Intern',
    'exp.dc.company': 'Fortune CaiZhi (DaChen) Venture Capital · Received Return Offer',
    'exp.dc.items': '<li><strong>M&A Strategy:</strong> Proposed "shell acquisition + asset injection + HQ relocation" exit strategy — adopted by partners, leading to a new M&A team</li><li><strong>Digital Transformation:</strong> Led OA system optimization, reducing 2–3 headcount workload through automation</li><li>Independently managed AMAC/CSRC compliance for <strong>30+ funds</strong> with 100% regulatory compliance</li>',
    'proj.title': 'Focus Areas',
    'proj.featured': 'Deal Lead',
    'proj.oasyce.desc': 'Led due diligence for a World Model-focused social platform building sustainable 3D data infrastructure. Conducted industry analysis on AI hardware and "Authentic Social" trends. Facilitated introductions to Qianhai FOF and Fortune VC.',
    'proj.physical.title': 'Physical AI Investment Track',
    'proj.physical.desc': 'Hands-on investment experience across the Physical AI value chain — humanoid robots, cleaning robots (floor/window/pool), industrial robots, plus upstream components (LiDAR, gearbox, motors).',
    'proj.lowalt.title': 'Low-Altitude Economy',
    'proj.lowalt.desc': 'Deep-dive research and project execution across the low-altitude industry chain — aircraft manufacturing, flight control & avionics, communication systems, and data acquisition.',
    'tag.humanoid': 'Humanoid Robotics',
    'tag.cleaning': 'Cleaning Robots',
    'tag.industrial': 'Industrial Robots',
    'tag.flightcontrol': 'Flight Control',
    'tag.avionics': 'Avionics',
    'tag.dataacq': 'Data Acquisition',
    'insights.title': 'Investment Thesis: Physical AI',
    'insights.subtitle': 'A framework for mapping investment opportunities across maturity dimensions',
    'matrix.mature.app': 'Mature Application',
    'matrix.mature.tech': 'Mature Technology',
    'matrix.mature.app2': 'Mature Application',
    'matrix.mature.tech2': 'Mature Technology',
    'matrix.immature.app': 'Immature Application',
    'matrix.immature.tech': 'Immature Technology',
    'matrix.immature.app2': 'Immature Application',
    'matrix.immature.tech2': 'Immature Technology',
    'matrix.red.title': 'Red Ocean',
    'matrix.red.desc': 'Intense competition. Market leaders already established. Examples: LiDAR, robot vacuums, autonomous vehicles.',
    'matrix.red.verdict': 'High barrier to entry',
    'matrix.blue.title': 'Blue Ocean',
    'matrix.blue.desc': 'Clear investment opportunity. Unmet demand with proven tech. Examples: window-cleaning robots, pool robots.',
    'matrix.blue.verdict': 'Sweet spot for investment',
    'matrix.early.title': 'Early Stage',
    'matrix.early.desc': 'High imagination space but potential valuation bubbles. Examples: dexterous hands, industrial robots.',
    'matrix.early.verdict': 'Selective opportunities',
    'matrix.frontier.title': 'Frontier',
    'matrix.frontier.desc': 'Maximum imagination, maximum risk. No clear exit path short-term. Example: general-purpose humanoid robots.',
    'matrix.frontier.verdict': 'Long-term conviction play',
    'market.title': 'Market Perspective',
    'market.soe.title': 'SOE Capital Dominance',
    'market.soe.desc': '80%+ of domestic LP capital comes from state-owned entities, carrying dual mandates of financial returns and local economic development. This reshapes GP strategies and portfolio company trajectories.',
    'market.usd.title': 'USD Fund Headwinds',
    'market.usd.desc': 'USD funds in China face declining AUM and deployment, driven by regulatory shifts and geopolitical dynamics. This creates both challenges and unique cross-border opportunities.',
    'market.commitment.title': 'Personal Commitment',
    'market.commitment.desc': 'Fully dedicated to building a career in primary market equity investment. Curiosity-driven, resilient under pressure, and committed to earning trust through consistent, quality work.',
    'beyond.title': 'Beyond Work',
    'beyond.photo': 'Photography',
    'beyond.hiking': 'Mountaineering',
    'beyond.badminton': 'Badminton (University Team)',
    'beyond.swim': 'Breaststroke (University Team)',
    'beyond.travel': '30+ cities explored',
    'beyond.esports': 'Esports & Poker',
    'beyond.cooking': '5 years of Western cooking',
    'contact.title': 'Get in Touch',
    'contact.desc': 'Open to opportunities in PE/VC investment. Based in Shanghai, also considering Shenzhen/Hangzhou. Let\'s connect.',
    'footer.text': '&copy; 2026 Mubai Xiao. Built with curiosity and Claude Code.',
    'chat.badge': 'Ask me anything!',
    'chat.name': "Mubai's AI Assistant",
    'chat.subtitle': 'Ask anything about me',
    'chat.welcome': "Hi! I'm Mubai's AI assistant. Ask me anything about his background, investment experience, thesis, or skills!",
    'chat.q1': "What's your investment thesis?",
    'chat.q2': 'Tell me about your PE/VC experience',
    'chat.q3': 'Why Physical AI?',
    'chat.placeholder': 'Type your question...',
  },
  zh: {
    'nav.about': '关于我',
    'nav.experience': '工作经历',
    'nav.projects': '投资项目',
    'nav.insights': '关注领域',
    'nav.contact': '联系我',
    'hero.badge': 'PE/VC 一级市场投资人',
    'hero.desc': '<strong>香港中文大学</strong>金融学本硕。横跨人民币与美元VC基金的投资分析师。专注<strong>Physical AI</strong>及前沿科技投资。好奇心驱动，坚信长期主义。',
    'hero.viewwork': '查看经历',
    'hero.stat.projects': '投资项目',
    'hero.stat.lps': '触达LP',
    'hero.stat.funds': '基金类型',
    'about.title': '关于我',
    'about.education': '教育背景',
    'about.edu.content': '<p><strong>香港中文大学</strong><br>金融学理学硕士 | 2024–2025<br>量化金融、并购、PE&VC</p><p><strong>香港中文大学（深圳）</strong><br>金融学工商管理学士 | 2020–2024<br>公司金融、投资组合分析、行为金融学</p><p><strong>哥本哈根商学院</strong><br>交换生</p>',
    'about.philosophy': '投资理念',
    'about.philosophy.content': '<p>践行价值投资与长期主义。好的投资来自于真正理解技术和背后的人——不仅是数字。</p><p>精力充沛、心态通透、不内耗。面对压力保持清醒，对每个问题刨根问底，为信任的事情全力以赴。</p>',
    'about.toolkit': '专业技能',
    'about.skill.finance': '金融建模',
    'about.skill.tech': '技术与数据',
    'about.skill.soft': '软技能',
    'skill.bilingual': '双语（中/英）',
    'skill.lp': 'LP关系维护',
    'skill.roadshow': '路演与推介',
    'exp.title': '工作经历',
    'exp.present': '至今',
    'exp.cc.role': '投资分析师',
    'exp.cc.company': '追创创业投资 & 苍穹全球投资',
    'exp.cc.rmb': '人民币VC基金',
    'exp.cc.rmb.items': '<li>主导或协助完成<strong>3个项目</strong>全流程——Pre-IPO金属3D打印、A轮人形机器人、天使轮智能清洁机器人（追觅生态）</li><li>协助被投企业招商引资——选址勘探、协议起草、多方协调</li>',
    'exp.cc.usd': '美元AI&机器人VC基金',
    'exp.cc.usd.items': '<li>主导双语募资材料——路演演示、单页摘要、项目管线</li><li>通过数据平台触达<strong>100+机构LP</strong>，覆盖港新/中东/欧洲</li><li>挖掘一家东欧经销商集团，对方意向出资<strong>200万美元</strong>；主导基金路演</li>',
    'exp.qa.role': 'PE投资助理',
    'exp.qa.company': '前海方舟资产管理 · 获留用推荐',
    'exp.qa.items': '<li>深度参与<strong>低空经济</strong>（整机、飞控航电、通信、数据采集）及清洁机器人项目全流程</li><li>完成<strong>4个项目</strong>现场高管访谈与尽职调查；撰写2份投资建议书（含数据包、财务模型、行业研究）</li><li>投后管理：梳理100+被投企业，挖掘赋能需求（工厂选址、客户资源、回购触发等）</li>',
    'exp.dc.role': '投资者关系实习生',
    'exp.dc.company': '达晨财智创业投资 · 获留用推荐',
    'exp.dc.items': '<li><strong>并购策略：</strong>提出"收购壳公司+注入资产+总部搬迁返投"退出策略——被合伙人采纳，公司据此成立并购小组</li><li><strong>数字化建设：</strong>主导OA系统优化，节省2-3个人力工作量</li><li>独立完成中基协/保协/政基系统<strong>30+基金</strong>信息披露，合规率100%</li>',
    'proj.title': '关注领域',
    'proj.featured': '项目负责人',
    'proj.oasyce.desc': '主导世界模型社交平台绿洲的尽调与战略研究。对AI硬件与"真实社交"趋势展开行业分析。利用个人资源对接前海母基金、达晨财智等机构。',
    'proj.physical.title': 'Physical AI 投资赛道',
    'proj.physical.desc': '横跨Physical AI产业链的实操投资经验——人形机器人、清洁机器人（扫地/擦窗/泳池）、工业机器人，以及上游组件（激光雷达、齿轮箱、电机）。',
    'proj.lowalt.title': '低空经济',
    'proj.lowalt.desc': '深度参与低空产业链全流程——整机制造、飞控航电、通信系统、数据采集环节的项目研究与执行。',
    'tag.humanoid': '人形机器人',
    'tag.cleaning': '清洁机器人',
    'tag.industrial': '工业机器人',
    'tag.flightcontrol': '飞控',
    'tag.avionics': '航电',
    'tag.dataacq': '数据采集',
    'insights.title': '投资框架：Physical AI',
    'insights.subtitle': '基于应用与技术成熟度的双维度投资机遇图谱',
    'matrix.mature.app': '成熟应用',
    'matrix.mature.tech': '成熟技术',
    'matrix.mature.app2': '成熟应用',
    'matrix.mature.tech2': '成熟技术',
    'matrix.immature.app': '未成熟应用',
    'matrix.immature.tech': '未成熟技术',
    'matrix.immature.app2': '未成熟应用',
    'matrix.immature.tech2': '未成熟技术',
    'matrix.red.title': '红海',
    'matrix.red.desc': '竞争白热化，头部格局已定。典型：激光雷达、扫地机器人、自动驾驶。',
    'matrix.red.verdict': '进入壁垒高',
    'matrix.blue.title': '蓝海',
    'matrix.blue.desc': '明确的投资机遇，技术成熟但需求尚未充分挖掘。典型：擦窗机器人、泳池机器人。',
    'matrix.blue.verdict': '投资甜蜜点',
    'matrix.early.title': '早期阶段',
    'matrix.early.desc': '想象空间大但存在估值泡沫风险。典型：灵巧手、工业机器人。',
    'matrix.early.verdict': '精选机会',
    'matrix.frontier.title': '前沿',
    'matrix.frontier.desc': '想象空间最大、风险也最大。短期无清晰退出路径。典型：通用人形机器人。',
    'matrix.frontier.verdict': '长期信念赛道',
    'market.title': '市场观察',
    'market.soe.title': '国资主导',
    'market.soe.desc': '国内80%以上LP资金来自国资，兼具财务回报与招商引资双重诉求。这深刻重塑了GP投资策略与被投企业发展路径。',
    'market.usd.title': '美元基金承压',
    'market.usd.desc': '美元基金在国内募资规模与投资额度双降，源于政策与地缘政治的综合影响。挑战与跨境机遇并存。',
    'market.commitment.title': '个人承诺',
    'market.commitment.desc': '全身心投入一级市场股权投资事业。以好奇心驱动，抗压性强，承诺用持续高质量的专业工作赢得信任。',
    'beyond.title': '工作之外',
    'beyond.photo': '摄影',
    'beyond.hiking': '登山',
    'beyond.badminton': '羽毛球（大学院队）',
    'beyond.swim': '蛙泳（大学院队）',
    'beyond.travel': '30+城市探索',
    'beyond.esports': '电竞与扑克',
    'beyond.cooking': '5年西厨经验',
    'contact.title': '联系我',
    'contact.desc': '欢迎PE/VC投资方向的交流与机会。常驻上海，也考虑深圳/杭州。',
    'footer.text': '&copy; 2026 肖慕白',
    'chat.badge': '有什么想问的？',
    'chat.name': '慕白的AI助手',
    'chat.subtitle': '随时提问了解我',
    'chat.welcome': '你好！我是慕白的AI助手。关于他的背景、投资经历、投资框架或技能，随时可以问我！',
    'chat.q1': '你的投资框架是什么？',
    'chat.q2': '介绍下PE/VC经历',
    'chat.q3': '为什么关注Physical AI？',
    'chat.placeholder': '输入你的问题...',
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang]?.[key];
    if (!val) return;
    if (el.getAttribute('data-i18n-html') === 'true' || el.tagName === 'UL' || el.tagName === 'DIV') {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = translations[lang]?.[key];
    if (val) el.placeholder = val;
  });
}

// === Theme ===
function setTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  const icon = document.querySelector('#themeToggle i');
  if (icon) icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

// === Init ===
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
  });

  // Language
  const savedLang = localStorage.getItem('lang');
  const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
  currentLang = savedLang || browserLang;
  setLanguage(currentLang);

  function toggleLang() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('lang', currentLang);
    setLanguage(currentLang);
  }
  document.getElementById('langToggle').addEventListener('click', toggleLang);
  document.getElementById('langToggleMobile').addEventListener('click', toggleLang);

  // Mobile menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('active'));
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section, .about-card, .exp-card, .project-card, .matrix-card, .market-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Nav active highlight
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = [...navLinks].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    let current = '';
    sections.forEach(s => {
      if (s.offsetTop <= scrollY) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
    });
  });

  // Chat widget
  initChat();
});

// === Chat ===
function initChat() {
  const toggle = document.getElementById('chatToggle');
  const panel = document.getElementById('chatPanel');
  const close = document.getElementById('chatClose');
  const input = document.getElementById('chatInput');
  const send = document.getElementById('chatSend');
  const messages = document.getElementById('chatMessages');
  const badge = toggle.querySelector('.chat-badge');

  // Show badge after delay
  setTimeout(() => badge.classList.add('visible'), 3000);

  toggle.addEventListener('click', () => {
    panel.classList.toggle('active');
    badge.classList.remove('visible');
    if (panel.classList.contains('active')) input.focus();
  });
  close.addEventListener('click', () => panel.classList.remove('active'));

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.innerHTML = `<p>${escapeHtml(text)}</p>`;
    messages.appendChild(userMsg);
    input.value = '';

    // Remove suggestions
    const suggestions = messages.querySelector('.suggestions');
    if (suggestions) suggestions.remove();

    // Typing indicator
    const typing = document.createElement('div');
    typing.className = 'chat-message bot typing';
    typing.innerHTML = '<p>Thinking</p>';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    // Call AI API
    send.disabled = true;
    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text }),
    })
      .then(r => r.json())
      .then(data => {
        typing.remove();
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        botMsg.innerHTML = `<p>${escapeHtml(data.reply || data.error || 'Error')}</p>`;
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
      })
      .catch(() => {
        // Fallback to local knowledge base
        typing.remove();
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        botMsg.innerHTML = `<p>${generateResponse(text)}</p>`;
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
      })
      .finally(() => { send.disabled = false; });
  }

  send.addEventListener('click', sendMessage);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

  // Suggestion buttons
  document.querySelectorAll('.chat-suggestion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.textContent;
      sendMessage();
    });
  });
}

function escapeHtml(text) {
  const d = document.createElement('div');
  d.textContent = text;
  return d.innerHTML;
}

// === Knowledge base for chatbot ===
const knowledgeBase = {
  background: {
    keywords: ['background', 'education', 'school', 'university', 'study', '背景', '教育', '学校', '大学', '学历'],
    en: "Mubai holds an M.Sc. in Finance from CUHK (2024-2025) and a B.B.A. in Finance from CUHK-Shenzhen (2020-2024) with an exchange at Copenhagen Business School. He scored TOEFL 106 and GRE 326. His coursework spans quantitative finance, M&A, PE&VC, and corporate finance.",
    zh: "慕白在香港中文大学获得金融学硕士（2024-2025），在港中文（深圳）获得金融学学士（2020-2024），并在哥本哈根商学院交换。托福106，GRE 326。课程涵盖量化金融、并购、PE&VC、公司金融等。"
  },
  experience: {
    keywords: ['experience', 'work', 'career', 'job', 'intern', 'vc', 'pe', '经历', '工作', '实习', '职业'],
    en: "Mubai has worked across 3 major firms: Currently at Chase Chuang VC as Investment Analyst (both RMB & USD funds), previously at Qianhai Ark as PE Investment Analyst (received return offer), and at Fortune CaiZhi (DaChen) VC in IR (also received return offer). He's led investment processes for 6+ projects spanning humanoid robots, 3D printing, cleaning robots, and low-altitude economy.",
    zh: "慕白在3家主要机构工作过：目前在追创创投任投资分析师（人民币+美元基金），此前在前海方舟任PE投资助理（获留用推荐），在达晨财智任投资者关系实习生（获留用推荐）。主导或参与6+个项目的投资流程，覆盖人形机器人、3D打印、清洁机器人、低空经济等领域。"
  },
  thesis: {
    keywords: ['thesis', 'framework', 'investment thesis', 'physical ai', 'strategy', '框架', '投资逻辑', '策略', '观点'],
    en: "Mubai's investment thesis focuses on Physical AI. He maps opportunities using a 2x2 matrix of application maturity × technology maturity: Blue Ocean (immature app + mature tech, like window-cleaning robots) is the sweet spot. He sees 80%+ domestic capital from SOEs reshaping GP strategies, and believes USD funds face headwinds but offer unique cross-border opportunities.",
    zh: "慕白的投资框架聚焦Physical AI。他用「应用成熟度 × 技术成熟度」的2x2矩阵来定位机会：蓝海（未成熟应用+成熟技术，如擦窗机器人）是投资甜蜜点。他观察到国内80%+资金来自国资LP，深刻影响GP策略；美元基金承压但存在跨境机遇。"
  },
  physical_ai: {
    keywords: ['physical ai', 'robot', 'robotics', 'humanoid', 'cleaning', 'lidar', '机器人', '人形', '清洁', '激光雷达', 'why physical'],
    en: "Mubai focuses on Physical AI because he's seen the entire value chain up close — from humanoid robots and cleaning robots (floor/window/pool) to upstream components like LiDAR, gearboxes, and motors. He classifies investment scenarios into red ocean (mature tech + mature app), blue ocean (mature tech + immature app — the sweet spot), early stage, and frontier. His hands-on DD experience gives him real conviction in this space.",
    zh: "慕白关注Physical AI因为他实地接触了整条产业链——从人形机器人、清洁机器人（扫地/擦窗/泳池）到上游的激光雷达、齿轮箱、电机。他把投资场景分为红海、蓝海（甜蜜点）、早期和前沿四类。实地尽调经验让他对这个赛道有真正的认知深度。"
  },
  skills: {
    keywords: ['skill', 'tool', 'tech', 'python', 'model', 'valuation', '技能', '工具', '技术', '估值', '建模'],
    en: "Mubai's toolkit: Financial modeling (DCF, comps, sensitivity analysis, 3-statement), due diligence methodology, investment memo writing. Tech: Python, R, Stata, Matlab, Claude Code, NotebookLM. Bilingual English/Chinese with TOEFL 106 and GRE 326. Also experienced in LP relations, roadshows, and fundraising materials.",
    zh: "慕白的工具箱：财务建模（DCF、可比公司、敏感性分析、三表预测）、尽调方法论、投资建议书撰写。技术：Python、R、Stata、Matlab、Claude Code、NotebookLM。中英双语（托福106、GRE 326）。还擅长LP关系维护、路演推介和募资材料制作。"
  },
  market: {
    keywords: ['market', 'soe', 'state', 'usd', 'rmb', 'fund', 'lp', '市场', '国资', '美元', '人民币', '基金'],
    en: "Mubai observes: 80%+ domestic LP capital is from SOEs with dual mandates (returns + local development), reshaping GP strategies. USD funds face declining AUM driven by policy and geopolitics. He's worked both sides — RMB fund investment and USD fund LP sourcing across HK, Singapore, Middle East, and Europe, giving him a unique cross-border perspective.",
    zh: "慕白的市场观察：国内80%+LP资金来自国资，兼具财务回报与招商引资双重诉求，深刻影响GP策略。美元基金募资承压。他同时做过人民币基金投资和美元基金LP拓展（覆盖港新/中东/欧洲），具备独特的跨境视角。"
  },
  personal: {
    keywords: ['hobby', 'interest', 'personal', 'fun', 'outside', '爱好', '兴趣', '个人', '生活'],
    en: "Outside of work, Mubai is a university-level swimmer (breaststroke) and badminton player. He's explored 30+ cities, enjoys photography, mountaineering, esports, poker, and has been learning Western cooking for 5 years. He's energetic, resilient, and has a long-termist mindset — also reflected in his 10 years of badminton and 5 years of cooking commitment.",
    zh: "工作之外，慕白是大学蛙泳和羽毛球院队成员。探索过30+城市，喜欢摄影、登山、电竞、扑克竞技，学习西厨已5年。精力充沛、抗压力强、长期主义——10年羽毛球、5年西厨都能体现这种特质。"
  },
  oasyce: {
    keywords: ['oasyce', '绿洲', 'world model', '世界模型', 'social', '社交', '3d'],
    en: "Mubai led the investment research for Oasyce (绿洲), a World Model-focused social platform building sustainable 3D data infrastructure. As an early beta user, he had 3 deep conversations with the founder, conducted research on World Models and AI hardware, and facilitated introductions to Qianhai FOF and Fortune VC. He identified a market gap for 'authentic social' as AI-generated content accelerates user fatigue.",
    zh: "慕白主导了绿洲（Oasyce）的投资研究——一个瞄准世界模型数据底座的社交平台。作为首批内测用户，他与创始人深度对话3次，对世界模型和AI硬件展开行业研究，并对接了前海母基金和达晨财智。他发现随着AI图文泛滥，'真实社交'存在巨大市场空白。"
  }
};

function generateResponse(question) {
  const q = question.toLowerCase();
  const isZh = currentLang === 'zh';

  // Find best matching topic
  let bestMatch = null;
  let bestScore = 0;

  for (const [topic, data] of Object.entries(knowledgeBase)) {
    let score = 0;
    for (const kw of data.keywords) {
      if (q.includes(kw.toLowerCase())) score += kw.length;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = data;
    }
  }

  if (bestMatch && bestScore > 0) {
    return isZh ? bestMatch.zh : bestMatch.en;
  }

  // Default response
  return isZh
    ? '这个问题比较开放，你可以试试问我关于慕白的教育背景、投资经历、Physical AI投资框架、专业技能或市场观察等方面的问题。'
    : "That's a broad question! Try asking me about Mubai's education, PE/VC experience, Physical AI investment thesis, professional skills, or market perspectives.";
}
