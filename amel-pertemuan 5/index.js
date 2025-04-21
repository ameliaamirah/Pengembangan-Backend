const express = require("express");
const app = express();
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

app.use(express.json());
app.use('/api/mahasiswa', mahasiswaRoutes);

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});