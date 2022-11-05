import { render, screen, waitFor } from '@testing-library/react'
import App from './App'


beforeEach(() => {
    // Sets everything back to initial state before each test:
    fetch.resetMocks();
})


test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({ name: 'coder' }))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('coder')
})

test("receives GitHub URL from API", async () => {
    fetch.mockResponseOnce(JSON.stringify({ html_url: 'https://github.com/RubyTuesday77' }))
    render(<App />)
    const gitHubUrl = await waitFor(() => screen.getByRole('link'))
    expect(gitHubUrl).toHaveAttribute('href', expect.stringContaining('github.com'))
})

test("receives GitHub profile image", async () => {
    fetch.mockResponseOnce(JSON.stringify({ avatar_url: 'https://avatars.githubusercontent.com/u/105758468?v=4' }))
    render(<App />)
    const gitHubImageUrl = await waitFor(() => screen.getByRole('link'))
    expect(gitHubImageUrl).toHaveAttribute('src', expect.stringContaining('githubusercontent.com'))
})