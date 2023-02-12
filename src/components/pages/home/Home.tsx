import { FC } from 'react'
import styles from './Home.module.scss'
import Layout from '../../ui/layout/Layout'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Slide from '../../ui/slide/Slide'
import SwiperPagination from '../../ui/swiper-pagination/SwiperPagination'
import Button from '../../ui/button/Button'

import {
	FaGithub,
	FaTelegram,
	FaDiscord,
	FaHtml5,
	FaCss3,
	FaReact,
	FaGitAlt
} from 'react-icons/fa'

import { IoLogoJavascript } from 'react-icons/io'
import { SiFigma, SiRedux, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Card from '../../ui/card/Card'

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
					<Slide title='Hello, my name is Bair'>
						I'm a Frontend Developer
						<div className='mt-[24px] grid grid-cols-2 gap-4'>
							<a href='https://github.com/zoxione' target='_blank'>
								<Button variant='outline' className='w-full'>
									<FaGithub className='mr-2' size={18} />
									<span>Github</span>
								</Button>
							</a>
							<a href='https://t.me/zoxione' target='_blank'>
								<Button variant='outline' className='w-full'>
									<FaTelegram className='mr-2' size={18} />
									<span>Telegram</span>
								</Button>
							</a>
						</div>
					</Slide>
				</SwiperSlide>
				<SwiperSlide>
					<Slide title='My skills'>
						<div className='mt-12 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-x-2 gap-y-8'>
							<div className='flex flex-col items-center justify-center gap-2'>
								<SiFigma size={36} color='Chocolate ' />
								Figma
							</div>
							<div className='flex flex-col items-center justify-center gap-2'>
								<FaGitAlt size={36} color='red' />
								Git
							</div>
							<div className='flex flex-col items-center justify-center gap-2'>
								<FaHtml5 size={36} color='orange' />
								HTML5
							</div>
							<div className='flex flex-col items-center justify-center gap-2'>
								<FaCss3 size={36} color='royalblue' />
								CSS3
							</div>
							<div className='flex flex-col items-center justify-center gap-2'>
								<IoLogoJavascript size={36} color='Gold ' />
								JavaScript
							</div>
							<div className='flex flex-col items-center justify-center gap-2'>
								<SiTypescript size={36} color='CornflowerBlue ' />
								TypeScript
							</div>
							<div className='flex flex-col items-center justify-center gap-2'>
								<FaReact size={36} color='Aqua' />
								React
							</div>
							<div className='flex flex-col items-center justify-center gap-2'>
								<SiRedux size={36} color='SlateBlue ' />
								Redux
							</div>
							<div className='flex flex-col items-center justify-center gap-2'>
								<TbBrandNextjs size={36} />
								Next.js
							</div>
						</div>
					</Slide>
				</SwiperSlide>
				<SwiperSlide>
					<Slide title='My projects'>
						<div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8'>
							<Card title='Check-wishlist'>
								<div className='flex flex-col justify-center items-center gap-4 mb-4'>
									<p>
										Web service for creating and editing a list of desired gifts
										from various stores.
									</p>
									<img
										src='/check-wishlist.png'
										alt='check-wishlist'
										width={500}
										height={300}
										className='rounded-xl'
									/>
								</div>
								<a href='https://wishlist.ictis.ru/' target='_blank'>
									<Button variant='outline' className='w-full'>
										Demo
									</Button>
								</a>
							</Card>
							<Card title='Check-wishlist'>
								<div className='flex flex-col justify-center items-center gap-4 mb-4'>
									<p>
										Web service for creating and editing a list of desired gifts
										from various stores.
									</p>
									<img
										src='/check-wishlist.png'
										alt='check-wishlist'
										width={500}
										height={300}
										className='rounded-xl'
									/>
								</div>
								<a href='https://wishlist.ictis.ru/' target='_blank'>
									<Button variant='outline' className='w-full'>
										Demo
									</Button>
								</a>
							</Card>
						</div>
					</Slide>
				</SwiperSlide>
			</Swiper>
		</Layout>
	)
}

export default Home
