export interface IUserInfo {
  name: string;
  email: string;
  tel: string;
}

export interface IPlan {
  plan: "Arcade" | "Advanced" | "Pro";
  addOns: {
    OnlineService: boolean;
    LargerStorage: boolean;
    CustomizableProfile: boolean;
  };
  paymentMethod: string;
}

export type Steps = number;
