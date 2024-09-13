import { Carousel } from 'antd';
import band1 from '../../assets/band/band1.jpg';
import band2 from '../../assets/band/band2.jpg';
import band3 from '../../assets/band/band3.jpg';
import band4 from '../../assets/band/band4.jpg';
import band5 from '../../assets/band/band5.jpg';
import band6 from '../../assets/band/band6.jpg';

const images = [
    band1,
    band2,
    band3,
    band4,
    band5,
    band6
];

export default function Section3() {
    return (
        <div className="h-auto flex flex-col items-center justify-center text-center p-4 my-16">
            <div className="flex flex-col mb-8">
                <h2 className="text-5xl font-dela font-bold text-fourth mb-8">
                    EXPERIENCE UNIQUE BEATS
                </h2>
                <span className="font-fifth text-lg font-semibold mx-4 md:mx-16 lg:mx-64">
                    Immerse yourself in distinctive rhythms and captivating soundscapes that set us apart.
                </span>
            </div>
            <div className="w-full h-80">
                <Carousel
                    autoplay
                    slidesToShow={4}
                    className="w-full h-80"
                >
                    {images.map((src, index) => (
                        <div key={index} className="p-2 h-80">
                            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
