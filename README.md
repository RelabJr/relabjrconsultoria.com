# Documentação do Site relabjrconsultoria.com

## 1. Introdução

Este documento é um guia do código fonte do site. O projeto foi desenvolvido com a finalidade de criar um site dinâmico com componentes reutilizáveis utilizando a tecnologia Next.js.

## 2. Estrutura de Diretórios e Arquivos Principais

A seção a seguir detalha a estrutura de diretório adotada para o projeto, explicando a função de cada pasta e arquivo no projeto.

### 2.1 node_modules

Diretório responsável por armazenar as dependências do projeto.

### 2.2 public

Diretório onde se encontram todos os recursos gráficos e arquivos globalmente acessíveis da aplicação.

#### 2.2.1 public/admin

Diretório onde são armazenados os dados da área de administração do conteúdo do site.

- **config.yml**: Arquivo de configuração para a área de administração.
- **index.html**: Página inicial da área de administração.

#### 2.2.2 public/uploads

Diretório onde são armazenados os recursos gráficos enviados para o site.

### 2.3 src

Diretório onde o código fonte está localizado.

#### 2.3.1 src/components

Diretório onde os componentes reutilizáveis estão localizados. Abaixo está a lista dos principais componentes:

##### 2.3.1.1 cardMembro

- **Localização:** src/components/cardMembro
- **Descrição:** Card para exibição de informações de um membro.

##### 2.3.1.2 cardPost

- **Localização:** src/components/cardPost
- **Descrição:** Card para exibição de informações de um post.

##### 2.3.1.3 carrosselBlog

- **Localização:** src/components/carrosselBlog
- **Descrição:** Carrossel de posts da página Blog.

##### 2.3.1.4 carrosselHome

- **Localização:** src/components/carrosselHome
- **Descrição:** Carrossel de cardPosts da página Home.

##### 2.3.1.5 carrosselQuemSomos

- **Localização:** src/components/carrosselQuemSomos
- **Descrição:** Carrossel de imagens da página Quem Somos.

##### 2.3.1.6 escoposServicos

- **Localização:** src/components/escoposServicos
- **Descrição:** Grade para exibição dos escopos de serviços da página Serviços.

##### 2.3.1.7 footer

- **Localização:** src/components/footer
- **Descrição:** Footer do site.

##### 2.3.1.8 formularioQuemSomos

- **Localização:** src/components/formularioQuemSomos
- **Descrição:** Formulário para novos membros da página Quem Somos.

##### 2.3.1.9 formularioServicos

- **Localização:** src/components/formularioServicos
- **Descrição:** Formulário para clientes da página Serviços.

##### 2.3.1.10 gridMembros

- **Localização:** src/components/gridMembros
- **Descrição:** Grade para a exibição dos membros da página Quem Somos.

##### 2.3.1.11 gridPosts

- **Localização:** src/components/gridPosts
- **Descrição:** Grade para a exibição dos cardPosts dentro do componente menuBlog da página Blog.

##### 2.3.1.12 imagemComBotao

- **Localização:** src/components/imagemComBotao
- **Descrição:** Layout das imagens com botão para redirecionamento da página Home.

##### 2.3.1.13 inicio

- **Localização:** src/components/inicio
- **Descrição:** Seção inicial das páginas.

##### 2.3.1.14 menuBlog

- **Localização:** src/components/menuBlog
- **Descrição:** Menu para filtragem de posts do blog.

##### 2.3.1.15 navbar

- **Localização:** src/components/navbar
- **Descrição:** Barra de navegação.

##### 2.3.1.16 servicosHome

- **Localização:** src/components/servicosHome
- **Descrição:** Grade para a exibição dos serviços da página Home.

##### 2.3.1.17 textoBarraHome

- **Localização:** src/components/textoBarraHome
- **Descrição:** Introdução da página Home.

##### 2.3.1.18 textoBarraQuemSomos

- **Localização:** src/components/textoBarraQuemSomos
- **Descrição:** Introdução da página Quem Somos.

##### 2.3.1.19 textoServicos

- **Localização:** src/components/textoServicos
- **Descrição:** Introdução da página Serviços.

##### 2.3.1.20 valores

- **Localização:** src/components/valores
- **Descrição:** Display dos valores da Relab Jr.

#### 2.3.2 src/lib

Contém bibliotecas para desempenhar funções específicas.

##### 2.3.2.1 sendForm.js

- **Descrição:** Função para envio de formulários.

#### 2.3.3 src/pages

Este diretório segue a convenção de rotas do Next.js, onde cada arquivo JavaScript representa uma rota.

##### 2.3.3.1 _app.js

- **Descrição:** Customiza o componente App do Next.js.

##### 2.3.3.2 _document.js

- **Descrição:** Customiza o documento HTML.

##### 2.3.3.3 blog.js

- **Descrição:** Página blog.

##### 2.3.3.4 index.js

- **Descrição:** Página Home.

##### 2.3.3.5 quemSomos.js

- **Descrição:** Página Quem Somos.

##### 2.3.3.6 servicos.js

- **Descrição:** Página de Serviços.

##### 2.3.3.7 api/contactClients.js

- **Descrição:** Rota para contato de clientes.

##### 2.3.3.8 api/contactMembers.js

- **Descrição:** Rota para contato de novos membros.

##### 2.3.3.9 post/[slug].js

- **Descrição:** Página dinâmica para exibição de posts baseados em um slug.

##### 2.3.3.10 404.js

- **Descrição:** Página de erro 404 para rotas não encontradas.

#### 2.3.4 src/styles

Contém estilos globais para o projeto.

#### 2.3.5 src/utils

Contém funções utilitárias.

##### 2.3.5.1 jsonHandler.js

- **Descrição:** Função para leitura de JSON.

##### 2.3.5.2 nodemailer.js

- **Descrição:** Função para configurar credenciais de envio de email.

## 3. Configuração e Execução

### 3.1 Pré-requisitos

- Node.js
- npm

### 3.2 Instalação

Clone o repositório:

```
git clone <URL_DO_REPOSITORIO>
```

Navegue até o diretório do projeto:

```
cd relabjrconsultoria.com
```

Instale as dependências:

```
npm i
```

### 3.3 Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

### 3.4 Build para Produção

Para criar uma build para produção, execute:

```
npm run build
```