# 🧪 Projeto de Automação com Selenium e PyTest

Este projeto tem como objetivo automatizar a validação da tela de **login** e **cadastro (CREATE)** de um sistema web, utilizando **Selenium WebDriver**, **Python** e **PyTest**.

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)
![PyTest](https://img.shields.io/badge/PyTest-0A9EDC?style=for-the-badge&logo=pytest&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)


---

![Projeto CRUD](https://github.com/user-attachments/assets/5bdc3fde-bed9-424c-9e1a-511373bc0a3a)
> *Imagem 1 - Projeto utilizado para os testes.*



## 📌 Funcionalidades Testadas

![Execução dos testes no terminal](https://github.com/user-attachments/assets/d8c4db01-a1f9-4ec9-bbed-e7e0f093711c)
> *Imagem 1 -Resultado da execução dos testes no terminal via PyTest, indicando todos os testes como `passed` (sucesso).*

### ✅ Login
- **Email inválido**  
  Verifica se o sistema detecta um formato de email incorreto.

- **Senha abaixo do mínimo permitido**  
  Valida que o sistema rejeita senhas com menos de 8 caracteres.

- **Login válido**  
  Verifica se o login funciona corretamente com dados válidos.

### ✅ Cadastro (Create)
- **Email inválido**  
  Verifica se o sistema detecta um email mal formatado no cadastro.

- **Senhas diferentes**  
  Verifica se o sistema detecta quando senha e confirmação são diferentes.

- **Senha curta**  
  Verifica a rejeição de senhas com menos de 8 caracteres.

- **Telefone inválido**  
  Verifica se o telefone com formato incorreto é recusado.

- **CPF inválido**  
  Verifica se um CPF inválido (mesmo com 11 dígitos) é rejeitado.

- **Cadastro válido**  
  Verifica se todos os dados válidos são aceitos e o cadastro é realizado com sucesso.

---

## 🛠 Tecnologias e Bibliotecas

- Python 3.12+
- Selenium WebDriver
- WebDriver Manager
- PyTest

---
## 👩‍🎓 Autoria
Desenvolvido por Vanessa Silva Araujo, Gabriel Dias, Jeferson Almeida, Wallace Dias e Diego Henrique.

Curso: Análise e Desenvolvimento de Sistemas - SENAI

Disciplina: Teste de Sistemas
