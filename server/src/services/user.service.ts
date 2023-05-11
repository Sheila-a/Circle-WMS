import IUser from "../interfaces/user.interface";
import User from "../models/user.model";

export default class UserService {
    async findByEmail(email: string) {
        return await User.findOne({ email }, "-__v -password");
    }

    async findByEmailP(email: string) {
        return await User.findOne({ email }, "-__v");
    }

    async createUser(user: Partial<IUser>) {
        const _user = await User.create(user);
        return await User.findOne({ _id: _user.id}, "-__v -password");
    }

    async findById(id: string) {
        return await User.findOne({ _id: id }, "-__v -password");
    }

    async findAllById(id: string) {
        return await User.findOne({ _id: id}, "-__v -password");
    }

    async getAllUsers() {
        let filter: any = {};
        filter.isDeleted = false;
        //sorts in descending order based on the date created
        return await User.find(filter, "-__v -password").sort({ createdAt: 'desc' });
    }

    async editById(id: string, obj: Partial<IUser>) {
        if(await User.findOne({ _id: id, isDeleted: false })){
            return await User.findByIdAndUpdate(id, { $set: obj }, { new: true }).select("-password");
        }
    }

    async deleteById(id: string) {
        return await User.findByIdAndDelete(id);
    }

}