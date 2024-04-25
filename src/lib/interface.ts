export interface IFeedBack {
  id: string;
  name: string;
  imgURL: string;
  feedback: string;
  profession: string;
}

export interface IStudies {
  id: number;
  tag: string;
  color: string;
  title: string;
  image?: string;
  colorText: string;
  buttonLink: string;
  orientation: string;
  description: string;
}