import axios from "axios";

export default defineEventHandler(async (event) => {
  try {
    const { data } = await axios.get(
      "https://www.mmobomb.com/api1/games?platform=pc"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});
