import { FC, PropsWithChildren } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import Header from '../header/Header'
import styles from './Slide.module.scss'
import 'swiper/css'

interface IProps {
	title: string
	children: React.ReactNode
}

const Slide: FC<IProps> = (props: IProps) => {
	return (
		<>
			<div className={styles.slide}>
				<div>
					<h3 className={styles.title}>{props.title}</h3>
					<div className={styles.content}>{props.children}</div>
				</div>
			</div>
		</>
	)
}

export default Slide
