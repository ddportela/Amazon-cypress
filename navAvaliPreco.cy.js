describe('Teste Amazon', () => {
    before(() => {
        // Acessar o site da Amazon Brasil
        cy.visit('https://www.amazon.com.br');
    });

    beforeEach(() => {
        // Garantir que o navegador esteja na página inicial antes de cada teste
        cy.visit('https://www.amazon.com.br');
    });

        it('Teste produtos melhor avaliados', () => {
    
            // Procura "pneus"
            cy.get('#twotabsearchtextbox').type('pneus');
    
            // Clica na lupa
            cy.get('#nav-search-submit-button').click();
    
            // Clickar no incone mais avaliados
            cy.get('section > .a-icon').click();
    
            cy.get('[data-asin="B07D78QYG1"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > .a-spacing-small > [data-cy="reviews-block"] > .a-row > [aria-label="4,5 de 5 estrelas"] > span.a-declarative > .a-popover-trigger > [data-cy="reviews-ratings-slot"]').should('be.visible');
        }); 

    it('Filtrar produtos por faixa de preço usando sliders', () => {

    // Procura "pneus"
    cy.get('#twotabsearchtextbox').type('pneus');

    // Clica na lupa
    cy.get('#nav-search-submit-button').click();

    // Alterar o valor do preço baixo via JavaScript
    cy.window().then((win) => {
      const lowPriceInput = win.document.querySelector('input[name="low-price"]');
      if (lowPriceInput) {
        lowPriceInput.value = '300';
        const event = new Event('change', { bubbles: true });
        lowPriceInput.dispatchEvent(event);
      }
    });

    // Alterar o valor do preço alto via JavaScript
    cy.window().then((win) => {
      const highPriceInput = win.document.querySelector('input[name="high-price"]');
      if (highPriceInput) {
        highPriceInput.value = '600';
        const event = new Event('change', { bubbles: true });
        highPriceInput.dispatchEvent(event);
      }
    });
        // Clicar em ir
        cy.get('#a-autoid-1').click();
    });
});
