import React from "react";
import Container from "../../../components/Container";
// import heroImg from "../../../assets/image/mamun_photo.png";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-transparent">
      <Container>
        <div class="container px-6 py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class=" font-semibold text-gray-800  lg:text-4xl">
                  <span className="text-xl">Hello I Am</span> <br /> Md. Mamun
                  Mia
                </h1>

                <p class="mt-3 text-gray-600 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro beatae error laborum ab amet sunt recusandae? Reiciendis
                  natus perspiciatis optio.
                </p>

                <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Download CV
                </button>
              </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                class="w-full h-full lg:max-w-3xl"
                // src={heroImg}
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
