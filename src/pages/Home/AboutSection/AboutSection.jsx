import React from "react";
import Container from "../../../components/Container";

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <Container>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                Biography
              </h1>
              <p className="mb-8 leading-relaxed">
                Chillwave portland ugh, knausgaard fam polaroid iPhone. Man
                braid swag typewriter affogato, hella selvage wolf narwhal
                dreamcatcher.portland ugh, knausgaard fam polaroid iPhone. Man
                braid swag typewriter affogato, hella selvage wolf narwhal
                portland ugh, knausgaard fam polaroid iPhone. Man braid swag
                typewriter affogato, hella selvage wolf narwhal
              </p>
              <div className="flex w-full md:justify-start justify-center items-end">
                <div className="w-full grid grid-cols-2 gap-x-5 gap-y-2 pr-10">
                  <div className="flex w-full justify-between ">
                    <h2 className="text-lg font-semibold text-white ">Birthday </h2>
                    <p className="text-black">5th July 2024</p>
                  </div>
                  <div className="flex w-full justify-between ">
                    <h2 className="text-lg font-semibold text-white ">Age </h2>
                    <p className="text-black">22 Yr</p>
                  </div>
                  <div className="flex w-full justify-between ">
                    <h2 className="text-lg font-semibold text-white ">Study </h2>
                    <p className="text-black">Janannath University</p>
                  </div>
                  <div className="flex w-full justify-between ">
                    <h2 className="text-lg font-semibold text-white ">Marriage Status </h2>
                    <p className="text-black">Unmarried</p>
                  </div>
                  <div className="flex w-full justify-between ">
                    <h2 className="text-lg font-semibold text-white ">Address </h2>
                    <p className="text-black">Azimpur, Dhaka, Bangladesh</p>
                  </div>
                  <div className="flex w-full justify-between ">
                    <h2 className="text-lg font-semibold text-white ">Email </h2>
                    <p className="text-black">mamun@gmail.com</p>
                  </div>
                  <div className="flex w-full justify-between ">
                    <h2 className="text-lg font-semibold text-white ">Phone </h2>
                    <p className="text-black">017771099</p>
                  </div>
                  <div className="flex w-full justify-between ">
                    <h2 className="text-lg font-semibold text-white ">Is-Single </h2>
                    <p className="text-black">Yes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutSection;
