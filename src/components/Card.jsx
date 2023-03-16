import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import BugReportIcon from "@mui/icons-material/BugReport";
import Chart from "./Chart";
import { CircularProgress, Stack } from "@mui/material";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function CardComp({
	expanded,
	data,
	isLoading,
	handleExpandClick,
}) {
	// const { data, error, isLoading } = useFetchRepoQuery();

	return (
		<>
			{isLoading && (
				<Card mt={3}>
					<Stack p={1} alignItems="center">
						<CircularProgress />
					</Stack>
				</Card>
			)}
			{isLoading ||
				data.items.map((elem) => {
					return (
						<Card
							variant="outlined"
							key={elem.id}
							sx={{ maxWidth: "100vw", margin: 2, padding: 1 }}>
							<CardHeader
								avatar={
									<Avatar
										sx={{
											width: 120,
											height: 120,
										}}
										aria-label="recipe">
										<CardMedia
											component="img"
											image={elem.owner.avatar_url}
											alt="Paella dish"
										/>
									</Avatar>
								}
								title={
									<Typography
										variant="h3"
										sx={{
											fontSize: 30,
										}}
										component="h2">
										{elem.name}
									</Typography>
								}
								subheader={`${elem.description}`}
							/>

							<CardContent>
								<Typography variant="body2" color="text.secondary">
									<span className="star">
										<StarOutlineIcon />
										{elem.stargazers_count} Stars
									</span>
									<span className="star">
										<BugReportIcon />
										{elem.open_issues} Open Issues
									</span>
								</Typography>
								<CardActions disableSpacing>
									<Typography variant="body2">
										{`Last pushed at ${new Date(
											elem.pushed_at
										).toLocaleString()} by ${elem.owner.login}`}
									</Typography>
									<ExpandMore
										expand={expanded}
										onClick={handleExpandClick}
										aria-expanded={expanded}
										aria-label="show more">
										<ExpandMoreIcon />
									</ExpandMore>
								</CardActions>
							</CardContent>
							{
								<Collapse in={expanded} timeout="auto" unmountOnExit>
									<CardContent>
										<Chart repoData={elem} />
									</CardContent>
								</Collapse>
							}
						</Card>
					);
				})}
		</>
	);
}
