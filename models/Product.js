const mongoose = require("mongoose");

// schema
const productShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name for this product"],
      trim: true, // age ba picher space gula kete dey
      unique: [true, "name must be unique"],
      minLength: [3, "name must be at least 3 characters"],
      maxLength: [100, "name is to large"],
    },
    description: {
      type: String,
      required: [true, "please provide a name for this product"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "price can't be negative"],
    },
    unit: {
      type: String,
      required: true,
      // enum: ["kg", "litre", "pcs"],  ai gular bahire ar kono valuie nibe na
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value can't be {VALUE}, must be kg/litre/pcs",
      }, // ai gular bahire ar kono valuie nibe na
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "quantity must be an integer",
    },

    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message:
          "status value can't be {VALUE}, must be in-stock/out-of-stock/discontinued",
      },
    },

    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier",
    // },

    // categories: [
    //   {
    //     name: {
    //       type: String,
    //       required: true,
    //     },
    //     _id: mongoose.Schema.Types.ObjectId,
    //   },
    // ],

    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    //   required: true,
    // },

    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

// mongoose middleware = pre / post

productShema.pre("save", function (next) {
  if (this.quantity == 0) {
    this.status = "statuout-of-stock";
  }
  next();
});

productShema.post("save", function (doc, next) {
  console.log("post");
  // console.log(doc);
  next();
});

productShema.methods.logger = function () {
  console.log(this.name);
};

// Model
const Product = mongoose.model("Product", productShema);

module.exports = Product;
