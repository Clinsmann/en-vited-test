import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required().max(100).label("Event name"),
  hostName: yup.string().required().max(50).label("Host name"),
  location: yup.string().required().max(50).label("Location"),
  startTime: yup.string().required().label("Start time"),
  endTime: yup.string().required().label("End time"),
  image: yup.array().min(1, "Please select at least one image"),
});
