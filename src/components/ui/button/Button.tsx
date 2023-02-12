import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

interface IProps {
	onClick?: () => void
	variant?: 'filled' | 'light' | 'outline' | 'icon'
	disable?: boolean
	className?: string
	children?: React.ReactNode
}

const Button: FC<IProps> = (props: IProps) => {
	let classButton = ''
	switch (props.variant) {
		case 'filled':
			classButton = styles.button__filled
			break
		case 'light':
			classButton = styles.button__light
			break
		case 'outline':
			classButton = styles.button__outline
			break
		case 'icon':
			classButton = styles.button__icon
			break
		default:
			classButton = styles.button__filled
			break
	}

	return (
		<button
			className={`${classButton} ${props.className ? props.className : ''}`}
			onClick={props.onClick}
			disabled={props.disable}
		>
			{props.children}
		</button>
	)
}

export default Button
