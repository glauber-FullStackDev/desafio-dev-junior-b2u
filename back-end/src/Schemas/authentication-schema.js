import joi from 'joi';

const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    number: joi.string().max(11).required(),
    password: joi.string().required()
});

const signInSchema = joi.object({
    email: joi.string().required(),
    password: joi.required()
 });

export {
    signUpSchema,
    signInSchema
}