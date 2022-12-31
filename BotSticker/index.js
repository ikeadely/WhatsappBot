const qrcode = require('qrcode-terminal');

const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
	puppeteer: { 	headless: false,
			executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
	}
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body === '!cek') {
		message.reply('untuk membuat sticker kirim gambar dengan caption !sticker');
	}
});

const prefix = "!";

client.on('message', async msg => {

	if (msg.body[0] == prefix){
		
		var [cmd, ...args] = msg.body.slice(1).split(" ");
		args = args.join(" ");

		if (cmd === "sticker") {
			const attachmentData = await msg.downloadMedia();
			client.sendMessage(msg.from, attachmentData, {sendMediaAsSticker: true});
		}

        // if(message.body !='sticker') {
        //     return message.reply('Format salah. Astagfhfirullah !!');
        // }

        // if (cmd.type !="sticker") {
        //     return msg.reply ('Format salah. Astagfhfirullah !!');
        // }
	}
		
});

 
client.initialize();
