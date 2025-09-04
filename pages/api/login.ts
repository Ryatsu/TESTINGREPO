import {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken'

const KEY='123dsagfds'
export default function (req: NextApiRequest, res: NextApiResponse) {
    const randomNumber = Math.floor(Math.random() * 100);

    if (!req.body) {
        res.statusCode = 404
        res.end('Error')
        return
    }

    const { username, password } = req.body
    // res.json({ num: randomNumber })

    res.json({
        token: jwt.sign(
            {
                username,
                admin: username === 'admin' && password === 'admin'
            },
            KEY
        )
    })

}