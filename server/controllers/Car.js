const Car = require("../models/Car");

exports.listAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.addCar = async (req, res) => {
  try {
    const { files, body } = req;
    if (!files || !files.thumbnail || !files.images) {
      return res
        .status(400)
        .json({ message: "Thumbnail and images are required" });
    }

    const thumbnailUrl = files.thumbnail[0].path;
    const imageUrls = files.images.map((file) => file.path);

    const car = new Car({
      ...body,
      img: imageUrls,
      thumbnail: thumbnailUrl,
    });

    await car.save();
    res.status(201).json({ message: "New Car added successfully", car });
  } catch (error) {
    console.error("Failed to add Car:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Product.findByIdAndDelete(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
