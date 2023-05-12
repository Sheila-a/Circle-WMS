import Joi from "joi";
import { ENUM } from "../configs/constants.config";

const createSchema = Joi.object({
    fullName: Joi.string().required().min(3).max(100).trim(),
    email: Joi.string().email().required().lowercase().trim(),
    password: Joi.string().required().min(6).max(50),
});

const editSchema = Joi.object({
    fullName: Joi.string().optional().min(3).max(100).trim(),
    email: Joi.string().email().optional().lowercase().trim(),
    password: Joi.string().optional().min(6).max(50),
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