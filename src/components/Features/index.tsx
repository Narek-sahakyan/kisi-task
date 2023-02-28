import InternalFeatures, { type FeaturesProps } from "./Features";
import Item, { type FeatureItemProps } from "./FeatureItem";

type InternalFeaturesType = typeof InternalFeatures;

type FeatureComponent = InternalFeaturesType & {
  Item: typeof Item;
};

const Features = InternalFeatures as FeatureComponent;

Features.Item = Item;

export type { FeaturesProps, FeatureItemProps };

export default Features;
