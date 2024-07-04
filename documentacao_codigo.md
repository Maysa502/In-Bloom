
# Documentação de Código

## Código Inicial

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Inicial - Nirvana</title>
    <link rel="stylesheet" href="styles.css"> <!-- Vincula o arquivo de estilo CSS externo -->
</head>
<body>
    <header>
        <!-- Exibe o logo da empresa -->
        <img src="logo.png" alt="Logo da Empresa" class="logo">
        
        <!-- Navegação principal -->
        <nav>
            <a href="#" class="nav-item active">Inicial</a> <!-- Link de navegação ativo para a página inicial -->
            <a href="#" class="nav-item">Produtos</a> <!-- Link de navegação para a página de produtos -->
            <a href="#" class="nav-item">Contatos</a> <!-- Link de navegação para a página de contatos -->
            <a href="#" class="nav-item">Sobre</a> <!-- Link de navegação para a página sobre -->
        </nav>
    </header>

    <main>
        <!-- Seção introdutória -->
        <section class="intro">
            <h1>Título da Empresa</h1> <!-- Título principal -->
            <p>Texto sobre a empresa...</p> <!-- Parágrafo descrevendo a empresa -->
        </section>
    </main>

    <footer>
        <!-- Ícones de redes sociais -->
        <div class="social-icons">
            <a href="#"><img src="facebook-icon.png" alt="Facebook"></a> <!-- Link para Facebook com ícone -->
            <a href="#"><img src="twitter-icon.png" alt="Twitter"></a> <!-- Link para Twitter com ícone -->
            <a href="#"><img src="instagram-icon.png" alt="Instagram"></a> <!-- Link para Instagram com ícone -->
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
    <link rel="stylesheet" href="styles.css"> <!-- Vincula o arquivo de estilo CSS externo -->
    
    <style>
        /* Adiciona uma transição de opacidade para suavizar o carregamento da página */
        body {
            opacity: 0;
            transition: opacity 1s ease-in;
        }
        body.loaded {
            opacity: 1;
        }

        /* Adiciona uma transição de transformação ao passar o mouse sobre os ícones sociais */
        .social-icons a {
            transition: transform 0.3s;
        }
        .social-icons a:hover {
            transform: scale(1.1);
        }
    </style>
    <!-- Pré-conexão às fontes do Google -->
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
            <a href="index.html" class="nav-item active">Home</a> <!-- Link de navegação ativo para a página inicial -->
            <a href="produtos.html" class="nav-item">Produtos</a> <!-- Link de navegação para a página de produtos -->
            <a href="contatos.html" class="nav-item">Contatos</a> <!-- Link de navegação para a página de contatos -->
            <a href="sobre.html" class="nav-item">Sobre</a> <!-- Link de navegação para a página sobre -->
            <a href="CompraProduto.html" class="nav-item">Comprar</a> <!-- Link de navegação para a página de compras -->
        </nav>
    </header>

    <main>
        <!-- Seção introdutória -->
        <section class="intro">
            <h1>Bem-vindo à In Bloom!</h1> <!-- Título de boas-vindas -->
            <p>
                Na In Bloom, celebramos o rock com CDs, discos de vinil e camisetas da banda Nirvana. 
                Explore nosso catálogo e encontre peças únicas que vão elevar sua coleção e estilo. 
                Navegue, ouça e vista-se com a atitude que só a In Bloom pode oferecer.
            </p> <!-- Parágrafo descrevendo a loja e seus produtos -->
        </section>
    </main>

    <footer>
        <!-- Ícones de redes sociais -->
        <div class="social-icons">
            <a href="https://github.com/Maysa502/In-Bloom"><img src="github.png" alt="GitHub"></a> <!-- Link para GitHub com ícone -->
            <a href="https://www.linkedin.com/in/maysaarruda"><img src="linkedin.png" alt="LinkedIn"></a> <!-- Link para LinkedIn com ícone -->
            <a href="mailto:inbloomLoja87@gmail.com"><img src="google.png" alt="Gmail"></a> <!-- Link para Gmail com ícone -->
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            /* Links âncora que rolam suavemente para seções da página */
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

            /* Transição suave ao navegar entre páginas */
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

            document.body.classList.add('loaded'); /* Adiciona uma classe 'loaded' ao 'body' após o carregamento do conteúdo */
        });
    </script>
</body>
</html>
```
