const Joi = require("joi");

require("dotenv").config();

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
        .allow("development", "production")
        .default("development"),
    PORT: Joi.number().default(5000),
    JWT_SECRET: Joi.string()
        .required()
        .description("JWT Secret required to sign"),
    MONGODB_URI: Joi.string().default(
        "mongodb+srv://chetanpanditt48:sahayata@cluster0.krp9ax1.mongodb.net/ssahayatadata?retryWrites=true&w=majority"
    ),
})
    .unknown()
    .required();
const { value, error } = envVarsSchema.validate(process.env);
process.env = value;
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
