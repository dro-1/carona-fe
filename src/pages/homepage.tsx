import { CaronaCard } from "../components/carona-card";
import { Navbar } from "../components/navbar";
import heroImage from "./../assets/images/hero-image.png";
import checkmark from "./../assets/svg/check.svg";
import shuttle from "./../assets/images/shuttle.jpg";
import shield from "./../assets/svg/shield-check.svg";
import car from "./../assets/svg/car.svg";
import stepImage from "./../assets/images/steps.png";
import { SiYourtraveldottv } from "react-icons/si";
import { IoMdBusiness } from "react-icons/io";
import { MdCommute } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Footer } from "../components/footer";

const features = [
  "Easy-to-use web app",
  "Professional Drivers",
  "Clear and transparent prices",
  "Diverse vehicles for your needs",
];

const steps = [
  {
    num: 1,
    title: "Type Your Destination",
    text: "Totam facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur.",
  },
  {
    num: 2,
    title: "Confirm Pick-up Location",
    text: "Totam facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur.",
  },
  {
    num: 3,
    title: "Choose Payment Method",
    text: "Totam facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur.",
  },
  {
    num: 4,
    title: "Driver on the way to pick up",
    text: "Totam facilis laudantium cum accusamus ullam voluptatibus commodi numquam, error, est. Ea, consequatur.",
  },
];

const services = [
  {
    title: "Tourists",
    text: "Easily convey a group of tourists from one tourist attraction to the other",
    icon: SiYourtraveldottv,
  },
  {
    title: "Businesses",
    text: "Transport members of a workplace to and from official events",
    icon: IoMdBusiness,
  },
  {
    title: "Commuters",
    text: "Convey individuals from strategic pickup locations to designated drop off points using shuttles",
    icon: MdCommute,
  },
  {
    title: "Travelers",
    text: "Group individuals into a carpool for a more comfortable and enjoyable journey",
    icon: MdOutlineTravelExplore,
  },
];

export const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section className="min-h-[100vh]  hero-bg rounded-3xl relative -top-8 text-white p-6">
        <img src={heroImage} className="mx-auto block w-[80%] pt-[100px]" />
        <div className="bg-[#F3FDF8] inline-block p-6 py-2 rounded-full mt-12">
          <div className="h-[10px] w-[10px] rounded-full bg-[#319A64] inline-block mr-4" />
          <p className="capitalize text-[#377631] text-lg inline-block">
            the perfect ride awaits
          </p>
        </div>
        <h1 className="text-[36px] capitalize mt-4 leading-[38px]">
          Get where you need to go, safely and affordably
        </h1>
        <p className="mt-4 text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          hic eaque iusto amet natus fuga voluptate aspernatur modi eius,
          commodi optio dignissimos voluptates.
        </p>
        <div className="flex justify-between items-center mt-6">
          <button className="bg-[#319A64] border-[#319A64] border-2 p-4 rounded-xl text-lg">
            Book Your Ride
          </button>
          <button className="bg-transparent border-white border-2 p-4 rounded-xl text-lg">
            Learn More
          </button>
        </div>
      </section>
      <section className="px-6 mt-16">
        <CaronaCard title="Carona Shuttle" />
        <CaronaCard title="Carona Pool" />
      </section>
      <section className="mt-24 px-6">
        <h3 className="text-[#0B996F] text-4xl">
          Make your travel experience as easy and stress-free as possible
        </h3>
        <p className="mt-4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est qui dolorem ipsum.{" "}
        </p>
        <div className="mt-4">
          {features.map((feature) => (
            <div className="flex items-center mb-2">
              <div className="inline-block mr-2 h-[28px] w-[28px] rounded-full bg-[#E2F4EA] relative">
                <img
                  src={checkmark}
                  className="w-[10px] relative top-[50%] -translate-y-[50%] mx-auto"
                />
              </div>
              {feature}
            </div>
          ))}
        </div>
        <img className="my-8 rounded-2xl" src={shuttle} />
        <h3 className="text-[#0B996F] text-4xl">
          Ensuring your safety is guaranteed
        </h3>
        <p className="mt-4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est qui dolorem ipsum.{" "}
        </p>
        <div className="mt-8">
          <div className="mb-4">
            <div className="w-[50px] h-[50px] rounded-full bg-[#E2F4EA] flex justify-center items-center mb-2">
              <img className="w-[30px]" src={shield} />
            </div>
            <h3 className="mb-2 text-xl">Safety Measures</h3>
            <p>Sed adipisci velit, sed quia non numquam eius modi tempora </p>
          </div>
          <div className="mb-4">
            <div className="w-[50px] h-[50px] rounded-full bg-[#E2F4EA] flex justify-center items-center mb-2">
              <img className="w-[30px]" src={car} />
            </div>
            <h3 className="mb-2 text-xl">Well-Maintained Vehicles</h3>
            <p>Sed adipisci velit, sed quia non numquam eius modi tempora </p>
          </div>
        </div>
      </section>
      <section className="bg-[#E2F4EA] py-24 mt-16 rounded-3xl">
        <h3 className="text-center text-3xl text-primary-10 max-w-[370px] mx-auto ">
          Simple Steps to Book Your Ride
        </h3>
        <p className="text-center mt-4 max-w-[370px] mx-auto">
          Neque porro quisquam est qui dolorem ipsum adipisci velit, sed quia
          non numquam eius modi tempora incidunt ut labore et{" "}
        </p>
        <div className="px-6">
          {steps.map((step) => (
            <div className="py-4 mb-4 border-b-2 transition group border-primary-20 hover:border-primary-10">
              <h3 className="group-hover:text-primary-10 text-xl">
                {step.num}. {step.title}
              </h3>
              <p className="mt-4">{step.text}</p>
            </div>
          ))}
        </div>
        <img className="mt-16 px-6" src={stepImage} />
      </section>
      <section className="my-16 px-6">
        <h3 className="text-primary-10 capitalize text-3xl mb-4">
          The ultimate carpooling experience awaits
        </h3>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.{" "}
        </p>
        <div className="mt-8">
          {services.map((service) => (
            <div className="rounded-2xl border border-primary-20 p-8 mb-4">
              <div className="h-[50px] w-[50px] rounded-full bg-primary-20 flex justify-center items-center">
                <service.icon className="text-primary-10 text-2xl" />
              </div>
              <h4 className="mt-4 text-xl mb-4">{service.title}</h4>
              <p>{service.text}.</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};
