import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({path: "../env"})



connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error;
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log('Server listening on port', process.env.PORT || 8000);
        })
    }).catch((error) => {
        console.log("MongoDB connection faild: ", error);
    });


/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR: ", error);
    }
})();

*/

// Tutorial would be start after 5hr 20min