import { Box, ImageList, ImageListItem, styled } from "@mui/material";

export default function ScreenshotsGrid({ screenshots }: { screenshots: string[] }) {
	if (screenshots.length === 0) return <></>;

	if (screenshots.length < 5)
		return (
			<ScreenshotsBox>
				<ScreenshotListHorizontal variant="quilted" cols={4} rowHeight={167} gap={10}>
					{screenshots.map((screenshot, i) => (
						<ScreenshotListItem key={i}>
							<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshot}.jpg`} />
						</ScreenshotListItem>
					))}
				</ScreenshotListHorizontal>
			</ScreenshotsBox>
		);

	return (
		<ScreenshotsBox>
			<ScreenshotListHorizontal variant="quilted" cols={4} rowHeight={167} gap={10}>
				<ScreenshotListItem cols={2} rows={2}>
					<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshots[0]}.jpg`} />
				</ScreenshotListItem>
				{screenshots.slice(1, 4).map((screenshot, i) => (
					<ScreenshotListItem key={i}>
						<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshot}.jpg`} />
					</ScreenshotListItem>
				))}
				<ScreenshotListItem>
					<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshots[4]}.jpg`} />
					<MoreBox>
						<h3>More</h3>
					</MoreBox>
				</ScreenshotListItem>
			</ScreenshotListHorizontal>
			<ScreenshotListVertical variant="quilted" cols={2} rowHeight={142} gap={10}>
				<ScreenshotListItem cols={2} rows={1.5}>
					<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshots[0]}.jpg`} />
				</ScreenshotListItem>
				{screenshots.slice(1, 4).map((screenshot, i) => (
					<ScreenshotListItem key={i}>
						<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshot}.jpg`} />
					</ScreenshotListItem>
				))}
				<ScreenshotListItem>
					<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${screenshots[4]}.jpg`} />
					<MoreBox>
						<h3>More</h3>
					</MoreBox>
				</ScreenshotListItem>
			</ScreenshotListVertical>
		</ScreenshotsBox>
	);
}

const ScreenshotsBox = styled(Box)``;

const ScreenshotListHorizontal = styled(ImageList)`
	img {
		border-radius: 6px;
	}
	@media (max-width: 600px) {
		display: none;
	}
`;

const ScreenshotListVertical = styled(ImageList)`
	img {
		border-radius: 6px;
	}
	@media (min-width: 601px) {
		display: none;
	}
`;

const ScreenshotListItem = styled(ImageListItem)`
	/* cursor: pointer; */
`;

const MoreBox = styled(Box)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	background-color: #000000ac;
	h3 {
		color: white;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		text-shadow: 1px 1px 5px black;
	}
`;
