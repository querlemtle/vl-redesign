import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
const options = {};

if (!URI) {
  throw new Error("Invalid/Missing environment variable: MONGODB_URI");
}

const client = new MongoClient(URI, options);
let clientPromise;

if (process.env.NODE_ENV !== "production") {
  // Reuse connection in dev mode
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
