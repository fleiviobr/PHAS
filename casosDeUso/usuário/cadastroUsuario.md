# Caso de Uso: Cadastro do Usuário

## Descrição:
O sistema deve permitir o cadastro dos usuários. Devem ser fornecidos os dados: Nome, Email, Senha, Data de nascimento.

## Atores:
* Usuário (Cliente).
* Sistema.

## Requisitos:
* O usuário não deve estar logado com uma conta.
* O email utilizado não pode ter sido utilizado anteriormente em outro registro.
* O usuário deve ter uma idade miníma.

## Passo a Passo:
* O usuário preenche todos os campos.
* O sistema valida os dados e busca em seus registros uma possível duplicidade.
* Caso o sistema encontre um cadastro com o mesmo email, uma mensagem informando sobre o email já estar cadatrasdo é retornada.
* Caso o sistema não encontre um cadastro com o mesmo email, ele insere o novo cadastro em seu banco.
* Se realizado com exito, direciona o usuário as telas de cadastro.
* Se ocorrer algum erro, retorna ao usuário uma mensagem de erro.