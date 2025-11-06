const express = require('express');
const {MongoClient,ServerApiVersion} = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://mdmehedi3799:Nasa20201@cluster0.2pip15y.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    app.post('/users',(req,res) =>{
      const user = req.body;
      console.log("data in the server",user);
      
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Simple Crud server Running');
});

app.listen(port,() =>{
    console.log(`Simple crud server running on port ${port} `)
});
