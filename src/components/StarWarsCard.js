import React from "react";
import { Container } from "@mui/material";
import BasicModal from "./StarWarsModal";
import RadioGroupRating from "./RadioGroupRating";
import TimesYouWatched from "./TimesYouWatched";

const StarWarsCard = (props) => {
  const { title, episode_id, director, release_date, intro} = props;

  return (
    <Container>
        <h1>{title}</h1>

        <h2>Episode: {episode_id}</h2>

        <BasicModal opening_crawl={intro}  />

        <p>Director: {director}</p>

        <p>Release Date: {release_date}</p>

        <RadioGroupRating />

        <TimesYouWatched />

    </Container>
  );
};

export default StarWarsCard;
