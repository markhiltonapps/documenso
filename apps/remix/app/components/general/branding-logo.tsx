import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

/**
 * Neato_Sign wordmark.
 *
 * The letters use `currentColor` so the mark inherits the surrounding text
 * colour and stays legible in both light and dark themes. The atom is always
 * teal and the underscore is always burnt orange — per the Neato Ventures
 * brand guidelines, the orange underscore is fixed and never takes the text
 * colour.
 */
export const BrandingLogo = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2248 320" {...props}>
      <title>Neato_Sign</title>

      {/* three-ring atom, teal nucleus */}
      <g
        transform="translate(160 160)"
        fill="none"
        stroke="#45C4C2"
        strokeWidth="14"
      >
        <ellipse rx="150" ry="57" />
        <ellipse rx="150" ry="57" transform="rotate(60)" />
        <ellipse rx="150" ry="57" transform="rotate(120)" />
        <circle r="34" fill="#45C4C2" stroke="none" />
      </g>

      {/* wordmark - inherits text colour */}
        <path className="fill-current" d="M61 0V700H319L401 66H419V700H551V0H293L211 634H193V0Z" transform="translate(400.00 251.14) scale(0.26040 -0.26040)" />
        <path className="fill-current" d="M82 0V700H524V574H214V414H512V288H214V126H536V0Z" transform="translate(585.40 251.14) scale(0.26040 -0.26040)" />
        <path className="fill-current" d="M15 0 182 700H430L597 0H459L425 150H187L153 0ZM215 276H396L315 634H297Z" transform="translate(770.81 251.14) scale(0.26040 -0.26040)" />
        <path className="fill-current" d="M240 0V574H54V700H558V574H372V0Z" transform="translate(956.21 251.14) scale(0.26040 -0.26040)" />
        <path className="fill-current" d="M306 -14Q186 -14 117.0 59.5Q48 133 48 272V428Q48 563 117.0 638.5Q186 714 306 714Q426 714 495.0 638.5Q564 563 564 428V272Q564 133 495.0 59.5Q426 -14 306 -14ZM306 106Q378 106 405.0 150.0Q432 194 432 264V436Q432 480 419.0 516.0Q406 552 378.5 573.0Q351 594 306 594Q261 594 233.0 573.0Q205 552 192.5 516.0Q180 480 180 436V264Q180 194 207.0 150.0Q234 106 306 106Z" transform="translate(1141.62 251.14) scale(0.26040 -0.26040)" />
        <path className="fill-current" d="M316 -14Q224 -14 161.5 19.5Q99 53 67.5 111.0Q36 169 36 242V272H168V248Q168 185 205.0 147.5Q242 110 318 110Q378 110 407.0 136.0Q436 162 436 198Q436 221 425.0 240.5Q414 260 385.0 274.5Q356 289 302 298Q232 310 177.5 333.0Q123 356 91.5 397.5Q60 439 60 508V514Q60 571 90.0 616.5Q120 662 174.5 688.0Q229 714 302 714Q385 714 442.0 684.0Q499 654 528.5 604.5Q558 555 558 498V462H426V486Q426 528 393.5 559.0Q361 590 302 590Q253 590 223.5 569.5Q194 549 194 514Q194 478 225.5 456.0Q257 434 344 418Q454 399 512.0 351.5Q570 304 570 212V200Q570 103 502.0 44.5Q434 -14 316 -14Z" transform="translate(1512.42 251.14) scale(0.26040 -0.26040)" />
        <path className="fill-current" d="M72 0V126H240V574H72V700H540V574H372V126H540V0Z" transform="translate(1697.83 251.14) scale(0.26040 -0.26040)" />
        <path className="fill-current" d="M274 -14Q210 -14 158.0 17.5Q106 49 75.0 112.0Q44 175 44 268V432Q44 523 77.5 586.0Q111 649 170.0 681.5Q229 714 306 714Q386 714 443.0 680.0Q500 646 530.0 588.5Q560 531 560 460V448H428V460Q428 523 395.5 555.5Q363 588 304 588Q249 588 212.5 551.0Q176 514 176 422V274Q176 112 308 112Q367 112 397.5 144.0Q428 176 428 228H260V354H560V0H440V78H422Q410 39 376.0 12.5Q342 -14 274 -14Z" transform="translate(1883.23 251.14) scale(0.26040 -0.26040)" />
        <path className="fill-current" d="M61 0V700H319L401 66H419V700H551V0H293L211 634H193V0Z" transform="translate(2068.64 251.14) scale(0.26040 -0.26040)" />

      {/* underscore - always burnt orange */}
        <path className="fill-[#F75A33]" d="M61 -162V-48H551V-162Z" transform="translate(1327.02 251.14) scale(0.26040 -0.26040)" />
    </svg>
  );
};
