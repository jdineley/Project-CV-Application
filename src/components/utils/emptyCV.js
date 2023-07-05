import { v4 as uuidv4 } from "uuid";
import emptyAvatar from "../../assets/profileAvatar.jpg";

const exampleCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: emptyAvatar,
    address: "",
    phoneNumber: "",
    email: "",
    professionalSummary: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  education: [
    {
      id: uuidv4(),
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ],
};

export default exampleCV;
