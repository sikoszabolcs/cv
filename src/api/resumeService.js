import enData from "../../data/en-data.json";
import ruData from "../../data/hu-data.json";

export const languages = [
  {
    name: "English",
    code: "en",
    data: enData,
    resumeLabels: {
      contacts: "Contacts",
      profile: "Profile",
      skills: "Skills",
      experience: "Experience",
      professional: "Professional",
      education: "Education",
    },
  },
  {
    name: "Magyar",
    code: "hu",
    data: ruData,
    resumeLabels: {
      contacts: "Elérhetőség",
      profile: "Profíl",
      skills: "",
      experience: "Tapasztalat",
      professional: "",
      education: "Végt",
    },
  },
];

export function getCurrentLanguage() {
  return languages[0];
}

export function getLanguages() {
  return languages;
}
