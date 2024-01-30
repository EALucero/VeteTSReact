import Joi from "joi";

export const schemaFormAddPaciente = Joi.object({
    mascota: Joi.string().max(30).required().messages({
        "string.empty": "El nombre de la mascota es requerida",
        "string.max": "Máximo de 30 caracteres"
    }),
    duenio: Joi.string().max(30).required().messages({
        "string.empty": "El nombre del duenio es requerido",
        "string.max": "Máximo de 30 caracteres"
    }),
    email: Joi.string().required().email({ tlds: false }).messages({
        "string.empty": "El email del dueño es obligatorio",
        "string.email": "El formato es incorrecto",
    }),
    razza: Joi.string().max(30).required().messages({
        "string.empty": "La raza de la mascota es requerida",
        "string.max": "Máximo de 30 caracteres"
    }),
})