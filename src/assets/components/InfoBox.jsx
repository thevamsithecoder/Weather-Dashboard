import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const InfoBox = ({ info }) => {
  let COLD_URL =
    "https://img.freepik.com/free-vector/vector-illustration-winter-landscape_1441-130.jpg?t=st=1708783611~exp=1708787211~hmac=64e3eccf233ba2a06e4ef60bce97376dd8bb9ada492fea887ae64edafe00d6b4&w=826";

  let HOT_URL =
    "https://img.freepik.com/free-vector/hand-drawn-hot-background_23-2149449890.jpg?w=740&t=st=1708781737~exp=1708782337~hmac=99cfae32613d4b7aad36567ac6349997d2be2ce2763bfe8382fe1a582df5286d";

  let RAIN_URL =
    "https://img.freepik.com/free-vector/raining-garden_1308-26408.jpg?t=st=1708783206~exp=1708786806~hmac=2a7bec73b633b8e7ccf49aaa58b85e9ad34e777457c64cc0d66bf39e4596c5cd&w=740";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Temperatue = {info.temp}&deg;C
              <br />
              Humidity = {info.humidity}
              <br />
              Min Temp. = {info.tempMin}&deg;C
              <br />
              Max Temp. = {info.tempMax}&deg;C
              <br />
              The weather can be described as <i>{info.weather}</i> and feels
              like {info.feelsLike}&deg;C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;