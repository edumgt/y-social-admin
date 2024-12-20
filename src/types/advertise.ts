import { IBase } from "./base";
import { CURRENCY } from "../constants/currency";

export type TCurrency = keyof typeof CURRENCY;

export enum EAdvertiseStatus {
  SCHEDULE = "schedule",
  ACTIVE = "active",
  DISABLED = "disabled",
  SUSPENDED = "suspended",
  IN_REVIEW = "in-review",
}

export interface IResult {
  date: Date;
  impressions: number;
  clicks: number;
  conversions: number;
  cost: number;
  ctr: number;
  cpc: number;
  cpv: number;
  cpm: number;
}

export interface IGoal {
  goalID: string;
}

export interface ITargetAudience {
  adID: string;
  ageRange?: string;
  gender?: string;
  location?: string;
  interest?: string;
}

export interface IAdsTarget {
  key: string;
  title: string;
  description: string;
  pros: {
    title: string;
    description: string;
  }[];
}

export interface IAdvertise extends IBase {
  userID: string;
  title: string;
  description: string;
  media_content: string;
  budget: number;
  currency: TCurrency;
  schedule_start: Date;
  schedule_end?: Date;
  cta: string;
  status: EAdvertiseStatus;
  goal: IGoal;
  adTargetAudience?: ITargetAudience;
  result: IResult[];
  score: number;
  link_action: string;
  isEnoughBudget: boolean;
  topic: string;
}
