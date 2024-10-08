import axios from "axios";

export default defineEventHandler(async (event) => {
  try {
    const gameId = event.context.params?.id;

    if (!gameId) {
      throw new Error("Game ID is required");
    }
    const { data } = await axios.get(
      `https://www.mmobomb.com/api1/game?id=${gameId}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});
