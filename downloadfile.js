const { DownloaderHelper } = require('node-downloader-helper')

const dl = new DownloaderHelper("https://www.sozcu.com.tr/rss/yazarlar.xml", __dirname, { override: true })

dl.on('end', () => console.log("Download Completed"))
dl.start()
