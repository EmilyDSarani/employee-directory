import {render, screen} from '@testing-library/react'
import { UserProvider } from '../../context/UserContext'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

//PLEASE NOTE-- for mocking, you need to create a __mocks__ folder that will point the jest.mock stuff that is below to those folders. 
// then, you need to replace the content in those folders to match whatever you are mocking and put mockUser in front of some stuff in the UserContext for the hook.

jest.mock('../../context/UserContext.jsx')
jest.mock('../../services/user.js')

it('should display header when signed out', () => {
    const { container } = render(
        <UserProvider>
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </UserProvider>
    );
    expect(container).toMatchSnapshot();
});
it('should display user email when signed in', () =>{
    const { container } = render(
        <UserProvider mockUser={{ id:1, email: 'example@jest.com'}}>
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </UserProvider>
    );
screen.getByText('example@jest.com', { exact: false });
expect(container).toMatchSnapshot();
});