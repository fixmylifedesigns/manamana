"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Download, MapPin } from "lucide-react";

const JapaneseTeacherWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedItem, setExpandedItem] = useState(null);
  // Image gallery data (replace with actual paths to your images)
  const galleryImages = [
    {
      id: 1,
      type: "image",
      src: "/reviews/1.jpg", // This is a placeholder - in actual code, use the path to your image
      alt: "Student testimonial",
    },
    {
      id: 2,
      type: "image",
      src: "/reviews/2.jpg",
      alt: "Learning progress",
    },
    {
      id: 3,
      type: "image",
      src: "/reviews/3.jpg",
      alt: "Cultural experience",
    },
    {
      id: 4,
      type: "video",
      src: "/reviews/4.mp4",
      alt: "Student review",
    },
    {
      id: 5,
      type: "image",
      src: "/reviews/5.jpg",
      alt: "Cultural experience",
    },
    {
      id: 6,
      type: "image",
      src: "/reviews/6.jpg",
      alt: "Cultural experience",
    },
  ];

  const nextSlide = () => {
    if (expandedItem === null) {
      setCurrentSlide((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (expandedItem === null) {
      setCurrentSlide((prev) =>
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
    }
  };

  const expandItem = (index) => {
    setExpandedItem(index);
  };

  const closeExpandedItem = () => {
    setExpandedItem(null);
  };

  return (
    <div className="min-h-screen bg-cream-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Manamana Logo"
            className="h-16"
            style={{ height: "80px", width: "auto" }}
          />

          {/* Navigation Links */}
          {/* <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-teal-600 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-teal-600 font-medium"
            >
              About
            </a>
            <a
              href="#courses"
              className="text-gray-700 hover:text-teal-600 font-medium"
            >
              Courses
            </a>
            <a
              href="#resources"
              className="text-gray-700 hover:text-teal-600 font-medium"
            >
              Resources
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-teal-600 font-medium"
            >
              Contact
            </a>
          </div> */}

          {/* CTA Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfnSgcmQmfRlfp7FkCyKBOtP8Yh_Klau2Ol8RK13UfSgAPnqA/viewform"
            className="bg-teal-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-teal-700 transition duration-300"
          >
            Free Trial
          </a>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <section id="home" className="relative bg-gray-900 text-white py-20">
        {/* Background I */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: `url('/banner.png')` }}
        >
          {/* Nara, Japan I would go here */}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learn Japanese with Joaquim & Eevee
            </h1>
            <p className="text-xl mb-6">
              Get conversational in Japanese in just 6 months with only 1 hour
              per day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnSgcmQmfRlfp7FkCyKBOtP8Yh_Klau2Ol8RK13UfSgAPnqA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-md text-center transition duration-300"
              >
                Join the Waitlist
              </a>
              <a
                href="https://www.instagram.com/p/DFkY4uFydKx/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
                className="bg-white text-gray-800 hover:bg-gray-100 font-medium px-6 py-3 rounded-md text-center transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free PDF Download Section */}
      <section id="resources" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* PDF Cover I */}
            <div className="md:w-1/3 flex justify-center">
              <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/pdf.jpeg"
                  alt="Kana PDF Cover"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* PDF Info */}
            <div className="md:w-2/3 max-w-xl">
              <h2 className="text-3xl font-bold mb-4 text-teal-800">
                Start Your Japanese Journey Today
              </h2>
              <h3 className="text-xl font-semibold mb-3 text-gray-700">
                Free Guide: How to Learn Kana the Fast Way
              </h3>
              <p className="text-gray-600 mb-6">
                To Japanese learners, I know how hard it can be to learn
                Japanese in the beginning, I also started here. But hear me out,
                it&apos;s just the first step, and it shouldn&apos;t take you
                more than 2 weeks at best. Now, if you want to learn Japanese,
                you need to start with Kana. In this guide you will find all the
                information you need as well as the methods I give my students
                to learn them fast.
              </p>
              <a
                href="https://manamana-nihongo.kit.com/62643f8f5a"
                className="inline-flex items-center bg-teal-600 text-white px-5 py-3 rounded-md hover:bg-teal-700 transition duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial I Carousel Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">
            Our Students&apos; Experiences
          </h2>

          {/* Modal for expanded view */}
          {expandedItem !== null ? (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div
                className="relative mx-auto bg-white rounded-lg overflow-hidden"
                style={{
                  aspectRatio: "9/16",
                  maxHeight: "90vh",
                  width: "auto",
                  height: "auto",
                  maxWidth: "90vw",
                }}
              >
                <button
                  onClick={closeExpandedItem}
                  className="absolute right-2 top-2 z-10 bg-black/50 hover:bg-black text-white p-2 rounded-full"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="h-full w-full">
                  {galleryImages[expandedItem].type === "image" ? (
                    <img
                      src={galleryImages[expandedItem].src}
                      alt={galleryImages[expandedItem].alt}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <video
                      src={galleryImages[expandedItem].src}
                      controls
                      controlsList="nodownload nofullscreen"
                      autoPlay
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
            </div>
          ) : null}

          {/* Carousel display showing 3 items at a time */}
          <div className="relative mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[0, 1, 2].map((offset) => {
                const index = (currentSlide + offset) % galleryImages.length;
                const item = galleryImages[index];
                return (
                  <div
                    key={item.id}
                    className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer"
                    style={{ aspectRatio: "9/16" }}
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-contain bg-gray-100"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        {/* Video thumbnail with play button overlay */}
                        <video
                          src={item.src}
                          preload="metadata"
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                        >
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="text-white text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-12 w-12 mx-auto"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <p className="mt-2 text-sm">Video Testimonial</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Hover overlay with button */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => expandItem(index)}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 text-sm rounded-md transition-all transform scale-95 group-hover:scale-100"
                      >
                        {item.type === "image"
                          ? "Click to Read"
                          : "Click to Watch"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full ${
                    index === currentSlide ||
                    index === (currentSlide + 1) % galleryImages.length ||
                    index === (currentSlide + 2) % galleryImages.length
                      ? "bg-teal-600"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second Banner/CTA Section */}
      <section id="cta" className="relative bg-gray-900 text-white py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: `url('/banner.png')` }}
        >
          {/* Another Nara, Japan image would go here */}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Japanese Journey?
            </h2>
            <p className="text-xl mb-6">
              Join our program and get conversational in Japanese in just 6
              months!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfnSgcmQmfRlfp7FkCyKBOtP8Yh_Klau2Ol8RK13UfSgAPnqA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-md inline-block transition duration-300"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img
                src="/icon.png"
                alt="Manamana Logo"
                className="h-16"
                style={{ height: "80px", width: "auto" }}
              />
              <p className="text-xs text-gray-400 mb-2">craft your japanese</p>
              <p className="mb-4">
                Learn Japanese with Joaquim & Eevee. Get conversational in just
                6 months with only 1 hour per day.
              </p>
              <div className="flex items-center text-gray-300 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Nara, Japan 🦌</span>
              </div>
            </div>

            {/* <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-white" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#courses">
                    Courses
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#resources">
                    Resources
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div> */}

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <div className="flex space-x-4 mt-4">
                    <a
                      href="https://www.tiktok.com/@mananamana_nihongo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      TikTok
                    </a>
                    <a
                      href="https://www.instagram.com/manamana_nihongo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://x.com/manamananihongo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      X
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} manamana Japanese School. All
              rights reserved.
            </p>
            <p className="mt-2">
              Website made by{" "}
              <a
                href="https://www.minnastudy.com"
                className="text-blue-400 hover:underline"
              >
                minnastudy.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JapaneseTeacherWebsite;
