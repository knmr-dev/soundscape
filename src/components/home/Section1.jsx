import { Carousel } from "antd";
import slider1 from "../../assets/band/band1.jpg";
import slider2 from "../../assets/band/band2.jpg";
import slider3 from "../../assets/band/band3.jpg";


export default function Section1() {
    const carouselContent = [
        {
          image: slider1,
          title: "WELCOME TO SOUNDSCAPE",
          text: "FROM INTIMATE PERFORMANCES TO LARGE CONCERTS, JOIN US ON A MUSICAL JOURNEY.",
        },
        {
          image: slider2,
          title: "JOIN OUR JOURNEY",
          text: "FROM INTIMATE PERFORMANCES TO LARGE CONCERTS.",
        },
        {
          image: slider3,
          title: "CONNECT WITH US",
          text: "STAY CONNECTED WITH SOUNDSCAPE. JOIN US!",
        },
      ];
    return (
        <div className="h-full">
        <Carousel autoplay autoplaySpeed={3000} className="h-full">
          {carouselContent.map((slide, index) => (
            <div key={index} className="relative h-[90vh] w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
                <h1 className="font-dela text-6xl font-black text-fourth">
                  {slide.title}
                </h1>
                <p className="mt-2 font-shadows text-3xl text-white">
                  {slide.text}
                </p>

              </div>
            </div>
          ))}
        </Carousel>
      </div>
        
    );
}