const Restaurants = require("../model/restaurant");

exports.getAllRestaurants = (req, res) => {
  Restaurants.find()
    .then((result) =>
      res.status(200).json({
        message: "restaurant fetched sucessfully",
        data: result,
      })
    )
    .catch((error) =>
      res.status(500).json({
        message: "DB error occured",
        error: error,
      })
    );
};

exports.getRestaurantByName = (req, res) => {
  let criteria = {
    name: req.params.name,
  };
  Restaurants.find(criteria)
    .then((result) =>
      res.status(200).json({
        message: "restaurant fetch sucessully",
        data: result,
      })
    )
    .catch((error) =>
      res.status(500).json({
        message: "DB error occured",
        error: error,
      })
    );
};

exports.getRestaurantByCity = (req, res) => {
  let filter = {
    city: req.params.cID,
  };
  Restaurants.find(filter)
    .then((result) =>
      res.status(200).json({
        message: "restaurant fetch sucessfully",
        data: result,
      })
    )
    .catch((error) =>
      res.status(500).json({
        message: "DB error occured",
        error: error,
      })
    );
};

exports.getAllRestaurantsByFilter = (req, res) => {
  console.log("with filter");
  let filter = {};
  if (req.body.cuisine && req.body.cuisine.length > 0) {
    filter["Cuisine.name"] = { $in: req.body.cusine };
  }
  if (req.body.lcost && req.body.hcost) {
    filter.cost = {
      $lt: req.body.hcost,
      $gt: req.body.lcost,
    };
  }
  Restaurants.find(filter)
    .limit(2)
    .skip(2 * (req.params.pageNo - 1))
    .then((result) =>
      res.status(200).json({
        message: "restaurant fetched sucessfully",
        data: result,
      })
    )
    .catch((error) =>
      res.status(500).json({
        message: "DB error occured",
        error: error,
      })
    );
};

const fl = require("./location");

const valueinFL = fl.getAllLocationsByLocationAndName;

exports.getRestaurantsLocationName = (req, res) => {
  let filter = {
    city: valueinFL.city_id,
    name: req.params.na,
  };
  Restaurants.find(filter)
    .then((result) =>
      res.status(200).json({
        message: "restaurant fetched sucessfully",
        data: result,
      })
    )
    .catch((error) =>
      res.status(500).json({
        message: "DB error occured",
        error: error,
      })
    );
};
