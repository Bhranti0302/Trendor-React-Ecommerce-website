import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import ContactContent from "../components/ContactContent";

function Contact() {
  return (
    <div className="xl:mx-16">
      <Header />
      <main className="pt-[6rem] pb-[1rem]">
        <Banner
          title="Wear Today, Own Tomorrow"
          subtitle="Step Into Fashion!"
          fromColor="#0CD376"
          toColor="#066D3D"
          image="./banner-image-4.png"
        />
        <ContactContent />
        <div className="border footer-border"></div>
        <Footer />
      </main>
    </div>
  );
}

export default Contact;
