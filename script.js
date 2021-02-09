let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');
let watch = document.getElementById('watch');
let cast = document.getElementById('cast');
let about = document.getElementById('about');


leftButton.addEventListener('click', moveLeft);
rightButton.addEventListener('click', moveRight);


function moveLeft() {
cast.style.zIndex = '-1';
cast.style.margin ='auto';
cast.style.display = 'block';
cast.style.top = '203px';
cast.style.left = '380px';
watch.style.top = '12%';
watch.style.left = '3%';
watch.style.transform = 'translate(-50%, -50%)';
watch.style.transform = 'scale(0.9,0.9)';
watch.style.zIndex = '-2';
}

function moveRight() {
  about.style.zIndex = '-1';
  about.style.margin ='auto';
  about.style.display = 'block';
  about.style.top = '203px';
  about.style.left = '380px';
  watch.style.top = '12%';
  watch.style.left = '50%';
  watch.style.transform = 'translate(-50%, -50%)';
  watch.style.transform = 'scale(0.9,0.9)';
  watch.style.zIndex = '-2';

}

function resetLeft() {
  watch.style.zIndex = '-1';
  watch.style.margin ='auto';
  watch.style.display = 'block';
  watch.style.top = '203px';
  watch.style.left = '380px';
  cast.style.top = '12%';
  cast.style.left = '3%';
  cast.style.transform = 'translate(-50%, -50%)';
  cast.style.transform = 'scale(0.9,0.9)';
  cast.style.zIndex = '-2';
  about.style.top = '12%';
  about.style.left = '50%';
  about.style.transform = 'translate(-50%, -50%)';
  about.style.transform = 'scale(0.9,0.9)';
  about.style.zIndex = '-2';

}
