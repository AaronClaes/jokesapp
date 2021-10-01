import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const JokeCard = ({ joke }) => {
  return (
    <Card style={{ height: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {joke.category}
          </Typography>
          <Typography paragraph variant="body2" color="text.secondary">
            {joke.type === "single" ? joke.joke : joke.setup}
          </Typography>
          {joke.type !== "single" ? (
            <Typography paragraph variant="body2" color="text.secondary">
              {joke.delivery}
            </Typography>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default JokeCard;
