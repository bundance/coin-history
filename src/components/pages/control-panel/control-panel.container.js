import { connect } from 'react-redux';
import ControlPanel from './control-panel.component';
import { downloadData, fetchData, handleFormChange, setFromDate, setToDate } from '../../../state/data/data.actions';
import { selectFormValues, getFirstTenPrices, getLastTenPrices } from '../../../state/data/data.selectors';

const mapStateToProps = (state) => ({
    formValues: selectFormValues(state),
    firstTenHistoricPrices: getFirstTenPrices(state),
    lastTenHistoricPrices: getLastTenPrices(state)
});

const mapDispatchToProps = ({
    downloadData,
    fetchData,
    handleFormChange,
    setFromDate,
    setToDate
});

export default connect(mapStateToProps , mapDispatchToProps)(ControlPanel);
