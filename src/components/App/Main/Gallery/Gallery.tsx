import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import RAD_logo from "../../../../assets/images/RAD_logo.jpg"
import "swiper/css";
import "swiper/css/navigation";
import "./Gallery.css";

const IMAGES = [
  {image: RAD_logo, id: 1},
  {image: RAD_logo, id: 2},
];

function Gallery() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

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
          // кастомные стрелки
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        spaceBetween={0}
      >
          {IMAGES.map((picture) => (
          <SwiperSlide key={picture.id}>
            <img className="slide-img" src={picture.image} alt="gallery" />
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
