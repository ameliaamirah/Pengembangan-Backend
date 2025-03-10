const express = require ('express');
const app = express();
const port = 3000;
const user = require('./user');
const rent = require('./rent');
const book = require('./book');

//menggunakan modul
app.use("/user", user);
app.rent("/rent", rent);
app.book("/book", book);

//routing
app.get("/", (req,res) => {
    res.end("Ambil data");
});

app.post("/", (req,res) => {
    res.end("Kirim data");
});

app.put("/", (req,res) => {
    res.end("Edit data");
});

app.patch("/", (req,res) => {
    res.end("Edit data");
}); 

app.delete("/", (req,res) => {
    res.end("Hapus data");
});

app.listen(port, () => {
    console.log('Aplikasi berjalan pada : ${port}');
});

