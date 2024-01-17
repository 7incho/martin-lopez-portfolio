import { useState } from "react";
import { testimonials } from "../lib/data";

export const Next = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 28L24 20L16 12"
      stroke="currentColor"
      stroke-width="2"
      data-darkreader-inline-stroke=""
    ></path>
  </svg>
);

export const Previous = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 12L16 20L24 28"
      stroke="currentColor"
      stroke-width="2"
      data-darkreader-inline-stroke=""
    ></path>
  </svg>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const handlePrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="p-8 justify-between rounded-3xl bg-zinc-900 flex flex-col col-span-3 row-span-2">
      <div className="mt-6">
        {testimonials.map(
          (item, index) =>
            index === current && (
              <div key={index}>
                <div className="text-5xl font-medium tracking-tighter text-wrap pb-8">
                  <h2 className="">"{item.content_text}"</h2>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-4 items-center">
                    <div>
                      <img
                        className="size-24 rounded-full grayscale"
                        src={item.avatar}
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 className="text-3xl">{item.testimonial_name}</h6>
                      <span className="text-xl text-gray-400">
                        {item.text_block}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-20 flex justify-center flex-col items-center hover:bg-gray-50 hover:text-gray-900 trasition duration-300 rounded-full">
                      <button
                        className="rounded-full p-2"
                        onClick={handlePrevious}
                      >
                        <Previous />
                      </button>
                    </div>
                    <div className="size-20 flex justify-center flex-col items-center hover:bg-gray-50 hover:text-gray-900  trasition duration-300 rounded-full">
                      <button className="rounded-full p-2" onClick={handleNext}>
                        <Next />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Testimonials;
