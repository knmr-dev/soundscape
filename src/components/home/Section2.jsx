import ReactPlayer from "react-player";

export default function Section3() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-center justify-start py-20">
      <h2 className="text-5xl font-bold mb-4 text-fourth font-dela">
          WELCOME TO SOUNDSCAPE
      </h2>

      <div className="my-12 mx-32 grid grid-cols-2 gap-16">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-black mb-4 text-fifth">
            Feel the Pulse of Life with SoundScape’s Unforgettable Music Journey.
          </h2>
          <p className="text-lg text-justify text-white">
          SoundScape invites you to dive into a musical adventure
          where every beat and melody weaves a unique story. Explore
          our diverse rhythms and vibrant sounds, and let our music
          take you on a journey that resonates with passion and creativity.
          Join us and feel the rhythm of life.
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
  );
}
