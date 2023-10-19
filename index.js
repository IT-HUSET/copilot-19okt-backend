const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


// Enable CORS middleware
//app.use((req, res, next) => {
//  res.header('Access-Control-Allow-Origin', '*')
//  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//  next()
//});
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/coffeedrinks', (req, res) => {
  res.json(coffeeDrinks)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


const coffeeDrinks = [
  {
      "id": "1",
      "name": "Icelandic FrostBreeeew",
      "price": "600 ISK",
      "iconURL": "https://prototyingstorage.blob.core.windows.net/files/1508732927_icon_capuccino.png"
  },
  {
      "id": "2",
      "name": "Volcano Mocha",
      "price": "720 ISK",
      "iconURL": "https://prototyingstorage.blob.core.windows.net/files/2209226123_icon_moccaccino.png"
  },
  {
      "id": "3",
      "name": "Northern Lights Latte",
      "price": "660 ISK",
      "iconURL": "https://prototyingstorage.blob.core.windows.net/files/4104636024_icon_matcha_capuccino.png"
  },
  {
      "id": "4",
      "name": "Glacier Macchiato",
      "price": "540 ISK",
      "iconURL": "https://prototyingstorage.blob.core.windows.net/files/390718124_icon_matcha_latte.png"
  },
  {
      "id": "5",
      "name": "Viking Espresso",
      "price": "360 ISK",
      "iconURL": "https://prototyingstorage.blob.core.windows.net/files/713094799_icon_cortado.png"
  }
];
