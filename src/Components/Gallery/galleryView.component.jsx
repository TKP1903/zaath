import React from "react";
import { useSearchParams } from "react-router-dom";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import ReactPlayer from "react-player/lazy";

//Components
import ContactHero from "../Hero/contact.component";

const GalleryViewComponent = (props) => {
  const [galleryType] = useSearchParams();
  const type = galleryType.get("name");
  const searchValue = galleryType.get("value");
  const res = props.data.find((e) => {
    if (e.link === searchValue) {
      return e.all_links;
    }
    return "";
  });

  return (
    <>
      <div>
        <ContactHero
          title={res.title}
          header={res.header}
          image={res.cover_image}
        />
        <div className="lg:px-44 py-20">
          {type === "photo" ? (
            <Gallery>
              <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5"
                style={{}}
              >
                {res.all_links?.map((data) => (
                  <div>
                    <Item
                      original={data}
                      thumbnail={data}
                      width={2500}
                      height={2500}
                    >
                      {({ ref, open }) => (
                        <div className="shadow-2xl">
                          <img
                            ref={ref}
                            onClick={open}
                            src={data}
                            className="w-full h-full rounded-sm object-cover transform transition duration-700 hover:scale-110"
                          />
                        </div>
                      )}
                    </Item>
                  </div>
                ))}
              </div>
            </Gallery>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-6">
              {res.all_links.map((data) => (
                <div className="w-full lg:w-96 h-64 px-5 md:px-0 rounded-xl">
                  <ReactPlayer
                    url={`${data}`}
                    width={"100%"}
                    height={"100%"}
                    pip={true}
                    controls={true}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GalleryViewComponent;
