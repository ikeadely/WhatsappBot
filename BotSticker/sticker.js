const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

const client = new Client({
	authStrategy: new LocalAuth(),
	puppeteer: { 	headless: false,
			executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
	}

});



client.initialize();