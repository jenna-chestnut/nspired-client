import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
 

const smokeTest = (key, component) => {
    describe(`${key} component`, () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                {component}
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
        })
    })
}

export default smokeTest;