import express from 'express';
import Cliente from '../models/cliente';
import Archivos from '../models/archivo';

import path from 'path';
import multer from 'multer';

const router = express.Router();

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './subidas')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

router.post('/subir/:idCliente', upload.array('file', 5), async (req, res) => {
  const _idCliente = req.params.idCliente;
  try {
    req.files.forEach((file) => {
      var objFile = file;
      objFile.idCliente = _idCliente;
      Archivos.create(objFile);
    });
    if (err) res.status(400).send(error);
    await res.send(req.files);
  }
  catch (error) {
    return res.status(500).json({ mensaje: 'Ocurrió un error interno de servidor al subir archivo', error });
  }
});
/***
 ** POST
 ***/
router.post('/nuevo-cliente', async (req, res) => {
    const body = {
      nombre: req.body.nombre,
      primerApellido: req.body.primerApellido,
      segundoApellido: req.body.segundoApellido,
      calle: req.body.calle,
      numero: req.body.numero,
      colonia: req.body.colonia,
      codigoPostal: req.body.codigoPostal,
      telefono: req.body.telefono,
      rfc: req.body.rfc,
      motivoRechazo: "",
    }
    try {
      const clienteDB = await Cliente.create(body);
      res.json(clienteDB);
    } 
    catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrió un error interno de servidor',
        error
      })
    }
});
/***
  ** GET
***/
router.get('/clientes', async (req, res) => {
  try {
    const clientesDB = await Cliente.find({ activo: true });
    res.json(clientesDB);
  } 
  catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrió un error interno de servidor',
      error
    })
  }
});
router.get('/clientes-registrados', async (req, res) => {
  try {
    const clientesDB = await Cliente.find();
    res.json(clientesDB);
  } 
  catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrió un error interno de servidor',
      error
    })
  }
});
/***
  ** GET
***/
router.get('/cliente/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const clienteDB = await Cliente.findOne({ _id });
    const documentsDB = await Archivos.find({idCliente: _id});
    res.json({Cliente: clienteDB, Documents: documentsDB});
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrió un error interno de servidor',
      error
    })
  }
});
/***
  ** DELETE
***/
router.delete('/cliente/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    Cliente.findById(_id, (err, clienteDB) => {

      if (err) return res.status(500).json({ mensaje: 'Ocurrió un error interno de servidor', error });
      if (!clienteDB) return res.status(400).json({ mensaje: 'No existe el cliente indicado con el Id: ' + _id, error });
      
      clienteDB.activo = false;
      clienteDB.save((err, clienteEliminado) => {
        if (err) return res.status(500).json({ mensaje: 'Ocurrió un error interno de servidor', error });

        res.json(clienteEliminado);
      });
    });
  }
  catch (error) {
    return res.status(500).json({ mensaje: 'Ocurrió un error interno de servidor', error });
  }
});
/***
  ** PUT procesa a cliente prospecto.
***/
router.put('/cliente-procesar/:id/:tipo/:motivo', async(req, res) => {
  const _id = req.params.id;
  const _tipo = req.params.tipo;
  const _motivo = req.params.motivo;
  try {
    Cliente.findById(_id, (err, clienteDB) => { 

      if (err) return res.status(500).json({ mensaje: 'Ocurrió un error interno de servidor', error });
      if (!clienteDB) return res.status(400).json({ mensaje: 'No existe el cliente indicado con el Id: ' + _id, error });

      clienteDB.estatus = (_tipo === 'R') ? "Rechazado" : "Autorizado";
      clienteDB.motivoRechazo = _motivo;
      clienteDB.save((err, clienteProcesado) => {
        if (err) return res.status(500).json({ mensaje: 'Ocurrió un error interno de servidor', error });

        res.json(clienteProcesado);
      });
    });
  } 
  catch (error) {
    return res.status(500).json({ mensaje: 'Ocurrió un error interno de servidor', error });
  }
});

module.exports = router;