import {
  App,
  GalleryImage,
  Tab,
  WorkContent,
  WorkFile,
  WorkType,
} from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import mycomputer from "../../assets/mycomputer.png";
import gallery from "../../assets/folder_image.png";
import outlook from "../../assets/outlook.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import lul from "../../assets/work/lul.png";
import butterfly from "../../assets/butterfly.png";
import mr1 from "../../assets/mr1.jpg";
import mr2 from "../../assets/mr2.jpg";
import mrIcon from "../../assets/mr_icon.png";
import MS from "../../assets/work/MS.png";
import MS2 from "../../assets/work/MS2.png";

export const TechIcon = {
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  FIREBASE:
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  TYPESCRIPT:
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  FIGMA:
    "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  GOOGLECLOUDFUNCTIONS:
    "https://img.shields.io/badge/gCloud_Functions-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  JAVA: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",
  FLUTTER:
    "https://img.shields.io/badge/flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white",
  VERILOG:
    "https://img.shields.io/badge/Verilog-%23F7DF1E.svg?style=for-the-badge&logo=verilog&logoColor=rgb(142%2C0%2C39)",
  PYTHON:
    "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
  C: "https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
  CPP: "https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&ogoColor=white",
  ROS: "https://img.shields.io/badge/ROS-%23000000.svg?style=for-the-badge&logo=ros&logoColor=white",
  ARDUINO:
    "https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white",
  HTML: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  RASPBERRYPI:
    "https://img.shields.io/badge/Raspberry%20Pi-C51A4A?style=for-the-badge&logo=Raspberry-Pi",
  REDUX:
    "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
  MATERIALUI:
    "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
  AUTOCAD:
    "https://img.shields.io/badge/AutoCAD-0696D7?style=for-the-badge&logo=autodesk&logoColor=white",
  MBOT: "https://img.shields.io/badge/Makeblock-FF7F00?style=for-the-badge&logo=makeblock&logoColor=white",
  GOOGLECLOUD:
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  MONGODB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  TELEGRAM:
    "https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white",
  VUEJS:
    "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
  WEBPACK:
    "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=white",
  SUPABASE:
    "https://img.shields.io/badge/Supabase-1E2E3B?style=for-the-badge&logo=supabase&logoColor=white",
  CHATGPT:
    "https://img.shields.io/badge/chatGPT-74aa9c?logo=openai&logoColor=white",
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome To My Website - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    1,
    {
      id: 0,
      title: "Outlook Express",
      message: "",
      Icon: outlook,
      isMinimized: false,
      zIndex: 0,
      program: App.OUTLOOK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "My Work",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    4,
    {
      id: 0,
      title: "My Photography Collection",
      message: "",
      Icon: gallery,
      isMinimized: false,
      zIndex: 0,
      program: App.MYGALLERY,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.HACKATHON,
  WorkType.PERSONAL,
  WorkType.SCHOOL,
];

export const GalleryAccordionTitles = ["Details"];

export const WorkData = [
  {
    id: 101,
    title: "Exein Photon Launch & RSA Conference 2026 - Global GTM Strategy",
    date: "Exein Project",
    gitURL: "",
    techstack: [TechIcon.FIGMA, TechIcon.NEXTJS, TechIcon.TYPESCRIPT],
    gallery: [
      { src: "/IMG_0585.png", height: 800, width: 1200 },
      { src: "/IMG_0587.png", height: 800, width: 1200 },
      { src: "/IMG_0589.png", height: 800, width: 1200 },
    ],
    overview: `Spearheaded the global Go-To-Market strategy for Photon, Exein's preemptive runtime security agent designed to safeguard Linux devices directly at the kernel level. Leading up to RSA Conference 2026 in California, I orchestrated an integrated campaign translating complex kernel-level technology, Physical AI, and agentic risk into actionable value propositions across digital and physical funnels.

The execution encompassed building the end-to-end messaging narrative, directing international creative agencies, and managing brand activation at RSA. This launch was part of an intensive global roadshow spanning three continents in a single month, reinforcing Exein's position in decentralized embedded security.`,
  },
  {
    id: 1,
    title: "Goodi - E-Commerce Brand Launch & Growth",
    date: "B2X Project",
    gitURL: "",
    techstack: [TechIcon.NEXTJS, TechIcon.FIGMA, TechIcon.JAVASCRIPT],
    gallery: [
      { src: "/image.png", height: 800, width: 1200 },
      { src: "/IMG_0570.png", height: 800, width: 1200 },
      { src: "/IMG_0568.png", height: 800, width: 1200 },
      { src: "/IMG_0566.png", height: 800, width: 1200 },
    ],
    overview: `GTM Strategy & Brand Positioning for Goodi's direct-to-consumer e-commerce expansion. Built like a well-composed bowl, each channel and content type served a precise role—from organic engagement to a paid media layer—to nourish the community and establish a fresh, distinctive tone of voice.`,
  },
  {
    id: 2,
    title: "Bulgari Hotels & Resorts - Digital Luxury Experience",
    date: "B2X Project",
    gitURL: "",
    techstack: [TechIcon.FIGMA, TechIcon.TYPESCRIPT, TechIcon.NEXTJS],
    gallery: [
      { src: "/IMG_0581.png", height: 800, width: 1200 },
      { src: "/IMG_0579.png", height: 800, width: 1200 },
      { src: "/IMG_0577.png", height: 800, width: 1200 },
      { src: "/IMG_0574.png", height: 800, width: 1200 },
    ],
    overview: `High-end brand alignment and luxury digital positioning for Bulgari Hotels & Resorts. Translated Bulgari's iconic heritage into a modular, immersive digital experience that balances global brand consistency with the unique local soul of each luxury property.`,
  },
  {
    id: 3,
    title: "Alia Servizi Ambientali - Digital Transformation & Corporate Campaign",
    date: "Mashfrog Group Project",
    gitURL: "",
    techstack: [TechIcon.TYPESCRIPT, TechIcon.FIGMA, TechIcon.NEXTJS],
    gallery: [
      { src: "/IMG_0555.png", height: 800, width: 1200 },
      { src: "/IMG_0553.png", height: 800, width: 1200 },
      { src: "/IMG_0551.png", height: 800, width: 1200 },
      { src: "/IMG_0549.png", height: 800, width: 1200 },
    ],
    overview: `Enterprise communication and digital positioning strategy for Alia Servizi Ambientali. Used provocative messaging and a split-screen visual concept to flip public perception around waste recycling, turning a highly technical brief into a memorable, high-impact campaign.`,
  },
] as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 101,
    type: WorkType.HACKATHON,
    icon: emptyfile,
    title: "Photon Launch & RSA 2026",
    content: WorkData[WorkData.findIndex((x) => x.id === 101)],
  },
  {
    id: 1,
    type: WorkType.SCHOOL,
    icon: emptyfile,
    title: "Goodi",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.SCHOOL,
    icon: emptyfile,
    title: "Bulgari Hotels & Resorts",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Alia Servizi Ambientali",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
] as WorkFile[];

// For My Photography Collection
export const PhotoCollection = [
  {
    id: 0,
    title: "Golden Gate",
    location: "San Francisco",
    desc: "Sony a6000 - 18-135mm f/3.5-5.6",
    date: "March 22nd 2026",
    img: { src: "/DSC00287 Copy_Original.jpeg", height: 800, width: 1200 },
  },
  {
    id: 1,
    title: "Venice Beach",
    location: "Los Angeles",
    desc: "Sony a6000 - 18-135mm f/3.5-5.6",
    date: "August 13th 2025",
    img: { src: "/IMG_5792 Copy_Original.jpeg", height: 800, width: 1200 },
  },
  {
    id: 2,
    title: "Garzê 2",
    location: "Garzê Tibetan Autonomous Prefecture",
    desc: "Sony a6000 - 18-135mm f/3.5-5.6",
    date: "August 14th 2025",
    img: { src: "/IMG_0298.jpeg", height: 800, width: 1200 },
  },
  {
    id: 3,
    title: "Garzê",
    location: "Garzê Tibetan Autonomous Prefecture",
    desc: "Sony a6000 - 18-135mm f/3.5-5.6",
    date: "August 14th 2025",
    img: { src: "/IMG_0272 Copy.jpeg", height: 800, width: 1200 },
  },
  {
    id: 4,
    title: "Chongqing",
    location: "Chongqing",
    desc: "Sony a6000 - 18-135mm f/3.5-5.6",
    date: "August 21st 2025",
    img: { src: "/DSC01886.jpeg", height: 800, width: 1200 },
  },
  {
    id: 5,
    title: "home",
    location: "D̷̨̬̹̄̊͝ò̶̻̬̱̂̚n̷̡͎͉̂’̵̤̒̌t̵͉͉̾̀̒ ̸̯̮̤͛ö̵̬̰́p̷̦͊͜ͅé̶͕̫̎ń̶̨̙̅͛ͅ ̴̹̖̦́́I̷͖̳̓͜n̷̢͖̻̕ẗ̴͇̯́̉͐ȩ̷͉̽͑̐r̴̠͈̤̋͐ń̶͕̭̝̅̒e̶̹͚͠ẗ̸͕͘͝ ̴̧̨̱͝͝E̵̡͈̦̐͌x̵̧͓̠̚̕p̵͎̈̒̐l̴̜̐̈́͠o̶̸͉͎͒̍̈ę̵̝͍͌r̵̛̩̊",
    desc: "Sony a6000 - 18-135mm f/3.5-5.6",
    date: "everyday",
    img: { src: "/IMG_9675_Original.jpeg", height: 800, width: 1200 },
  },
] as GalleryImage[];
