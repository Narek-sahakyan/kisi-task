import { ComponentType, CSSProperties } from "react";

type Props = {
  className?: string;
  style?: CSSProperties;
  svgProps?: React.SVGProps<any>;
  onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

export default function withIcon(
  Child: ComponentType<React.SVGProps<SVGElement>>
) {
  return function Icon({ className = "", svgProps, ...rest }: Props) {
    return (
      <span {...rest} className={`flex ${className}`}>
        <Child
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 12 12"
          {...svgProps}
        />
      </span>
    );
  };
}
