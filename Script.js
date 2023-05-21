document.querySelectorAll('.card .card-bg img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = image.getAttribute('src')
    }
});
document.querySelector('.pop-up span').onclick = () => {
    
}
let like = false;
document.querySelectorAll('.card-bg ion-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      icon.setAttribute('name', like ? 'heart-outline' : 'heart')
      if(!like){
        like=true;
      }else{
        like=false;
      }
    });
  });
document.querySelector('.likes').onclick = () => {
    window.location.href = 'likes.html';
};

  
