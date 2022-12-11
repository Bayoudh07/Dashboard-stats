import axios from "axios";

class BrandService {
  constructor(
    private readonly urlBrand = "http://localhost:8080/api" + "/getBrand"
  ) {}

  async getBrandService(id: string) {
    try {
      return await axios.get(this.urlBrand, {
        headers: {
          id_firebase: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

export default new BrandService();
