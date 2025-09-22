import Header from "../components/Header";
import Banner from "../components/Banner";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="xl:mx-16">
      <Header />
      <main className="pt-[6rem] pb-[1rem]">
        <Banner
          title="Wear Today, Own Tomorrow"
          subtitle="Step Into Fashion!"
          fromColor="#8F4E04"
          toColor="#BD8305"
          image="./banner-image-3.png"
        />
        <AboutContent />
        <div className="border footer-border"></div>
        <Footer />
      </main>
    </div>
  );
}

export default About;
