class GaragePage {
    get addCarButton() {
        return cy.get('.panel-page_heading > .btn');
    };
    get carBrandSelect() {
        return cy.get('#addCarBrand');
    };
    get carModelSelect() {
        return cy.get('#addCarModel');
    };
    get carMileageInput() {
        return cy.get('#addCarMileage');
    };
    get submitButton() {
        return cy.get('[class="modal-content"] button[class="btn btn-primary"]');
    };

    addCarToGarage(brand, model, mileage) {
        this.addCarButton.click();
        this.carBrandSelect.select(brand);
        this.carModelSelect.select(model);
        this.carMileageInput.clear().type(mileage);
        this.submitButton.click();
    };
}

export default GaragePage;