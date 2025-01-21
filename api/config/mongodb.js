import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log('Mongo URI:', process.env.MONGO_URI); 
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

export default connectDB;
