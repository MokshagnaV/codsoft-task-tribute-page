import zip2 from "./assets/zip2.jpg";
import paypal from "./assets/paypal.jpg";
import spacex from "./assets/spacex.webp";
import tesla from "./assets/Tesla.webp";
import solar_city from "./assets/solar_city.webp";
import openai from "./assets/openai.jpg";
import boring_company from "./assets/boring_company.webp";
import neural_link from "./assets/neural_link.jpg";
import x from "./assets/x.webp";

export type company = {
  title: string;
  founded: number;
  description: string;
  imageSrc: string;
};

const companies: company[] = [
  {
    title: "Twitter",
    founded: 2022,
    description:
      "Twitter is a social media platform that Musk acquired in 2022. Musk has stated that he wants to make Twitter a more open and free platform for speech.",
    imageSrc: x,
  },
  {
    title: "The Boring Company",
    founded: 2017,
    description:
      "Musk founded The Boring Company, which focuses on tunnel construction and infrastructure projects, including the development of the Hyperloop transportation concept.",
    imageSrc: boring_company,
  },
  {
    title: "Neuralink Corporation",
    founded: 2016,
    description:
      "Musk founded Neuralink, a neurotechnology company focused on developing brain-computer interfaces to improve communication between the brain and external devices.",
    imageSrc: neural_link,
  },
  {
    title: "OpenAI",
    founded: 2015,
    description:
      "Musk co-founded OpenAI, an artificial intelligence research laboratory, with the mission of promoting and developing friendly AI for the benefit of humanity.",
    imageSrc: openai,
  },
  {
    title: "SolarCity",
    founded: 2006,
    description:
      "Musk co-founded SolarCity, a solar energy services company, with his cousins. Tesla later acquired SolarCity in 2016.",
    imageSrc: solar_city,
  },
  {
    title: "Tesla, Inc.",
    founded: 2003,
    description:
      "While Musk was not a co-founder, he joined Tesla Motors in its early days and played a pivotal role in the company, eventually becoming its CEO and primary driving force behind its electric vehicle innovations.",
    imageSrc: tesla,
  },
  {
    title: "SpaceX (Space Exploration Technologies Corp.)",
    founded: 2002,
    description:
      "Elon Musk founded SpaceX, a private aerospace manufacturer and space transportation company.",
    imageSrc: spacex,
  },
  {
    title: "PayPal (X.com)",
    founded: 1999,
    description:
      "Musk founded X.com, an online payment company, which later became PayPal after a merger. In 2002, PayPal was acquired by eBay.",
    imageSrc: paypal,
  },
  {
    title: "Zip2 Corporation",
    founded: 1996,
    description:
      "Elon Musk co-founded Zip2, an online city guide software company. Compaq acquired Zip2 in 1999.",
    imageSrc: zip2,
  },
];

export { companies };
