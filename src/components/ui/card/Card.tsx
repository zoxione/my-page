import { FC } from 'react'
import styles from './Card.module.scss'
import 'swiper/css'

interface IProps {
	title?: string
	children: React.ReactNode
}

const Card: FC<IProps> = (props: IProps) => {
	return (
		<>
			<div className={styles.card}>
				{props.title && <h3 className={styles.title}>{props.title}</h3>}
				<div className={styles.content}>{props.children}</div>
			</div>
		</>
	)
}

export default Card
