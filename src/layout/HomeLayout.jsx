import { Suspense, useRef } from "react";
import ContentSwiper from "../components/ContentSwiper";
import Navbar from "../components/Navbar";
import ScrollDown from "../components/ScrollDown";
import ServicesCard from "../components/ServicesCard";
import Loading from "../components/Loading";
import CareTips from "../components/CareTips";
import MeetExperts from "../components/MeetExperts";
import Footer from "../components/Footer";
import ServicesImg from "../components/ServicesImg";

const HomeLayout = () => {
  const targetRef = useRef(null);
  return (
    <>
      <div className="bgImg">
        <header>
          <Navbar />
        </header>
        <section>
          <ContentSwiper />
          <ScrollDown scrollToRef={targetRef} />
        </section>
      </div>
      <main>
        <section ref={targetRef} className="bg-gray-300 py-8">
          <Suspense fallback={<Loading />}>
            <ServicesCard />
          </Suspense>
        </section>
        <section>
          <CareTips />
        </section>
        <section className="bg-gray-300 pb-12 pt-8">
          <MeetExperts />
        </section>
        <section className="bg-gray-100 pb-12 pt-8">
          <ServicesImg />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomeLayout;
