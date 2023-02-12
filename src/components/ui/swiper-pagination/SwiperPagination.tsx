import { FC, PropsWithChildren } from 'react'
import { useSwiper } from 'swiper/react'
import styles from './SwiperPagination.module.scss'
import 'swiper/css'
import Button from '../button/Button'
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs'

const SwiperPagination: FC<PropsWithChildren> = ({ children }) => {
	const swiper = useSwiper()

	return (
		<div className={styles.header__wrapper}>
			<div className={styles.header__content}>
				<Button onClick={() => swiper.slidePrev()}>
					<BsCaretLeftFill />
				</Button>
				zoxione
				<Button onClick={() => swiper.slideNext()}>
					<BsCaretRightFill />
				</Button>
			</div>
		</div>
	)
}

export default SwiperPagination
