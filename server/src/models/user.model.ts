import { model, Schema } from "mongoose";
import {SALTROUNDS, DATABASES} from "../configs/constants.config";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    fullName: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 100, 
        trim: true
    },
    // userName: {
    //     type: String, 
    //     required: true, 
    //     minlength: 8, 
    //     maxlength: 25,
    //     unique: true,
    //     trim: true
    // },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 50
    },
    // imageTag: {
    //     type: String
    // },
    // dateOfBirth: {
    //     type: Date,
    //     required: true,
    //     set: (value: string) => {
    //       //Convert the string value to a date object before saving
    //       return new Date(value);
    //     },
    //     get: (value: Date) => {
    //       // Convert the date object to a string value in the format "YYYY-MM-DD" when returned
    //       return value.toISOString().substring(0, 10);
    //     }
    // },
    // bio: {
    //     type: String, 
    //     required: false,
    //     trim: true,
    //     default: null
    // },
    // gender: {
    //     type: String, 
    //     required: true,
    //     enum: [ENUM.MALE, ENUM.FEMALE], 
    //     trim: true
    // },
    // location: {
    //     type: String, 
    //     required: false, 
    //     trim: true
    // },
    // isDeleted: {
    //     type: Boolean,
    //     default: false
    // },
    // role: {
    //     type: String,
    //     enum: [ENUM.REGISTEREDUSER, ENUM.ADMIN],
    //     required: false,
    //     lowercase: true,
    //     trim: true,
    //     default: ENUM.REGISTEREDUSER
    // }
}, { 
    timestamps: true
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
        const salt = await bcrypt.genSalt(SALTROUNDS);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
    const update: any = this.getUpdate();
    let passwordHash;

    //Only hash the password when the password field is to be updated to avoid rehashing already hashed password
    if (update.$set.password) {
        const salt = await bcrypt.genSalt(SALTROUNDS);
        passwordHash = await bcrypt.hash(update.$set.password, salt);
    }

    update.$set.password = passwordHash;
    update.$set.updatedAt = new Date();

    next();
});
const User = model(DATABASES.USER, userSchema);
export default User;