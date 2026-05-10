# 🩺 Calculadora de IMC

Este projeto é uma ferramenta interativa desenvolvida para calcular o Índice de Massa Corporal (IMC) e fornecer feedback visual instantâneo. O foco principal foi a prática de **manipulação de classes via JavaScript** e a construção de um layout moderno e semântico.

## 🚀 Funcionalidades

- **Cálculo Preciso:** Processa altura e peso para gerar o índice com duas casas decimais.
- **Feedback Visual Inteligente:** A caixa de resultado muda de cor dinamicamente (verde, amarelo, vermelho) conforme a categoria de saúde.
- **Relógio em Tempo Real:** Exibe o horário exato do acesso na interface, utilizando o objeto `Date`.
- **Layout Responsivo:** Design centralizado e elegante que se adapta a diferentes tamanhos de tela.

## 🧠 Como o Código Funciona (Lógica de Programação)

O projeto segue um fluxo de interatividade baseado em eventos:

1.  **Entrada:** O usuário insere os dados de peso e altura nos campos numéricos.
2.  **Processamento:** Ao clicar em "Calcular", a função `CalculaIMC()` realiza o cálculo matemático e valida as faixas de classificação da OMS (Organização Mundial da Saúde).
3.  **Dinâmica de Estilo:** O JavaScript remove classes anteriores e aplica uma nova classe CSS (`verde`, `amarelo`, `vermelho-forte`) ao elemento de resposta.
4.  **Saída:** O resultado é exibido em uma caixa estilizada que aparece suavemente com a cor correspondente à categoria de IMC.

## 🎨 Design e Layout

O design foi construído para ser **limpo e intuitivo**:
- **Cores Pastéis:** Utilizei tonalidades suaves para os alertas de saúde, garantindo elegância e legibilidade.
- **CSS Avançado sem Complexidade:** Uso de seletores de ID e classe combinados para garantir que as cores sejam aplicadas sem conflitos de prioridade.
- **Sombras e Bordas:** Aplicação de `box-shadow` e `border-radius` para criar um aspecto de cartão moderno.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica com tags `main` e `section`.
* **CSS3:** Estilização moderna, Flexbox e transições de cor dinâmicas.
* **JavaScript (ES6):** Manipulação de DOM, tratamento de datas e lógica condicional.

---

## 💻 Como Executar o Projeto

1. Faça o download ou clone este repositório.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam na mesma pasta.
3. Abra o arquivo `index.html` em qualquer navegador moderno.

---
Desenvolvido por **Hamad Sales** como parte dos meus estudos de Desenvolvimento Web.
