// import mongoose from 'mongoose'

// let isConnected = false;

// export const connectToDB = async () => {
//     mongoose.set('strictQuery', true);

//     if (isConnected) {
//         console.log('Already Connected')
//         return
//     };

//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             dbName: "sample_airbnb",
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })

//         isConnected = true

//         console.log('MONGODB CONNECTED')
//     } catch (error) {
//         console.error(error)
//     }

// }