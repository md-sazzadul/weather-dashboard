import React, { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";

const AddToFavourite = () => {
  const { addToFavourites, removeFromFavourites, favourites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);

  const [isFavourite, setIsFavourite] = useState(false);

  const { latitude, longitude, location } = weatherData;

  const isInFavourites = () =>
    favourites.find((fav) => fav.location === location);

  useEffect(() => {
    setIsFavourite(!!isInFavourites());
  }, [favourites, location]);

  const handleFavourites = () => {
    if (!isInFavourites()) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }

    setIsFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(AddToFavourite);
