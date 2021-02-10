import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    fieldname: { type: String },
    originalname: { type: String },
    encoding: { type: String },
    mimetype: { type: String },
    destination: { type: String },
    filename: { type: String },
    path: { type: String },
    size: { type: Number },
    idCliente: { type: String },
});

const Archivos = mongoose.model('Archivos', fileSchema);

export default Archivos;