"use strict";

let position = 1;
console.log(position)

$('.button__add--js').on('click', () => {
  $('.todo-list--js').append($(`<li class="todo-list__item todo-list__item--js list-group-item">Task number ${position}</li>`));
  position = position + 1;
  console.log(position)
})

$('.button__remove--js').on('click', () => {
  $('.todo-list__item--js:last').remove();
  if (position > 1) {
    position = position - 1;
  } else position = 1;
  console.log(position)
})

$('.button__clear--js').on('click', () => {
  $('todo-list--js').empty();
  position = 1;
  console.log(position)
})
