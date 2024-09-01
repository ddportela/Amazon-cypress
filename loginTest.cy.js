const attemptClickButton = (selector, retries = 3) => {
  cy.get('body').then($body => {
    if ($body.find(selector).length > 0) {
      // Se o botão for encontrado, clique nele
      cy.get(selector).click();
    } else if (retries > 0) {
      // Caso contrário, recarregue a página e tente novamente
      cy.reload();
      cy.wait(3000); // Aguarda o carregamento da página
      attemptClickButton(selector, retries - 1); // Tenta clicar no botão novamente
    } else {
      throw new Error(`Não foi possível encontrar o botão ${selector} após ${retries} tentativas.`);
    }
  });
};

describe('Teste de Login na Amazon Brasil', () => {
  before(() => {
    // Acessar o site da Amazon Brasil
    cy.visit('https://www.amazon.com.br');
  });

  beforeEach(() => {
    // Garantir que o navegador esteja na página inicial antes de cada teste
    cy.visit('https://www.amazon.com.br');
  });

  it('Teste 1: Login com e-mail correto e senha incorreta', () => {
    attemptClickButton('#nav-link-accountList');
    // Inserir e-mail
    cy.get('#ap_email').type('zghardx@gmail.com');
    // Clicar no botão "Continuar"
    cy.get('#continue').click();
    // Inserir senha incorreta
    cy.get('#ap_password').type('SenhaErrada');
    // Clicar no botão "Entrar"
    cy.get('#signInSubmit').click();
    // Verificar mensagem de erro
    cy.get('.a-size-large').should('be.visible');
  });

  it('Teste 2: Login com e-mail incorreto', () => {
    attemptClickButton('#nav-link-accountList');
    // Inserir e-mail incorreto
    cy.get('#ap_email').type('emailerrado@gmail.com');
    // Clicar no botão "Continuar"
    cy.get('#continue').click();
    // Verificar mensagem de erro
    cy.get('#auth-error-message-box > .a-box-inner').should('be.visible');
  });

  it('Teste 3: Login com e-mail vazio', () => {
    attemptClickButton('#nav-link-accountList');
    // Clicar no botão "Continuar" com e-mail em branco
    cy.get('#continue').click();
    // Verificar mensagem de erro de e-mail em branco
    cy.get('#auth-email-missing-alert').should('be.visible');
  });

  it('Teste 4: Login com e-mail correto e senha com espaço em branco', () => {
    attemptClickButton('#nav-link-accountList');
    // Inserir e-mail correto
    cy.get('#ap_email').type('zghardx@gmail.com');
    // Clicar no botão "Continuar"
    cy.get('#continue').click();
    // Inserir senha com apenas espaços em branco
    cy.get('#ap_password').type('     '); // Senha com espaços em branco
    // Clicar no botão "Entrar"
    cy.get('#signInSubmit').click();
    // Verificar se há mensagem de erro
    cy.get('#auth-error-message-box').should('be.visible');
  });

  it('Teste 5: Login com formato de e-mail inválido', () => {
    attemptClickButton('#nav-link-accountList');
    // Inserir formato de e-mail inválido
    cy.get('#ap_email').type('zghardx@.com');
    // Clicar no botão "Continuar"
    cy.get('#continue').click();
    // Verificar mensagem de erro
    cy.get('#auth-email-invalid-claim-alert > .a-box-inner > .a-alert-content').should('be.visible');
  });

  it('Teste 6: Sensibilidade a maiúsculas e minúsculas da senha', () => {
    attemptClickButton('#nav-link-accountList');
    // Inserir e-mail
    cy.get('#ap_email').type('zghardx@gmail.com');
    // Clicar no botão "Continuar"
    cy.get('#continue').click();
    // Inserir senha com letras maiúsculas e minúsculas
    cy.get('#ap_password').type('senha@2024'); // Senha com maiúsculas
    // Clicar no botão "Entrar"
    cy.get('#signInSubmit').click();
    // Verificar mensagem de erro
    cy.get('.a-size-large').should('be.visible');
  });

  it('Teste 7: Login com e-mail correto com espaço e senha correta', () => {
    attemptClickButton('#nav-link-accountList');
    // Inserir e-mail com espaços
    cy.get('#ap_email').type('zghardx@gmail.com');
    // Clicar no botão "Continuar"
    cy.get('#continue').click();
    // Inserir senha correta
    cy.get('#ap_password').type('Senha@2024');
    // Clicar no botão "Entrar"
    cy.get('#signInSubmit').click();
    // Verificar se o login foi bem-sucedido
    cy.url().should('include', 'https://www.amazon.com.br/');
    cy.get('#nav-link-accountList').should('contain', 'Olá, João');
  });
});
