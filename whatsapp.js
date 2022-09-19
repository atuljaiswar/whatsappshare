/* 

whatsapp link

https://wa.me/?text=[post-title] [post-url]

https://api.whatsapp.com/?text={post-title} {post-url}


*/

const whatsappshare = document.querySelector('.whatsapp-share');

function anything() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI('hello anil, i am good doing: ');

  whatsappshare.setAttribute(
    'href',
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

anything();
