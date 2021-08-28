import Noty from "noty"
Noty.overrideDefaults({
  layout   : 'center',
  theme    : 'mint',
  timeout: 3000
  // closeWith: ['click', 'button'],
  // animation: {
  //   open : 'animated fadeInRight',
  //   close: 'animated fadeOutRight'
  // }
});
export const GNotificatioin = () => {
  console.log("test");
  document.addEventListener("g-notification",({detail})=>{
    let {message, type} = detail;
    new Noty({  
        text: message,
        type
    }).show();
    console.log({detail});
  })
  return null;
} 

