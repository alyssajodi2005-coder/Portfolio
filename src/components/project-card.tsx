import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { ProjectVisual } from './project-visual';
import { Reveal } from './motion';
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <Reveal className={`project-card card-${index}`}><article><Link href={`/work/${project.slug}`} className="project-cover-link" aria-label={`Read ${project.title} case study`}><ProjectVisual project={project}/><span className="cover-arrow"><ArrowUpRight size={23}/></span></Link><div className="project-info"><div><p className="eyebrow">{project.category}</p><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><span className="project-number">0{index + 1}</span></div><div className="project-actions"><Link href={`/work/${project.slug}`}>View case study <ArrowUpRight size={15}/></Link>{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">{project.slug === 'our-neighborhood-mission' || project.slug === 'melanate' ? 'Live website' : 'Live demo'} <ArrowUpRight size={14}/></a>}</div></article></Reveal>;
}
