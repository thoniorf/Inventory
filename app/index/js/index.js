/* jshint esversion: 6 */
// In renderer process (web page).
const {ipcRenderer} = require('electron');
ipcRenderer.on('item-added', (event, arg) => {
  console.log(arg); // prints "okay this"
});

$("#addItem").on("click",()=>{
  ipcRenderer.send('add-item','this one');

});


// let myNotification = new Notification('Title', {
//       body: 'Lorem Ipsum Dolor Sit Amet'
//   })
//
//   myNotification.onclick = () => {
//       console.log('Notification clicked')
//   }
