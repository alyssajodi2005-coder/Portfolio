import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Award, Quote } from 'lucide-react';
import { projects, projectGalleries } from '@/data/projects';
import { ProjectVisual } from '@/components/project-visual';
import { Reveal } from '@/components/motion';
import { Gallery } from '@/components/gallery';
export function generateStaticParams() { return projects.map(p=>({slug:p.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata> {
  const {slug}=await params; const p=projects.find(p=>p.slug===slug);
  return {title:p?.title || 'Project not found',description:p?.description};
}
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const index=projects.findIndex(p=>p.slug===slug); if(index<0) notFound();
  const project=projects[index]; const next=projects[(index+1)%projects.length];
  const gallery = projectGalleries[project.slug] || [{title:project.slug==='kneeguard'?'Wearable & sensor prototype':'Desktop website overview',description:project.slug==='kneeguard'?'Add an original photo of the knee-sleeve concept and Arduino sensor setup.':'Add a full-width capture of the actual project homepage.',alt:`${project.title} original project overview`}, {title:project.slug==='course-canvas'?'Academic planning flow':'Interface details',description:'Add original screens that show key content and interactions.',alt:`${project.title} interface details`}, {title:'Mobile experience',description:'Add a real mobile screenshot or prototype capture.',alt:`${project.title} mobile interface`}];
  return <main id="main" className="case-study"><div className="section-shell"><Link href="/#work" className="back-link"><ArrowLeft size={15}/> Selected work</Link><Reveal><div className="case-hero"><p className="eyebrow">{project.category} <span> / 0{index+1}</span></p><h1>{project.title}</h1><p className="case-subtitle">{project.subtitle}</p><div className="tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div></div><ProjectVisual project={project} priority/></Reveal>
  <dl className="project-facts">{[['MY ROLE',project.role],['WHEN',project.period],['TOOLKIT',project.tools],['PROJECT',project.type]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
  <nav className="case-toc" aria-label="Case study sections"><a href="#overview">Overview</a><a href="#challenge">Challenge</a><a href="#process">Process</a><a href="#solution">Solution</a><a href="#reflection">Reflection</a></nav>
  <CaseSection id="overview" number="01" label="THE OVERVIEW" title="A little context."><p>{project.overview}</p>{project.live && <a className="text-link" href={project.live} target="_blank" rel="noopener noreferrer">Explore the live {project.slug==='our-neighborhood-mission'?'website':'demo'} <ArrowUpRight size={17}/></a>}</CaseSection>
  <CaseSection id="challenge" number="02" label="THE CHALLENGE" title="The problem worth solving."><p>{project.challenge}</p><h3 className="small-heading">Design goals & considerations</h3><ul className="goals">{project.goals.map((g,i)=><li key={g}><span>0{i+1}</span>{g}</li>)}</ul></CaseSection>
  <section id="process" className="process-section"><Reveal><p className="eyebrow">03 / THE PROCESS</p><h2>From the first question<br/>to the <em>next iteration.</em></h2></Reveal><div className="process-grid">{project.process.map(step=><Reveal key={step.title}><h3>{step.title}</h3><p>{step.text}</p></Reveal>)}</div>{project.slug==='melanate' && <div className="artifact-callout"><p className="eyebrow">PROCESS ARTIFACTS · PENDING</p><h3>The thinking behind the screens.</h3><p>This space is reserved for original Figma wireframes, the Sankofa content structure, and before-and-after iterations. No reconstructed artifacts are presented as original work.</p></div>}</section>
  <CaseSection id="solution" number="04" label="THE SOLUTION" title="Bringing the pieces together."><p>{project.solution}</p></CaseSection><Gallery items={gallery}/>
  {project.slug==='melanate' && <Reveal><section className="recognition"><Quote size={34} strokeWidth={1}/><div><p className="eyebrow">CLIENT RECOGNITION</p><h2>A moment to <em>celebrate.</em></h2><p>A dedicated space for the client’s social media post recognizing our team and its work.</p><div className="recognition-placeholder">Client post screenshot, original wording, and source link to be added.<br/>No testimonial has been supplied.</div></div></section></Reveal>}
  {project.slug==='course-canvas' && <Reveal><section className="recognition award"><Award size={42} strokeWidth={1}/><div><p className="eyebrow">CUNY TECH PREP HACKS</p><h2>Best <em>Demo.</em></h2><p>Recognized for the Course Canvas project demo. Award photo or announcement link to be added.</p></div></section></Reveal>}
  <CaseSection id="reflection" number="05" label="LOOKING BACK, LOOKING AHEAD" title="What I’m taking with me."><p>{project.reflection}</p>{project.live ? <a className="button button-dark" href={project.live} target="_blank" rel="noopener noreferrer">Visit the {project.slug==='our-neighborhood-mission'?'website':'live demo'} <ArrowUpRight size={16}/></a> : <p className="content-note">Live project link to be added.</p>}</CaseSection>
  <Link className="next-project" href={`/work/${next.slug}`}><div><p className="eyebrow">UP NEXT / KEEP EXPLORING</p><h2>{next.title}</h2></div><ArrowUpRight size={38} strokeWidth={1}/></Link></div></main>;
}
function CaseSection({id,number,label,title,children}:{id:string;number:string;label:string;title:string;children:React.ReactNode}) { return <section id={id} className="case-section"><Reveal><p className="eyebrow">{number} / {label}</p><h2>{title}</h2></Reveal><Reveal className="case-prose">{children}</Reveal></section>; }
