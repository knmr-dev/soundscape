import Header from "../components/Header";
import Meta from "../components/Meta";
import HeaderTitle from "../components/header/HeaderTitle";
import Breadcrumbs from "../components/breadcrumb/BreadCrumb";
import Footer from "../components/Footer";
import "antd/dist/reset.css";
import { Layout } from "antd";
import ReactPlayer from "react-player";
import { Carousel } from "antd";
import band1 from "../assets/band/band1.jpg";
import band2 from "../assets/band/band2.jpg";
import band3 from "../assets/band/band3.jpg";
import band4 from "../assets/band/band4.jpg";
import band5 from "../assets/band/band5.jpg";
import band6 from "../assets/band/band6.jpg";

const images = [band1, band2, band3, band4, band5, band6];

const { Content } = Layout;

export default function Media() {
  return (
    <div>
      <Header />
      <Meta title="Media" />
      <HeaderTitle
        title="MEDIA"
        description="Discover a range of entertainment options tailored to your
                event's needs and scale, from intimate acoustic performances to show-stopping
                acts and full bands. Our diverse setlist spans genres to engage all audiences,
                while our expertise ensures a seamless, memorable event."
      />
      <Breadcrumbs active="Media" />

      <Content className="flex-grow">
        <div className="relative">
          <div className="h-full pt-20 px-32 bg-white text-center">
            <h2 className="text-5xl font-bold mb-6 text-fourth font-dela">
              FOLLOW US ON SOCIAL MEDIA
            </h2>
            <p>
              Stay connected with SoundScape by following us on our social media
              platforms. Get the latest updates, behind-the-scenes content, and
              interact with us directly. Join our online community and be part
              of the conversation!
            </p>
          </div>

          <div className="h-auto flex flex-col items-center justify-center text-center p-4 pb-20">
            <div className="w-full h-80">
              <Carousel autoplay slidesToShow={4} className="w-full h-80">
                {images.map((src, index) => (
                  <div key={index} className="p-2 h-80">
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="h-[80vh] bg-primary flex flex-col items-center justify-start py-20">
          <h2 className="text-5xl font-bold mb-4 text-fourth font-dela">
            WATCH OUR VIDEOS
          </h2>

          <div className="my-12 mx-32 grid grid-cols-2 gap-16">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl font-black mb-4 text-fifth">
                Catch the Beat: Experience the Magic of Our Unforgettable Live Performances
              </h2>
              <p className="text-lg text-justify text-white">
                Immerse in SoundScape&apos;s electrifying performances and exclusive behind the scenes moments.
                Experience our passion and artistry through captivating videos that showcase the energy and
                creativity we bring to every event. Discover the magic of SoundScape and see why our
                performances are truly unforgettable. Dive into our world of music and excitement!
              </p>
            </div>
            <div className="h-80">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=j18Jga0OIR8&list=RDGMEMJQXQAmqrnmK1SEjY_rKBGAVMj18Jga0OIR8&start_radio=1"
                width="100%"
                height="100%"
                playing={true}
                controls={false}
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-full pt-20 px-32 bg-white text-center">
            <h2 className="text-5xl font-bold mb-6 text-fourth font-dela">
              LISTEN TO OUR AUDIO
            </h2>
            <p>
              Dive into SoundScape&apos;s audio collection featuring dynamic live
              performances and studio recordings. Enjoy the vibrant energy and artistry
              that define our music, and get a taste of our electrifying sound
              through these captivating tracks.
            </p>
          </div>

          <div className="h-auto flex flex-col items-center justify-center text-center p-4 pb-20">
            <div className="w-full h-80">
              <Carousel autoplay slidesToShow={4} className="w-full h-80">
                {images.map((src, index) => (
                  <div key={index} className="p-2 h-80">
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </Content>

      <Footer />
    </div>
  );
}
