export const createItems = (req, res) => {
  try {
    res.json({ message: "post creato" });
  } catch (error) {
    console.log(error.message);
  }
};
