let profileId = "";

describe("Пользователь переход на страницу профиля", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`/profile/${profileId}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it("И профиль успешно загружается", () => {
    cy.getByTestId("ProfileCard.firstName").should("have.value", "test");
  });
  it("И редактирует его", () => {
    const newName = "new";
    const newLastName = "lastname";
    cy.updateProfile(newName, newLastName);
    cy.getByTestId("ProfileCard.firstName").should("have.value", newName);
    cy.getByTestId("ProfileCard.lastName").should("have.value", newLastName);
  });
});
