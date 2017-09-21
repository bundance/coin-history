import { connect } from 'react-redux';
import { isLoading } from '../../state/app/app.selectors';
import App from './app.component';

const mapStateToProps = state => ({
    showWaitingSpinner: isLoading(state)
});

export default connect(mapStateToProps)(App);