import Header from "../components/Header";
import Meta from "../components/Meta";
import HeaderTitle from "../components/header/HeaderTitle";
import Breadcrumbs from "../components/breadcrumb/BreadCrumb";
import Footer from "../components/Footer";
import 'antd/dist/reset.css'; 

export default function Service() {
    return (
        <>
            <Header />
            <Meta title="Services" />
            <HeaderTitle 
                title="SERVICES"
                description="Discover a range of entertainment options tailored to your
                event's needs and scale, from intimate acoustic performances to show-stopping
                acts and full bands. Our diverse setlist spans genres to engage all audiences,
                while our expertise ensures a seamless, memorable event."
            />
            <Breadcrumbs active="Services"/>
            
            <div className="h-screen py-8 px-32 bg-red-100">
                <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                <p>
                    Here you can describe additional details about your services, including specific entertainment options, pricing, or how to book your services.
                </p>
            </div>

            <Footer />
        </>
    );
}
