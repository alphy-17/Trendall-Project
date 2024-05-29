import React from "react";
import { Carousel } from "flowbite-react";

export function HomeCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
  indicators={false}
  leftControl={
    <button
      className="carousel-control-prev w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow-lg hover:bg-gray-200"
      aria-label="Previous slide"
    >
      <span className="carousel-control-prev-icon">&lt;</span>
    </button>
  }
  rightControl={
    <button
      className="carousel-control-next w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow-lg hover:bg-gray-200"
      aria-label="Next slide"
    >
      <span className="carousel-control-next-icon">&gt;</span>
    </button>
  }
>
  <div className="flex h-full flex-col items-center justify-center bg-gray-400 dark:bg-pallet1-50 dark:text-white p-6">
    <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4xl lg:text-3xl mb-4">
      The History of Calyx-Krater
    </h1>
    <p className="xl:w-3/4 text-gray-600 text-lg">
      The Calyx-Krater is a significant artifact in classical studies, known for its use in mixing wine and water. Originating from Athens, Greece, it has a height of 45 cm and a diameter of 35 cm. This artifact is one of the many treasures we study in our database.
    </p>
  </div>
  <div className="flex h-full flex-col items-center justify-center bg-gray-400 dark:bg-pallet1-50 dark:text-white p-6">
    <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4xl lg:text-3xl mb-4">
      Exploring Ancient Pottery
    </h1>
    <p className="xl:w-3/4 text-gray-600 text-lg">
      Ancient pottery reveals much about historical cultures. The Bell-Krater and Skyphos are prime examples, illustrating the skill and artistry of ancient craftsmen. Discover more about these fascinating artifacts in our Research section.
    </p>
  </div>
  <div className="flex h-full flex-col items-center justify-center bg-gray-400 dark:bg-pallet1-50 dark:text-white p-6">
    <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4xl lg:text-3xl mb-4">
    News and Events
    </h1>
    <p className="xl:w-3/4 text-gray-600 text-lg">
    We share the latest news and events about Trendall Centre here.
    </p>
  </div>
</Carousel>
    </div>
  );
}
