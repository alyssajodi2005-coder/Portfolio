'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ImageIcon, X, ArrowUpRight } from 'lucide-react';
export type GalleryItem = { title: string; description: string; src?: string; alt: string };
export function Gallery({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { if(selected) dialog.current?.showModal(); }, [selected]);
  return <><div className="gallery">{items.map((item,i)=><div className={`gallery-item gallery-item-${i}`} key={item.title}>{item.src ? <button className="gallery-image-button" onClick={()=>setSelected(item)} aria-label={`Enlarge ${item.title}`}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 50vw"/><span className="gallery-enlarge"><ArrowUpRight size={22}/></span></button> : <div className="image-placeholder"><ImageIcon size={28} strokeWidth={1}/><span>ORIGINAL IMAGE TO BE ADDED</span><h4>{item.title}</h4><p>{item.description}</p></div>}<p className="gallery-caption"><span>0{i+1}</span> {item.title}</p></div>)}</div><dialog ref={dialog} className="image-dialog" onClose={()=>setSelected(null)} onClick={e=>{if(e.target===e.currentTarget) dialog.current?.close();}}><button className="dialog-close" aria-label="Close enlarged image" onClick={()=>dialog.current?.close()}><X/></button>{selected?.src && <Image src={selected.src} alt={selected.alt} width={1600} height={1000} className="enlarged-image"/>}<p>{selected?.title}</p></dialog></>;
}
