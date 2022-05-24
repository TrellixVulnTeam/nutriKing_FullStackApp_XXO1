import axios from "axios";

export function storeRecipe(recipeData) {
  axios
    .post("http://192.168.86.116:3001/recipes", recipeData)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((error) => console.log(error));
}
