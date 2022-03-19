/* eslint-disable react/function-component-definition */

import { Card } from "antd"
import { FC } from "react"
import "./index.scss"

const { Meta } = Card

interface AlbumCardProps {
	style: object
	src: string
	title: string
	description: string
	alt: string
}
const AlbumCard: FC<AlbumCardProps> = ({
	style,
	src,
	title,
	alt,
	description,
}) => (
	<Card
		hoverable
		style={style}
		cover={<img alt={alt} src={src} className="album-card-image" />}
	>
		<Meta title={title} description={description} />
	</Card>
)

export default AlbumCard
