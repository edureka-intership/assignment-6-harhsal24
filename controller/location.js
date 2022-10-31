const Locations = require("../model/location");

exports.getAllLocations = (req, res) => {
  Locations.find()
    .then((result) => {
      res
        .status(200)
        .json({ message: "Locations fetched successfully", data: result });
    })
    .catch((e) =>
      res.status(500).json({ message: "DB error occured", error: e })
    );
};
exports.getAllLocationsByLocationAndName = (req, res) => {
  let criteria = {
    name: req.params.la,
  };
  Locations.findOne(criteria)
    .then((result) => {
      res
        .status(200)
        .json({ message: "Locations fetched successfully", data: result });
    })
    .catch((e) =>
      res.status(500).json({ message: "DB error occured", error: e })
    );
};

