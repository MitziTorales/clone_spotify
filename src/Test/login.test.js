import { Home } from '../pages/Home.js';
import { render } from '@testing-library/react';


test('Login with email', () => {
    const { container } = render(<Home/>);
    expect(container).not.toBe(null);
});
