import enData from "../../data/en-data.json";
import ruData from "../../data/hu-data.json";

export const languages = [
  {
    name: "English",
    code: "en",
    data: enData,
    resumeLabels: {
      contacts: "Contact",
      profile: "Profile",
      skills: "Skills",
      languages: "Languages",
      experience: "Experience",
      professional: "",
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
      skills: "Szakismeret",
      languages: "Nyelvismeret",
      experience: "Tapasztalat",
      professional: "",
      education: "Végzettség",
    },
  },
];

export function getCurrentLanguage() {
  return languages[0];
}

export function getLanguages() {
  return languages;
}
