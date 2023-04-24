const express = require("express");

const app = express();

const PORT = 5001;

app.get("/", (req, res) => {
	res.json({ message: "Hello World"  });
})

app.get("/advertisement", (req, res) => {
	res.json({ message: "Hello Welcome, Have all things you want."  });
})

app.listen(PORT, () => {
	console.log("Server Running on PORT", PORT);
})