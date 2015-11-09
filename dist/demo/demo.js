var Skyweb = require('../skyweb');
var username = process.argv[2];
var password = process.argv[3];
if (!username || !password) {
    throw new Error('Username and password should be provided as commandline arguments!');
}
var skyweb = new Skyweb();
skyweb.login(username, password).then(function (skypeAccount) {
    console.log('Skyweb is initialized now');
    console.log('Here is some info about you:' + JSON.stringify(skyweb.skypeAccount.selfInfo, null, 2));
    console.log('Your contacts : ' + JSON.stringify(skyweb.contactsService.contacts, null, 2));
});

skype.requestCallback = function (requests) {
	messages.forEach(function (request) {
		skype.acceptUserRequest(request.sender);
		skype.sendMessage("8:" + request.sender, "I accepted you!");
	});
};

skyweb.messagesCallback = function (messages) {
    messages.forEach(function (message) {
        if (message.resource.from.indexOf(username) === -1 && message.resource.messagetype !== 'Control/Typing' && message.resource.messagetype !== 'Control/ClearTyping') {
            var conversationLink = message.resource.conversationLink;
            var conversationId = conversationLink.substring(conversationLink.lastIndexOf('/') + 1);
            skyweb.sendMessage(conversationId, message.resource.content + '. Cats will rule the World');
        }
    });
};
//# sourceMappingURL=demo.js.map