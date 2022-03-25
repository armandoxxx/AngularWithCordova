import {Translation} from "./translation";

export interface Topic {
  uuid: string;
  providerId: string;
  translations: Translation[];
}
