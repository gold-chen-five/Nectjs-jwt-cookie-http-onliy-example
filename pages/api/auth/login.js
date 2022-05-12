/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.SECRET;

export default async function (req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const { username, password } = req.body;

  // Check in the database
  // if a user with this username
  // and password exists
  if (username === "Admin" && password === "Admin") {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        username: username,
      },
      secret
    );

    //JWT Token in Cookie
    const serialised = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",//set cookie https or http
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Success!" });
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}
