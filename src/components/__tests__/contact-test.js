import {createRenderer} from 'react-addons-test-utils';
import Contact from '../contact';

describe('test that tests work', function() {
    it('should pass', function() {
        expect(true).to.be.true;
    });
});

describe('Contact component', () => {
    it('renders correctly', () => {
        let renderer = createRenderer();
        renderer.render(<Contact />);
        let actualElement = renderer.getRenderOutput();
        let expectedElement = <div><Contact /></div>;
        expect(actualElement).to.eql(expectedElement);
    });
});
