/* eslint-disable import/no-anonymous-default-export */
import { verify } from 'jsonwebtoken'

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;

  const secret = process.env.SECRET

  if (!jwt) {
    return res.status(401).send('error')
  }

  try {
    verify(jwt,secret)
    return res.json({ data: "Top secret data!" });
  }
  catch {
    return res.status(401).send('error');
  }
 
}
