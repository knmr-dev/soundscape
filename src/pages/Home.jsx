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
          <Section1/>
          <Section2/>
          <Section3/>
          <div className="h-screen flex items-center justify-center bg-fourth">
            <Card
              title="Section 4"
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
