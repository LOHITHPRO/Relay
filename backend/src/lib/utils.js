import jwt from 'jsonwebtoken';

export const generateToken = (userId,res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });

    res.cookie('jwt', token, {
        expires: new Date(Date.now() + 604800000),
        secure: process.env.NODE_ENV !=="development", // set to true if your using https
        httpOnly: true,
        sameSite: "strict",
    });
    return token;
};