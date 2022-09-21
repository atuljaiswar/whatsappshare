/* 

whatsapp link

https://wa.me/?text=[post-title] [post-url]

*/
const whatsapp = document.querySelector('.whatsapp');

function anything() {
  
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI('hello anil, i am good doing: ');

  whatsapp.setAttribute(
    'href',
    `https://wa.me/send?text=${postTitle} ${postUrl}`
  );
}

anything();


/* new share button */

const whatsapp = document.getElementById('whatsapp')

whatsapp.addEventListener('click',event => {

  if (navigator.share) {

    navigator.share({
      text: 'please read this great article: ',
      url: 'https://www.Goodsdream.com/'
    }). then(() => {
      console.log('thanks for sharing!');
    }) 

     .catch((err) =>console.error(err));
  } else {

    alert("the current browser does not support the share function.")
    
  }
});     
