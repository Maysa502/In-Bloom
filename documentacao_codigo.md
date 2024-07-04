
# Documentação de Código

## PAGE INDEX.HTML

### Código Inicial 

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Inicial - Nirvana</title>
    <link rel="stylesheet" href="styles.css"> <!--vinculando o CSS -->
</head>
<body>
    <header>
        <!-- Exibindo o logo da In Bloom -->
        <img src="logo.png" alt="Logo da Empresa" class="logo">
        
        <!-- Navegação principal do site -->
        <nav>
            <a href="#" class="nav-item active">Inicial</a> <!-- página inicial -->
            <a href="#" class="nav-item">Produtos</a> <!-- página de produtos -->
            <a href="#" class="nav-item">Contatos</a> <!-- página de contatos -->
            <a href="#" class="nav-item">Sobre</a> <!-- página sobre -->
        </nav>
    </header>

    <main>
        <!-- Seção introdutória -->
        <section class="intro">
            <h1>In Bloom</h1> <!-- Título -->
            <p>Coloca o texto da In bloom</p> <!-- Lugar pra colocar o paragrafo depois -->
        </section>
    </main>

    <footer>
        <!-- Ícones de redes sociais -->
        <div class="social-icons">
            <a href="#"><img src="facebook-icon.png" alt="Facebook"></a> 
            <a href="#"><img src="twitter-icon.png" alt="Twitter"></a> 
            <a href="#"><img src="instagram-icon.png" alt="Instagram"></a>
        </div>
    </footer>
</body>
</html>
```

## Código Final

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Inicial - In Bloom</title>
    <link rel="stylesheet" href="styles.css"> <!--vinculando o CSS -->
    <style>
        /* Adiciona uma transição de opacidade para suavizar o carregamento da página */
        body {
            opacity: 0; /* Opacidade inicial configurada para 0 */
            transition: opacity 1s ease-in; /* Transição suave de opacidade de duração 1 segundo */
        }
        /* aplicado para o corpo enquanto carrega */
        body.loaded {
            opacity: 1; /*opacidade sendo aplicada pra 1*/
        }

        /* Transição sobre os ícones sociais */
        .social-icons a {
            transition: transform 0.3s; /* Transição de 0.3 segundos para a propriedade transform - propriedade que permite aplicar transformações como escala, rotação, translação, etc. No caso dessa linha estou aplicando uma transição suave de 0.3s */
        }
        /* Defindo o efeito quando o mouse passa por cima */
        .social-icons a:hover {
            transform: scale(1.1); /* Escala os icons em 1.1 vezes o tamanho original */

        /*Portando o primeeiro trecho é posto o efeito e o segundo trecho de codigo é aplicado na interação do usuario*/
        }
    </style>
    <!-- Conexão com fontes do Google -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Importação da fonte "Lora" do Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
</head>
<body class="pagina-inicial pagina-index">
    <header>
        <!-- Exibe o logo da loja In Bloom -->
        <img src="In_Bloom-logo.png" alt="Logo In Bloom" class="logo">
        
        <!-- Navegação principal -->
        <nav>
            <a href="index.html" class="nav-item active">Home</a> <!-- página inicial -->
            <a href="produtos.html" class="nav-item">Produtos</a> <!-- página de produtos -->
            <a href="contatos.html" class="nav-item">Contatos</a> <!-- página de contatos -->
            <a href="sobre.html" class="nav-item">Sobre</a> <!-- página sobre -->
            <a href="CompraProduto.html" class="nav-item">Comprar</a> <!-- página de compras -->
        </nav>
    </header>

    <main>
        <!-- Introduzindo os elemnetos da pagina home -->
        <section class="intro">
            <h1>Bem-vindo à In Bloom!</h1> <!-- Título de Boas Vindas a In Bloom-->
            <p>
                Na In Bloom, celebramos o rock com CDs, discos de vinil e camisetas da banda Nirvana. 
                Explore nosso catálogo e encontre peças únicas que vão elevar sua coleção e estilo. 
                Navegue, ouça e vista-se com a atitude que só a In Bloom pode oferecer.
            </p> <!-- Parágrafo -->
        </section>
    </main>

    <footer>
        <!-- Ícones de redes sociais -->
        <div class="social-icons">
            <a href="https://github.com/Maysa502/In-Bloom"><img src="github.png" alt="GitHub"></a> <!-- Link para GitHub -->
            <a href="https://www.linkedin.com/in/maysaarruda"><img src="linkedin.png" alt="LinkedIn"></a> <!-- Link para LinkedIn -->
            <a href="mailto:inbloomLoja87@gmail.com"><img src="google.png" alt="Gmail"></a> <!-- Link para Gmail-->
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            /* Colocando o efeito suave para seções da página */
            const links = document.querySelectorAll('a[href^="#"]');
            /* document.querySelectorAll() é um método que permite selecionar elementos do DOM
            'a[href^="#"]' é o seletor CSS 
            a: Seleciona todos os elementos âncora (link internos) (<a>)
            [href^="#"]: Filtra apenas os elementos âncora que têm o atributo href começando com #
            Resumindo essa linha foi usada para selecionar todos os links âncora da página role suavemente para seções específicas*/



            /*Selecionando todos elementos do trecho anterior e executando*/
            links.forEach(link => {
                link.addEventListener('click', function(e) { // add um ouvinte de eventos
                    e.preventDefault(); //  impedindo o comportamento padrão do navegador para outros links âncoras
                    const targetId = this.getAttribute('href').substring(1);  // Obtém o ID do elemento alvo removend o '#'
                    const targetElement = document.getElementById(targetId); // Encontra o elemento na página com o ID correspondente
                    // Parte do código é importantissima para localizar os elemento na página para onde deseja rolar suavemente quando um link âncora é clicado


                    if (targetElement) {
                        window.scrollTo({ // Rola a página suavemente até o elemento de destino
                            top: targetElement.offsetTop - 80, // Defindo a posição de rolagem com um deslocamento de 80 pixels do topo
                            behavior: 'smooth' // Anima a rolagem suavemente
                        });
                    }
                });
            });

            /* Transição suave ao navegar entre páginas */
            const navItems = document.querySelectorAll('nav a'); // Selecionando todos os elementos âncora dentro do elemento <nav>
            navItems.forEach(item => { // Itera sobre cada elemento âncora encontrado
                item.addEventListener('click', function(e) { // Adicionando um ouvinte de evento de clique a cada link de navegação
                    e.preventDefault();  // Impede  que navegue por outras paginas 
                    const href = this.getAttribute('href'); // Obtém o href do link clicado
                    document.body.classList.remove('loaded'); // Removendo a classe 'loaded'
                    // dando um pequeno atraso no redirecionamento do URL
                    setTimeout(() => { 
                        window.location.href = href;
                    }, 500); // (0,5 segundos) antes de redirecionar
                });
            });

            document.body.classList.add('loaded'); /* Adicionando uma classe 'loaded' ao 'body' após o carregamento do conteúdo */
        });
    </script>
</body>
</html>
```


## PAGE PRODUTOS.HTML

### Código Inicial 
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos</title>
    <!-- Link para o arquivo de estilos externo -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Cabeçalho -->
    <header>
        <img src="logo.png" alt="Logo da Empresa" class="logo">
        <nav>
            <a href="index.html" class="nav-item">Home</a>
            <a href="produtos.html" class="nav-item active">Produtos</a>
            <a href="contatos.html" class="nav-item">Contatos</a>
            <a href="sobre.html" class="nav-item">Sobre</a>
        </nav>
    </header>

    <!-- Conteúdo principal da página -->
    <main>
        <!-- Introduzindo o banner -->
        <section class="banner">
            <h1>Banner Título</h1>
            <div class="banner-container">
                <img src="banner-placeholder.png" alt="Banner" class="banner-img">
                <!-- navegação do banner -->
                <div class="banner-nav">
                    <span class="nav-circle"></span>
                    <span class="nav-circle"></span>
                    <span class="nav-circle"></span>
                </div>
            </div>
        </section>

        <!-- produtos -->
        <section class="produtos">
            <h1 class="produtos-title">Produtos</h1>
            <div class="categoria">
                <div class="categoria-title">Categoria</div>
                <!-- filtrando as categoria -->
                <div class="categoria-filtros">
                    <span>Bonecos</span>
                    <span>CDs</span>
                    <span>Vinils</span>
                    <span>Camisetas</span>
                    <span>Promoções</span>
                </div>
            </div>
            <!-- listando produtos -->
            <div class="produto-lista">
                <!-- lista de prodtudo teste -->
                <div class="produto-item">
                    <img src="produto1.png" alt="Produto 1" class="produto-img">
                    <h2 class="produto-nome">Produto 1</h2>
                    <p class="produto-preco">R$ 99,99</p>
                    <button class="produto-comprar">Comprar</button>
                    <button class="produto-carrinho">Adicionar ao Carrinho</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Rodapé da página -->
    <footer>
        <div class="social-icons">
            <img src="facebook-icon.png" alt="Facebook">
            <img src="twitter-icon.png" alt="Twitter">
            <img src="instagram-icon.png" alt="Instagram">
        </div>
    </footer>
</body>
</html>
```
### Código final
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos</title>
    <link rel="stylesheet" href="styles.css">
    <!-- Links para fontes google -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
</head>
<body class="pagina-produtos">
    <header>
        <img src="In_Bloom-logo.png" alt="Logo In Bloom" class="logo">
        <nav>
            <a href="index.html" class="nav-item">Home</a>
            <a href="produtos.html" class="nav-item active">Produtos</a>
            <a href="contatos.html" class="nav-item">Contatos</a>
            <a href="sobre.html" class="nav-item">Sobre</a>
        </nav>
    </header>
    <main>
        <!-- banner -->
        <section class="banner">
            <h1>NewsVana</h1> <!--TITULO DO BANNER -->
            <div class="banner-container">
                <img src="banner.png" alt="Banner" class="banner-img">
            </div>
        </section>

        <!-- produtos -->
        <section class="produtos">
            <h1 class="produtos-title">Produtos</h1>
            <div class="categoria">
                <a href="#" class="nav-item todos">Todos</a>
            </div>
            <div class="produto-lista">
                <!--produtos da In Bloom -->
                <div class="produto-item">
                    <a href="compra_produto.html?produto=produto1">
                        <img src="produto1.png" alt="Produto 1" class="produto-img">
                    </a>
                    <h2 class="produto-nome">Disco - In Utero</h2>
                    <p class="produto-preco">R$ 175,00</p>
                </div>
                <div class="produto-item">
                    <a href="compra_produto.html?produto=produto2">
                        <img src="produto2.png" alt="Produto 2" class="produto-img">
                    </a>
                    <h2 class="produto-nome">Poster - NeverMind 1</h2>
                    <p class="produto-preco">R$ 40,00</p>
                </div>
                <div class="produto-item">
                    <a href="compra_produto.html?produto=produto3">
                        <img src="produto3.png" alt="Produto 3" class="produto-img">
                    </a>
                    <h2 class="produto-nome">Boneco Kunk Kurt Cobain 1</h2>
                    <p class="produto-preco">R$ 478,99</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Rodapé da página -->
    <footer>
        <div class="social-icons">
            <a href="https://github.com/Maysa502/In-Bloom"><img src="github.png" alt="GitHub"></a>
            <a href="https://www.linkedin.com/in/maysaarruda"><img src="linkedin.png" alt="LinkedIn"></a>
            <a href="mailto:inbloomLoja87@gmail.com"><img src="google.png" alt="Gmail"></a>
        </div>
    </footer>

    <!-- Script JavaScript para funcionalidades da página -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Função para scroll suave ao clicar em links internos
            const links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Função para transição de páginas ao clicar nos links de navegação
            const navItems = document.querySelectorAll('nav a');
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const href = this.getAttribute('href');
                    document.body.classList.remove('loaded');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500);
                });
            });

            document.body.classList.add('loaded');
        });
    </script>
</body>
</html>
```
## PAGE CONTATOS.HTML

### Código Inicial 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contatos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <img src="logo.png" alt="Logo" class="logo">
        <nav>
            <a href="index.html" class="nav-item">Home</a>
            <a href="produtos.html" class="nav-item">Produtos</a>
            <a href="contatos.html" class="nav-item active">Contatos</a>
            <a href="sobre.html" class="nav-item">Sobre</a>
        </nav>
    </header>

    <main>
        <!-- contatos seção principal -->
        <section class="contact-section">
            <h1 class="contact-title">Contate-nos</h1>
            <div class="contact-content">
                <div class="store-info">
                </div>
                <!-- Formulário de contato -->
                <div class="contact-form">
                    <h2>Formulario de contato</h2>
                    <p>Preencha o formulário abaixo para nos contatar.</p>
                    <form>
                        <!-- os campos do formulário -->
                        <label for="name">Nome:</label>
                        <input type="text" id="name" name="name" required>
                        
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        
                        <label for="subject">Assunto:</label>
                        <input type="text" id="subject" name="subject" required>
                        
                        <label for="message">Mensagem:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                        
                        <!-- adicionando o botão de envio -->
                        <button type="submit" class="submit-btn">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Rodapé da página -->
    <footer>
        <div class="social-icons">
            <img src="facebook-icon.png" alt="Facebook">
            <img src="twitter-icon.png" alt="Twitter">
            <img src="instagram-icon.png" alt="Instagram">
        </div>
    </footer>
</body>
</html>
```
### Codigo Final 
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contatos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body class="pagina-contato">
    <header>
        <img src="In_Bloom-logo.png" alt="Logo" class="logo">
        <nav>
            <a href="index.html" class="nav-item">Home</a>
            <a href="produtos.html" class="nav-item">Produtos</a>
            <a href="contatos.html" class="nav-item active">Contatos</a>
            <a href="sobre.html" class="nav-item">Sobre</a>
        </nav>
    </header>
    <main>
        <section class="contact-section">
            <h1 class="contact-title">Contate-nos</h1>
            <div class="contact-content">
                <div class="store-info">
                    <h2>Estamos aqui para ajudar!</h2>
                    <p>Entre em contato conosco através dos meios abaixo e nossa equipe responderá o mais rápido possível.</p>
                    <p>Endereço:</p>
                    <p>Avenida Kurt Cobain, 987 - Bairro Seattle Sul, São Paulo, SP, CEP 04567-890</p>
                    <p>Telefone: (11) 9987-6543</p>
                    <p>E-mail: contato@inbloom.com.br</p>
                    <p>Horário de Atendimento:</p>
                    <p>Sexta: 10h - 19h</p>
                    <p>Sábado: 10h - 14h</p>
                    <p>Domingo: Fechado</p>
                </div>
                <!-- os campos de formulario -->
                <div class="contact-form">
                    <h1>Formulario de contato</h1>
                    <p>Preencha o formulário abaixo para nos contatar</p>
                    <form onsubmit="event.preventDefault(); showConfirmationMessage();">
                       
                        <label for="nome">Nome Completo:</label>
                        <input type="text" id="name" name="name" required>
                        
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        
                        <label for="message">Mensagem:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                        
                        <button type="submit" class="submit-btn">Enviar</button>
                    </form>
                    <!-- Container para mensagem de confirmação -->
                    <div id="confirmation-message-container"></div>
                </div>
            </div>
        </section>
    </main>

    <!-- Rodapé da página -->
    <footer>
        <div class="social-icons">
            <a href="https://github.com/Maysa502/In-Bloom"><img src="github.png" alt="GitHub"></a>
            <a href="https://www.linkedin.com/in/maysaarruda"><img src="linkedin.png" alt="LinkedIn"></a>
            <a href="mailto:inbloomLoja87@gmail.com"><img src="google.png" alt="Gmail"></a>
        </div>
    </footer>

    <!-- Script para exibir mensagem de confirmação -->
    <script>
        function showConfirmationMessage() {
            const messageContainer = document.getElementById('confirmation-message-container');
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('confirmation-message');
            messageDiv.textContent = 'Sua mensagem foi enviada com sucesso!';
            messageContainer.appendChild(messageDiv);
        }
    </script>

    <!-- Script para rolagem suave e navegação -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Seleciona todos os links que começam com #
            const links = document.querySelectorAll('a[href^="#"]');
            
            // Adiciona evento de clique para rolagem suave
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    // Obtém o ID do elemento alvo
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    // Realiza a rolagem suave até o elemento alvo
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Adiciona evento de clique para links de navegação
            const navItems = document.querySelectorAll('nav a');
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    // Obtém o link de destino
                    const href = this.getAttribute('href');
                    // Remove a classe 'loaded' do body
                    document.body.classList.remove('loaded');
                    // Simula um carregamento antes de redirecionar
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500);
                });
            });

            // Adiciona a classe 'loaded' ao body após o carregamento da página
            document.body.classList.add('loaded');
        });
    </script>

</body>
</html>
```

## PAGE SOBRE.HTML

### Codigo Inicial
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contatos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <img src="logo.png" alt="Logo" class="logo">
        <nav>
            <a href="index.html" class="nav-item">Home</a>
            <a href="produtos.html" class="nav-item">Produtos</a>
            <a href="contatos.html" class="nav-item active">Contatos</a>
            <a href="sobre.html" class="nav-item">Sobre</a>
        </nav>
    </header>
    <main>
        <section class="contact-section">
            <h1 class="contact-title">Contate-nos</h1>
            <div class="contact-content">
                <div class="store-info">
                    <!-- Espaço para adicionar informações da loja -->
                </div>
                <div class="contact-form">
                    <h2>Formulário de Contato</h2>
                    <p>Preencha o formulário abaixo para nos contatar.</p>
                    <form>
                        <label for="name">Nome:</label>
                        <input type="text" id="name" name="name" required>
                        
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        
                        <label for="subject">Assunto:</label>
                        <input type="text" id="subject" name="subject" required>
                        
                        <label for="message">Mensagem:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                        
                        <button type="submit" class="submit-btn">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="social-icons">
            <img src="facebook-icon.png" alt="Facebook">
            <img src="twitter-icon.png" alt="Twitter">
            <img src="instagram-icon.png" alt="Instagram">
        </div>
    </footer>
</body>
</html>
```
### Codigo Final
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contatos</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body class="pagina-contato">
    <header>
        <img src="In_Bloom-logo.png" alt="Logo" class="logo">
        <nav>
            <a href="index.html" class="nav-item">Home</a>
            <a href="produtos.html" class="nav-item">Produtos</a>
            <a href="contatos.html" class="nav-item active">Contatos</a>
            <a href="sobre.html" class="nav-item">Sobre</a>
        </nav>
    </header>
    <main>
        <section class="contact-section">
            <h1 class="contact-title">Contate-nos</h1>
            <div class="contact-content">
                <div class="store-info">
                    <h2>Estamos aqui para ajudar!</h2>
                    <p>Entre em contato conosco através dos meios abaixo e nossa equipe responderá o mais rápido possível.</p>
                    <p>Endereço:</p>
                    <p>Avenida Kurt Cobain, 987 - Bairro Seattle Sul, São Paulo, SP, CEP 04567-890</p>
                    <p>Telefone: (11) 9987-6543</p>
                    <p>E-mail: contato@inbloom.com.br</p>
                    <p>Horário de Atendimento:</p>
                    <p>Sexta: 10h - 19h</p>
                    <p>Sábado: 10h - 14h</p>
                    <p>Domingo: Fechado</p>
                </div>
                <div class="contact-form">
                    <h1>Formulário de Contato</h1>
                    <p>Preencha o formulário abaixo para nos contatar</p>
                    <form onsubmit="event.preventDefault(); showConfirmationMessage();">
                        <label for="nome">Nome Completo:</label>
                        <input type="text" id="name" name="name" required>
                        
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        
                        <label for="message">Mensagem:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                        
                        <button type="submit" class="submit-btn">Enviar</button>
                    </form>
                    <div id="confirmation-message-container"></div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="social-icons">
            <a href="https://github.com/Maysa502/In-Bloom"><img src="github.png" alt="GitHub"></a>
            <a href="https://www.linkedin.com/in/maysaarruda"><img src="linkedin.png" alt="LinkedIn"></a>
            <a href="mailto:inbloomLoja87@gmail.com"><img src="google.png" alt="Gmail"></a>
        </div>
    </footer>
    <!-- Script para exibir mensagem de confirmação -->
    <script>
        function showConfirmationMessage() {
            const messageContainer = document.getElementById('confirmation-message-container');
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('confirmation-message');
            messageDiv.textContent = 'Sua mensagem foi enviada com sucesso!';
            messageContainer.appendChild(messageDiv);
        }
    </script>

    <!-- Script para rolagem suave e navegação -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            const navItems = document.querySelectorAll('nav a');
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const href = this.getAttribute('href');
                    document.body.classList.remove('loaded');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500);
                });
            });

            document.body.classList.add('loaded');
        });
    </script>

</body>
</html>
```

## PAGE COMPRA_PRODUTO.HTML

### Codigo Inicial
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <img src="logo.png" alt="Logo" class="logo">
        <nav>
            <a href="index.html" class="nav-item">Home</a>
            <a href="produtos.html" class="nav-item">Produtos</a>
            <a href="contatos.html" class="nav-item">Contatos</a>
            <a href="sobre.html" class="nav-item active">Sobre</a>
        </nav>
    </header>
    <main>
        <section class="about-section">
            <div class="about-top">
                <h1>Sobre</h1>
                <p><!-- Espaço para o texto sobre a empresa --></p>
            </div>
            <div class="about-side">
                <h2 class="vertical-text">IN BLOOM</h2>
                <p><!-- Espaço para o texto lateral --></p>
            </div>
            <div class="about-bottom">
                <p><!-- Espaço para o texto perto do rodapé --></p>
            </div>
        </section>
    </main>
    <footer>
        <div class="social-icons">
            <img src="facebook-icon.png" alt="Facebook">
            <img src="twitter-icon.png" alt="Twitter">
            <img src="instagram-icon.png" alt="Instagram">
        </div>
    </footer>
</body>
</html>
```
### Codigo Final
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
</head>
<body class="pagina-sobre">
    <header>
        <img src="In_Bloom-logo.png" alt="Logo" class="logo">
        <nav>
            <a href="index.html" class="nav-item">Home</a>
            <a href="produtos.html" class="nav-item">Produtos</a>
            <a href="contatos.html" class="nav-item">Contatos</a>
            <a href="sobre.html" class="nav-item active">Sobre</a>
        </nav>
    </header>
    <main>
        <section class="about-section">
            <div class="about-top">
                <h1>Sobre</h1>
                <p>Somos especialistas em oferecer uma variedade de produtos oficiais da banda Nirvana,</p>
                <p>dedicados a conectar e transmitir o legado da banda através das várias gerações de fãs.</p>
                <p><strong>Nossa Missão</strong> é conectar e transmitir o legado da banda Nirvana através das várias gerações de fãs.</p>
            </div>
            <div class="about-side">
                <div class="about-text">
                    <h3>Nossos Valores</h3>
                    <p>Paixão pela Música: Vivemos e respiramos Nirvana.</p>
                    <p>Autenticidade: Produtos 100% oficiais e licenciados.</p>
                    <p>Comunidade: Unindo fãs de todas as idades.</p>
                    <p>Qualidade: Oferecendo produtos de alta qualidade.</p>
            
                    <h3>Nossa História</h3>
                    <p>Fundada há sete anos, a In Bloom cresceu com a paixão de fãs dedicados</p>
                    <p>e o compromisso de manter o espírito de Nirvana vivo.</p>
            
                    <h3>Nossa Equipe</h3>
                    <p>Nossa equipe é formada por fãs apaixonados e profissionais dedicados</p>
                    <p>a proporcionar a melhor experiência possível.</p>
                </div>
                <h2 class="vertical-text">IN BLOOM</h2>
            </div>
            <div class="about-bottom">
                <p><strong>Entre em Contato</strong></p>
                <p>Estamos aqui para você! Envie um email para <a href="mailto:inbloomLoja87@gmail.com">inbloomLoja87@gmail.com</a></p>
            </div>
        </section>
    </main>
    <footer>
        <div class="social-icons">
            <a href="https://github.com/Maysa502/In-Bloom"><img src="github.png" alt="GitHub"></a>
            <a href="https://www.linkedin.com/in/maysaarruda"><img src="linkedin.png" alt="LinkedIn"></a>
            <a href="mailto:inbloomLoja87@gmail.com"><img src="google.png" alt="Gmail"></a>
        </div>
    </footer>
    
    <script>
        // Animação suave para links internos
        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80, 
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Animação de fade-in no carregamento da página
            document.body.classList.add('loaded');

            // Animação de clique para mudar de página
            const navItems = document.querySelectorAll('nav a');
            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const href = this.getAttribute('href');
                    document.body.classList.remove('loaded');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500); // ajustando o tempo do fade-out
                });
            });
        });
    </script>


</body>
</html>
```
