# Jogo de Adivinhação

- Este é um jogo simples de adivinhação em JavaScript, onde o usuário tem até 10 tentativas para adivinhar um número aleatório gerado pelo sistema entre 0 e 100.
- Este projeto foi desenvolvido como parte de um exercício proposto pelo curso **Descodificadas - Trilha 3**.

## Funcionalidades

- O programa gera um número aleatório secreto entre 0 e 100 a cada novo jogo.
- O usuário tenta adivinhar o número digitando um valor e recebe dicas se o número pensado é maior ou menor que o palpite.
- O usuário possui **10 tentativas** para acertar o número.


## Tecnologias

Este projeto utiliza:
- **HTML** para estrutura da página.
- **CSS**  para estilizar os elementos do jogo.
- **JavaScript** para a lógica do jogo e interação com o usuário.

## Como Jogar

1. Entre na página [Adivinhe o número](ferrazjaa.github.io/adivinhe-numero/).
2. Digite um número de 0 a 100 no campo de entrada.
3. Clique no botão para fazer uma tentativa.
4. O jogo fornecerá dicas, dizendo se o número pensado é maior ou menor.
5. Continue até acertar ou esgotar as 10 tentativas.


## Estrutura do Código

O arquivo principal do jogo contém:

- **Variáveis de Controle**: 
  - `numeroPensado`: armazena o número aleatório gerado.
  - `tentativas`: controla o número de tentativas restantes.
  
- **Função `adivinharNumero()`**:
  - Lida com a interação do usuário, processando o valor inserido e dando feedback.
  - Verifica se o número está correto, maior ou menor.
  - Controla o número de tentativas e exibe uma mensagem ao usuário quando as tentativas acabam ou ele acerta o número.


## Exemplo de Código

Aqui está um trecho do código principal para referência:

```javascript
let numeroPensado = Math.floor(Math.random() * 100);
let tentativas = 10;

function adivinharNumero() {
    // Código principal da lógica do jogo...
}
```
## Créditos

- Favicon obtido  de [Bola de cristal ícones](www.flaticon.com/br/icones-gratis/bola-de-cristal).
- [Math Random - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

