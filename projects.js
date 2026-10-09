// Shared project data for work.html and caseStudy.html. Edit text here.
// Images: IMG_ROOT + folder + '/' + pre + One / Two / Three (png, jpg, jpeg or webp)
// ch = challenge text, rf = reflection text. Empty folder = images show "coming soon".
var IMG_ROOT="portfolio images/";
var P=[
 {
  s: "shokuya",
  n: "Shokuya",
  c: "Marketing",
  col: "#ff4d6d",
  r: "Content Marketing Manager",
  y: "Sep 2026 to now",
  d: "Content strategy across Instagram, TikTok, YouTube and HubSpot, with YouTube as the main growth channel. B2B lead generation and influencer/PR outreach.",
  m: "4+ platforms",
  folder: "shokuya web",
  pre: "shokuya",
  tools: "HubSpot, YouTube, Instagram, TikTok",
  b: ["Manage content strategy across 4+ platforms with YouTube as the primary growth channel, including video editing, planning and publishing.","Lead B2B lead generation and influencer/PR outreach, using HubSpot to prospect and nurture leads.","Collaborate on website design, photo and video assets and creative operations, building simple systems for social and graphic requests."],
  st: [["4+","platforms managed"]],
  ch: "Grow the audience for a Japanese artisanal food importer across several platforms at once, make YouTube the main growth channel, and find B2B leads and PR opportunities along the way.",
  rf: "Video-first content taught me to plan around one hero channel and repurpose it everywhere else, and to build simple request systems so creative work does not stall."
 },
 {
  s: "bhs",
  n: "Brown Harris Stevens",
  c: "Marketing",
  col: "#ff9f1c",
  r: "Administrative & Creative Assistant",
  y: "Mar to Sep 2026",
  d: "Listing operations, property descriptions, SEO and social, plus flyers and graphics for showrooms.",
  m: "20%+ more listing engagement",
  folder: "bhs web",
  pre: "bhs",
  tools: "CRM, Excel, SEO, social media",
  b: ["Streamlined listing operations by managing property files weekly (seller disclosures, closing docs, board packages).","Wrote optimized property descriptions, updated website content and supported SEO and social media marketing.","Coordinated 10+ weekly appointments and maintained CRM and Excel databases."],
  st: [["~25%","fewer processing delays"],["20%+","more listing engagement"],["~30%","better lead organization"]],
  ch: "Listing paperwork, content and appointments all moved every week, and a delay in any one of them slowed down a sale.",
  rf: "I learned how much clear, organized systems matter behind the scenes, and how good copy and SEO can quietly lift engagement."
 },
 {
  s: "teso",
  n: "Teso Group",
  c: "Brand",
  col: "#e040fb",
  r: "Design Intern",
  y: "May to Jul 2026",
  d: "Digital and print visuals for K-Beauty, J-Beauty and global skincare brands, from social graphics to interactive in-store signage.",
  m: "K-Beauty & J-Beauty",
  folder: "teso web",
  pre: "teso",
  tools: "Design, print, social graphics, signage",
  b: ["Designed digital and print visuals for K-Beauty, J-Beauty and global skincare brands to lift in-store and online conversion.","Turned complex skincare benefits and routines into social graphics, campaigns and interactive in-store signage.","Adapted assets for seasonal campaigns within regional brand guidelines and brainstormed hooks for Gen Z and millennial shoppers."],
  st: [["Print + digital","visuals and signage"]],
  ch: "Make complex skincare benefits and routines easy to understand at a glance, in store and online, while following regional brand guidelines.",
  rf: "Designing for retail taught me to lead with one clear message and to adapt a single idea across print, social and signage."
 },
 {
  s: "jc",
  n: "NY Jobs CEO Council",
  c: "Marketing",
  col: "#00b4d8",
  r: "Social Media Marketing Intern",
  y: "Oct 2025 to Mar 2026",
  d: "A 3x weekly posting strategy with original copy and graphics, and full Q1 content calendars planned months ahead.",
  m: "135k+ views, 1.3k profile visits",
  folder: "jc web",
  pre: "jc",
  tools: "Social media, content calendars, analytics",
  b: ["Ran a 3x weekly social strategy with original copy and on-brand graphics for internship and entry-level programs.","Mapped full Q1 content calendars months ahead, with approvals across Marketing, Communication and Student Engagement.","Grew the audience through data-driven strategy and performance analysis."],
  st: [["135k+","views"],["1.3k","profile visits"],["3x","weekly posts"]],
  ch: "Keep a high-frequency posting schedule running across several teams while earning real attention for internship and entry-level programs.",
  rf: "Planning calendars months ahead and checking performance after every post showed me how consistency and data work together."
 },
 {
  s: "sal",
  n: "SAL Consulting",
  c: "Build",
  col: "#2ec27e",
  r: "UX/UI & Marketing Communication Intern",
  y: "Aug to Oct 2025",
  d: "Led the company website redesign (HTML, CSS, React, Python) and built a centralized Airtable system for project tracking.",
  m: "Website redesign",
  folder: "sal web",
  pre: "sal",
  tools: "HTML, CSS, React, Python, Airtable, Mailchimp",
  b: ["Led the company website redesign with a UX/UI focus.","Built a centralized Airtable system for project tracking, documentation and workflow.","Managed content across Instagram, LinkedIn, Mailchimp and blog, designing on-brand graphics."],
  st: [["Redesign","company website"],["Airtable","tracking system"]],
  ch: "The company needed a clearer website and one place to keep track of projects and documents.",
  rf: "This is where design and code came together for me. I learned that a good system, like the Airtable setup, helps a team as much as a good interface."
 },
 {
  s: "cy",
  n: "Cy Ventures",
  c: "Brand",
  col: "#5b3df5",
  r: "Product Strategy & Development Summer Analyst",
  y: "Jul to Sep 2025",
  d: "Led Instagram and LinkedIn marketing, organized brand-aligned pop-ups, and contributed 5+ product features including a smart matching algorithm.",
  m: "40% follower growth, 4 pop-ups",
  folder: "cy web",
  pre: "cy",
  tools: "Instagram, LinkedIn, product strategy, UI",
  b: ["Led digital marketing across Instagram and LinkedIn, publishing 3x a week.","Secured 4 brand-aligned pop-up events through partner outreach.","Contributed to 5+ product features including a smart matching algorithm, and assisted on the website UI."],
  st: [["40%","follower growth"],["4","pop-up events"],["30%","fewer missed return windows"]],
  ch: "Build awareness for a sustainable fashion startup while helping shape product features that reduced missed return windows.",
  rf: "Working on marketing and product together taught me to pay attention to what customers actually do, and to use partnerships and pop-ups to build trust offline."
 },
 {
  s: "aako",
  n: "Aako",
  c: "Marketing",
  col: "#ff6b35",
  r: "AR Spatial Marketing Intern",
  y: "Jul to Aug 2025",
  d: "Designed and produced Instagram posts, reels and stories that showed AR experiences tied to real-world places.",
  m: "10+ content samples",
  folder: "aako web",
  pre: "aako",
  tools: "Instagram, reels, AR storytelling",
  b: ["Worked twice a week with the NYC creative team to produce 2-3 Instagram posts per session, including reels and stories.","Sourced, shot and submitted 10+ content samples, iterating on feedback.","Boosted engagement with immersive, design-driven content."],
  st: [["10+","content samples"],["2-3","posts per session"]],
  ch: "AR experiences are hard to explain in a still image, so the content had to show them in a way that made people stop scrolling.",
  rf: "I learned to shoot with the story in mind, take feedback quickly and keep iterating until the content matched the brand vision."
 },
 {
  s: "jammy",
  n: "Jammy Chat",
  c: "Build",
  col: "#06d6a0",
  r: "Marketing + App Developer Intern",
  y: "Dec 2024 to Feb 2025",
  d: "Gen Z marketing for the beta launch, mobile app features shaped by user feedback, and front-end work across web and mobile.",
  m: "67% user acquisition in 48 hours",
  folder: "jammy web",
  pre: "jammy",
  tools: "Mobile app, front-end, UX/UI, marketing",
  b: ["Led Gen Z marketing campaigns for the beta launch.","Built and refined mobile app features, folding user feedback into design iterations.","Worked with the co-founder on UX/UI and front-end design, and helped build the website."],
  st: [["67%","user acquisition in 48 hours"],["20%","higher feature adoption"],["Top 10","interns for impact"]],
  ch: "Launch a beta to Gen Z users and turn early feedback into app improvements quickly.",
  rf: "Shipping fast with a small team showed me how much user feedback improves a design, and how a launch campaign and the product have to move together."
 },
 {
  s: "irenity",
  n: "Irenity Land",
  c: "Brand",
  col: "#d6336c",
  r: "Founder & Lead Strategist",
  y: "May 2026 to now",
  d: "A digital marketing agency covering client discovery, brand strategy, minimalist web interfaces, content calendars and brand identity systems.",
  m: "Founder",
  folder: "",
  pre: "irenity",
  tools: "Brand identity, web design, content calendars",
  b: ["Launched a digital marketing agency, managing client discovery, scope definition and brand strategy end to end.","Direct the technical and visual execution of client deliverables: minimalist web interfaces, content calendars and brand identity systems."],
  st: [["Founder","irenity land"]],
  ch: "Start an agency from zero: find clients, define scope and deliver brand, web and content work from start to finish.",
  rf: "Running my own agency taught me to scope clearly, keep design minimal and purposeful, and own both the strategy and the execution."
 },
 {
  s: "isf",
  n: "Indochina Starfish Foundation",
  c: "Build",
  col: "#7950f2",
  r: "Design Engineering Intern",
  y: "Dec 2024 to Apr 2025",
  d: "A centralized relational database and automated KPI dashboards for cross-team M&E workflows, plus front-end work on the website.",
  m: "60% fewer reporting delays",
  folder: "isf web",
  pre: "isf",
  tools: "Relational database, dashboards, front-end, UI",
  b: ["Developed a centralized relational database that streamlined cross-functional M&E workflows.","Automated reporting through integrated dashboard tools for KPI tracking and cross-team collaboration.","Built UI and front-end for the website and created assets such as dashboards and internal tools."],
  st: [["60%","fewer reporting delays"]],
  ch: "Reporting delays were slowing down cross-functional M&E workflows, and the data lived in too many places.",
  rf: "Combining databases, dashboards and UI showed me how design engineering can remove friction for non-technical teams."
 },
 {
  s: "ps",
  n: "Research Foundation of CUNY",
  c: "Build",
  col: "#12b886",
  r: "IT Intern at PS20",
  y: "Mar 2024 to Apr 2025",
  d: "Managed a 3,000+ asset inventory, delivered on-site tech support, and built a helpdesk ticketing system and DOE intranet updates.",
  m: "45% faster ticket resolution",
  folder: "ps web",
  pre: "ps",
  tools: "Windows, macOS, networking, full-stack, UX/UI",
  b: ["Managed a 3,000+ asset inventory database and decommissioned 786 obsolete units using internal tracking systems.","Delivered Tier 1 and Tier 2 on-site support: troubleshooting Windows and macOS hardware, configuring DOE network access and resolving software conflicts.","Designed and deployed a helpdesk ticketing system to streamline IT service requests.","Maintained and updated the DOE intranet site and mobile app (full-stack and UX/UI)."],
  st: [["3,000+","assets managed"],["786","units decommissioned"],["45%","faster resolution"]],
  ch: "A 3,000+ device inventory and a steady stream of support requests needed better tracking and a faster way to resolve issues.",
  rf: "Hands-on IT support taught me patience and clear communication, and building the ticketing system showed me how small tools can save everyone time."
 },
 {
  s: "hack",
  n: "Hackathons",
  c: "Build",
  col: "#4361ee",
  r: "HackHarvard, HackNYU, HackBrown, HackPrinceton",
  y: "Oct 2024 to Feb 2026",
  d: "UX/UI product strategy and front-end prototyping for an AI trends dashboard and a personal finance extension.",
  m: "4 hackathons",
  folder: "",
  pre: "hack",
  tools: "UX/UI, front-end prototyping",
  b: ["Directed UX/UI product strategy and front-end prototyping for an AI trends dashboard and a personal finance extension.","Turned complex technical data into demo-ready user flows for panel judging."],
  st: [["4","hackathons"]],
  ch: "Turn complex technical data into a clear, demo-ready experience within a hackathon time limit.",
  rf: "Fast builds taught me to focus on one clear user flow, prototype early and explain an idea simply to judges."
 }
];

// Loads P[n] image (One/Two/Three) into a box; adds class has-img on success. Tries png/jpg/jpeg/webp and both name cases.
var IMG_OK={};
function loadProjImg(p,n,box){
  if(!p.folder){box.classList.add('soon');return}
  var key=p.s+n,cap=p.pre.charAt(0).toUpperCase()+p.pre.slice(1),c=[];
  var im=new Image();im.className='pi';im.alt=p.n+' image '+n;
  function ok(){box.insertBefore(im,box.firstChild);box.classList.add('has-img')}
  if(IMG_OK[key]){im.src=IMG_OK[key];ok();return}
  [p.pre+n,cap+n].forEach(function(nm){['png','jpg','jpeg','PNG','JPG','JPEG','webp'].forEach(function(x){c.push(encodeURI(IMG_ROOT+p.folder+'/'+nm+'.'+x))})});
  var i=0;
  im.onload=function(){IMG_OK[key]=im.src;if(box.isConnected)ok()};
  im.onerror=function(){i++;if(i<c.length&&box.isConnected){im.src=c[i]}else if(i>=c.length){console.warn('Image not found: '+IMG_ROOT+p.folder+'/'+p.pre+n)}};
  im.src=c[0];
}
