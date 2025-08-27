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
    "https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
  let HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1632&auto=format&fit=crop";
  let RAIN_URL =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20";

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
              💧 <b>Humidity:</b> {info.humidity}%
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
