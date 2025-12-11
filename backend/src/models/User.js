import mongoose from "mongoose"

//mongoose.Schema는 class이기때문에 함수와 다르게 인스턴스 생성시 new를 생성
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: true,
            unique: true,
        },
        fullName: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
            minlength: 6,
        },
        profilePic: {
            type: String,
            default: "",
        },
    },
    {timestamps: true}
);

const User = mongoose.model("User", userSchema)

export default User;