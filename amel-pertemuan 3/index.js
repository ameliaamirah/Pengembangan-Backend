const express = require ("express");
const app = express();
const port = 3000;
const users = require("./users");
const mapel = reqire("./mapel");
const siswa = reqire("./siswa");
const guru = reqire("./guru");
const kelas = reqire("./kelas");
const jadwal = reqire("./jadwal");
const nilai = reqire("./nilai");
const presensi = reqire("./presensi");

//menggunakan modul
app.use("/users", users);
app.use("/mapel", mapel);
app.use("/siswa", siswa);
app.use("/guru", guru);
app.use("/kelas", kelas);
app.use("/jadwal", jadwal);
app.use("/nilai", nilai);
app.use("/presensi", presensi);

//routing

app.get("/", (req,res) => {
    res.send("Ambil data");
});

app.post("/", (req,res) => {
    res.send("Kirim data");
});

app.put("/", (req,res) => {
    res.send("Edit data");
});

app.patch("/", (req,res) => {
    res.send("Edit data");
});

app.delete("/", (req,res) => {
    res.send("Haspus data");
});

app.listen(port, () => {
    console.log('Aplikasi berjalan pada : ${port}');
});