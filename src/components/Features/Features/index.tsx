import { type FC, type PropsWithChildren } from "react";
import clsx from "clsx";
import "./styles.scss";

export type FeaturesProps = {
  header: React.ReactNode;
  footer: React.ReactNode;
  className?: string;
};

const Features: FC<PropsWithChildren<FeaturesProps>> = ({
  children,
  className,
  header,
  footer,
  ...rest
}) => {
  return (
    <div {...rest} className={clsx("features features-grid", className)}>
      <header className="features-header">
        <h1>{header}</h1>
      </header>

      {children}

      <footer className="features-footer">{footer}</footer>
    </div>
  );
};

export default Features;
