import { action, makeAutoObservable, observable } from "mobx";
import BrandService from "../services/index.service";
import { getIdFirebase } from "../utils/convetFunc";

class AuthStore {
  @observable brand: any = {};
  constructor() {
    makeAutoObservable(this);
  }

  @action setBrand(value: any) {
    this.brand = value;
  }
  @action async getBrandStore(id: string) {
    try {
      const result = await BrandService.getBrandService(getIdFirebase(id));
      this.setBrand(result.data.data);
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthStore();
