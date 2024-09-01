describe('Teste pequisa carrinho finalizar compra', () => {
    before(() => {

        // Acessar o site da Amazon Brasil
        cy.visit('https://www.amazon.com.br');
    });

    beforeEach(() => {
        // Garantir que o navegador esteja na página inicial antes de cada teste
        cy.visit('https://www.amazon.com.br');
    });


    it('Teste de Pesquisa de produtos', () => {

        // Inserir na barra de pesquisa
        cy.get('#twotabsearchtextbox').type('Pneus');

        // Clicar na lupa
        cy.get('#nav-search-submit-button').click();
    });

    it('Carrinho de compras', () => {

        //Fazer login
        cy.get('#nav-link-accountList').click();

        // Inserir na barra de pesquisa
        cy.get('#ap_email').type('zghardx@gmail.com');

        // Clicar no botão "Continuar"
        cy.get('#continue').click();

        // Inserir senha correta
        cy.get('#ap_password').type('Senha@2024');

        // Clicar no botão "Entrar"
        cy.get('#signInSubmit').click();

        // Pesquisa "oleo automotivo"
        cy.get('#twotabsearchtextbox').type('oleo automotivo');

        // Clicar na lupa
        cy.get('#nav-search-submit-button').click();

        // Escolha um produto e click
        cy.xpath("//span[normalize-space()='Oleo Lubrificante Mineral Para Carros Mobil Super 20W-50']").click();

        // clicar em "adicionar ao carrinho"
        cy.get('#add-to-cart-button').click()

        // Abra carrinho
        cy.xpath("//span[@id='nav-cart-count']").click();

        //Click Fecha produto
        cy.xpath("//input[@name='proceedToRetailCheckout']").click();
        cy.wait(5000)

        // Click enviar para esse endereço
        cy.xpath("//input[@data-testid='Address_selectShipToThisAddress']").click();
        cy.wait(10000)

        // Click pix
        cy.get('.pmts-pix-text-content').click();
        cy.wait(5000)

        // Usar esse metodo de pagamento
        cy.xpath("//input[@aria-labelledby='orderSummaryPrimaryActionBtn-announce']").click();
        cy.wait(5000)

        // Finaliza pagamento
        cy.xpath("//input[@aria-labelledby='submitOrderButtonId-announce']").click();
        cy.xpath("//div[@class='a-section a-spacing-medium']//img").should('be.visible');

    })
});