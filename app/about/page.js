import Footer from "../components/Footer";
import HeroAbout from "../components/HeroAbout";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "About Us | Prestigieux Mediatech",
  description: "Learn about our digital marketing company in Navi Mumbai.",
};




export default function About() {
  return (
    <>
      <Navbar />
      <HeroAbout />

      <Footer />
    </>
  );
}

