import { fireEvent, render, screen } from '@testing-library/react'
import AgeStep from './AgeStep'
import userEvent from '@testing-library/user-event'

describe('Age Step', () => {
    const user = userEvent.setup()
    it("for invalid age input should show correct error message", async () => {
        const user = userEvent.setup()
        render(<AgeStep cb={() => { }}></AgeStep>)
        const ageInput = screen.getByRole('spinbutton', { name: /age:/i })
        await user.type(ageInput, '125')
        clickNextButton()
        const warningMsg = screen.getByText(/Age is invalid age must be between 0 to 100/i)
        expect(warningMsg).toBeInTheDocument()
    })

    it("for valid age input should not show any error message", async () => {
        render(<AgeStep cb={() => { }}></AgeStep>)
        const ageInput = screen.getByText(/age:/i)
        await user.type(ageInput, '25')
        user.click(screen.getByRole('button', { name: /Next/i }));
        const warningMsg = screen.queryByText(/Age is invalid/i)
        expect(warningMsg).not.toBeInTheDocument()
    })

    function clickNextButton() {
        fireEvent.click(screen.getByRole('button', { name: /Next/i }))
    }
});