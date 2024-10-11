export type AthleteGender = "masculino" | "femenino";

export interface Athletes {
  id: string;
  name: string;
  weight: number;
  category: string;
  gender?: AthleteGender;
  socials: {
    instagram?: string;
    tiktok?: string;
  }
}