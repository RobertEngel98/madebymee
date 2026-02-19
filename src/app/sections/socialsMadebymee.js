"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SocialsMadebymee = () => {
  const [loadedVideos, setLoadedVideos] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef({});
  const swiperRef = useRef(null);

  const socialsData = [
    { id: 1, video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/MBMEE%20Social%201.mp4" },
    { id: 2, video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/MBMEE%20Social%202.mp4" },
    { id: 3, video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/MBMEE%20Social%203.mp4" },
    { id: 4, video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/MBMEE%20Social%204.mp4" },
    { id: 5, video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/MBMEE%20Social%205.mp4" },
    { id: 6, video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/MBMEE%20Social%206.mp4" },
    { id: 7, video: "https://cre8ify.fra1.cdn.digitaloceanspaces.com/talentsuite/MBMEE%20Social%207.mp4" },
  ];

  useEffect(() => {
    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key];
      if (video) {
        const index = parseInt(key);
        if (index === activeIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [activeIndex]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleVideoCanPlay = (id, index) => {
    setLoadedVideos((prev) => ({ ...prev, [id]: true }));

    const video = videoRefs.current[index];
    if (video) {
      video.addEventListener(
        "ended",
        function () {
          this.currentTime = 0;
          this.play().catch(() => {});
        },
        { once: false },
      );
    }
  };

  return (
    <section className="testimonial_section position-relative">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 card-hidden">
            <h2 className="text-center">
              SOCIALS <span>Madebymee</span>
            </h2>
            <p className="text-center">Reels, die deine Marke sichtbar machen</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12">
            <div className="swiper-wrapper-container">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={24}
                grabCursor
                loop
                centeredSlides
                keyboard={{ enabled: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                scrollbar={{ draggable: true }}
                navigation={{
                  prevEl: ".custom-swiper-button-prev",
                  nextEl: ".custom-swiper-button-next",
                }}
                onSlideChange={handleSlideChange}
                breakpoints={{
                  1500: { slidesPerView: 5 },
                  1199: { slidesPerView: 4 },
                  991: { slidesPerView: 3 },
                  767: { slidesPerView: 2 },
                  0: { slidesPerView: 1 },
                }}
                modules={[Autoplay, Keyboard, Navigation]}>
                {socialsData.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <div className="video-card">
                      {!loadedVideos[item.id] && <div className="video-skeleton"></div>}
                      <video ref={(el) => (videoRefs.current[index] = el)} muted playsInline preload="auto" onCanPlay={() => handleVideoCanPlay(item.id, index)}>
                        <source src={item.video} type="video/mp4" />
                      </video>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="custom-swiper-button-prev">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <div className="custom-swiper-button-next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .swiper-wrapper-container {
          position: relative;
        }
        .swiper-slide {
          transition:
            opacity 0.6s ease,
            filter 0.6s ease;
          opacity: 0.25;
          filter: brightness(0.5);
        }
        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 0.5;
          filter: brightness(0.7);
        }
        .swiper-slide-active {
          opacity: 1 !important;
          filter: brightness(1) !important;
        }
        .custom-swiper-button-prev,
        .custom-swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: #5aaad7;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(135, 206, 235, 0.3);
        }
        .custom-swiper-button-prev:hover,
        .custom-swiper-button-next:hover {
          background-color: #4b9ac7;
          box-shadow: 0 6px 16px rgba(135, 206, 235, 0.4);
          transform: translateY(-50%) scale(1.05);
        }
        .custom-swiper-button-prev:active,
        .custom-swiper-button-next:active {
          transform: translateY(-50%) scale(0.95);
        }
        .custom-swiper-button-prev {
          left: -28px;
        }
        .custom-swiper-button-next {
          right: -28px;
        }
        .custom-swiper-button-prev.swiper-button-disabled,
        .custom-swiper-button-next.swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        @media (max-width: 1400px) {
          .custom-swiper-button-prev {
            left: 10px;
          }
          .custom-swiper-button-next {
            right: 10px;
          }
        }
        @media (max-width: 768px) {
          .custom-swiper-button-prev,
          .custom-swiper-button-next {
            width: 44px;
            height: 44px;
          }
          .custom-swiper-button-prev svg,
          .custom-swiper-button-next svg {
            width: 20px;
            height: 20px;
          }
          .custom-swiper-button-prev {
            left: 5px;
          }
          .custom-swiper-button-next {
            right: 5px;
          }
        }
      `}</style>
    </section>
  );
};

export default SocialsMadebymee;
