let head = document.createElement('h1')

head.textContent = "Welcome to My Website"
let bd = document.body

bd.append(head)
bd.setAttribute('bgcolor','red')

head.setAttribute('align','center')

let as =document.getElementById('as')
as.removeAttribute('align')