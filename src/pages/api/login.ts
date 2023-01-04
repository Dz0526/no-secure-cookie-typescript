// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sessions, userData } from 'data/user';
import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';

type Message = {
  status: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>,
) {
  const name = req.body.name;
  const password = req.body.password;
  const user = userData.find(
    user => user.name == name && user.password == password,
  );
  if (user) {
    const options = {
      maxAge: 60 * 60 * 24 * 10,
      secure: false,
      path: '/',
    };
    const sessionValue = sessions.find(
      session => session.user_id == user.id,
    )?.value;
    sessionValue && setCookie({ res }, 'loginId', sessionValue, options);
    console.log('kami');
    res.status(200).send({ status: 'success' });
  } else {
    res.status(400).send({ status: 'failed' });
  }
}
