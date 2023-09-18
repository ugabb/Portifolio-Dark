import mongoose from 'mongoose'

let isConnected = true;

const db_uri = 'mongodb+srv://ugabb:ugab@portifolio.j1fg0tr.mongodb.net/?retryWrites=true&w=majority'

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Already Connected')
        return
    };

    try {
        await mongoose.connect(db_uri, {
            dbName: "portifolio-details",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true

        console.log('MONGODB CONNECTED')
    } catch (error) {

    }

}