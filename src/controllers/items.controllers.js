import { getItemsService } from "../services/items.services.js";

export const getItems = (req, res) => {
  try {
    const items = getItemsService();

    res.json({ message: "items", body: items });
  } catch (error) {
    console.log(error);
  }
};
