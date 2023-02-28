import useGalleryImages from "services/unsplash/useGalleryImages";
import Features from "components/Features";
const { Item: FeatureItem } = Features;

function App() {
  const { galleryImages } = useGalleryImages({ count: 7 });

  return (
    <main className="app">
      <div className="container">
        <div className="h-full-screen">
          <Features
            className="h-full"
            header="Connect people & spaces"
            footer={<button className="btn">Button</button>}
          >
            {galleryImages.map((image, index) => (
              <FeatureItem index={index} key={image.id} data={image} />
            ))}
          </Features>
        </div>
      </div>
    </main>
  );
}

export default App;
