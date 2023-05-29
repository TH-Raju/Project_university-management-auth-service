import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function um() {

    try {
        await mongoose.connect(config.db_url as string);
        console.log(`Database is Connected Successfully`);

        app.listen(config.port, () => {
            console.log(`Application listening on port ${config.port}`)
        })
    } catch (err) {
        console.log(`Failed to connect Database`, err);
    }
}

um();