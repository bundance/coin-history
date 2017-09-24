import { connect } from 'react-redux';
import ControlPanel from './control-panel.component';
import { fetchData, fetchCoins, handleFormChange, setFromDate, setToDate } from '../../../state/data/data.actions';
import { getApiOptions, getFirstXPrices, getLastXPrices } from '../../../state/data/data.selectors';

const mapStateToProps = (state) => ({
    apiOptions: getApiOptions(state),
    firstTenHistoricPrices: getFirstXPrices(10)(state),
    lastTenHistoricPrices: getLastXPrices(10)(state)
});

const mapDispatchToProps = ({
    fetchData,
    fetchCoins,
    handleFormChange,
    setFromDate,
    setToDate
});

export default connect(mapStateToProps , mapDispatchToProps)(ControlPanel);
