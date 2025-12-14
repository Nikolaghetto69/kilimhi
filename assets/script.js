let typed = new Typed('.tp', {
  // Waits 1000ms after typing "First"
  strings: ['Топовый ^1000 Дизайнер', 'Лучший Разработчик','Создательница Игр','Мать русских Сайтов','Королева кошек'],
  typeSpeed: 150,
  loop:true
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('.click' , function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide')
})
prev.addEventListener('.click' , function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length -1])
})