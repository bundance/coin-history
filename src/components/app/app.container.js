import { connect } from 'react-redux';
import App from './app.component';
import { downloadData, fetchData } from '../../state/data/data.actions';
import { selectHistoricPricesSample } from '../../state/data/data.selectors';

const mapStateToProps = (state) => {
    const retVal = selectHistoricPricesSample(state)
    console.log({ state, retVal });

    return {
        historicPricesSample: selectHistoricPricesSample(state)
    }
};

const mapDispatchToProps = ({
    downloadData,
    fetchData
});

export default connect(mapStateToProps , mapDispatchToProps)(App);
