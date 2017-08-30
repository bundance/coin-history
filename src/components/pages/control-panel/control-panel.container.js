import { connect } from 'react-redux';
import ControlPanel from './control-panel.component';
import { downloadData, fetchData, handleFormChange, setFromDate, setToDate } from '../../../state/data/data.actions';
import { selectFormValues, getFirstXPrices, getLastXPrices } from '../../../state/data/data.selectors';

const mapStateToProps = (state) => ({
    formValues: selectFormValues(state),
    firstTenHistoricPrices: getFirstXPrices(10, state),
    lastTenHistoricPrices: getLastXPrices(10, state)
});

const mapDispatchToProps = ({
    downloadData,
    fetchData,
    handleFormChange,
    setFromDate,
    setToDate
});

export default connect(mapStateToProps , mapDispatchToProps)(ControlPanel);
