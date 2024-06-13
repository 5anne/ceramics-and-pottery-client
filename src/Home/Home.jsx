import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Footer from "../Shared/Footer";
import ItemSection from "./ItemSection";
import CategorySection from "./CategorySection/CategorySection";
import FAQ from "./FAQ";
import Discount from "./Discount";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Clay Pot || Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <ItemSection></ItemSection>
            <CategorySection></CategorySection>
            <Discount></Discount>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;