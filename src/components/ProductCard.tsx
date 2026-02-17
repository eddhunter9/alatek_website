import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  icon: LucideIcon;
  points: [string, string, string];
  accentColor?: string;
  image?: string;
}

const ProductCard = ({ title, icon: Icon, points, accentColor = "hsl(var(--primary))", image }: ProductCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow)/0.1)] flex flex-col ${expanded ? 'min-h-[410px]' : 'min-h-[250px]'}`}>
      {image && (
        <div className="w-full h-32 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
      <div className="mb-4 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${accentColor}20` }}>
        <Icon size={24} style={{ color: accentColor }} />
      </div>
      <h3 className="text-xl font-semibold font-['Rajdhani'] mb-3 text-foreground">{title}</h3>

      <ul className="space-y-2 text-sm text-muted-foreground flex-1">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accentColor }} />
          {points[0]}
        </li>
        {expanded && (
          <>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accentColor }} />
              {points[1]}
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accentColor }} />
              {points[2]}
            </li>
          </>
        )}
      </ul>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
      >
        {expanded ? "Show less" : "Show more"}
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      </div>
    </div>
  );
};

export default ProductCard;
