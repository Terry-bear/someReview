var fs = require('fs')

fs.createReadStream('test.html').pipe(fs.createWriteStream('test-pipe.html'))
