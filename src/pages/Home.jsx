import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import { Layout, Card } from "antd";

const { Content } = Layout;

export default function Home() {
  return (
    <Layout className="min-h-screen flex flex-col">
      <Header />
      <Meta title="Home" />
      <Content className="flex-grow">
        <div className="relative">
          <Section1 />
          <Section2 />
          <Section3 />
          <div className="h-[100vh] bg-primary flex flex-col items-center justify-start py-20">
            <h2 className="text-5xl font-bold mb-4 text-fourth font-dela">
              TAILORED TO YOU
            </h2>
            <span className="mb-12 text-white font-fifth text-lg mx-4 md:mx-16 lg:mx-64">
              Immerse yourself in distinctive rhythms and captivating
              soundscapes that set us apart.
            </span>
            <div className="grid grid-cols-3 w-full h-auto px-20 gap-8 ">
              <div className="rounded-xl border-solid border-2 p-8  bg-gradient-to-t from-primary to-fourth text-left">
                <div className="flex items-start justify-between">
                  <span className="font-black text-2xl">
                    6-10 PIECE SHOW BAND
                  </span>
                </div>
                <span className="text-justify text-white">
                  Experience the full energy of our 6 to 10-piece show band,
                  featuring 2 singers, drums, bass, guitar, and keys, adding
                  horns, percussion, and additional singers for a lively and
                  unforgettable event atmosphere.
                </span>
              </div>
              <div className="rounded-xl border-solid border-2 p-8  bg-gradient-to-t from-primary to-fourth text-left">
                <div className="flex items-start justify-between">
                  <span className="font-black text-2xl">
                    6-10 PIECE SHOW BAND
                  </span>
                </div>
                <span className="text-justify text-white">
                  Experience the full energy of our 6 to 10-piece show band,
                  featuring 2 singers, drums, bass, guitar, and keys, adding
                  horns, percussion, and additional singers for a lively and
                  unforgettable event atmosphere.
                </span>
              </div>
              <div className="rounded-xl border-solid border-2 p-8  bg-gradient-to-t from-primary to-fourth text-left">
                <div className="flex items-start justify-between">
                  <span className="font-black text-2xl">
                    6-10 PIECE SHOW BAND
                  </span>
                </div>
                <span className="text-justify text-white">
                  Experience the full energy of our 6 to 10-piece show band,
                  featuring 2 singers, drums, bass, guitar, and keys, adding
                  horns, percussion, and additional singers for a lively and
                  unforgettable event atmosphere.
                </span>
              </div>
              <div className="rounded-xl border-solid border-2 p-8  bg-gradient-to-t from-primary to-fourth text-left">
                <div className="flex items-start justify-between">
                  <span className="font-black text-2xl">
                    6-10 PIECE SHOW BAND
                  </span>
                </div>
                <span className="text-justify text-white">
                  Experience the full energy of our 6 to 10-piece show band,
                  featuring 2 singers, drums, bass, guitar, and keys, adding
                  horns, percussion, and additional singers for a lively and
                  unforgettable event atmosphere.
                </span>
              </div>
              <div className="rounded-xl border-solid border-2 p-8  bg-gradient-to-t from-primary to-fourth text-left">
                <div className="flex items-start justify-between">
                  <span className="font-black text-2xl">
                    6-10 PIECE SHOW BAND
                  </span>
                </div>
                <span className="text-justify text-white">
                  Experience the full energy of our 6 to 10-piece show band,
                  featuring 2 singers, drums, bass, guitar, and keys, adding
                  horns, percussion, and additional singers for a lively and
                  unforgettable event atmosphere.
                </span>
              </div>
              <div className="rounded-xl border-solid border-2 p-8  bg-gradient-to-t from-primary to-fourth text-left">
                <div className="flex items-start justify-between">
                  <span className="font-black text-2xl">
                    6-10 PIECE SHOW BAND
                  </span>
                </div>
                <span className="text-justify text-white">
                  Experience the full energy of our 6 to 10-piece show band,
                  featuring 2 singers, drums, bass, guitar, and keys, adding
                  horns, percussion, and additional singers for a lively and
                  unforgettable event atmosphere.
                </span>
              </div>
            </div>
          </div>
          <div className="h-screen flex items-center justify-center">
            <Card
              title="Section 5"
              bordered={false}
              className="w-full max-w-md"
            >
              <p>This is the content for Section 4.</p>
            </Card>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
