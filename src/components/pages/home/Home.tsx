import { FC } from "react";
import styles from "./Home.module.scss";
import Layout from "../../ui/layout/Layout";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Slide from "../../ui/slide/Slide";
import SwiperPagination from "../../ui/swiper-pagination/SwiperPagination";
import Button from "../../ui/button/Button";

import { FaGithub, FaTelegram, FaDiscord } from 'react-icons/fa';

const Home: FC = () => {

  return (
    <Layout>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperPagination></SwiperPagination>
        <SwiperSlide>
          <Slide title="Hello, my name is Bair">
            I'm a Frontend Developer
            <div className="mt-[24px] grid grid-cols-2 gap-4">
              <a href="https://github.com/zoxione" target="_blank">
                <Button className="w-full">
                  <FaGithub className="mr-2" size={18} />
                  <span>Github</span>
                </Button>
              </a>
              <a href="https://t.me/zoxione" target="_blank">
                <Button className="w-full">
                  <FaTelegram className="mr-2" size={18} />
                  <span>Telegram</span>
                </Button>
              </a>
            </div>
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide title="Мои навыки">
            HTML • CSS • JavaScript • React • TypeScript • Next.js • Redux • Git • Figma
          </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide title="Мои проекты">
            Пока здеся ничего нет
          </Slide>
        </SwiperSlide>
      </Swiper>
    </Layout>
  )
}

export default Home;