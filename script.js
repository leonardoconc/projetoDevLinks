function toggleMode () {
  const html = document.documentElement;
  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if(html.classList.contains("light")){
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light1.png");
    img.setAttribute("alt", "Foto de Leonardo Pereira, cor parda, usando cavanhaque e camisa preta");
  }else {
    // se estiver sem ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Foto de Leonardo Pereira, cor parda, usando cavanhaque e camisa cinza");
  }
}