ACCOUNT_SID = 'Your_Account_Sid'
AUTH_TOKEN = 'Your_Auth_Token' 
NOTIFY_SERVICE_SID = 'Your_Notify_Service_Sid'
const client = require('twilio')(ACCOUNT_SID,AUTH_TOKEN);

function sendBulkMessages(messageBody,numberList)
{
    var numbers = [];
    for(i = 0; i < numberList.length; i++)
    {
        numbers.push(JSON.stringify({ binding_type: 'sms', address: numberList[i] }))
    }

    const notificationOpts = {
      toBinding: numbers,
      body: messageBody,
    };

    client.notify
    .services(NOTIFY_SERVICE_SID)
    .notifications.create(notificationOpts)
    .then(notification => console.log(notification.sid))
    .catch(error => console.log(error));
}
  
sendBulkMessages('Greeting from geeksforgeeks',['+919826527244','+919131097553','+917057174052'])
