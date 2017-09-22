import { connect } from 'react-redux';
import ControlPanel from './control-panel.component';
import { downloadData, fetchData, fetchCoins, handleFormChange, setFromDate, setToDate } from '../../../state/data/data.actions';
import { getFormValues, getFirstXPrices, getLastXPrices } from '../../../state/data/data.selectors';

const mapStateToProps = (state) => ({
    formValues: getFormValues(state),
    firstTenHistoricPrices: getFirstXPrices(10)(state),
    lastTenHistoricPrices: getLastXPrices(10)(state)
});

const mapDispatchToProps = ({
    downloadData,
    fetchData,
    fetchCoins,
    handleFormChange,
    setFromDate,
    setToDate
});

export default connect(mapStateToProps , mapDispatchToProps)(ControlPanel);
