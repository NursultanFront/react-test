import { create } from "zustand";
import { api } from "../../api";
import { UserStore } from "./types";

const useStore = create<UserStore>((set) => ({
  isAuth: false,
  token: "",
  loading: false,
  error: false,
  getToken: async (lat: number, lon: number) => {
    set({ loading: true, error: false });
    try {
      const response = await api.accessToken.getToken({
        latitude: lat,
        longitude: lon,
      });
      const accessToken = response.accessToken;
      set({ token: accessToken, isAuth: true });
    } catch (e) {
      set({ error: true });
      console.log(e);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useStore;
