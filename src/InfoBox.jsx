import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';    
import FlareIcon from '@mui/icons-material/Flare';

export default function InfoBox({info}){
    let COLD_URL="https://www.findingtheuniverse.com/wp-content/uploads/2017/01/Blue2Bhour2BFinland_by_Laurence2BNorah.jpg";
    let HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";

    return (
    <div className="className">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<FlareIcon/>:<SevereColdIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}&deg;</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Min Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as {info.weather}and feels like {info.feelslike}&deg;C</p>
            </Typography>
        </CardContent>
        
    </Card>
    </div>
    </div>
    )
}