const express = require("express");

const restaurantcontroller=require('../controller/restaurant')
const locationcontroller=require('../controller/location')

const router=express.Router();

router.get("/", (req, res) => {
  res.send("homepage of restaurant");
});
router.get("/allrestaurant",restaurantcontroller.getAllRestaurants);
router.get("/restaurantbycityid/:cID",restaurantcontroller.getRestaurantByCity);
router.get("/restaurantbyname/:name",restaurantcontroller.getRestaurantByName);
router.get("/restaurantbyfilter/:pageNo",restaurantcontroller.getAllRestaurantsByFilter);
router.get("/locations",locationcontroller.getAllLocations);
router.get("/locations/:la",locationcontroller.getAllLocationsByLocationAndName);
router.get("/:la/:na",restaurantcontroller.getRestaurantsLocationName);

module.exports = router;
