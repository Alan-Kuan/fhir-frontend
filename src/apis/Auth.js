import { PublicClientApplication } from '@azure/msal-browser'

const config = {
    auth: {
        clientId: '7c9f6d08-d11c-497c-8475-210a8c40e8ce',
        authority: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47',
        redirectUri: 'http://localhost:5173/',
    }
};

const msal_inst = new PublicClientApplication(config);

export async function login() {
    msal_inst.loginPopup()
        .then(res => {
            if (!res) {
                msal_inst.loginPopup();
            }
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        });
}
