$(document).ready(() => {
 $('#input-feild button').click(() => {
    const inputValue =  $('#input-feild input').val()
    const delBtn = '<button onclick="delClick(this)">X</button>'
     $('ol').append(`<li>${inputValue}${delBtn}</li>`)
 })
})

function delClick(e) {
   e.parentNode.remove()
}
