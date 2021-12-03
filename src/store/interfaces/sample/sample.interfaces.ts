export interface SampleStateInterface {
  text: string;
  name: string;
  title: string;
  contents: TvShowContentInterface[];
  error: string;
}

export interface TvShowContentInterface {
  id: number;
  score: number;
  url: string;
  name: string;
  type: string;
  language: string;
}
