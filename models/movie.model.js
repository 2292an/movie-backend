const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter movie title"],
    },

    description: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
