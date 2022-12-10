import { action, makeAutoObservable } from "mobx";
import BrandService from "../services/index.service";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  @action async getBrandStore() {
    try {
      const result = await BrandService.getBrandService();
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthStore();
