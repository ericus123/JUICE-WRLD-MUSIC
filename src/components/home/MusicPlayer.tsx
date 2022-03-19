import AlbumCard from "../common/AlbumCard"
import "./index.scss"

function MusicPlayer() {
	return (
		<div className="music-player-container">
			<div className="music-player-albums">
				{[1, 2, 3].map(() => (
					<AlbumCard
						title="Sample title"
						description="Sample description"
						src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
						style={{ width: 400 }}
						alt="Samplte album card"
					/>
				))}
			</div>
			<div className="music-player-player">Player</div>
		</div>
	)
}

export default MusicPlayer
