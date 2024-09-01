describe('Teste', () => {
    before(() => {
  
      // Acessar o site da Amazon Brasil
      cy.visit('https://www.amazon.com.br');
  
  /*     // Clicar no botão de login
      cy.get('#nav-link-accountList').click();
  
      // Inserir e-mail
      cy.get('#ap_email').type('zghardx@gmail.com');
  
      // Clicar no botão "Continuar"
      cy.get('#continue').click();
  
      // Inserir senha correta
      cy.get('#ap_password').type('Senha@2024');
  
      // Clicar no botão "Entrar"
      cy.get('#signInSubmit').click(); */
    });
  
    beforeEach(() => {
      // Garantir que o navegador esteja na página inicial antes de cada teste
      cy.visit('https://www.amazon.com.br');
    });
  
  
  /*   it('Teste de Pesquisa de produtos', () => {
  
      // Inserir na barra de pesquisa
      cy.get('#twotabsearchtextbox').type('Pneus');
  
      // Clicar na lupa
      cy.get('#nav-search-submit-button').click();
    });
  
    it('Carrinho de compras', () => {
  
      // Inserir na barra de pesquisa
      cy.get('#twotabsearchtextbox').type('Pneus');
  
      // Clicar na lupa
      cy.get('#nav-search-submit-button').click();
  
      // Escolha um produto e click
      cy.get('[data-asin="B0068NQE9Y"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > [data-cy="image-container"] > .rush-component > .a-link-normal > .a-section > .s-image').click();
  
      // clicar em "adicionar ao carrinho"
      cy.get('#add-to-cart-button').click()
    }) */
  
      it('Navega entre categorias automotivas 1° Opção', () => {
        // Abrir "Todos"
        cy.xpath("//span[@class='hm-icon-label']").click();
        cy.wait(2000); // Aguardar 2 segundos para o menu carregar
        // Clicar em "Automotivo"
        cy.xpath("//ul[@class='hmenu hmenu-visible']//li[17]//a[1]").click();
        // Clicar em cada item da lista automotiva 1° opção
        cy.xpath("//a[normalize-space()='Tudo em Automotivo']").click()
    });
    it('Navega entre categorias automotivas 2° Opção', () => {
        // Abrir "Todos"
        cy.xpath("//span[@class='hm-icon-label']").click();
        cy.wait(2000); // Aguardar 2 segundos para o menu carregar
        // Clicar em "Automotivo"
        cy.xpath("//ul[@class='hmenu hmenu-visible']//li[17]//a[1]").click();
        // Clicar em cada item da lista automotiva 1° opção
        cy.xpath("//a[normalize-space()='Acessórios e Peças para Automóveis']").click()
    });
    it('Navega entre categorias automotivas 3° Opção', () => {
        // Abrir "Todos"
        cy.xpath("//span[@class='hm-icon-label']").click();
        cy.wait(2000); // Aguardar 2 segundos para o menu carregar
        // Clicar em "Automotivo"
        cy.xpath("//ul[@class='hmenu hmenu-visible']//li[17]//a[1]").click();
        // Clicar em cada item da lista automotiva 1° opção
        cy.xpath("//a[normalize-space()='Acessórios e Peças para Motos']").click()
    });
    it('Navega entre categorias automotivas 4° Opção', () => {
        // Abrir "Todos"
        cy.xpath("//span[@class='hm-icon-label']").click();
        cy.wait(2000); // Aguardar 2 segundos para o menu carregar
        // Clicar em "Automotivo"
        cy.xpath("//ul[@class='hmenu hmenu-visible']//li[17]//a[1]").click();
        // Clicar em cada item da lista automotiva 1° opção
        cy.xpath("//a[normalize-space()='Ferramentas e Equipamentos']").click()
    });
    it('Navega entre categorias automotivas 5° Opção', () => {
        // Abrir "Todos"
        cy.xpath("//span[@class='hm-icon-label']").click();
        cy.wait(2000); // Aguardar 2 segundos para o menu carregar
        // Clicar em "Automotivo"
        cy.xpath("//ul[@class='hmenu hmenu-visible']//li[17]//a[1]").click();
        // Clicar em cada item da lista automotiva 1° opção
        cy.xpath("//a[normalize-space()='Eletrônicos e Tecnologia']").click()
    });
    it('Navega entre categorias automotivas 6° Opção', () => {
        // Abrir "Todos"
        cy.xpath("//span[@class='hm-icon-label']").click();
        cy.wait(2000); // Aguardar 2 segundos para o menu carregar
        // Clicar em "Automotivo"
        cy.xpath("//ul[@class='hmenu hmenu-visible']//li[17]//a[1]").click();
        // Clicar em cada item da lista automotiva 1° opção
        cy.xpath("//a[normalize-space()='Óleos e Fluidos']").click()
    });
    it('Navega entre categorias automotivas 7° Opção', () => {
        // Abrir "Todos"
        cy.xpath("//span[@class='hm-icon-label']").click();
        cy.wait(2000); // Aguardar 2 segundos para o menu carregar
        // Clicar em "Automotivo"
        cy.xpath("//ul[@class='hmenu hmenu-visible']//li[17]//a[1]").click();
        // Clicar em cada item da lista automotiva 1° opção
        cy.xpath("//a[normalize-space()='Rodas e Pneus']").click()
    });
    it('Navega entre categorias automotivas 8° Opção', () => {
        // Abrir "Todos"
        cy.xpath("//span[@class='hm-icon-label']").click();
        cy.wait(2000); // Aguardar 2 segundos para o menu carregar
        // Clicar em "Automotivo"
        cy.xpath("//ul[@class='hmenu hmenu-visible']//li[17]//a[1]").click();
        // Clicar em cada item da lista automotiva 1° opção
        cy.xpath("//a[normalize-space()='Equipamentos de Proteção']").click()
    });
    it('Navega entre categorias automotivas 9° Opção', () => {
        // Abrir "Todos"
        cy.xpath("//span[@class='hm-icon-label']").click();
        cy.wait(2000); // Aguardar 2 segundos para o menu carregar
        // Clicar em "Automotivo"
        cy.xpath("//ul[@class='hmenu hmenu-visible']//li[17]//a[1]").click();
        // Clicar em cada item da lista automotiva 1° opção
        cy.xpath("//a[normalize-space()='Cuidados Automotivos']").click()
    });

/*     it('Navegar entre avaliações', () => {
  
    });
    it('escolher produtos faixa de preço 300 a 600 reais', () => {
  
    });
  
    it('Finalizar uma compra ', () => {
  
    }) */
  });
  