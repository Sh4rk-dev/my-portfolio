import { IStudies } from "@/lib/interface";

import backendImg from "../assets/backend.png";
import reactjsImg from "../assets/screenweb-reactjs.png";
import reactNativeImg from "../assets/screenapp-reactnative.png";

const orientation = {
  left: "order-0 lg:-order-1",
  right: "order-1 lg:order-2",
};

const variantsColors = {
  blue: "bg-blue-600",
  green: "bg-emerald-500",
  orange: "bg-_orange",
};

const variantsTexts = {
  textBlue: "bg-blue-100 text-blue-600",
  textGreen: "bg-emerald-100 text-emerald-500",
  textOrange: "bg-_orangeBackGround text-_orange",
};

export const contentTheStudies: IStudies[] = [
  {
    id: 1,
    tag: "Mobile",
    title: "NLW-Unite-Mobile",
    color: variantsColors.orange,
    orientation: orientation.right,
    colorText: variantsTexts.textOrange,
    buttonLink: "https://github.com/Sh4rk-dev/NLW-Unite-Mobile",
    description:
      "Desenvolvimento de uma aplicação mobile em React Native, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, Expo Framework, interface com Native Wind, gerenciamento de estado global com Zustand, roteamento por arquivos com Expo Router, consumo de API Node.js, animações com Moti.",
    image: reactNativeImg,
  },
  {
    id: 2,
    tag: "Website",
    title: "NLW-Unite-React",
    color: variantsColors.blue,
    orientation: orientation.left,
    colorText: variantsTexts.textBlue,
    buttonLink: "https://github.com/Sh4rk-dev/NLW-Unite-React",
    description:
      "Desenvolvimento de uma aplicação front-end em ReactJS, aplicação dos conceitos de Propriedades, Estados e Componentes, tipagem com Typescript, tooling com Vite, interface responsiva com TailwindCSS, consumo de API Node.js, uso de URL states.",
    image: reactjsImg,
  },
  {
    id: 3,
    tag: "Backend",
    title: "NLW-Unite-NodeJS",
    color: variantsColors.green,
    orientation: orientation.right,
    colorText: variantsTexts.textGreen,
    buttonLink: "https://github.com/Sh4rk-dev/NLW-Unite-NodeJS",
    description:
      "Desenvolvimento de uma aplicação back-end em Node.js, aplicação dos conceitos de API REST, utilizando TypeScript, Fastify como framework, integração do Prisma ORM + SQLite e Zod para validação de dados.",
    image: backendImg,
  },
];
