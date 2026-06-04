import { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TiltCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export default function TiltCard({ icon: Icon, title, description, href, className = "" }: TiltCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);

  const card = (
    <div
      className={`relative ${href ? "cursor-pointer" : ""} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px'
      }}
    >
      <div
        className="w-full h-full bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-border rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-transform duration-500 ease-out hover:shadow-xl"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    href ? (
      isExternal ? (
        <a href={href} target="_blank" rel="noreferrer" className="block">
          {card}
        </a>
      ) : (
        <Link to={href} className="block">
          {card}
        </Link>
      )
    ) : (
      card
    )
  );
}
