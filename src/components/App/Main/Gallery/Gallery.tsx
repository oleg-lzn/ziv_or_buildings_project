import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import images_for_gallery from "../../../../utils/images_for_gallery.ts";
import type { Image } from '../../../../components/types/types.ts'
import "swiper/css";
import "swiper/css/navigation";
import "./Gallery.css";

function Gallery() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="hero-gallery">
      <button ref={prevRef} className="nav-btn prev" aria-label="Prev">
        ‹
      </button>

      <Swiper
        modules={[Navigation, Keyboard, Autoplay]}
        slidesPerView={1}
        loop
        keyboard={{ enabled: true }}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        spaceBetween={0}
      >
          {images_for_gallery.map(( { image, id, alt }: Image ) => (
          <SwiperSlide key={id}>
            <img className="slide-img" src={image} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button ref={nextRef} className="nav-btn next" aria-label="Next">
        ›
      </button>
    </div>
  );
}

export default Gallery;
