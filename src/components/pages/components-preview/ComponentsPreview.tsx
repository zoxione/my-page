import { FC } from 'react'
import styles from './ComponentsPreview.module.scss'
import Layout from '../../ui/layout/Layout'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Slide from '../../ui/slide/Slide'
import SwiperPagination from '../../ui/swiper-pagination/SwiperPagination'
import Button from '../../ui/button/Button'

import { FaGithub, FaTelegram, FaDiscord } from 'react-icons/fa'
import Card from '../../ui/card/Card'

const ComponentsPreview: FC = () => {
	return (
		<Layout>
			<div className={styles.components}>
				<Card title='Кнопки'>
					<div className={styles.buttons}>
						<Button disable>Кнопка</Button>
						<Button variant='filled'>Кнопка filled</Button>
						<Button variant='light'>Кнопка light</Button>
						<Button variant='outline'>Кнопка outline</Button>
					</div>
				</Card>
			</div>
		</Layout>
	)
}

export default ComponentsPreview
