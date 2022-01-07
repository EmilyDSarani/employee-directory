import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { UserProvider } from '../../context/UserContext'
import HeaderButton from './HeaderButton'

jest.mock('../../context/UserContext.jsx')
jest.mock('../../services/user.js')

it.skip('should display login button', ()=> {
    const { container } = render(
        <UserProvider>
            <MemoryRouter>
                <HeaderButton />
            </MemoryRouter>
        </UserProvider>
    );
    expect(container).toMatchInlineSnapshot(`
       <div>
         <a
           href="/login"
         >
           <button>
             Sign in
           </button>
         </a>
       </div>
     `)
});