import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

test('render app home page', () => {
  render(<App />)

  expect(screen.getByText(/Welcome to Getsafe's Developer & Designer Insurance/i)).toBeInTheDocument()
})

test('render buyflow of Developer Insurance', async () => {
  render(<App />)
  const user = userEvent.setup()
  
  //Action
  const devLinkElement = screen.getByText(/Get started for Developer/i)
  expect(devLinkElement).toBeInTheDocument()

  await user.click(devLinkElement)

  const linkElement = screen.getByText(/Buying Developer Insurance/i)

  //Assertion
  expect(linkElement).toBeInTheDocument()
  await user.click(devLinkElement)
})
