import bcryptjs from 'bcryptjs';
import User from '../models/userModel.js';
import { Webhook } from 'svix'; 

// API function to handle Clerk webhooks
const clerkWebhooks = async (req, res) => {
  console.log("hi");
  try {
    // Create a new Svix Webhook instance
    const wook = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);

    // Verify the headers
    await wook.verify(JSON.stringify(req.body),{
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    // Using switch cases to determine the event type
    switch (type) {
      case "user.created": {
        // Store user data
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address, 
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
          resume: "",
        };
        await User.create(userData);
        res.json({});
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData, { new: true });
        res.json({});
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        res.json({ });
        break;
      }

      default: {
        res.json({});
        break;
      }
    }
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default clerkWebhooks;
