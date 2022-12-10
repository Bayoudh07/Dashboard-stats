import axios from "axios";

class BrandService {
  constructor(private readonly urlBrand = "localhost:8080/api" + "/getBrand") {}

  async getBrandService() {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    try {
      return await axios.get(this.urlBrand, config);
    } catch (error) {
      throw error;
    }
  }
}

export default new BrandService();
