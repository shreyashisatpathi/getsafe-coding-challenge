import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EmaailStep from "./EmailStep"

describe("Email Step", () => {
    const user = userEvent.setup()
    it("should take only valid email as input", async () => {
        render(<EmaailStep cb={() => { }} />)
        const emailInput = screen.getByRole('textbox')
        await user.type(emailInput, 'foo_bar')
        fireEvent.click(screen.getByRole('button', { name: /Next/i }))
        user.click(screen.getByRole('button', { name: /next/i }))
        const warningMsg = screen.getByText(/email is invalid/i)
        expect(warningMsg).toBeInTheDocument()
    })

    it("should take only valid email as input", async () => {
        render(<EmaailStep cb={() => { }} />)
        const emailInput = screen.getByRole('textbox')
        await user.type(emailInput, 'foo@bar.com')
        fireEvent.click(screen.getByRole('button', { name: /Next/i }))
        user.click(screen.getByRole('button', { name: /next/i }))
        const warningMsg = screen.queryByText(/email is invalid/i)
        expect(warningMsg).not.toBeInTheDocument()
    })
})