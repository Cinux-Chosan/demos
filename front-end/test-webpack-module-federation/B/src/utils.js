export default function createHeader(title){

  const h1 = document.createElement('h1')

  h1.innerText = title

  document.body.appendChild(h1)
}