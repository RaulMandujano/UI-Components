import StarWars from "../data/StarWars";
import StarWarsCard from "./StarWarsCard";

const StarWarsContainer = () => {

  <li key={StarWars.id}>
  {StarWars.title}
</li>

  return (
    <div>
      {StarWars.map((StarWars) => {
        return (
          <StarWarsCard
            title={StarWars.title}
            episode_id={StarWars.episode_id}
            director={StarWars.director}
            intro={StarWars.opening_crawl}
            release_date={StarWars.release_date}

            key={StarWars.episode_id}
          />
        );
      })}
    </div>
  );
};

export default StarWarsContainer;
