import { connect } from 'react-redux';
import App from './app.component';
import { downloadData, fetchData } from '../../state/data/data.actions';

console.log({ fetchData});
const mapDispatchToProps = ({
      downloadData,
    fetchData
});

export default connect(null, mapDispatchToProps)(App);
