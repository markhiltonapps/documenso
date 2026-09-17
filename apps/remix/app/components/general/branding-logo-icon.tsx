import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

/**
 * Neato_Sign icon — the three-ring atom with a teal nucleus.
 *
 * The atom is always teal per the Neato Ventures brand guidelines, so it reads
 * the same on light and dark surfaces.
 */
export const BrandingLogoIcon = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 84" {...props}>
      <title>Neato_Sign</title>
      <g transform="translate(42 42)" fill="none" stroke="#45C4C2" strokeWidth="3.5">
        <ellipse rx="38" ry="14.5" />
        <ellipse rx="38" ry="14.5" transform="rotate(60)" />
        <ellipse rx="38" ry="14.5" transform="rotate(120)" />
        <circle r="8.8" fill="#45C4C2" stroke="none" />
      </g>
    </svg>
  );
};
