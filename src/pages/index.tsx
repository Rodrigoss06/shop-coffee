import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import coffeeMenu from "@/data/coffeeMenu.json";
import coffeeFeatures from "@/data/coffeeFeatures.json";
import Footer from "@/sections/Footer";
import Subscribe from "@/sections/Subscribe";
import Feedback from "@/sections/Feedback";
import OrderNow from "@/sections/OrderNow";
import WhyDifferent from "@/sections/WhyDifferent";
import Menu from "@/sections/Menu";
import Introduction from "@/sections/Introduction";
import Header from "@/sections/Header";

export default function Home() {
  return (
    <div
      className="overflow-y-auto h-screen w-screen font-PlayfairDisplay"
    >
      <Header/>
      <Introduction/>
      <Menu/>
      <WhyDifferent/>
      <OrderNow/>
      <Feedback/>
      <Subscribe/>
      <div className="relative">
        <div className="absolute flex justify-between w-full top-[-220px]">
          <img src="/coffee/pngwing1.png" alt="coffee01" />
          <img src="/coffee/pngwing2.png" alt="coffee02" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
