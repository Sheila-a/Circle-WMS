import { model, Schema } from "mongoose";
import {SALTROUNDS, DATABASES} from "../configs/constants.config";
import bcrypt from "bcrypt";
import { generateRandomAvatar } from "../utils/randomAvatarURL.util";

const userSchema = new Schema({
    fullName: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 100, 
        trim: true
    },
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
    country: {
        type: String,
        required: false,
        trim: true,
        lowercase: true
    },
    city: {
        type: String,
        trim: true,
        lowercase: true
    },
    phoneNumber: {
        type: String,
        trim: true,
        lowercase: true
    },
    imageUrl: {
        type: String
    },
    balance: {
        type: String
    },
    address: {
        type: String,
        required: true,
    },
    walletId: {
        type: String,
        required: true,
    }
}, { 
    timestamps: true
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
        const salt = await bcrypt.genSalt(SALTROUNDS);
        this.password = await bcrypt.hash(this.password, salt);
    }
    const _avatarURL = await generateRandomAvatar(this.email);
    this.imageUrl = _avatarURL;
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