export interface IUserInfo {
  name: string;
  email: string;
  tel: string;
}

export interface IPlan {
  plan: "Arcade" | "Advanced" | "Pro";
  paymentMethod: string;
}

export type Steps = number;
