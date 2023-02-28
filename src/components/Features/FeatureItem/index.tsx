import { FC } from "react";
import clsx from "clsx";
import { type Random } from "unsplash-js/dist/methods/photos/types";
import ChevronRight from "icons/ChevronRight";
import "./styles.scss";

export type FeatureItemProps = {
  className?: string;
  data: Random;
  index: number;
};

const FeatureItem: FC<FeatureItemProps> = ({ data, className, index }) => {
  const { urls } = data;
  return (
    <div className={clsx(`features-item-${index + 1}`, className)}>
      <a
        href={urls.full}
        className="block h-full"
        target="_blank"
        rel="noreferrer"
      >
        <article className="feature">
          {index === 0 && (
            <div className="feature-info">
              <h2>Shared workspaces</h2>
              <p>
                Seamless access and real-time data and analytics transform your
                spaces into secure and streamlined resources.
              </p>
            </div>
          )}
          <h3 className="feature-title">{data.description}</h3>
          <div className="feature-content">
            <figure className="feature-figure">
              <div
                className="feature-media"
                style={{
                  backgroundImage: `url(${data.urls.thumb})`,
                }}
              />
            </figure>
            <div className="feature-backdrop"></div>
            <div className="feature-arrow">
              <ChevronRight />
            </div>
          </div>
        </article>
      </a>
    </div>
  );
};

export default FeatureItem;
