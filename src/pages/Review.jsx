import Header from "../components/Header";
import Meta from "../components/Meta";
import HeaderTitle from "../components/header/HeaderTitle";
import Breadcrumbs from "../components/breadcrumb/BreadCrumb";
import Footer from "../components/Footer";
import Testimonials from "../components/review/testimonials";



export default function Review() {
    return (
        <>
            <Header />
            <Meta title="Review" />
            <HeaderTitle 
                title="REVIEWS"
                description="Our fans love the energy and creativity of SoundScape.
                From electrifying performances to unforgettable melodies, see what
                others have to say about their experience with our music. Check out
                the reviews and feel the impact of our unique sound for yourself!"
            />
            <Breadcrumbs active="Review" />
            <Testimonials/>
            <Footer />
        </>
    );
}
