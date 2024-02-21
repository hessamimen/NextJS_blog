function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !name ||
      !message ||
      !email.includes("@") ||
      name.trim() === "" ||
      message.trim() === ""
    ) {
      req.status(422).json({ message: "Invlide Input!" });
    }
    const newMessage = {
      email,
      name,
      message,
    };
    console.log("newMessage:", newMessage);
    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}
export default handler;
