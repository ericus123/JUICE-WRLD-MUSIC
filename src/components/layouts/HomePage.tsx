import { Layout } from "antd"
import MusicPlayer from "../home/MusicPlayer"
import "./index.scss"

const { Header, Sider, Content } = Layout

function HomePageLayout() {
	return (
		<Layout>
			<Sider className="home-sider" width="15%">
				Sider
			</Sider>
			<Layout className="header-content-layout">
				<Header className="home-header">Header</Header>
				<Content className="home-content">
					<MusicPlayer />
				</Content>
			</Layout>
		</Layout>
	)
}

export default HomePageLayout
