type TechProps = {
    url: string,
    alt: string,
    color: string,
    tech: string,
}

export const TechCards = ({ url, alt, color, tech }: TechProps ) => {
  return (
    <div className="flex space-x-2 bg-slate-700 px-4 py-2 rounded-3xl ">
      <img 
        src={url} 
        alt={alt}
        style={{ color: color }} />
      <span className="font-Maven">{tech}</span>
    </div>
  );
};