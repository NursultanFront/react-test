export interface Bonus {
  bonusName: string;
  current: number;
  burn: number;
  dateBurn: Date;
  getBonus(): Promise<void>;
}
