export const updateProfile = (firstName: string, lastName: string) => {
  cy.get('[data-testid="EditableProfileCardHeader.EditButton"]').click();
  cy.get('[data-testid="ProfileCard.firstName"]').clear().type(firstName);
  cy.get('[data-testid="ProfileCard.lastName"]').clear().type(lastName);
  cy.get('[data-testid="EditableProfileCardHeader.SaveButton"]').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: "PUT",
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: "test" },
    body: {
      id: "4",
      firstName: "test",
      lastName: "test",
      age: 423,
      currency: "EUR",
      country: "Russia",
      city: "Moscow",
      username: "testuser",
      avatar:
        "https://media.wired.com/photos/644318b17b25a434b1f3bbd7/1:1/w_1350,h_1350,c_limit/security_hacker_names.jpg",
    },
  });
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      // eslint-disable-next-line @typescript-eslint/method-signature-style
      updateProfile(firstName: string, lastName: string): Chainable<void>;

      // eslint-disable-next-line @typescript-eslint/method-signature-style
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
