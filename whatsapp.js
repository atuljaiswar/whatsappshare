/* 

whatsapp link

https://wa.me/?text=[post-title] [post-url]

*/

const whatsapp = document.querySelector(".whatsapp");


function init() { 

    
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("hello anil: ");
    

    whatsapp.setAttribute(

      "href", 
      'https://wa.me/?text=${postTitle} ${postUrl}'
      
    );

}

init();