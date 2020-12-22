'use strict';

function open_letter() {
  document.getElementsByClassName("letter-close")[0].style.display = 'none'
  document.getElementsByClassName("letter-open")[0].style.display = 'block'
}

function go_rtan() {
  alert('숨겨진 메세지 발견!!')
  window.location.href='http://www.google.com';
}