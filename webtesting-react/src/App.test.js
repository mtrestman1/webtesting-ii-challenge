import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';

import App from './App';
import Dashboard from './components/Dashboard';




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe('<Dashboard />', () => {
  
  it('should render the action buttons strike, ball, foul, and hit', () => {
    const { getByText } = render(<Dashboard />)
    const button = getByText(/strike/i, /ball/i, /foul/i, /hit/i);
    fireEvent.click(button)
  })

// it('should reset strikes and balls to 0 on strike 3', () => {
//   expect(Dashboard.({
//     strikes: 3
//   })).toEqual({
//     strikes: 0,
//     balls: 0
//   })
// })

})

