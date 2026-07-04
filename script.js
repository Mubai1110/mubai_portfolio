// === i18n ===
const translations = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.insights': 'Focus Areas',
    'nav.ai_news': 'AI News',
    'nav.contact': 'Contact',
    'hero.badge': 'PE/VC Investment Professional',
    'hero.desc': 'M.Sc. Finance at <strong>CUHK</strong>. Investment analyst covering <strong>AI software and hardware</strong>, with hands-on execution across LLM infra, post-training/fine-tuning, embodied intelligence, intelligent hardware, and technology transactions.',
    'hero.ai_news': 'AI Intelligence',
    'hero.viewwork': 'View My Work',
    'hero.stat.projects': 'Investment Projects',
    'hero.stat.lps': 'LPs Contacted',
    'hero.stat.funds': 'Fund Types',
    'about.title': 'About Me',
    'about.education': 'Education',
    'about.edu.content': '<p><strong>The Chinese University of Hong Kong</strong><br>M.Sc. in Finance | 2024.08–2025.10<br>Python, Quantitative Risk Management, M&A, Corporate Accounting, PE&VC, Machine Learning</p><p><strong>The Chinese University of Hong Kong, Shenzhen</strong><br>B.B.A. in Finance | 2020.09–2024.06<br>Corporate Finance, Portfolio Strategy & Analysis, International Finance, Behavioral Finance, Optimization</p>',
    'about.philosophy': 'Investment Philosophy',
    'about.philosophy.content': '<p>I focus on the foundational and compounding layers of AI: foundation models, data, infrastructure, post-training/fine-tuning, and tooling that materially lowers deployment cost.</p><p>I care less about short-term application heat and more about technical depth, distribution advantage, commercial validation, and whether the business can compound across multiple AI adoption cycles.</p>',
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
    'exp.cc.company': "Empyrean Global Investment (Dreame Technology's CVC)",
    'exp.cc.rmb': 'AI Sector Coverage',
    'exp.cc.rmb.items': '<li>Engaged with <strong>100+ AI technology startups</strong> and held in-depth discussions with <strong>30+ founders</strong> across LLM infrastructure, data layer, post-training/fine-tuning, AI enterprise services, embodied intelligence, and intelligent hardware</li><li>Led or supported <strong>4 investments</strong>, covering humanoid robotics, metal 3D printing, and two cleaning robotics projects</li>',
    'exp.cc.usd': 'Investment Execution',
    'exp.cc.usd.items': '<li>Owned initial communication, due diligence, datapack preparation, valuation analysis, investment committee materials, closing, and government return-investment coordination</li><li>Built proprietary sourcing channels through university labs, entrepreneurship centers, professors, alumni, and founder networks across CUHK, USTC, UC Berkeley, CMU, BUPT, and BIT</li>',
    'exp.qa.role': 'PE Investment Analyst',
    'exp.qa.company': 'Qianhai Ark Assets Management · Received Return Offer',
    'exp.qa.items': '<li>Participated in the full investment process for <strong>low-altitude economy</strong> and cleaning robot projects, covering aircraft, flight control & avionics, communication, data acquisition, and manufacturing</li><li>Conducted on-site executive interviews and due diligence for <strong>4 projects</strong>; independently prepared <strong>2 investment proposals</strong> with datapack, financial model, industry research, and investment logic</li><li>Organized financials and agreements of <strong>100+ portfolio companies</strong> to identify value-add needs including factory selection, client resources, repurchase triggers, and underperformance issues</li>',
    'exp.dc.role': 'Investor Relations Intern',
    'exp.dc.company': 'Fortune CaiZhi (DaChen) Venture Capital · Received Return Offer',
    'exp.dc.items': '<li><strong>M&A Strategy:</strong> Studied 5+ non-IPO exit cases and proposed an M&A fund strategy based on reverse takeover, asset injection, and headquarters relocation incentives; the strategy was adopted by partners</li><li><strong>Digital Transformation:</strong> Led LP reporting template design and OA workflow optimization, reducing manual workload for 30+ funds</li><li><strong>Fund Operations:</strong> Managed AMAC/CSRC compliance and customized disclosures for institutional LPs with 100% timely filing</li>',
    'proj.title': 'Focus Areas',
    'proj.featured': 'Deal Lead',
    'proj.confidential.title': 'Confidential Pool-Cleaning Robotics Deal',
    'proj.confidential.desc': 'Led a confidential pool-cleaning robotics investment from early tracking to TS, investment committee, valuation negotiation, closing, and government return-investment coordination. Company name is intentionally omitted for confidentiality.',
    'proj.ai_stack.title': 'AI Full-Stack Coverage',
    'proj.ai_stack.desc': 'Coverage across the AI value chain, from foundation models, data layer, post-training/fine-tuning, and AI infra to enterprise applications, embodied intelligence, and intelligent hardware.',
    'proj.lowalt.title': 'Low-Altitude Economy',
    'proj.lowalt.desc': 'Deep-dive research and project execution across the low-altitude industry chain — aircraft manufacturing, flight control & avionics, communication systems, and data acquisition.',
    'proj.intel.badge': 'Live Knowledge Base',
    'proj.intel.title': 'AI Daily Intelligence',
    'proj.intel.desc': 'My daily AI intelligence system, tracking high-signal moves across products, LLM infra, model training, funding, key people, open source, embodied intelligence, and frontier applications.',
    'tag.humanoid': 'Humanoid Robotics',
    'tag.cleaning': 'Cleaning Robots',
    'tag.industrial': 'Industrial Robots',
    'tag.llminfra': 'LLM Infra',
    'tag.datalayer': 'Data Layer',
    'tag.posttraining': 'Post-training',
    'tag.embodied': 'Embodied AI',
    'tag.cleaningrobotics': 'Cleaning Robotics',
    'tag.dealexecution': 'Deal Execution',
    'tag.valuation': 'Valuation',
    'tag.confidential': 'Confidential',
    'tag.flightcontrol': 'Flight Control',
    'tag.avionics': 'Avionics',
    'tag.dataacq': 'Data Acquisition',
    'tag.dailybrief': 'Daily Brief',
    'tag.aiinfra': 'AI Infra',
    'tag.signals': 'Market Signals',
    'insights.title': 'Investment Thesis: AI',
    'insights.subtitle': 'A framework for mapping AI opportunities across foundation-layer depth and commercialization maturity',
    'matrix.mature.app': 'Mature Commercialization',
    'matrix.mature.tech': 'Mature Technology',
    'matrix.mature.app2': 'Mature Commercialization',
    'matrix.mature.tech2': 'Mature Technology',
    'matrix.immature.app': 'Emerging Commercialization',
    'matrix.immature.tech': 'Immature Technology',
    'matrix.immature.app2': 'Emerging Commercialization',
    'matrix.immature.tech2': 'Immature Technology',
    'matrix.red.title': 'Red Ocean',
    'matrix.red.desc': 'Mature products with crowded distribution and compressed margins. Examples: generic copilots, thin AI wrappers, commoditized vertical apps.',
    'matrix.red.verdict': 'Require clear distribution edge',
    'matrix.blue.title': 'Compounding Layer',
    'matrix.blue.desc': 'Foundation-layer capabilities that can compound across applications. Examples: data infrastructure, model tooling, post-training platforms, inference optimization.',
    'matrix.blue.verdict': 'Primary investment focus',
    'matrix.early.title': 'Applied Wedge',
    'matrix.early.desc': 'Clear customer pain points with room to build technical depth over time. Examples: enterprise AI workflow, vertical agents, embodied AI systems.',
    'matrix.early.verdict': 'Track traction and retention',
    'matrix.frontier.title': 'Frontier Layer',
    'matrix.frontier.desc': 'High technical ambition before commercialization is proven. Examples: foundation model labs, synthetic data, autonomous research agents, next-gen compute stack.',
    'matrix.frontier.verdict': 'Long-term conviction required',
    'market.title': 'Market Perspective',
    'market.soe.title': 'SOE Capital Dominance',
    'market.soe.desc': '80%+ of domestic LP capital comes from state-owned entities, carrying dual mandates of financial returns and local economic development. This reshapes GP strategies and portfolio company trajectories.',
    'market.usd.title': 'USD Fund Headwinds',
    'market.usd.desc': 'USD funds in China face declining AUM and deployment, driven by regulatory shifts and geopolitical dynamics. This creates both challenges and unique cross-border opportunities.',
    'market.commitment.title': 'Personal Commitment',
    'market.commitment.desc': 'Fully dedicated to primary market equity investment, with a current focus on AI software/hardware coverage and proprietary early-stage project access through academic and founder networks.',
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
    'chat.toggle': 'Ask Me Anything',
    'chat.name': "Mubai's AI Assistant",
    'chat.subtitle': 'Ask anything about me',
    'chat.welcome': "Hi! I'm Mubai's AI assistant. Ask me anything about his background, investment experience, thesis, or skills!",
    'chat.q1': "What's your investment thesis?",
    'chat.q2': 'Tell me about your PE/VC experience',
    'chat.q3': 'Why AI?',
    'chat.placeholder': 'Type your question...',
  },
  zh: {
    'nav.about': '关于我',
    'nav.experience': '工作经历',
    'nav.projects': '投资项目',
    'nav.insights': '关注领域',
    'nav.ai_news': 'AI 情报库',
    'nav.contact': '联系我',
    'hero.badge': 'PE/VC 一级市场投资人',
    'hero.desc': '<strong>香港中文大学</strong>金融学硕士。具备 <strong>AI 软硬件覆盖与研究能力</strong>的投资分析师，关注大模型 Infra、后训练/微调、AI 企业服务、具身智能、智能硬件及科技交易。',
    'hero.ai_news': 'AI 情报库',
    'hero.viewwork': '查看经历',
    'hero.stat.projects': '投资项目',
    'hero.stat.lps': '触达LP',
    'hero.stat.funds': '基金类型',
    'about.title': '关于我',
    'about.education': '教育背景',
    'about.edu.content': '<p><strong>香港中文大学</strong><br>金融学理学硕士 | 2024.08–2025.10<br>Python、量化风险管理、兼并与收购、公司会计、PE&VC、机器学习</p><p><strong>香港中文大学（深圳）</strong><br>金融学工商管理学士 | 2020.09–2024.06<br>公司金融、投资组合策略与分析、国际金融、行为金融学、最优化</p>',
    'about.philosophy': '投资理念',
    'about.philosophy.content': '<p>我更关注 AI 底层和复利层：基础模型、数据、Infra、后训练/微调，以及真正降低部署成本的工具链。</p><p>相比短期应用热度，我更看重技术深度、分发优势、商业验证，以及这家公司能否在多轮 AI 产业周期里持续复利。</p>',
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
    'exp.cc.company': '天空工厂创投 / Empyrean Global Investment（追觅科技 CVC）',
    'exp.cc.rmb': 'AI 赛道覆盖',
    'exp.cc.rmb.items': '<li>累计接触 <strong>100+ AI 软硬件及科技创业项目</strong>，与 <strong>30+ 创始人</strong>深度交流，覆盖大模型 Infra、数据层、后训练/微调、AI 企业服务、具身智能及智能硬件</li><li>主导或协助完成 <strong>4 个项目投资</strong>，覆盖人形机器人、金属 3D 打印及两个清洁机器人项目</li>',
    'exp.cc.usd': '投资执行',
    'exp.cc.usd.items': '<li>负责前期沟通、尽调、Datapack、估值分析、投决上会及交割，并协助企业推进政府返投与产业落地</li><li>依托高校实验室、创业中心、教授及校友网络，拓展覆盖港中大、中科大、UC Berkeley、CMU、北邮、北理工等院校的早期项目来源</li>',
    'exp.qa.role': 'PE投资助理',
    'exp.qa.company': '前海方舟资产管理 · 获留用推荐',
    'exp.qa.items': '<li>深度参与<strong>低空经济</strong>（整机、飞控&航电、通信、数据采集）及清洁机器人项目从立项到投决全流程</li><li>完成 <strong>4 个项目</strong>现场高管访谈与尽职调查；协助撰写 <strong>2 份投资建议书</strong>，包含 Datapack、财务模型、行业研究与投资逻辑</li><li>投后管理：梳理 <strong>100+ 被投企业</strong>财务和协议信息，挖掘工厂选址、客户资源、回购触发、业绩不达标等赋能需求</li>',
    'exp.dc.role': '投资者关系实习生',
    'exp.dc.company': '达晨财智创业投资 · 获留用推荐',
    'exp.dc.items': '<li><strong>并购基金研究：</strong>梳理 5+ 外部同业收并购退出案例，提出“收购上市壳+注入资产+总部搬迁返投”的投资逻辑，该策略被采纳后公司成立并购小组</li><li><strong>信息化建设：</strong>与 IT、财务、股权等部门协作优化 OA 模块和 LP 报告模板，节省 2–3 位人力工作量</li><li><strong>信息披露：</strong>独立完成中基协、保协、政基系统上 <strong>30+ 基金</strong>信息披露，并对接多位机构 LP 的定制化披露</li>',
    'proj.title': '关注领域',
    'proj.featured': '项目负责人',
    'proj.confidential.title': '某泳池清洁机器人项目',
    'proj.confidential.desc': '因保密要求隐去项目名称。该项目属于泳池清洁机器人方向，持续跟踪后在融资开启第一时间签下 TS，主导前期追踪、高管访谈、Datapack、估值分析、上会、交割及政府返投协调。',
    'proj.ai_stack.title': 'AI 全产业链覆盖',
    'proj.ai_stack.desc': '覆盖 AI 从底层到应用的完整链条：基础模型、数据层、后训练/微调、AI Infra、企业服务、具身智能与智能硬件。',
    'proj.lowalt.title': '低空经济',
    'proj.lowalt.desc': '深度参与低空产业链全流程——整机制造、飞控航电、通信系统、数据采集环节的项目研究与执行。',
    'proj.intel.badge': '实时知识库',
    'proj.intel.title': 'AI 每日情报库',
    'proj.intel.desc': '我自己的 AI 赛道情报系统，每日跟踪产品、LLM Infra、模型训练、融资、关键人物、开源生态、具身智能与前沿应用。',
    'tag.humanoid': '人形机器人',
    'tag.cleaning': '清洁机器人',
    'tag.industrial': '工业机器人',
    'tag.llminfra': 'LLM Infra',
    'tag.datalayer': '数据层',
    'tag.posttraining': '后训练',
    'tag.embodied': '具身智能',
    'tag.cleaningrobotics': '清洁机器人',
    'tag.dealexecution': '交易执行',
    'tag.valuation': '估值分析',
    'tag.confidential': '保密项目',
    'tag.flightcontrol': '飞控',
    'tag.avionics': '航电',
    'tag.dataacq': '数据采集',
    'tag.dailybrief': '每日简报',
    'tag.aiinfra': 'AI Infra',
    'tag.signals': '市场信号',
    'insights.title': '投资框架：AI',
    'insights.subtitle': '基于底层价值深度与商业化成熟度的 AI 投资机会图谱',
    'matrix.mature.app': '商业化成熟',
    'matrix.mature.tech': '成熟技术',
    'matrix.mature.app2': '商业化成熟',
    'matrix.mature.tech2': '成熟技术',
    'matrix.immature.app': '商业化早期',
    'matrix.immature.tech': '未成熟技术',
    'matrix.immature.app2': '商业化早期',
    'matrix.immature.tech2': '未成熟技术',
    'matrix.red.title': '红海',
    'matrix.red.desc': '产品成熟但分发拥挤、利润压缩。典型：通用 Copilot、薄封装 AI 应用、同质化垂直工具。',
    'matrix.red.verdict': '必须有明确分发优势',
    'matrix.blue.title': '复利层',
    'matrix.blue.desc': '能跨场景复用并持续复利的底层能力。典型：数据基础设施、模型工具链、后训练平台、推理优化。',
    'matrix.blue.verdict': '核心关注方向',
    'matrix.early.title': '应用楔子',
    'matrix.early.desc': '客户痛点清晰，同时有机会逐步沉淀技术深度。典型：企业 AI 工作流、垂直 Agent、具身智能系统。',
    'matrix.early.verdict': '重点跟踪留存和付费',
    'matrix.frontier.title': '前沿层',
    'matrix.frontier.desc': '技术野心强，但商业化仍待验证。典型：基础模型公司、合成数据、自主科研 Agent、下一代算力栈。',
    'matrix.frontier.verdict': '需要长期信念',
    'market.title': '市场观察',
    'market.soe.title': '国资主导',
    'market.soe.desc': '国内80%以上LP资金来自国资，兼具财务回报与招商引资双重诉求。这深刻重塑了GP投资策略与被投企业发展路径。',
    'market.usd.title': '美元基金承压',
    'market.usd.desc': '美元基金在国内募资规模与投资额度双降，源于政策与地缘政治的综合影响。挑战与跨境机遇并存。',
    'market.commitment.title': '个人承诺',
    'market.commitment.desc': '全身心投入一级市场股权投资事业，当前重点沉淀 AI 软硬件赛道覆盖能力，并通过高校实验室、教授、校友和创业者网络构建早期项目触达。',
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
    'chat.toggle': '想了解我？点这里',
    'chat.name': '慕白的AI助手',
    'chat.subtitle': '随时提问了解我',
    'chat.welcome': '你好！我是慕白的AI助手。关于他的背景、投资经历、投资框架或技能，随时可以问我！',
    'chat.q1': '你的投资框架是什么？',
    'chat.q2': '介绍下PE/VC经历',
    'chat.q3': '为什么关注AI？',
    'chat.placeholder': '输入你的问题...',
  }
};

const LANGUAGE_PREF_VERSION = '20260704-zh-default';
let currentLang = 'zh';

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
  const savedLangVersion = localStorage.getItem('langVersion');
  const savedLang = savedLangVersion === LANGUAGE_PREF_VERSION ? localStorage.getItem('lang') : null;
  currentLang = savedLang || 'zh';
  localStorage.setItem('lang', currentLang);
  localStorage.setItem('langVersion', LANGUAGE_PREF_VERSION);
  setLanguage(currentLang);

  function toggleLang() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('lang', currentLang);
    localStorage.setItem('langVersion', LANGUAGE_PREF_VERSION);
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
  toggle.addEventListener('click', () => {
    panel.classList.toggle('active');
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
    en: "Mubai holds an M.Sc. in Finance from CUHK (2024-2025) and a B.B.A. in Finance from CUHK-Shenzhen (2020-2024). He scored TOEFL 106 and GRE 326. His coursework spans quantitative finance, M&A, PE&VC, and corporate finance.",
    zh: "慕白在香港中文大学获得金融学硕士（2024-2025），在港中文（深圳）获得金融学学士（2020-2024）。托福106，GRE 326。课程涵盖量化金融、并购、PE&VC、公司金融等。"
  },
  experience: {
    keywords: ['experience', 'work', 'career', 'job', 'intern', 'vc', 'pe', '经历', '工作', '实习', '职业'],
    en: "Mubai has worked across Empyrean Global Investment, Qianhai Ark, and Fortune CaiZhi. He has engaged with 100+ AI technology startups, held in-depth discussions with 30+ founders, and led or supported 4 investments across humanoid robotics, metal 3D printing, and two cleaning robotics projects.",
    zh: "慕白在天空工厂创投 / Empyrean Global Investment、前海方舟、达晨财智有投资与基金运营经历。他累计接触100+ AI软硬件及科技创业项目，与30+创始人深度交流，并主导或协助完成4个项目投资，覆盖人形机器人、金属3D打印及两个清洁机器人项目。"
  },
  thesis: {
    keywords: ['thesis', 'framework', 'investment thesis', 'ai', 'strategy', '框架', '投资逻辑', '策略', '观点'],
    en: "Mubai's AI thesis is increasingly focused on the foundational layers: foundation models, data, AI infrastructure, post-training/fine-tuning, and tools that reduce deployment cost. He still tracks applications and hardware, but prefers opportunities where technical depth, distribution, and commercial validation reinforce each other.",
    zh: "慕白的AI投资框架更偏底层和复利层：基础模型、数据、AI Infra、后训练/微调，以及真正降低部署成本的工具链。他仍然跟踪应用和硬件，但更偏好技术深度、分发能力和商业验证可以互相强化的机会。"
  },
  ai_value_chain: {
    keywords: ['ai', 'robot', 'robotics', 'humanoid', 'cleaning', 'lidar', 'infra', 'data', 'model', 'fine-tuning', '机器人', '人形', '清洁', '激光雷达', '大模型', '数据', '微调', '后训练', '算力'],
    en: "Mubai covers the full AI value chain: foundation models, data layer, post-training/fine-tuning, AI infra, enterprise services, embodied intelligence, intelligent hardware, and robotics. His work combines bottom-layer research with hands-on transaction experience.",
    zh: "慕白关注的是AI全产业链：基础模型、数据层、后训练/微调、AI Infra、企业服务、具身智能、智能硬件和机器人。他的特点是把底层研究和真实交易执行经验结合起来。"
  },
  skills: {
    keywords: ['skill', 'tool', 'tech', 'python', 'model', 'valuation', '技能', '工具', '技术', '估值', '建模'],
    en: "Mubai's toolkit: Financial modeling (DCF, comps, sensitivity analysis, 3-statement), due diligence methodology, investment memo writing. Tech: Python, R, Stata, Matlab, Claude Code, NotebookLM, and vibe coding. Bilingual English/Chinese with TOEFL 106 and GRE 326. Also experienced in LP relations, roadshows, and fundraising materials.",
    zh: "慕白的工具箱：财务建模（DCF、可比公司、敏感性分析、三表预测）、尽调方法论、投资建议书撰写。技术：Python、R、Stata、Matlab、Claude Code、NotebookLM、vibe coding。中英双语（托福106、GRE 326）。还擅长LP关系维护、路演推介和募资材料制作。"
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
  confidential_deal: {
    keywords: ['cleaning robot', 'pool robot', 'robotics deal', 'confidential', '清洁机器人', '泳池机器人', '保密项目', '投资案例'],
    en: "One confidential case is a pool-cleaning robotics investment. Mubai tracked the company before financing opened, moved quickly to sign the TS, led executive interviews, datapack preparation, valuation analysis, investment committee materials, closing, and government return-investment coordination. The company name is intentionally omitted for confidentiality.",
    zh: "一个保密案例是某泳池清洁机器人项目。慕白在项目融资开启前持续跟踪，融资开启后快速签下TS，并主导高管访谈、Datapack、估值分析、上会、交割和政府返投协调。出于保密要求，页面不展示项目名称。"
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
    ? '这个问题比较开放，你可以试试问我关于慕白的教育背景、投资经历、AI投资框架、专业技能或市场观察等方面的问题。'
    : "That's a broad question! Try asking me about Mubai's education, PE/VC experience, AI investment thesis, professional skills, or market perspectives.";
}
