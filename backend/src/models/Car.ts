import mongoose from "mongoose";

interface ICar {
  name: string;
  brand: string;
  year: number;
  owner: {
    name: string;
    email: string;
    tel: string;
  };
}

const CarSchema = new mongoose.Schema<ICar>(
  {
    name: {
      type: String,
      required: true,
      default: "",
    },
    brand: {
      type: String,
      required: true,
      default: "",
    },
    year: {
      type: Number,
      required: true,
    },
    owner: {
      type: Object,
      required: true,
      name: {
        type: String,
        required: true,
        default: "",
      },
      email: {
        type: String,
        required: true,
        default: "",
      },
      tel: {
        type: String,
        required: true,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Car", CarSchema);
