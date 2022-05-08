import { fireEvent, render, screen, within } from '@testing-library/react'
import UserDetails from './UserDetails'
import userEvent from '@testing-library/user-event'

describe("User Details", () => {
    const user = userEvent.setup()
    it("Should take valid input for First Name and Last Name", async () => {
        render(<UserDetails cb={() => { }} />)
        const firstNameView = screen.getByText(/firstname:/i);
        const firstName = within(firstNameView).getByRole('textbox')
        const lastNameView = screen.getByText(/lastname:/i)
        const lastName = within(lastNameView).getByRole('textbox')
        await user.type(firstName, "John")
        await user.type(lastName, "doe")
        fireEvent.click(screen.getByRole('button', { name: /Next/i }))
        const firstNameErrMsg = screen.queryByText(/first name is invalid/i)
        const lastNameErrMsg = screen.queryByText(/last name is invalid/i)

        expect(firstNameErrMsg).not.toBeInTheDocument()
        expect(lastNameErrMsg).not.toBeInTheDocument()
    })
    it("should show error message for invalid First name", async () => {
        render(<UserDetails cb={() => { }} />)
        const firstNameView = screen.getByText(/firstname:/i)
        const firstName = within(firstNameView).getByRole('textbox')
        const lastNameView = screen.getByText(/lastname:/i)
        const lastName = within(lastNameView).getByRole('textbox')
        await user.type(firstName, "12345")
        await user.type(lastName, "doe")
        fireEvent.click(screen.getByRole('button', { name: /Next/i }))
        const firstNameErrorMsg = screen.getByText(/first name is invalid/i)

        expect(firstNameErrorMsg).toBeInTheDocument()
    })

    it("should show error message for invalid Last name", async () => {
        render(<UserDetails cb={() => { }} />)
        const firstNameView = screen.getByText(/firstname:/i);
        const firstName = within(firstNameView).getByRole('textbox')
        const lastNameView = screen.getByText(/lastname:/i)
        const lastName = within(lastNameView).getByRole('textbox')
        await user.type(firstName, "John")
        await user.type(lastName, "67890")
        fireEvent.click(screen.getByRole('button', { name: /Next/i }))
        const firstNameErrorMsg = screen.queryByText(/first name is invalid/i)
        const lastNameErrorMsg = screen.getByText(/last name is invalid/i)

        expect(firstNameErrorMsg).not.toBeInTheDocument()
        expect(lastNameErrorMsg).toBeInTheDocument()
    })
})