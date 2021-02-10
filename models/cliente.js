import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const estatusPermitidos = {
  values: ['Enviado', 'Autorizado', 'Rechazado'],
  message: '{VALUE} estatus no válido'
}
const clienteSchema = new Schema({
  nombre: { type: String, required: [true, 'Nombre es requerido'] },
  primerApellido: { type: String, required: [true, 'Primer Apellido es requerido'] },
  segundoApellido: { type: String },
  calle: { type: String, required: [true, 'Calle es requerido'] },
  numero: { type: String, required: [true, 'Calle es requerido'] },
  colonia: { type: String, required: [true, 'Calle es requerido'] },
  codigoPostal: { type: String, required: [true, 'Calle es requerido'] },
  telefono: { type: String, required: [true, 'Calle es requerido'] },
  rfc: { type: String, required: [true, 'Calle es requerido'] },
  estatus: { type: String, default: 'Enviado', enum: estatusPermitidos },
  activo: { type: Boolean, default: true },
  fechaCreacion: { type: Date, default: Date.now },
  usuarioId: String,
  motivoRechazo: { type: String }
});

const Cliente = mongoose.model('Cliente', clienteSchema);

export default Cliente;