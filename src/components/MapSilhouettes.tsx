/**
 * Inline SVG silhouette maps for the three research axes.
 * - Hauts-de-France (rose/pink #E85D75)
 * - France (orange #E8913D)
 * - Europe (yellow/gold #E8C33D)
 */

export function MapHautsDeFrance({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 350"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hauts-de-France"
    >
      <path
        d="M150 20 L165 25 L178 22 L195 30 L210 28 L225 35 L240 50 L252 42 L260 55 L255 70 L265 85 L270 105 L260 120 L255 140 L245 155 L250 170 L240 185 L225 195 L210 210 L200 225 L185 240 L170 250 L155 258 L140 262 L125 255 L110 245 L95 238 L80 225 L68 210 L58 195 L50 175 L45 155 L42 135 L40 115 L45 95 L52 78 L60 62 L72 48 L85 38 L100 30 L115 24 L130 20 Z"
        fill="#E85D75"
        opacity="0.9"
      />
      {/* Subtle inner detail lines suggesting departments */}
      <path
        d="M130 80 L170 85 M100 130 L200 125 M90 180 L210 175"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        opacity="0.25"
      />
      {/* Lille marker */}
      <circle cx="175" cy="65" r="5" fill="white" opacity="0.6" />
      <circle cx="175" cy="65" r="2.5" fill="#E85D75" />
    </svg>
  );
}

export function MapFrance({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 350"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="France"
    >
      <path
        d="M145 15 L160 18 L175 15 L192 22 L210 20 L225 28 L235 22 L248 30 L255 45 L250 60 L258 72 L265 90 L270 110 L272 130 L268 150 L260 168 L255 185 L250 200 L240 218 L235 232 L230 245 L222 258 L210 268 L198 275 L190 285 L178 295 L165 305 L152 310 L140 308 L128 300 L115 290 L105 278 L92 268 L80 255 L70 242 L62 228 L55 212 L48 195 L42 178 L38 160 L35 142 L33 125 L35 108 L40 92 L48 78 L55 65 L65 52 L78 42 L90 35 L105 28 L118 22 L132 18 Z"
        fill="#E8913D"
        opacity="0.9"
      />
      {/* Corsica */}
      <path
        d="M248 275 L255 268 L260 275 L262 290 L258 300 L252 305 L248 298 L246 285 Z"
        fill="#E8913D"
        opacity="0.9"
      />
      {/* Subtle inner lines */}
      <path
        d="M100 100 L200 95 M80 160 L220 155 M90 220 L200 215"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        opacity="0.2"
      />
      {/* Paris marker */}
      <circle cx="158" cy="105" r="5" fill="white" opacity="0.6" />
      <circle cx="158" cy="105" r="2.5" fill="#E8913D" />
    </svg>
  );
}

export function MapEurope({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 350"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Europe"
    >
      {/* Iberian Peninsula */}
      <path
        d="M60 195 L75 185 L95 182 L110 188 L115 200 L118 215 L112 230 L105 242 L95 250 L80 252 L65 248 L55 238 L50 225 L52 210 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* France */}
      <path
        d="M115 150 L130 145 L145 148 L155 155 L160 168 L155 182 L148 192 L135 195 L120 192 L112 182 L110 168 L112 158 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* UK & Ireland */}
      <path
        d="M90 105 L100 98 L112 100 L118 110 L115 122 L108 130 L98 132 L88 128 L85 118 L86 110 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      <path
        d="M72 108 L80 105 L85 112 L82 122 L75 125 L70 118 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* Italy */}
      <path
        d="M165 175 L175 170 L182 178 L185 192 L188 208 L185 222 L180 235 L172 242 L165 238 L162 225 L160 210 L158 195 L160 182 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* Sicily & Sardinia */}
      <path
        d="M170 248 L180 245 L185 252 L178 258 L170 255 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      <path
        d="M148 218 L155 215 L158 225 L152 232 L148 225 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* Germany / Benelux / Central Europe */}
      <path
        d="M150 108 L165 102 L180 105 L195 110 L200 125 L198 142 L190 155 L178 162 L165 158 L155 148 L148 135 L145 120 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* Scandinavia */}
      <path
        d="M165 30 L175 25 L185 30 L190 45 L188 62 L185 78 L180 90 L172 98 L165 92 L160 78 L158 62 L160 45 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      <path
        d="M192 35 L200 28 L210 32 L215 48 L212 65 L208 80 L202 90 L195 85 L192 70 L190 52 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* Finland */}
      <path
        d="M220 28 L230 22 L240 28 L245 45 L242 62 L238 78 L232 88 L225 82 L220 68 L218 50 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* Poland / Baltic */}
      <path
        d="M205 105 L220 100 L235 105 L245 115 L248 130 L242 145 L232 152 L218 148 L208 138 L202 125 L200 115 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* Balkans / SE Europe */}
      <path
        d="M200 160 L215 155 L228 162 L235 175 L238 192 L232 208 L222 218 L210 222 L198 215 L192 200 L190 185 L195 172 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* Greece */}
      <path
        d="M218 225 L228 222 L235 232 L232 248 L225 258 L218 255 L215 242 L216 232 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* Romania / Bulgaria area */}
      <path
        d="M245 155 L260 150 L275 158 L280 172 L275 188 L265 195 L252 190 L245 178 L242 165 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* Baltic states */}
      <path
        d="M245 85 L255 80 L265 85 L268 98 L262 108 L252 110 L245 102 L243 92 Z"
        fill="#E8C33D"
        opacity="0.85"
      />
      {/* EU stars circle - subtle */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const cx = 200 + Math.cos(angle) * 145;
        const cy = 165 + Math.sin(angle) * 135;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="#E8C33D"
            opacity="0.3"
          />
        );
      })}
    </svg>
  );
}
