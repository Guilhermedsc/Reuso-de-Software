## Trabalho Final: Criação de um Padrão de Projeto

#### Dupla:

-   Guilherme dos Santos Cavalcante
-   Jorge Bruno Costa Alves

### 1. Descrição do Problema

Em projetos grandes, frequentemente nos deparamos com a necessidade de criar objetos de maneira flexível, sem depender diretamente de classes concretas. Isso ocorre especialmente quando há múltiplas variações de um mesmo tipo de objeto, como diferentes métodos de pagamento, notificações e conexões com bancos de dados.
Criar instâncias dessas classes diretamente pode resultar em código rígido e difícil de manter.

### 2. Descrição da Solução

Para resolver esse problema, propomos a implementação do **Padrão Factory Method**. Esse padrão permite a criação de objetos sem especificar diretamente suas classes concretas. Assim, podemos definir uma interface comum e delegar a criação dos objetos para subclasses específicas.

Esse padrão será demonstrado com três exemplos:

-   Criação de notificações (E-mail, SMS, Push Notification)
-   Conexões com bancos de dados diferentes (MySQL, PostgreSQL, MongoDB)
-   Geração de relatórios em diferentes formatos (PDF, CSV, JSON)

### 3. Diagrama de Classes (PlantUML)

-   [Código do Diagrama](assets/diagrama.wsd)
-   [Imagem do Diagrama](assets/diagrama.png)

### 4. Implementação do Padrão em JavaScript

A seguir, três exemplos práticos do **Factory Method** aplicados a diferentes cenários.

-   [Exemplo 01: Sistema de Notificações](src/Exemplo01.js)
-   [Exemplo 2: Conexão com Bancos de Dados Diferentes](src/Exemplo02.js)
-   [Exemplo 3: Geração de Relatórios](src/Exemplo03.js)

### 5. Conclusão

O **Factory Method** se mostrou uma solução eficaz para problemas onde há múltiplas variações de um mesmo tipo de objeto, proporcionando flexibilidade e reutilização de código.

Com essa abordagem, evitamos o uso direto de `new Classe()`, tornando o código mais modular e fácil de manter. Os exemplos demonstraram como esse padrão pode ser aplicado a notificações, conexões com bancos de dados e geração de relatórios, mas ele pode ser adaptado para muitos outros cenários.

O **Factory Method** permite criar sistemas mais organizados, facilitando a manutenção e a escalabilidade do código, o que o torna um padrão essencial em projetos de software.
