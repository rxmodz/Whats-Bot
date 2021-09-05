const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'insult ?(.*)', fromMe: false, desc: Lang.EVINS_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n\n *warn : ⚠️ ' + Lang.EVINS +'* ```' + json.insult + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
});
