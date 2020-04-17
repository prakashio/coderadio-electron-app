const { menubar } = require('menubar');

const mb = menubar({
  index: "http://localhost:3000/",
  browserWindow: { width: 500, height: 400 },
  icon: './icon.png'
});

mb.on('ready', () => {

}); 