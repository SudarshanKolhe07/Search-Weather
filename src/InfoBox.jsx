import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';    
import FlareIcon from '@mui/icons-material/Flare';
import { Box } from '@mui/material';

export default function InfoBox({ info }) {
  let COLD_URL =
    "/Cold_image.jpg";
  let HOT_URL =
    "/Hot_image.avif";
  let RAIN_URL =
    "/Rain_Image.jpg";

  return (
    <div className="cardContainer">
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: 4,
          boxShadow: 4,
          overflow: "hidden",
          transition: "0.3s",
          "&:hover": { boxShadow: 8, transform: "scale(1.02)" }
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          alt="Weather condition"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            {info.city}{" "}
            {info.humidity > 80 ? (
              <ThunderstormIcon color="primary" />
            ) : info.temp > 15 ? (
              <FlareIcon color="warning" />
            ) : (
              <SevereColdIcon color="info" />
            )}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gap: 1,
              textAlign: "left",
              mt: 2,
              fontSize: "1rem",
            }}
          >
            <Typography variant="body1">
              🌡️ <b>Temperature:</b> {info.temp}&deg;C
            </Typography>
            <Typography variant="body1">
              💧 <b>Humidity:</b> {info.humidity}
            </Typography>
            <Typography variant="body1">
              🔽 <b>Min Temp:</b> {info.tempMin}&deg;C
            </Typography>
            <Typography variant="body1">
              🔼 <b>Max Temp:</b> {info.tempMax}&deg;C
            </Typography>
            <Typography variant="body1">
              🌤️ <b>Condition:</b> {info.weather}
            </Typography>
            <Typography variant="body1">
              🤔 <b>Feels Like:</b> {info.feelsLike}&deg;C
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
