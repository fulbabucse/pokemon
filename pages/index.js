import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import logo from "../assets/logo.png";
import image1 from "../assets/Image02.png";
import image2 from "../assets/Image03.png";
import image3 from "../assets/Image04.png";
import image4 from "../assets/Image05.png";
import image5 from "../assets/Image01.png";

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Home({ results }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-container py-10">
        <div className="flex justify-center mb-4">
          <Image src={logo} height={150} width={150} alt="logo" />
        </div>

        <main className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-4 gap-4 hidden">
            {results?.slice(0, 10)?.map((item, index) => (
              <Card key={index} data={item} value={index} />
            ))}
          </div>

          <div className="lg:hidden block px-4">
            {results && (
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
              >
                {results?.slice(0, 10)?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Card data={item} value={index} />
                  </SwiperSlide>
                ))}

                <div className="autoplay-progress" slot="container-end">
                  <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref={progressContent}></span>
                </div>
              </Swiper>
            )}
          </div>
        </main>
      </div>
      <div className="my-10">
        <div className="text-center text-3xl font-bold text-[#257BC4] bg-header">
          Ash & Pikachu Arrive in <br /> Pok??mon Universe
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center justify-center gap-3 lg:px-20 mt-5">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <div>
                    <h1 className="text-justify font-medium text-gray-700 text-sm">
                      consectetur dolor animi labore delectus minima nihil
                      voluptate tempore quia sed, exercitationem impedit
                      quisquam nam sapiente! Nam molestias odio vel delectus,
                      est inventore autem natus cupiditate facilis optio. quia
                      sed, exercitationem impedit quisquam nam sapiente! Nam
                      molestias odio vel delectus, est inventore autem natus.
                    </h1>
                  </div>
                  <div className="flex gap-2 items-center">
                    <h1 className="text-justify font-medium text-gray-700 text-sm">
                      consectetur dolor animi labore delectus minima nihil
                      voluptate tempore quia sed, exercitationem impedit
                      quisquam nam sapiente! Nam molestias odio vel delectus,
                      est inventore autem natus cupiditate facilis optio.
                      delectus, est inventore autem natus cupiditate facilis
                      optio. delectus, est inventore autem natus cupiditate
                      facilis optio.
                    </h1>
                    <Image src={image3} height={150} width={150} alt="image" />
                  </div>
                  <div>
                    <h1 className="text-justify font-medium text-gray-700 text-sm">
                      consectetur dolor animi labore delectus minima nihil
                      voluptate tempore quia sed, exercitationem impedit
                      quisquam nam sapiente! Nam molestias odio vel delectus,
                      est inventore autem natus. Nam molestias odio vel
                      delectus, est inventore autem natus. Nam molestias odio
                      vel delectus, est inventore
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Image src={image2} height={150} width={150} alt="image" />
                  <Image src={image1} height={150} width={150} alt="image" />
                </div>
              </div>
              <div>
                <h1 className="text-justify font-medium text-gray-700 text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus sequi aspernatur consequatur iusto delectus culpa
                  maxime fuga ullam similique beatae, optio nemo laboriosam
                  deserunt cum vel. Dignissimos accusamus, eligendi assumenda
                  laboriosam voluptates architecto quia delectus, aperiam magnam
                  hic at. Pariatur saepe aut temporibus amet maxime in
                  perferendis voluptates id dolore iusto dolor fuga, numquam hic
                  ut quidem illum repudiandae facere officia tempore sequi
                  totam! Veritatis, natus est! Magni asperiores quidem molestiae
                  excepturi nihil nesciunt eum iusto laboriosam nobis sunt,
                  perspiciatis ea tenetur quis eius hic saepe explicabo cumque
                  pariatur. Inventore officiis ipsam aliquid cum. Maxime quae
                  hic error aperiam, voluptates voluptatibus esse modi itaque,
                  ex sunt dolorem aut molestiae! Sunt unde eveniet rerum nam
                  officiis nostrum quam quibusdam, quas dolorem eos amet facilis
                  distinctio animi eligendi illum cupiditate, laudantium,
                  aliquid vel.
                </h1>
              </div>
            </div>
            <div className="max-w-lg">
              <div>
                <h1 className="text-justify font-medium text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptates, officiis explicabo? Laboriosam labore molestias ea
                  tempore quae. Reprehenderit earum corporis suscipit nulla
                  blanditiis. Doloremque quia minima beatae alias dolorum optio,
                  ex nam sint laboriosam obcaecati nobis repellendus omnis
                </h1>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Image src={image4} height={150} width={150} alt="image" />
                  <div>
                    <h1 className="text-justify font-medium text-gray-700 text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem, odit quae. Saepe voluptas, ullam architecto
                      dolorum recusandae consectetur quos debitis optio minima
                      est, praesentium ipsum nihil sit eveniet quia ex vero aut
                      non laboriosam! Minima ut totam repellat reiciendis.
                      Explicabo amet eaque, facere impedit accusamus illo nobis.
                      Voluptatem, unde adipisci.
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={image5} height={150} width={150} alt="image" />
                  <div>
                    <h1 className="text-justify font-medium text-gray-700 text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem, odit quae. Saepe voluptas, ullam architecto
                      dolorum recusandae consectetur quos debitis optio minima
                      est, praesentium ipsum nihil sit eveniet quia ex vero aut
                      non laboriosam! Minima ut totam repellat reiciendis.
                      Explicabo amet eaque, facere impedit accusamus illo nobis.
                      Voluptatem, unde adipisci.
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-justify font-medium text-gray-700 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptates, officiis explicabo? Laboriosam labore molestias ea
                  tempore quae. Reprehenderit earum corporis suscipit nulla
                  blanditiis. Doloremque quia minima beatae alias dolorum optio,
                  ex nam sint laboriosam obcaecati nobis repellendus omnis
                  corporis molestias laudantium. Veniam doloribus at quaerat
                  esse, illum quae cupiditate deleniti.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden px-4 mt-4">
          <div>
            <h1 className="text-justify font-medium text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates, officiis explicabo? Laboriosam labore molestias ea
              tempore quae. Reprehenderit earum corporis suscipit nulla
              blanditiis. Doloremque quia minima beatae alias dolorum optio, ex
              nam sint laboriosam obcaecati nobis repellendus omnis corporis
              molestias laudantium. Veniam doloribus at quaerat esse, illum quae
              cupiditate deleniti.
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div>
              <Image src={image1} height={100} width={100} alt="image" />
            </div>
            <div className="flex flex-col gap-2">
              <Image src={image2} height={100} width={100} alt="image" />
              <Image src={image3} height={100} width={100} alt="image" />
            </div>
            <div className="flex flex-col gap-2 mt-28">
              <Image src={image4} height={100} width={100} alt="image" />
              <Image src={image5} height={100} width={100} alt="image" />
            </div>
          </div>
          <div>
            <h1 className="text-justify font-medium text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates, officiis explicabo? Laboriosam labore molestias ea
              tempore quae. Reprehenderit earum corporis suscipit nulla
              blanditiis. Doloremque quia minima beatae alias dolorum optio, ex
              nam sint laboriosam obcaecati nobis repellendus omnis corporis
              molestias laudantium. Veniam doloribus at quaerat esse, illum quae
              cupiditate deleniti.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const { results } = await res.json();

  return {
    props: { results },
  };
};
