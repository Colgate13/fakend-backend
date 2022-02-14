import { Request, Response, NextFunction } from 'express';
import { decode, verify, JwtPayload } from 'jsonwebtoken';

const token2 = "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIc2WxXEeQLeYwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjIw\nMjEyMDkzODM2WhcNMjIwMjI4MjE1MzM2WjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAMMwP66yfv3bPOrQ+u0brbR8q2e1YZaIoYaRsmDC9oycHK56\n11uXH3xv/mQM7bhoTr0Q4cQCxzT/1JnhpYVWDbLs6rSi1ZEAqiFxr1RbtfPZe2Ct\nJlJMNUSOaX+3FA0DvEor9HSTBFjBjI2LrgHaMgyZ5Y3CtSpT3DXBXOY408NvwriJ\n5r5iZ6MqSz5q4iIBHCD4UdqOV2r3qxz1SlU0w04HKnBs/o6AAdXsFMsR7dAVdCMH\n+TgF6j+rZDT7UgryKChdkMXJstUjRIslJJqingwGxhoPlUVQUd5iFynM2ES2n79c\n55/Q4DTWkKOu2cqe5OfghSny1jBHPQUH0Yv7oVcCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBADubRCZNEzDRlCcdpnS5zS4iI8Sl0z35KPciPL2b51YX\nGc+38sPCkLwKtb5OkTRLjFulSeGzncBbXTPY7LrvExP86FZrtTfE4+ieTTwetvPo\nX37C7WXrKoHJVr04RMCtswCjIuNptSKIZCe4Xx8JuaRn5NvgkLIRp1JoPMBnqfsV\n1vR+5YgUnzeQe48ONIvfrSm3uLkX1y4EgWpc5A3CGIjaWi5QLLsXoZXGT2dDk5dY\nLxZAXH6gXoQ4pRQUueHW2shF/BST77nTuyV4ZlBbVaQ8byKtNoFRs2M6osb9NT55\ntDWmKTtosNRkFX74py7dIIErJq019nfAbVvC62xLnGA=\n-----END CERTIFICATE-----\n"
const token1 = "-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIPjb3sLuQl5swDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAxMmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjIw\nMjA0MDkzODM2WhcNMjIwMjIwMjE1MzM2WjAxMS8wLQYDVQQDEyZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBANomQSDeUsKvMYkshNc2IoMnfL0BegLwmRgZMiwWz5NheixO\nP1Nd4koUqbO/lsq6IQRGHok1RfDIWrm2e4guxa1B4dmG9Bl0+L3cHXb5vQ30CKjs\nlFO9l5xgFZT21pbKt3SCvhUvdxl3RsMg9s1uIES5dAmxV21Vz8s6pIz/EjG8I3jn\ntKIWOjmBFVqFqQn3jqEmeZ5I5TiOlT1wigH0FjBnm8HYusVqco2V9XYEDqENg3Xs\nzosaN8jiMnnUuoUkwOAb0i+ppf7ynaFevmaNPmsBNDgzmn+YHi0Swpx8JZtGwV1U\nbjAgNB0TitlnZgL/l+V909wx/p7qqaiHX/wppAkCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAKf3Z49apYzQSvE7puu+xM8bfE6d/+Cd/WxZaNqPOmmc\nQ0Okb5kLNB8PjvhnSBqWidtYZvD7ph9Y6BW5AVNapo97mLFxuWYYkIwRDmP/hGKm\nfxL0lnOzPcEHaSHLQ/VZQiF5saeA4VGTI9eTvjAfv22K9a/jpNAso0Z5hpodoDVH\nLWKld/Txq1YaIeCeNS+M5f1LDXakX1kooT7gr9KBEgoI/ZosDpdPgUL9mBZhuDy1\nB3CrKvaQdsAR/7XtEmrt06oPt6AdvEwrjPgYKX5ekOOIcNhTHKd7tqSk6rleOhEB\nvOAHZVuijA1+QQhd0rBW+9Eo/KPd86YG08SZnPFHOdc=\n-----END CERTIFICATE-----\n"

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error('TOKEN IS MISSING');
    }

    // Bearer lkjadlgkjdlfgkjçsdlkfgjdlkjfgçsldkjfgçlksdjfgçlksjdfçglkjsdfgçlkjsdçfgkj
    // [, token] -> Quer fizer que eu não quero os primeiro elementro, quero somente o segundo
    const [, token] = authHeader.split(' ');

    let decodedToken: string | JwtPayload;

    try {
        decodedToken = verify(token, token1)
    } catch (error) {
        try {
            decodedToken = verify(token, token2)
        } catch (error) {
            throw new Error('TOKEN IS INVALID');
        }
    }

    if (!decodedToken || !decodedToken.sub) {
        throw new Error('TOKEN IS INVALID');
    }

    request.user = {
        uid: decodedToken.sub
    }

    console.log(request.user)
    return next();

}