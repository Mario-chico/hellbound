export type AthleteGender = "masculino" | "feminino";

export interface Athletes {
  id: string;
  name: string;
  weight: number;
  category: string;
  gender?: AthleteGender;
}