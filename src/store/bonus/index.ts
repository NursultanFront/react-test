import { create } from "zustand";
import { api } from "../../api";
import { Bonus } from "./type";
import useStore from "../user";

const bonusStore = create<Bonus>((set) => ({
  bonusName: "",
  burn: 0,
  current: 0,
  dateBurn: new Date(),
  getBonus: async () => {
    const token = useStore().token;
    try {
      const { data } = await api.bonusToken.getBonus(token);
      set({
        bonusName: data.typeBonusName,
        burn: data.forBurningQuantity,
        current: data.currentQuantity,
        dateBurn: data.dateBurning,
      });
    } catch (e) {
      console.log(e);
    }
  },
}));

export default bonusStore;
