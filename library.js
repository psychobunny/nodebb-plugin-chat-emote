(function(module) {
	"use strict";

	var Emote = {};

	Emote.parse = function (chatData, callback) {
		if (chatData.message.substring(0,4) === '/em ') {
			var username,
				picture;

			if (parseInt(chatData.fromuid, 10) === parseInt(chatData.myuid, 10)) {
				username = '<span class="chat-user chat-user-you"> '+ chatData.myUserData.username + '</span>';
			} else {
				username = '<span class="chat-user"> ' + chatData.toUserData.username + '</span>';
			}

			chatData.parsedMessage = username + '<span class="chat-emote">' + chatData.parsed.replace('/em', '') + '</span>';
		}

		callback(null, chatData);
	};

	module.exports = Emote;
}(module));