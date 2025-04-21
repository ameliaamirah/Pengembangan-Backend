const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');

router.get('/', mahasiswaController.getMahasiswa);
router.get('/:id', mahasiswaController.getMahasiswaById);
router.get('/', mahasiswaController.createMahasiswa);
router.get('/:id', mahasiswaController.updateMahasiswa);
router.get('/:id', mahasiswaController.deleteMahasiswa);

module.exports = router;