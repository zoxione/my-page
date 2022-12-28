import { FC } from "react";
import styles from "./home.module.scss";
import Layout from "../../ui/layout/Layout";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Slide from "../../ui/slide/Slide";
import SwiperPagination from "../../ui/swiper-pagination/SwiperPagination";

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
          <Slide title="Меня зовут Баир">
            Я начинающий фронтенд разработчик
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