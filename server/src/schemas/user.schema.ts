import Joi from "joi";

const createSchema = Joi.object({
    fullName: Joi.string().required().min(3).max(100).trim(),
    email: Joi.string().email().required().lowercase().trim(),
    password: Joi.string().required().min(6).max(50),
});

const editSchema = Joi.object({
    fullName: Joi.string().optional().min(3).max(100).trim(),
    email: Joi.string().email().optional().lowercase().trim(),
    password: Joi.string().optional().min(6).max(50),
    country: Joi.string().optional(),
    city: Joi.string().optional(),
    phoneNumber: Joi.string().optional(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required().lowercase().trim(),
    password: Joi.string().required().min(6).max(50),
});

export {
    createSchema,
    editSchema,
    loginSchema
}