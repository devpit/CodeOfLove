# CodeOfLove 💻❤️

## Descrição

O **CodeOfLove 💻❤️** é uma página web interativa e divertida projetada para apresentar uma abordagem única sobre como pedir alguém em namoro, com um toque de humor e estilo de programador. A ideia é proporcionar uma experiência leve e descontraída para expressar sentimentos românticos usando conceitos de programação.

## Como Funciona

Ao acessar a página [CodeOfLove 💻❤️](https://codeoflove.netlify.app), os visitantes serão recebidos com uma animação criativa e uma proposta especial para pedir a pessoa amada em namoro, apresentando um estilo de programador. A página utiliza uma animação para simular um botão que se move para cima e para baixo, adicionando um toque interativo à proposta.

**Preview:**
[CodeOfLove 💻❤️ Preview](https://codeoflove.netlify.app)
![Resultado](https://codeoflove.netlify.app/assets/img/background-1.png)

## Tecnologias Utilizadas

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Personalização

Se desejar personalizar a experiência, você pode modificar o código-fonte facilmente. Os principais pontos de interesse estão na manipulação do botão e na animação.

```javascript
// Trecho de código para animar o botão (JavaScript)
var btn = document.querySelector(".no");
var position = 0;
var isAnimating = false;

btn.addEventListener("click", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

btn.addEventListener("mouseover", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});
```

Sinta-se à vontade para adaptar o conteúdo, as animações e o estilo para atender às suas preferências.

Contribuições
Contribuições são bem-vindas! Se você tem sugestões para melhorar o projeto, sinta-se à vontade para criar um fork do repositório e enviar um pull request.

Espero que o CodeOfLove 💻❤️ traga uma abordagem divertida e única para expressar sentimentos românticos com um toque de programação. Divirta-se! 😊❤️
