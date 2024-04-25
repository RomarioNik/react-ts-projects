import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { type List } from "./data";

type SlickCarouselProps = {
  data: List[];
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  //   slidesToShow: 2,
  slidesToScroll: 1,
  // fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

export const SlickCarousel = ({ data }: SlickCarouselProps) => {
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {data.map((item) => (
          <article key={item.id}>
            <img src={item.image} alt={item.name} className="person-img" />
            <h5 className="name">{item.name}</h5>
            <p className="title">{item.title}</p>
            <p className="text">{item.quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        ))}
      </Slider>
    </section>
  );
};
