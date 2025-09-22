import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Features from "../components/Features";
import CallToAction1 from "../components/CallToAction1";
import HomeProduct from "../features/Products/HomeProduct";
import CallToAction2 from "../components/CallToAction2";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="xl:mx-16">
      <Header />
      <main className="pt-[6rem] pb-[1rem]">
        <div className="banner-section ">
          <Banner
            title="Festive Deals on Electronics"
            subtitle="Gadgets You Can’t Miss!"
            fromColor="#6604bb"
            toColor="#e887ee"
            image="./banner-image-1.png"
            imageClass="absolute right-0 top-[-60px] w-[620px]"
          />
        </div>

        <div className="categories-section">
          <Categories />
        </div>

        <div className="features-section">
          <Features />
        </div>

        <div className="cta1-section">
          <CallToAction1 />
        </div>

        <div className="homeproduct-section">
          <HomeProduct />
        </div>

        <div className="cta2-section">
          <CallToAction2 />
        </div>

        <div className="benefits-section">
          <Benefits />
        </div>

        <div className="border footer-border"></div>
        <Footer />
      </main>
    </div>
  );
}

export default Home;
