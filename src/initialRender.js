import { productRender } from "./inventory";
import { newProductName } from "./selectors";
import { products } from "./state";

export const initialRender = () => {
  //   manageInventorySideBar.classList.remove("translate-x-full");
  newProductName.focus();
  productRender(products);
};
