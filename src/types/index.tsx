export enum App {
  WELCOME = "WELCOME",
  OUTLOOK = "OUTLOOK",
  MYWORK = "MYWORK",
  MYGALLERY = "MYGALLERY",
  ERROR = "ERROR",
  WARNING = "WARNING",
  INFO = "INFO",
  HELP = "HELP",
  INTERNET_EXPLORER = "INTERNET_EXPLORER",
  EDUCATION = "EDUCATION",
}

export enum WorkType {
  HACKATHON = "HACKATHON",
  PERSONAL = "PERSONAL",
  SCHOOL = "SCHOOL",
}

export interface WorkContent {
  id: number;
  title: string;
  date: string;
  gitURL: string;
  techstack: string[];
  gallery: { src: string; height: number; width: number }[];
  overview: string;
}

export interface WorkFile {
  id: number;
  type: WorkType;
  icon: any;
  title: string;
  content: WorkContent;
}

export interface GalleryImage {
  id: number;
  title: string;
  location: string;
  desc: string;
  date: string;
  img: { src: string; height: number; width: number };
}

export interface Tab {
  id: string | number;
  title: string;
  message?: string;
  Icon: any;
  isMinimized: boolean;
  zIndex: number;
  program: App;
  prompt: boolean;
  backBtnActive: boolean;
}

export interface RootState {
  tab: {
    id: number;
    tray: Tab[];
    currentFocusedTab?: string | number;
    currentZIndex?: number;
  };
}
