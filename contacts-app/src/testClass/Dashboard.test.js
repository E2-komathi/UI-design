import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard"

describe('To Check the buttons in Dashboard' , () => {
    it('add user button' , () => {
        render(<Dashboard />);
        const addUser = screen.getByRole('button' , {name:/Add User/i});
        expect(addUser).toBeInTheDocument(); 
    })

    test('add group button' , () => {
        render(<Dashboard />);
        const addGroup = screen.getByRole('button' , {name :/Add Group/i});
        expect(addGroup).toBeInTheDocument();
    })

    test('system button' , () => {
        render(<Dashboard />);
        const system = screen.findByRole('button',{name:/Manage System/i})
        expect(system).resolves.toBeInTheDocument();
    })

    test('navigation text check' , () => {
        render(<Dashboard />);
        const isTextAvailable = screen.getByTestId('dashboard-text');
        expect(isTextAvailable).toBeInTheDocument();
    })
});

it('check the content of the div' , () => {
    render(<Dashboard />);
    const addUserTitle = screen.getByRole()
});
