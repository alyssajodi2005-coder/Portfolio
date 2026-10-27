import { ArrowUpRight, Quote } from 'lucide-react';
import { melanateRecognition as recognition } from '@/data/projects';
import { Reveal } from './motion';
import { Gallery } from './gallery';

export function MelanateRecognition() {
  return (
    <>
      <Reveal>
        <section id="recognition" className="recognition melanate-feature" aria-labelledby="feature-title">
          <div>
            <p className="eyebrow">SEPTEMBER 2026 · NONPROFIT TECH PROJECT HIGHLIGHT</p>
            <h2 id="feature-title">Featured by <em>Develop for Good</em></h2>
            <p>{recognition.description}</p>
            <p className="feature-context">The feature recognizes our project team and lists me among its designers. This is recognition of our shared work.</p>
            <div className="recognition-links">
              <a className="text-link" href={recognition.feature} target="_blank" rel="noopener noreferrer">Read the Develop for Good Feature <ArrowUpRight size={16}/></a>
              <a className="text-link" href={recognition.caseStudy} target="_blank" rel="noopener noreferrer">View the Official Project Case Study <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>
      </Reveal>
      <Gallery items={[{title:'Develop for Good feature', description:'Screenshot of the September 2026 Nonprofit Tech Project Highlight to be added.', alt:'Original Develop for Good newsletter feature screenshot pending'}]}/>
      <Reveal>
        <section className="client-testimonial" aria-labelledby="testimonial-title">
          <p className="eyebrow" id="testimonial-title">CLIENT TESTIMONIAL · RECOGNIZING THE WHOLE TEAM</p>
          <Quote size={32} strokeWidth={1} aria-hidden="true"/>
          <figure>
            <blockquote><p>“{recognition.quote}”</p></blockquote>
            <figcaption>— {recognition.client}<span>{recognition.clientTitle}</span></figcaption>
          </figure>
          <p className="testimonial-context">Josie’s testimonial describes the entire Develop for Good team’s work with Melanate.</p>
          <a className="text-link" href={recognition.article} target="_blank" rel="noopener noreferrer">Read the original testimonial <ArrowUpRight size={16}/></a>
        </section>
      </Reveal>
      <Reveal>
        <details className="project-team">
          <summary>Project Team <span>Develop for Good × Melanate</span></summary>
          <p className="team-intro">I contributed as a designer and Sankofa subsite lead alongside the team below.</p>
          <dl>{recognition.team.map(group=><div key={group.role}><dt>{group.role}</dt><dd>{group.names.map(name=><span key={name}>{name === 'Alyssa Johnson' ? <><strong>{name}</strong><small>Designer · Sankofa Subsite Lead</small></> : name}</span>)}</dd></div>)}</dl>
        </details>
      </Reveal>
    </>
  );
}
