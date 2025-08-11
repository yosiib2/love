import { Webhook } from "svix";
import User from "../models/User.js";

// API Controller Function to Manage Clerk User with database
export const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // ✅ FIXED: typo `req,body` → `req.body`
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"] // ✅ FIXED: "sivx-signature" typo
        });

        const { data, type } = req.body;

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address, // ✅ FIXED: `email_address` → `email_addresses`
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url,
                };
                await User.create(userData);
                res.json({});
                break;
            }

            case 'user.updated': { // ✅ FIXED: added `{` to open block
                const userData = {
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url,
                };
                await User.findByIdAndUpdate(data.id, userData); // ✅ FIXED: `user` → `User`
                res.json({});
                break;
            }

            case 'user.deleted': {
                await User.findByIdAndDelete(data.id);
                res.json({});
                break;
            }

            default:
                res.json({ message: "Unhandled webhook event type" }); // Optional
                break;
        }

    } catch (error) {
        // ✅ FIXED: typo `res.jsos` → `res.json`
        res.json({ success: false, message: error.message });
    }
};
