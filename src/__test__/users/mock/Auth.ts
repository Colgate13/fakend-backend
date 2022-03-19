/**
 * @interface IAuth
 * @desc Reponsável por fazer autenticação com o firebase
 **/

export interface IAuth {
    createUserWithMail(email: string, password: string): Promise<any>
    sigInWithCredential(googleUser: any): Promise<any>
    signInEmailAndPassword(email: string, password: string): Promise<any>
    verifyToken(route: string): Promise<any>
}

export default class Auth implements IAuth {

    public async createUserWithMail(email: string, password: string): Promise<any> {

        return {
            "user": {
                "refreshToken": "AIwUaOmuW9slJD6cytuUNEJHl1CaRAfqoa8HfFcKqz2PUBaRmo_hpuTueQ6VXJBt5iEOdVUkgOuqqFums9pPsnkUjzx35zKvizIScv4APkNmhipt0fK18CtvUPlsAD_psMCjHSdVs8d83AOvCft3BpEZ-1XB5GsXVF44SRpqfeakA4bwcf-q6xlJyUG4An3q54HJpyS32fPREPOzv66RCJgO4QcsrKKgeg",
                "providerId": "firebase",
                "proactiveRefresh": {},
                "reloadUserInfo": {},
                "reloadListener": null,
                "uid": "rnFE40Qt1vhoRaSUYkjqFXy63ZI2",
                "auth": {},
                "stsTokenManager": {
                    "refreshToken": "AIwUaOmuW9slJD6cytuUNEJHl1CaRAfqoa8HfFcKqz2PUBaRmo_hpuTueQ6VXJBt5iEOdVUkgOuqqFums9pPsnkUjzx35zKvizIScv4APkNmhipt0fK18CtvUPlsAD_psMCjHSdVs8d83AOvCft3BpEZ-1XB5GsXVF44SRpqfeakA4bwcf-q6xlJyUG4An3q54HJpyS32fPREPOzv66RCJgO4QcsrKKgeg",
                    "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxZDU2YTI1MWU0ZGRhM2Y0NWM0MWZkNWQ0ZGEwMWQyYjlkNzJlMGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmFrZW5kLWJhY2tlbmQiLCJhdWQiOiJmYWtlbmQtYmFja2VuZCIsImF1dGhfdGltZSI6MTY0NzcxMjU0MiwidXNlcl9pZCI6InJuRkU0MFF0MXZob1JhU1VZa2pxRlh5NjNaSTIiLCJzdWIiOiJybkZFNDBRdDF2aG9SYVNVWWtqcUZYeTYzWkkyIiwiaWF0IjoxNjQ3NzEyNTQyLCJleHAiOjE2NDc3MTYxNDIsImVtYWlsIjoidGVzdGVjcnVpYW5kb2FAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RlY3J1aWFuZG9hQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MndYyUCK2dy9yDEYycnIbt6ncIxGwRsc1v_KKIrgxQugbC_GM1M1ncYxvT5R9VDJB58RFw9k8ii0bf96q90sj2ZhwcwM7KyFAp8gMxG8U7GT0nJsfJlf9hNu7In3DWOH-UjI9Q2uh5XW8Mjux5X2kJb4YYMCCfmVdcFBACAKRYD_stVyDsayKTLE6IThDthd4vugElqhddHP8tBjponXQbzJMCqQSE1tyuCx_KeyLEY9DuauWrJQF6Fn5ugM4qEvumm2pXu9rH70agYoODV1zEMZ39QsVnVJOZT41nomX_kI2q64-gK5ynpAZoSerimVwBwG2ynccnhcmIiJWyQ7xQ",
                    "expirationTime": 1647716143407
                },
                "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxZDU2YTI1MWU0ZGRhM2Y0NWM0MWZkNWQ0ZGEwMWQyYjlkNzJlMGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmFrZW5kLWJhY2tlbmQiLCJhdWQiOiJmYWtlbmQtYmFja2VuZCIsImF1dGhfdGltZSI6MTY0NzcxMjU0MiwidXNlcl9pZCI6InJuRkU0MFF0MXZob1JhU1VZa2pxRlh5NjNaSTIiLCJzdWIiOiJybkZFNDBRdDF2aG9SYVNVWWtqcUZYeTYzWkkyIiwiaWF0IjoxNjQ3NzEyNTQyLCJleHAiOjE2NDc3MTYxNDIsImVtYWlsIjoidGVzdGVjcnVpYW5kb2FAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RlY3J1aWFuZG9hQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MndYyUCK2dy9yDEYycnIbt6ncIxGwRsc1v_KKIrgxQugbC_GM1M1ncYxvT5R9VDJB58RFw9k8ii0bf96q90sj2ZhwcwM7KyFAp8gMxG8U7GT0nJsfJlf9hNu7In3DWOH-UjI9Q2uh5XW8Mjux5X2kJb4YYMCCfmVdcFBACAKRYD_stVyDsayKTLE6IThDthd4vugElqhddHP8tBjponXQbzJMCqQSE1tyuCx_KeyLEY9DuauWrJQF6Fn5ugM4qEvumm2pXu9rH70agYoODV1zEMZ39QsVnVJOZT41nomX_kI2q64-gK5ynpAZoSerimVwBwG2ynccnhcmIiJWyQ7xQ",
                "displayName": null,
                "email": "testecruiandoa@gmail.com",
                "emailVerified": false,
                "phoneNumber": null,
                "photoURL": null,
                "isAnonymous": false,
                "tenantId": null,
                "providerData": [],
                "metadata": {}
            },
            "providerId": null,
            "_tokenResponse": {},
            "operationType": "signIn"
        };
    }

    public async sigInWithCredential(googleUser: any): Promise<any> {

        return {
            "user": {
                "refreshToken": "AIwUaOmuW9slJD6cytuUNEJHl1CaRAfqoa8HfFcKqz2PUBaRmo_hpuTueQ6VXJBt5iEOdVUkgOuqqFums9pPsnkUjzx35zKvizIScv4APkNmhipt0fK18CtvUPlsAD_psMCjHSdVs8d83AOvCft3BpEZ-1XB5GsXVF44SRpqfeakA4bwcf-q6xlJyUG4An3q54HJpyS32fPREPOzv66RCJgO4QcsrKKgeg",
                getIdToken: () => {
                    return 'AIwUaOmuW9slJD6cytuUNEJHl1CaRAfqoa8HfFcKqz2PUBaRmo_hpuTueQ6VXJBt5iEOdVUkgOuqqFums9pPsnkUjzx35zKvizIScv4APkNmhipt0fK18CtvUPlsAD_psMCjHSdVs8d83AOvCft3BpEZ-1XB5GsXVF44SRpqfeakA4bwcf-q6xlJyUG4An3q54HJpyS32fPREPOzv66RCJgO4QcsrKKgeg';
                },
                "providerId": "firebase",
                "proactiveRefresh": {},
                "reloadUserInfo": {},
                "reloadListener": null,
                "uid": "rnFE40Qt1vhoRaSUYkjqFXy63ZI2",
                "auth": {},
                "stsTokenManager": {
                    "refreshToken": "AIwUaOmuW9slJD6cytuUNEJHl1CaRAfqoa8HfFcKqz2PUBaRmo_hpuTueQ6VXJBt5iEOdVUkgOuqqFums9pPsnkUjzx35zKvizIScv4APkNmhipt0fK18CtvUPlsAD_psMCjHSdVs8d83AOvCft3BpEZ-1XB5GsXVF44SRpqfeakA4bwcf-q6xlJyUG4An3q54HJpyS32fPREPOzv66RCJgO4QcsrKKgeg",
                    "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxZDU2YTI1MWU0ZGRhM2Y0NWM0MWZkNWQ0ZGEwMWQyYjlkNzJlMGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmFrZW5kLWJhY2tlbmQiLCJhdWQiOiJmYWtlbmQtYmFja2VuZCIsImF1dGhfdGltZSI6MTY0NzcxMjU0MiwidXNlcl9pZCI6InJuRkU0MFF0MXZob1JhU1VZa2pxRlh5NjNaSTIiLCJzdWIiOiJybkZFNDBRdDF2aG9SYVNVWWtqcUZYeTYzWkkyIiwiaWF0IjoxNjQ3NzEyNTQyLCJleHAiOjE2NDc3MTYxNDIsImVtYWlsIjoidGVzdGVjcnVpYW5kb2FAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RlY3J1aWFuZG9hQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MndYyUCK2dy9yDEYycnIbt6ncIxGwRsc1v_KKIrgxQugbC_GM1M1ncYxvT5R9VDJB58RFw9k8ii0bf96q90sj2ZhwcwM7KyFAp8gMxG8U7GT0nJsfJlf9hNu7In3DWOH-UjI9Q2uh5XW8Mjux5X2kJb4YYMCCfmVdcFBACAKRYD_stVyDsayKTLE6IThDthd4vugElqhddHP8tBjponXQbzJMCqQSE1tyuCx_KeyLEY9DuauWrJQF6Fn5ugM4qEvumm2pXu9rH70agYoODV1zEMZ39QsVnVJOZT41nomX_kI2q64-gK5ynpAZoSerimVwBwG2ynccnhcmIiJWyQ7xQ",
                    "expirationTime": 1647716143407
                },
                "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxZDU2YTI1MWU0ZGRhM2Y0NWM0MWZkNWQ0ZGEwMWQyYjlkNzJlMGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmFrZW5kLWJhY2tlbmQiLCJhdWQiOiJmYWtlbmQtYmFja2VuZCIsImF1dGhfdGltZSI6MTY0NzcxMjU0MiwidXNlcl9pZCI6InJuRkU0MFF0MXZob1JhU1VZa2pxRlh5NjNaSTIiLCJzdWIiOiJybkZFNDBRdDF2aG9SYVNVWWtqcUZYeTYzWkkyIiwiaWF0IjoxNjQ3NzEyNTQyLCJleHAiOjE2NDc3MTYxNDIsImVtYWlsIjoidGVzdGVjcnVpYW5kb2FAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RlY3J1aWFuZG9hQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MndYyUCK2dy9yDEYycnIbt6ncIxGwRsc1v_KKIrgxQugbC_GM1M1ncYxvT5R9VDJB58RFw9k8ii0bf96q90sj2ZhwcwM7KyFAp8gMxG8U7GT0nJsfJlf9hNu7In3DWOH-UjI9Q2uh5XW8Mjux5X2kJb4YYMCCfmVdcFBACAKRYD_stVyDsayKTLE6IThDthd4vugElqhddHP8tBjponXQbzJMCqQSE1tyuCx_KeyLEY9DuauWrJQF6Fn5ugM4qEvumm2pXu9rH70agYoODV1zEMZ39QsVnVJOZT41nomX_kI2q64-gK5ynpAZoSerimVwBwG2ynccnhcmIiJWyQ7xQ",
                "displayName": null,
                "email": "testecruiandoa@gmail.com",
                "emailVerified": false,
                "phoneNumber": null,
                "photoURL": null,
                "isAnonymous": false,
                "tenantId": null,
                "providerData": [],
                "metadata": {}
            },
            "providerId": null,
            "_tokenResponse": {},
            "operationType": "signIn"
        };

    }

    public async signInEmailAndPassword(email: string, password: string): Promise<any> {

        return {
            "user": {
                "refreshToken": "AIwUaOmuW9slJD6cytuUNEJHl1CaRAfqoa8HfFcKqz2PUBaRmo_hpuTueQ6VXJBt5iEOdVUkgOuqqFums9pPsnkUjzx35zKvizIScv4APkNmhipt0fK18CtvUPlsAD_psMCjHSdVs8d83AOvCft3BpEZ-1XB5GsXVF44SRpqfeakA4bwcf-q6xlJyUG4An3q54HJpyS32fPREPOzv66RCJgO4QcsrKKgeg",
                getIdToken: () => {
                    return 'AIwUaOmuW9slJD6cytuUNEJHl1CaRAfqoa8HfFcKqz2PUBaRmo_hpuTueQ6VXJBt5iEOdVUkgOuqqFums9pPsnkUjzx35zKvizIScv4APkNmhipt0fK18CtvUPlsAD_psMCjHSdVs8d83AOvCft3BpEZ-1XB5GsXVF44SRpqfeakA4bwcf-q6xlJyUG4An3q54HJpyS32fPREPOzv66RCJgO4QcsrKKgeg';
                },
                "providerId": "firebase",
                "proactiveRefresh": {},
                "reloadUserInfo": {},
                "reloadListener": null,
                "uid": "rnFE40Qt1vhoRaSUYkjqFXy63ZI2",
                "auth": {},
                "stsTokenManager": {
                    "refreshToken": "AIwUaOmuW9slJD6cytuUNEJHl1CaRAfqoa8HfFcKqz2PUBaRmo_hpuTueQ6VXJBt5iEOdVUkgOuqqFums9pPsnkUjzx35zKvizIScv4APkNmhipt0fK18CtvUPlsAD_psMCjHSdVs8d83AOvCft3BpEZ-1XB5GsXVF44SRpqfeakA4bwcf-q6xlJyUG4An3q54HJpyS32fPREPOzv66RCJgO4QcsrKKgeg",
                    "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxZDU2YTI1MWU0ZGRhM2Y0NWM0MWZkNWQ0ZGEwMWQyYjlkNzJlMGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmFrZW5kLWJhY2tlbmQiLCJhdWQiOiJmYWtlbmQtYmFja2VuZCIsImF1dGhfdGltZSI6MTY0NzcxMjU0MiwidXNlcl9pZCI6InJuRkU0MFF0MXZob1JhU1VZa2pxRlh5NjNaSTIiLCJzdWIiOiJybkZFNDBRdDF2aG9SYVNVWWtqcUZYeTYzWkkyIiwiaWF0IjoxNjQ3NzEyNTQyLCJleHAiOjE2NDc3MTYxNDIsImVtYWlsIjoidGVzdGVjcnVpYW5kb2FAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RlY3J1aWFuZG9hQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MndYyUCK2dy9yDEYycnIbt6ncIxGwRsc1v_KKIrgxQugbC_GM1M1ncYxvT5R9VDJB58RFw9k8ii0bf96q90sj2ZhwcwM7KyFAp8gMxG8U7GT0nJsfJlf9hNu7In3DWOH-UjI9Q2uh5XW8Mjux5X2kJb4YYMCCfmVdcFBACAKRYD_stVyDsayKTLE6IThDthd4vugElqhddHP8tBjponXQbzJMCqQSE1tyuCx_KeyLEY9DuauWrJQF6Fn5ugM4qEvumm2pXu9rH70agYoODV1zEMZ39QsVnVJOZT41nomX_kI2q64-gK5ynpAZoSerimVwBwG2ynccnhcmIiJWyQ7xQ",
                    "expirationTime": 1647716143407
                },
                "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxZDU2YTI1MWU0ZGRhM2Y0NWM0MWZkNWQ0ZGEwMWQyYjlkNzJlMGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmFrZW5kLWJhY2tlbmQiLCJhdWQiOiJmYWtlbmQtYmFja2VuZCIsImF1dGhfdGltZSI6MTY0NzcxMjU0MiwidXNlcl9pZCI6InJuRkU0MFF0MXZob1JhU1VZa2pxRlh5NjNaSTIiLCJzdWIiOiJybkZFNDBRdDF2aG9SYVNVWWtqcUZYeTYzWkkyIiwiaWF0IjoxNjQ3NzEyNTQyLCJleHAiOjE2NDc3MTYxNDIsImVtYWlsIjoidGVzdGVjcnVpYW5kb2FAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RlY3J1aWFuZG9hQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MndYyUCK2dy9yDEYycnIbt6ncIxGwRsc1v_KKIrgxQugbC_GM1M1ncYxvT5R9VDJB58RFw9k8ii0bf96q90sj2ZhwcwM7KyFAp8gMxG8U7GT0nJsfJlf9hNu7In3DWOH-UjI9Q2uh5XW8Mjux5X2kJb4YYMCCfmVdcFBACAKRYD_stVyDsayKTLE6IThDthd4vugElqhddHP8tBjponXQbzJMCqQSE1tyuCx_KeyLEY9DuauWrJQF6Fn5ugM4qEvumm2pXu9rH70agYoODV1zEMZ39QsVnVJOZT41nomX_kI2q64-gK5ynpAZoSerimVwBwG2ynccnhcmIiJWyQ7xQ",
                "displayName": null,
                "email": "testecruiandoa@gmail.com",
                "emailVerified": false,
                "phoneNumber": null,
                "photoURL": null,
                "isAnonymous": false,
                "tenantId": null,
                "providerData": [],
                "metadata": {}
            },
            "providerId": null,
            "_tokenResponse": {},
            "operationType": "signIn"
        };
    }

    public async verifyToken(token: string): Promise<any> {
        return 'verifyToken';
    }

}