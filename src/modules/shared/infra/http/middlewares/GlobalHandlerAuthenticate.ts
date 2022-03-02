import { Request, Response, NextFunction } from 'express';
import { decode, verify, JwtPayload } from 'jsonwebtoken';
import AppError from '../../../../../errors/AppError';
import Auth from '../../firebase/Auth/Auth';

const token1 = "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIJAVBNiVgXD4wDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjIw\nMjIwMDkzODM2WhcNMjIwMzA4MjE1MzM2WjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAL8PRxRVZiNTRfAoEAIlGh1I35a2661GrgYYPAUv7hS3yhHY\nkL424WIgJTmZ4ra9RZRVs4aQ9sFMavU3bHThfqBpWgAXj/uAShrP0yEDd8AxW+mL\nlSago69X7vp5PXZrteO/sxfOzkxbPgEuZGq9aJ/NLE9hnOWVmGHOLbh9jH7LVuwU\n3jAc3AbcWRPGXeoiPFDMiHSSgr1KJ4MeTg6IH4ehQ8HHjnSL3taVzglEtIubVC32\nL7xIh2LRWSBD9WExwpfXUFXVEymYBkVR8dKrjP4Wb4JHVUDdInFMt1Bqxag68zgz\nZGenBIAhvijpKq5WJiTKQEfUfQkoioEBQiXnyBUCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBACgBPhgWYOKSlMExf5lp4evuwedqkcHFBEFZYFUYo2gk\nncQ5+MMd8mfKE2Lbid4HxLlmpagWmf08REvEjrAsZsjuAyWvBJsotMGkFkW8MrV+\nAZypsyaQrGJ7VpHB6yoeSR69/TTh5gyf3ft2I/Td3of+7DqjTpJl2lNSQg+57gPY\nwW0qmyh/YHWWzNwxHmCeQKwPZ8NJKj1NELDMbwiridv0fVe1MXn7oKoaiifjoDiL\nhneTFlw+fXF/OYJnkVZs4/PR7pjjfbVKOzoS+KLVoKKqJoEk/sZyokpSDRTCUXiC\naJhFyVEGhR7PFf85pPRPv/F96XjtyeYuUiTdIL2Ld1w=\n-----END CERTIFICATE-----\n"
const token2 = "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIc2WxXEeQLeYwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjIw\nMjEyMDkzODM2WhcNMjIwMjI4MjE1MzM2WjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAMMwP66yfv3bPOrQ+u0brbR8q2e1YZaIoYaRsmDC9oycHK56\n11uXH3xv/mQM7bhoTr0Q4cQCxzT/1JnhpYVWDbLs6rSi1ZEAqiFxr1RbtfPZe2Ct\nJlJMNUSOaX+3FA0DvEor9HSTBFjBjI2LrgHaMgyZ5Y3CtSpT3DXBXOY408NvwriJ\n5r5iZ6MqSz5q4iIBHCD4UdqOV2r3qxz1SlU0w04HKnBs/o6AAdXsFMsR7dAVdCMH\n+TgF6j+rZDT7UgryKChdkMXJstUjRIslJJqingwGxhoPlUVQUd5iFynM2ES2n79c\n55/Q4DTWkKOu2cqe5OfghSny1jBHPQUH0Yv7oVcCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBADubRCZNEzDRlCcdpnS5zS4iI8Sl0z35KPciPL2b51YX\nGc+38sPCkLwKtb5OkTRLjFulSeGzncBbXTPY7LrvExP86FZrtTfE4+ieTTwetvPo\nX37C7WXrKoHJVr04RMCtswCjIuNptSKIZCe4Xx8JuaRn5NvgkLIRp1JoPMBnqfsV\n1vR+5YgUnzeQe48ONIvfrSm3uLkX1y4EgWpc5A3CGIjaWi5QLLsXoZXGT2dDk5dY\nLxZAXH6gXoQ4pRQUueHW2shF/BST77nTuyV4ZlBbVaQ8byKtNoFRs2M6osb9NT55\ntDWmKTtosNRkFX74py7dIIErJq019nfAbVvC62xLnGA=\n-----END CERTIFICATE-----\n"
const token3 = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCeoQ4WoCjQhDhF\nledRMLlYb1vtom6yzlbynAcs9rveB1j5YDiV9scf3Qebf1zLAlGh4bjgGsSuulaU\nEdV9I3oxfzEOk27MUgZy6kQWh5uhMByvBszpqOKdzEF60jaVakstgJuaJt220ZqT\nauIbtkbEydfpkXDFYp6UA6cm2xanD0wz6zFUe7yFVp2oRFeTQ9IodkQbjyd94hWJ\nXd9pLjN8gnxi2j0C/M3962QcdZvpZYdBvB2mNs0hKfg0LClHZeQOcMeP7AeWlSCl\nVtKLbWnhgtcvHeXwFS4lmM5pj2LQB65sRzgjnO9bpnKgAxuzL2RlHH0FX8KktpMI\nYXOeIVYFAgMBAAECggEAEH6BpwOfStM8wKuOImiVFSd7IRH/PbNr4g0sR9YeAb+0\n1jVVnO5MlTkX5ejP3sIOd+0vGopeAicZAot6Lelm9seZc8ELx84NopxOWSNfoNqO\nWPq1iuRHMA5BjsJV76JeT8xsIZLCAhT4ZDS8bxI8eJDeVQiM99FB2PUqR8WHLPal\nx0nuxY20hOLJ8OZereXBdeuv6jg+txZh1ndK0OINjQNkEViCqcEU4VZZpvDLUFuy\nHmKY3GzyJr5Ln6pgutHZvJ7xyOR7BqOUk1EIzlxYLX1h7AkyV4KA7RoCkn2N7gdX\nkH5DrQd4el8yDJcvsRjpCBgl49+xv2MpiY11JpJJMQKBgQDUrsXztcBou4erKmrL\ne04ikOWL992YR1Vi+S22Royrk5NnS0LDQyzCnD/GVQegbunNGXzS6VKLuAYOPXHt\nZZl26TXbVuJRipJgparKpo5ZFyUmH8VKmJpGElV+Xp0e8JNMHgqGqjjZB3MMfHOr\nTcYfX9H9QEgdnrwP8OUjNPwk3QKBgQC+7/C9FdHiLrOfr9vHjVJBluIwfRjQjF4e\nB3ojYYXiVMDVnSh3BAZq5gdkjbqSYRGjk5FioSyptU8tYQ+ImugcbxR5/OIeXaiU\nzPPV4Kh/hnrw2gi+elRKRXRsyA26xOdCn8OIkk+miRt4x7gTbRIvQB02dQi1Cuc5\najVOD8tvSQKBgFzUcAhgszvDZoL6P6TTDBagQeDm7iyyLf3GHwKpJmsZPcRfICPU\nJSxIQLnTkUGgR6JC1q3EM0hSqSn7/ccNin9RaTV0ZdILdrqCdNqA+i6+oHNUeKuH\nkga1p+VBbLj9bn1Ru2xtzeREkR3JED+b8bbt/tzX+uIaz6Dxl0HXtZptAoGBAIGm\ngayTZWoVVikHi9AruQAKiVpth20M81emshvWO8gczrf+OBzgoc7ylXCFAHwm54hQ\nSrdTQ/WUxMfGkXqr3RJ5psjSm2QNKsyngqbnHuNBGLf1BVz5ycSI9u5qxU/eJj5K\nJ8bTurwVe47+5pJiTKfC/FMfEyOD3NBSuxFfjj7pAoGABjO9jW53S01EdfkS4y0M\nPYviRxxmhXvpjL6tTnvmgAT2ldGBDKpb6qNZrYaWj3czk6bjNl0GrnNdmOi8y3qA\npZfC1ELHrLD+IWqu3co3fF7PEdx6ehmv1SKXLuPP+dd6rcqdRoZ3oqMvFlkvBvnh\nyrh1HGEHvzgzRcQIpB4Y0mM=\n-----END PRIVATE KEY-----\n";

const auth = new Auth();

export default async function GlobalHandlerAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction,
): Promise<void> {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('TOKEN IS MISSING', 401);
    }

    // Bearer lkjadlgkjdlfgkjçsdlkfgjdlkjfgçsldkjfgçlksdjfgçlksjdfçglkjsdfgçlkjsdçfgkj
    // [, token] -> Quer fizer que eu não quero os primeiro elementro, quero somente o segundo
    const [, token] = authHeader.split(' ');

    //let decodedToken: string | JwtPayload;

    const decodedToken: JwtPayload = await auth.verifyToken(token).catch(() => {
        throw new AppError('TOKEN IS INVALID', 401);
    });

    if (!decodedToken || !decodedToken.sub) {
        throw new AppError('TOKEN IS INVALID', 401);
    }

    request.user = {
        uid: decodedToken.sub
    }

    console.log("request.user => ", request.user)
    return next();

}