<p align="center">
    <img src="./assets/images/banner.jpeg" alt="logo" width="500"/>
</p>

# BebopTechHelp

*BEBOP TECH HELP - SISTEMA DE SUPORTE E GESTÃO DE CHAMADOS COM SOLUÇÕES INTEGRADAS EM IA*

## 📬 Formulário de Abertura de Chamado - Bebop Tech Help

Este é um formulário fictício criado para simular a abertura de chamados de suporte técnico em um ambiente de cartório, como parte do projeto Bebop Tech Help.

## 🛠️ Bebop Tech Help - Formulário de Abertura de Chamado

Simulação de sistema de suporte técnico com integração em nuvem via API SheetDB e Google Sheets. Este protótipo faz parte do projeto fictício acadêmico desenvolvido para a Feira Cultural do curso de **Análise e Desenvolvimento de Sistemas - UNIP (3º Semestre).

## 📌 Visão Geral

Este formulário permite simular a abertura de chamados técnicos em um cartório digital. Utiliza HTML, CSS e JavaScript Vanilla e envia os dados preenchidos para uma planilha do Google conectada via SheetDB, funcionando como um "back-end sem servidor".

## 🚦 Status do Projeto

- ✅ Protótipo Funcional em Andamento
- 🚧 Fazer melhorias para possíveis telas de consulta e autenticação
- 📅 Apresentação: 05/06/2025

## 🧰 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- [SheetDB](https://sheetdb.io)
- Google Sheets (como banco de dados)
- Git (para versionamento)

## ✨ Funcionalidades

- Formulário com campos obrigatórios: nome, e-mail, departamento e descrição do problema.
- Integração com API REST (SheetDB) que registra os dados em uma planilha.
- Validação básica de campos no frontend.
- Mensagem de confirmação ou erro após o envio.

## 💡 Funcionalidades Futuras (Ideias)
- Consulta e listagem de chamados abertos.
- Filtro por status ou departamento.
- Sistema de resposta automática com IA simulada.
- Autenticação simples (ex: com código do funcionário)

## 📸 Demonstração

Vou add aqui um GIF ou captura de tela do formulário funcionando.

## 🚀 Como Usar

1. Clone o projeto ou baixe os arquivos HTML.

2. Crie uma planilha no Google Sheets com o cabeçalho:

nome | email | departamento | problema

3. Cadastre a planilha em [https://sheetdb.io](https://sheetdb.io) e gere sua URL da API.

4. No arquivo HTML, substitua SEU_HASH_API com sua URL:

js
fetch('https://sheetdb.io/api/v1/SEU_HASH_API', {
  method: 'POST',
  ...
})

Abra o arquivo index.html no navegador.

Teste o envio de dados. Os chamados aparecerão automaticamente na sua planilha conectada.

## 🔐 Segurança e Privacidade
⚠️ Este projeto é educacional e não possui autenticação ou criptografia. Para uso real, seria necessário implementar protocolo HTTPS, autenticação e medidas de segurança compatíveis com a LGPD, dentre outras funcionalidades e tecnologias

## 👨‍💻 Desenvolvedores
- Alice Aquino de Sousa
- Beatriz da Silva Belchior Dias
- Leonardo Dantas Santos Jutglar
- Leonardo Mesquita Dalmazzo Antunes
- Naomy Cristina Aguiar de Oliveira
- Vitor de Oliveira Costa
- *Orientação:* Coordenadora: Gislaine Stachissini

## 📃 Licença
*"Formulário de Abertura de Chamado - Bebop Tech Help"* - Projeto acadêmico, sem fins comerciais. Código aberto para fins educacionais.
*"PIM_ADS_3ºSEMESTRE(BEBOP TECH HELP_TURMA_DS3Q13).pdf"* - Projeto acadêmico, sem fins comerciais. Leitura aberta para fins educacionais.

## 📍 Local do desenvolvimento
- Universidade Paulista (UNIP) – PIM 3º Semestre - ADS - 2025

[*Clique aqui para voltar ao início!*](https://github.com/Leo-Dev-Full-Stack/dreamoto)
