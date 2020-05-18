import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    // const expectedHeader = "checkout form"

    const header = getByText(/checkout form/i)

    expect(header).toBeInTheDocument;
});






test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByText, getByTestId, getByDisplayValue } = render(<CheckoutForm />);



    const firstNameInput = getByLabelText(/first name/i)
    fireEvent.change(firstNameInput, { target: { value: "Jim" } })
    expect(getByDisplayValue(/jim/i)).toBeInTheDocument();

    // const button = getByText(/checkout/i)
    // fireEvent.click(button);

    // const expectedFirstName = "Jim"
    // const jim = getByText(/jim/i);
    // expect(jim).toBeInTheDocument();

    const button = getByTestId(/submitCheckout/i)
    fireEvent.click(button)
    // expect(button).toBeInTheDocument();

    const successMessage = getByTestId(/successMessage/i)
    expect(successMessage).toBeInTheDocument;
});

