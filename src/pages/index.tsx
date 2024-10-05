import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import coffeeMenu from "@/data/coffeeMenu.json";
import coffeeFeatures from "@/data/coffeeFeatures.json";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} overflow-y-auto h-screen w-screen `}
    >
      <section className="w-full z-[-2] h-full bg-cover bg-coffee flex flex-col justify-center items-center relative">
        <div className="w-full h-full bg-overlay bg-cover absolute z-[-1]"></div>
        <Navbar />
        <div className="text-center max-w-lg mx-auto ">
          <p className="text-white mb-2">We’ve got your morning covered with</p>
          <h1 className="text-4xl font-bold text-white mb-4">Coffee</h1>
          <p className="text-white mb-6">
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded">
            Order Now
          </button>
        </div>
      </section>
      <section className="w-full  bg-[#FFFEFC]">
        <div className="px-20 flex justify-between">
          <div>
            <h2>Discover the best coffee</h2>
            <p>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
            <button>Learn More</button>
          </div>
          <img src="/Mask_group.png" alt="cofee" />
        </div>
        <div className="w-full h-16">
          <img src="/coffee_blast.png" alt="" />
        </div>
      </section>
      <section>
        <div><h2>Enjoy a new blend of coffee style</h2>
        <span>Explore all flavours of coffee with us. There is always a new cup worth experiencing</span></div>
        <ul>
          {coffeeMenu.map((e)=>(
            <li>
              <img src={e.image} alt={e.name}/>
              <h3>{e.name}</h3>
              <p>{e.description}</p>
              <span>{e.price}</span>
              <button>Order Now</button>
            </li>
          ))}
        </ul>

      </section>
      <section>
        <div>
          <h2>Why are we different?</h2>
          <span>We don’t just make your coffee, we make your day!</span>
        </div>
        <ul>
          {coffeeFeatures.map((e)=>(
            <li>
              <img src={e.icon} alt={e.title} />
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </li>
          ))}
        </ul>
        <div>
          <span>Great ideas start with great coffee, Lets help you achieve that</span>
          <h3>Get started today.</h3>
          <button>Join Us</button>
        </div>
      </section>
      <section>
        <div>
          <h2>Get a chance to have an
          Amazing morning</h2>
          <p>We are giving you are one time opportunity to
          experience a better life with coffee.</p>
          <button>Order Now</button>
        </div>
        <img src="/coffee/cup.png" alt="cup coffee" />
      </section>
      <section>

      </section>
      <section>
        
      </section>
    </div>
  );
}
