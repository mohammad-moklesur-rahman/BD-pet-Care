import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Blog() {
  React.useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-gray-200 p-6">
      <div
        data-aos="fade-up"
        className="relative bg-white shadow-2xl rounded-3xl p-14 text-center max-w-2xl w-full border border-gray-100 overflow-hidden"
      >
        {/* Floating Shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-ping"></div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
          <span className="text-emerald-600">Blog</span> Coming Soon
        </h1>

        {/* TEXT */}
        <p className="text-gray-600 text-lg mb-10 max-w-lg mx-auto">
          We are building a beautiful place for pet lovers — featuring expert
          tips, guides, stories, and the best care advice for your furry
          friends.
        </p>

        {/* Modern Gradient Loader */}
        <div data-aos="zoom-in" className="flex justify-center mb-10">
          <div className="w-16 h-16 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin"></div>
        </div>

        {/* Animated Tagline */}
        <div data-aos="fade-up">
          <p className="text-gray-500 text-md italic animate-pulse">
            Stay tuned — exciting content is on the way.
          </p>
        </div>

        {/* Bottom Highlight Bar */}
        <div className="mt-10 h-2 w-40 mx-auto bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
