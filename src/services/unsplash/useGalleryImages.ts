import { useCallback, useEffect, useState } from "react";
import { unsplashAPI } from "services/unsplash";
import type { photos } from "unsplash-js/dist/internals";
import { Random } from "unsplash-js/dist/methods/photos/types";

type Props = photos.RandomParams | undefined;

function useGalleryImages(props: Props) {
  const { count = 3 } = props ?? {};

  const [galleryImages, setGalleryImages] = useState<Random[]>([]);

  const handleGetImages = useCallback(async () => {
    try {
      const { response: images } = await unsplashAPI.photos.getRandom({
        count,
      });

      if (Array.isArray(images)) {
        setGalleryImages(images);
      }
    } catch (error) {
      console.log(error);
    }
  }, [count]);

  useEffect(() => {
    handleGetImages();
  }, [handleGetImages]);

  return {
    galleryImages,
    handleGetImages,
  };
}

export default useGalleryImages;
