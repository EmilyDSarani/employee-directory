import { render } from '@testing-library/react'
import UserForm from "./UserForm"

it('should display a form for login stuff', () => {
    const { container } = render(<UserForm />);
    expect(container).toMatchSnapshot();
});