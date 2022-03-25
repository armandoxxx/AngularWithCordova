import {Media} from "./media";
import {Topic} from "./topic";
import {Rubric} from "./rubric";
import {Author} from "./author";

export interface Article {
  uuid: string;
  created: Date;
  updated: Date;
  published: Date;
  title: string;
  body: string;
  media: Media;
  rubric: Rubric;
  topics: Topic[];
  authors: Author[];
  sourceUrl: string;
  providerId: string;
  numPages: number;
  processType: string;
  pdfDownloadUrl: string;
}
