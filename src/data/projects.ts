export type Project = {
  slug: string; title: string; subtitle: string; description: string; category: string;
  tags: string[]; color: string; role: string; period: string; tools: string; type: string;
  live?: string; overview: string; challenge: string; goals: string[];
  process: { title: string; text: string }[]; solution: string; reflection: string;
  image?: string; imageAlt?: string;
};
export const projects: Project[] = [
  {
    slug: 'melanate', title: 'Melanate / Sankofa', subtitle: 'Making room for meaningful stories.',
    description: 'A nonprofit digital experience built around content, community, and thoughtful storytelling.',
    category: 'DESIGN FOR GOOD', tags: ['UI/UX design', 'Visual storytelling', 'Nonprofit'], color: 'rose',
    role: 'Volunteer UI/UX Designer · Sankofa Subsite Lead', period: 'May–August 2026', tools: 'Figma, Wix Harmony, CMS', type: 'Nonprofit website · Develop for Good',
    overview: 'Through Develop for Good, I worked with a team on a website for Melanate. I led design for the Sankofa subsite and contributed to the main homepage, helping shape a digital home for the organization’s content.',
    challenge: 'How can a nonprofit’s content become an engaging, easy-to-follow digital experience? This project brought together information organization, page design, and visual storytelling. Specific client requirements and discovery materials will be added with the original project artifacts.',
    goals: ['Give structured content a clear, readable hierarchy.', 'Create space for stories through thoughtful layouts and timeline cards.', 'Translate design intent into an editable CMS-supported website.'],
    process: [
      {title: '01 · Understand & organize', text: 'I collaborated with teammates and incorporated client feedback while organizing structured content for CMS integration. Discovery notes and the original content map are pending.'},
      {title: '02 · Explore the story', text: 'I created wireframes and page layouts for the Sankofa subsite and contributed to the main homepage. Original wireframes and design iterations will be added here.'},
      {title: '03 · Refine together', text: 'My work included timeline cards, visual storytelling, and animations. Client feedback and team collaboration informed the design work; annotated examples are pending.'},
      {title: '04 · Bring it to life', text: 'I helped translate designs into Wix Harmony and participated in the final project presentation and Demo Day.'}
    ],
    solution: 'The website work brought page layouts, structured content, timeline cards, and motion together. The original site screenshots and interaction recordings will document the final implementation here.',
    reflection: 'Designing for a real organization made collaboration and clear communication central to the work. This project connected design decisions with content management and implementation. A more personal reflection, with specific examples, will be added alongside the artifacts.'
  },
  {
    slug: 'kneeguard', image: '/projects/kneeguard/desktop.png', imageAlt: 'KneeGuard interface showing recovery week and day selectors, knee flexion, a recovery milestone, and progress status', title: 'KneeGuard', subtitle: 'Clarity through every step of recovery.',
    description: 'Exploring the connection between wearable technology and an understandable ACL recovery experience.',
    category: 'HARDWARE MEETS HUMAN', tags: ['Interface design', 'Wearable technology', 'Arduino'], color: 'blue',
    role: 'Contribution details pending', period: 'Timeline to be added', tools: 'Arduino, wearable sensors · full stack to be confirmed', type: 'ACL rehabilitation technology prototype',
    live: 'https://kneeguard-demo.onrender.com/KneedThat.html',
    overview: 'KneeGuard explores how a wearable knee-sleeve concept, Arduino-based sensor integration, and a digital interface can support ACL rehabilitation information. It is a prototype, with a linked demo.',
    challenge: 'Recovery-related information can be difficult to interpret. The design opportunity is to make information understandable for people navigating ACL rehabilitation, while being clear about the limits of a prototype. Patient and clinician needs have not been validated here.',
    goals: ['Present recovery information with clear hierarchy and accessible language.', 'Connect the wearable concept, sensor inputs, and digital interface.', 'Keep prototype information distinct from medical advice or clinical claims.'],
    process: [
      {title: '01 · People & context', text: 'People recovering from ACL injuries are the intended audience. Research findings, interviews, and clinical requirements have not been supplied; these remain open questions.'},
      {title: '02 · Hardware + software', text: 'The project combines a wearable knee-sleeve concept with Arduino-based sensor integration and a digital recovery interface. A component diagram, sensor specifications, and implementation details are pending.'},
      {title: '03 · Information & interface', text: 'Clarity, accessibility, and thoughtful information presentation are central design considerations. The live interface groups current knee flexion, today’s recovery milestone, and progress status into three distinct cards. Week and day selectors establish the recovery context, with start/stop controls for a live read. This describes the visible prototype, not validated sensor behavior.'},
      {title: '04 · Prototype & next steps', text: 'The live demo is linked below. Future exploration could include clearer explanations of sensor data and accessibility evaluation. These are potential improvements, not completed testing.'}
    ],
    solution: 'The prototype connects a physical wearable concept with a digital recovery-monitoring interface. Live interface captures are shown below. Original hardware photographs and a personal account of technical challenges are still needed. No clinical validation or patient testing is claimed.',
    reflection: 'Healthcare-related interfaces call for careful language and clear limits. A detailed reflection on my specific design and technical contributions is pending; the prototype should not be interpreted as a validated medical device.'
  },
  {
    slug: 'course-canvas', image: '/projects/course-canvas/desktop.png', imageAlt: 'Course Canvas demo semester dashboard with course timelines, collision-week advisories, and workload forecast', title: 'Course Canvas', subtitle: 'Less syllabus overwhelm. More possibility.',
    description: 'An AI-powered academic planning concept that turns course information into a more manageable semester.',
    category: 'A LITTLE MORE ORGANIZED', tags: ['AI + education', 'Product thinking', 'Web development'], color: 'lavender',
    role: 'Specific design & development contributions pending', period: 'Timeline to be added', tools: 'AI-powered web application · stack to be confirmed', type: 'Academic planner · CUNY Tech Prep Hacks',
    live: 'https://cuny-course-canvas-5nzl.vercel.app/',
    overview: 'Course Canvas is an educational technology project designed to help students organize coursework and academic responsibilities. It received Best Demo at CUNY Tech Prep Hacks.',
    challenge: 'A syllabus contains important information, but turning that information into an actionable plan can take effort. Course Canvas explores a more manageable way for students to navigate assignments, deadlines, and study planning.',
    goals: ['Make academic responsibilities easier to find and navigate.', 'Explore AI-assisted organization of syllabus information.', 'Keep the path from course information to a plan understandable.'],
    process: [
      {title: '01 · Start with the semester', text: 'The intended users are students managing coursework and deadlines. No user interviews or usability testing have been provided.'},
      {title: '02 · From syllabus to plan', text: 'The concept uses AI to turn syllabus information into planning tools such as assignments, deadlines, and study schedules. The live sign-in screen states that syllabi are sent to Gemini for parsing. The parsing pipeline and its accuracy have not been independently verified here.'},
      {title: '03 · Organize the interface', text: 'The interface aims to make academic information easier to navigate. The live demo organizes courses as a semester diagram, with collision-week advisories and a workload forecast. Unconfirmed dates are visibly marked. The navigation separates semester information, planning, and study tools. The displayed counts are demo data, not impact metrics.'},
      {title: '04 · My contribution', text: 'Details to add: the screens I designed, features I implemented, decisions I owned, team collaborators, and technical challenges. These are intentionally left open rather than inferred.'}
    ],
    solution: 'The live demo provides a view into the academic planning project. The screenshots below show the actual sign-in page and the demo student semester canvas. The demo entry leads to a cross-course view of deadlines and workload; no syllabus upload or AI parsing was tested.',
    reflection: 'Best Demo at CUNY Tech Prep Hacks recognizes the project’s presentation. A personal account of collaboration, challenges, and design decisions will be added when my specific responsibilities are documented.'
  },
  {
    slug: 'our-neighborhood-mission', image: '/projects/our-neighborhood-mission/desktop.png', imageAlt: 'Our Neighborhood Mission homepage with its community support introduction, resources, and community highlights', title: 'Our Neighborhood Mission', subtitle: 'A welcoming place to find support.',
    description: 'A community-centered nonprofit website, designed and built from the ground up.',
    category: 'COMMUNITY, CONNECTED', tags: ['Web design', 'Frontend development', 'Nonprofit'], color: 'green',
    role: 'Website Designer & Developer · Independent build', period: 'Timeline to be added', tools: 'HTML, CSS, Bootstrap', type: 'Community nonprofit website',
    live: 'https://ourneighborhoodmission.org',
    overview: 'Our Neighborhood Mission connects families, children, and individuals of all abilities with resources, support, advocacy, and inclusive community programs. I independently designed and built its website using HTML, CSS, and Bootstrap.',
    challenge: 'The website needed to present community resources and organizational information in a welcoming, accessible format. The design opportunity was to connect a community-centered mission with a clear digital experience.',
    goals: ['Present the organization and its resources with an understandable page structure.', 'Make navigation welcoming across screen sizes.', 'Translate visual ideas into a working frontend using HTML, CSS, and Bootstrap.'],
    process: [
      {title: '01 · Structure the content', text: 'The website brings organizational information and community resources into a digital space. An original sitemap and page-by-page walkthrough are pending.'},
      {title: '02 · Design for different screens', text: 'The implementation uses HTML, CSS, and Bootstrap for page structure, styling, navigation, and responsive layouts. The live homepage uses a green community-support hero, three introductory resource cards, and a community highlights carousel. The captures below show the actual desktop and mobile page.'},
      {title: '03 · Build the frontend', text: 'I independently built the website from scratch, combining custom markup and styles with Bootstrap. This work demonstrates hands-on frontend implementation alongside visual design.'},
      {title: '04 · Share the result', text: 'The live website is linked below. A large screenshot gallery will be added with original captures; accessibility audits and measured outcomes have not been supplied.'}
    ],
    solution: 'The result is a working website for a community-focused nonprofit. The gallery includes real desktop and mobile homepage captures. An additional resource or program page capture remains pending.',
    reflection: 'This project connects visual decisions with the practical work of building a website. Working in HTML, CSS, and Bootstrap gave me direct ownership of how the design became a functioning frontend. Specific lessons and implementation examples can be added with the original artifacts.'
  }
];
export const profile = { email: '', linkedin: '', github: '', social: '', resume: '', photo: '' };

export const projectGalleries: Record<string, {title:string;description:string;src?:string;alt:string}[]> = {
 'kneeguard': [
  {title:'Recovery companion · live prototype', description:'', src:'/projects/kneeguard/desktop.png', alt:'KneeGuard live interface showing knee flexion, recovery milestone, and progress status'},
  {title:'Wearable & sensor prototype',description:'Add an original photo of the knee-sleeve concept and Arduino sensor setup.',alt:'KneeGuard original hardware photograph pending'},
  {title:'Mobile recovery interface',description:'',src:'/projects/kneeguard/mobile.png',alt:'KneeGuard recovery interface at a mobile viewport'}
 ],
 'course-canvas': [
  {title:'Semester canvas · demo data',description:'',src:'/projects/course-canvas/desktop.png',alt:'Course Canvas demo dashboard with five course timelines, collision-week advisories, and workload forecast'},
  {title:'Sign-in & demo entry',description:'',src:'/projects/course-canvas/sign-in.png',alt:'Course Canvas sign-in page with an Enter as demo student button'},
  {title:'Semester canvas · mobile',description:'',src:'/projects/course-canvas/mobile.png',alt:'Course Canvas demo semester dashboard at a mobile viewport'}
 ],
 'our-neighborhood-mission': [
  {title:'Community-centered homepage',description:'',src:'/projects/our-neighborhood-mission/desktop.png',alt:'Our Neighborhood Mission homepage with community support hero, introductory cards, and community highlights'},
  {title:'Resources or program page',description:'Add an original capture of a resource or program page.',alt:'Our Neighborhood Mission resource page capture pending'},
  {title:'Homepage · mobile',description:'',src:'/projects/our-neighborhood-mission/mobile.png',alt:'Our Neighborhood Mission homepage at a mobile viewport'}
 ]
};
