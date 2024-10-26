import app from './app.js';
import mongoose from 'mongoose';

//connect to database
(async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_URI)
            .then(conn => { console.log(`Connected to Database: ${conn.connection.host}`) })
    } catch (error) {
        console.error(error);
    }
})()

// listen the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})