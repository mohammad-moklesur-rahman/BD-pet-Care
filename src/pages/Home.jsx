import { Suspense, useRef } from "react";
import ContentSwiper from "../components/ContentSwiper";
import ScrollDown from "../components/ScrollDown";
import ServicesCard from "../components/ServicesCard";
import Loading from "../components/Loading";
import CareTips from "../components/CareTips";
import MeetExperts from "../components/MeetExperts";
import ServicesImg from "../components/ServicesImg";

const Home = () => {
  const targetRef = useRef(null);
  return (
    <>
      <section className="bgImg">
        <ContentSwiper />
        <ScrollDown scrollToRef={targetRef} />
      </section>

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
    </>
  );
};

export default Home;
