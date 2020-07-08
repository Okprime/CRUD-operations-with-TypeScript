import mongoose from 'mongoose';

 const uri: string = process.env.MONGO_DB_URI as string;
 mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },  (err: any) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Mongo db was sucessfully connected');
        }
    });

