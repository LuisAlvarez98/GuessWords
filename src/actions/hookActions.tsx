import axios from "axios";
import { SetStateAction } from "react";

export const getSecretWord = async (
  setSecretWord: React.Dispatch<React.SetStateAction<string>>
) => {
  const response = await axios.get("htttp://localhost:3030");
  setSecretWord(response.data);
};
export default {
  getSecretWord,
};
