describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('h1')
    .contains('Welcome to my app!');
  })
  <iframe width="768" height="432" src="https://miro.com/app/live-embed/o9J_lj9dcu4=/?moveToViewport=-1570,-2255,2614,2437&embedId=707277321648" frameborder="0" scrolling="no" allowfullscreen></iframe>
  it('renders the Netlify logo image', () => {
    cy.get('img')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    })
  })
})
