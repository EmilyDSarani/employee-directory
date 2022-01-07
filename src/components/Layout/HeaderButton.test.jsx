import { render } from '@testing-library/react'
import { MemoryRouter, Switch } from 'react-router-dom'
import { UserProvider } from '../../context/UserContext'
import HeaderButton from './HeaderButton'

jest.mock('../../context/UserContext.jsx')
jest.mock('../../services/user.js')

it('should display login button', ()=> {
    const { container } = render(
        <UserProvider>
            <MemoryRouter>
                <HeaderButton />
            </MemoryRouter>
        </UserProvider>
    );
    expect(container).toMatchSnapshot()
});