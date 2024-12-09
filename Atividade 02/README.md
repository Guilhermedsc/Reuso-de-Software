# Padrão: Factory Method

O Factory Method é usado para criar objetos sem especificar explicitamente suas classes concretas, permitindo maior flexibilidade e aderência ao Princípio Aberto/Fechado.

## Problema:

Uma aplicação precisa gerar relatórios em dois formatos diferentes: PDF e HTML. Dependendo da configuração, o sistema deve criar e manipular objetos do tipo correto (PDF ou HTML) sem expor diretamente o tipo ao código que usa os relatórios.

## Consequência:

A criação de relatórios está centralizada e encapsulada.
Adicionar novos formatos (por exemplo, CSV ou DOCX) exige apenas a criação de uma nova subclasse que implemente o método fábrica, sem alterar o código existente.
