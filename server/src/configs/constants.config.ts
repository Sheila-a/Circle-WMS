const DATABASE_URI = process.env.DATABASE_URI;
const PORT = process.env.PORT || 9871;
const SALTROUNDS = 10;
const SECRET = process.env.SECRET!;
const MAXAGE = 3 * 24 * 60 * 60;
const ENUM = {
    REGISTEREDUSER: "registered user",
    ADMIN: "admin",
    MALE: "male",
    FEMALE: "female"
};
const DATABASES = {
    USER: "user"
};
const MESSAGES = {
    DATABASE: {
        CONNECTED: "MongoDB is connected",
        ERROR: "There was an error while connecting to the database."
    },
    USER: {
        DUPLICATE_EMAIL: "Email already exist.",
        DUPLICATE_USERNAME: "UserName already exist.",
        CREATED: "User created successfully.",
        INVALID_USERNAME: "UserName does not exist.",
        INVALID_PASSWORD: "Incorrect password.",
        INVALID_ID: "User ID does not exist.",
        NOT_ID: "User ID is not a valid ID.",
        UPDATED: "User updated successfully.",
        FETCHED: "User fetched successfully",
        FETCHEDALL: "All available users fetched successfully",
        DELETED: "User deleted successfully",
        LOGGEDIN: "Successfully logged in",
        LOGGEDOUT: "Successfully logged out"
    },
    AUTH: {
        TOKENERROR: 'Access Denied: Token not provided',
        INVALIDTOKEN: 'Access Denied: Invalid token',
        DENIED: 'Access Denied: Unauthorized request'
    }
};

export {
    DATABASE_URI,
    PORT,
    SALTROUNDS,
    SECRET,
    MAXAGE,
    ENUM,
    DATABASES,
    MESSAGES
};