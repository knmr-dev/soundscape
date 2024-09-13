import { Card, Avatar, Rate } from 'antd';
import Slider from 'react-slick';
import 'antd/dist/reset.css'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const testimonials = [
    {
        name: "John Doe",
        position: "Event Organizer",
        avatar: "https://i.pravatar.cc/150?img=1",
        review: "SoundScape made our event unforgettable! Their music brought energy and excitement to the atmosphere, and our guests couldn’t stop dancing.",
        rating: 5
    },
    {
        name: "Jane Smith",
        position: "Music Director",
        avatar: "https://i.pravatar.cc/150?img=2",
        review: "The talent and creativity of SoundScape are unmatched. Every performance is unique, and their ability to engage the audience is incredible.",
        rating: 4
    },
    {
        name: "Alice Johnson",
        position: "Festival Coordinator",
        avatar: "https://i.pravatar.cc/150?img=3",
        review: "We were blown away by SoundScape’s performance. They transformed our celebration into an extraordinary experience with their captivating melodies.",
        rating: 5
    }
];


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};


export default function Testimonials() {
  return (
    <div className="h-full py-20 px-32 bg-white text-center">
      <h2 className="text-5xl font-bold mb-6 text-fourth font-dela">
        TESTIMONIALS
      </h2>
      <p>
        Don’t just take our word for it—hear from those who have experienced
        SoundScape firsthand. Our listeners share their personal stories of how
        our music has moved them, inspired them, and created lasting memories.
        Explore the testimonials and see the difference SoundScape makes.
      </p>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="py-12 p-2">
            <Card className="w-full h-64 bg-gradient-to-r from-primary to-fourth text-left">
              <Card.Meta
                avatar={<Avatar src={item.avatar} size={100} />}
                title={
                  <>
                    <h3 className="text-xl font-black">{item.name}</h3>
                    <p className="text-white text-sm font-light">
                      {item.position}
                    </p>
                  </>
                }
                description={
                  <>
                    <p className="text-md font-semibold my-4">{item.review}</p>
                    <div className="flex items-center">
                      <Rate disabled defaultValue={item.rating} />
                    </div>
                  </>
                }
              />
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}