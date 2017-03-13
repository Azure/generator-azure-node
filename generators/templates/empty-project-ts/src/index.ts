import * as msRest from 'ms-rest';
import * as msRestAzure from 'ms-rest-azure';

let clientId: string = process.env['CLIENT_ID'];
let domain: string = process.env['DOMAIN'];
let secret: string = process.env['APPLICATION_SECRET'];
let subscriptionId: string = process.env['AZURE_SUBSCRIPTION_ID'];
let options: string;

msRestAzure.loginWithServicePrincipalSecret(clientId, secret, domain, options, function (err, credentials) {
    if (err) return console.log(err);

    // TODO: Write your application logic here.
});
