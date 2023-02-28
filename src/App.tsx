import useGalleryImages from "services/unsplash/useGalleryImages";
import Features from "components/Features";
const { Item: FeatureItem } = Features;

function App() {
  const { galleryImages } = useGalleryImages({ count: 7 });

  return (
    <main className="app">
      <div className="container">
        <div className="main-content h-full-screen">
          <Features
            className="h-full"
            header="Connect people & spaces"
            footer={<button className="btn">Button</button>}
          >
            {galleryImages.map((image, index) => (
              <FeatureItem
                index={index}
                key={image.id}
                data={image}
                showInfo={index === 0}
              />
            ))}
          </Features>
        </div>
      </div>
    </main>
  );
}

export default App;
