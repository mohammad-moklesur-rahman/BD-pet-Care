import { Outlet } from "react-router";
import MyContainer from "../components/MyContainer";
import sponsorImg from "../assets/bg.png"

const DetailsLayout = () => {
  return (
    <MyContainer>
      <div className="grid md:grid-cols-12 md:gap-12">
        <div className="md:col-span-8">
          <Outlet />
        </div>
        <div className="md:col-span-4 pb-12 md:pb-0">
          <div className="flex justify-center">
            <div>
              <h2 className="md:mt-12 mb-8 text-[18px] text-center font-medium">sponsor or Others</h2>
              <figure>
                <img src={sponsorImg} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default DetailsLayout;
