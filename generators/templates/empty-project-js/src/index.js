'use strict';

var msRest = require('ms-rest');
var msRestAzure = require('ms-rest-azure');

var clientId = process.env['CLIENT_ID'];
var domain = process.env['DOMAIN'];
var secret = process.env['APPLICATION_SECRET'];
var subscriptionId = process.env['AZURE_SUBSCRIPTION_ID'];

msRestAzure.loginWithServicePrincipalSecret(clientId, secret, domain, function (err, credentials) {
    if (err) return console.log(err);

    // TODO: Write your application logic here.
});
