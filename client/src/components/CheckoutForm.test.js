import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    //grab all form inputs
    const fName = screen.getByLabelText(/first name/i)
    const lName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
    const submit = screen.getByTestId("checkout-button")

    //input form values
    fireEvent.input(fName, { target: {value: "Monsieur"}})
    fireEvent.input(lName, { target: {value: "Mikado"}})
    fireEvent.input(address, { target: {value: "1369 Penfield Road"}})
    fireEvent.input(city, { target: {value: "State College"}})
    fireEvent.input(state, { target: {value: "PA"}})
    fireEvent.input(zip, { target: {value: "16801"}})

    //submit form
    fireEvent.click(submit)

    //grab success message
    const success = screen.getByText(/State College, PA 16801/i)
    //assert that success message displays submitted address
    expect(success).toBeInTheDocument()

});
