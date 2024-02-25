import { MongoClient } from "mongodb";
import "dotenv/config";

const pass = process.env.MONGO_PASS;
async function handler(req, res) {
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
      res.status(422).json({ message: "Invlide Input!" });
    }
    const newMessage = {
      email,
      name,
      message,
    };
    // console.log("newMessage:", newMessage);

    let client;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://hessam:${pass}@cluster0.9dsbga4.mongodb.net/my-blog?retryWrites=true&w=majority&appName=Cluster0`
      );
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!." });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}
export default handler;
