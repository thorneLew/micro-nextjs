import Link from "next/link"
import { FC } from "react"
import styles from './style.module.css'

const nav = [
	{
		link: '/',
		name: "首页"
	},
	{
		link: '/swap',
		name: "兑换"
	},
	{
		link: '/react/',
		name: 'react/home'
	},
	{
		link: '/react1/',
		name: 'react1/home'
	},
	{
		link: '/react2/',
		name: 'react2/home'
	},
]


export const Layout: FC = ({children}) => {
	return <div className={styles.layout}>
		<header className={styles.header}>
			{
				nav.map((item, index) => {
					return <span key={index} className={styles.navItem}><Link href={item.link}>{item.name}</Link></span>
				})
			}
		</header>
		<main className={styles.main}>
			{children}
		</main>
		<footer className={styles.footer}>
			footer
		</footer>
	</div>
}