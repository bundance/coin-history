import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Row, Well } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import DataTable from '../../widgets/data-table/data-table.component';
import '../page-styles.css';

class ControlPanel extends React.Component {
    static propTypes = {
        formValues: PropTypes.object,
        downloadData: PropTypes.func.isRequired,
        fetchData: PropTypes.func.isRequired,
        fetchCoins: PropTypes.func.isRequired,
        firstTenHistoricPrices: PropTypes.array,
        lastTenHistoricPrices: PropTypes.array,
        setFromDate: PropTypes.func.isRequired,
        setToDate: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.fetchCoins();
    }

    fetchData = () => {
        this.props.fetchData(this.props.formValues);
    };

    downloadData = () => {
        this.props.downloadData();
    };

    handleFromDateChange = (value) => {
        this.props.setFromDate(value);
    };

    handleToDateChange = (value) => {
        this.props.setToDate(value);
    };

    handleFormChange = (event) => {
        this.props.handleFormChange({ [event.target.id]: event.target.value });
    };

    render() {
        const { formValues } = this.props;

        return (
            <Form>
                <Grid className="App">
                    <Row>
                        <Col md={4}>
                            <Well>
                                <Row className="row__header">
                                    <h2>Options</h2>
                                </Row>
                                <Row>
                                    <FormGroup controlId="api">
                                        <ControlLabel>Market: </ControlLabel>
                                        <FormControl
                                            componentClass="select"
                                            placeholder="select"
                                            onChange={this.handleFormChange}
                                            value={formValues.api}
                                        >
                                            <option value="CoinBase">CoinBase</option>
                                            <option value="Poloniex">Poloniex</option>
                                            <option value="Genesis">Genesis</option>
                                            <option value="Average">Average</option>
                                        </FormControl>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup controlId="selectedCoin">
                                        <ControlLabel>Coin: </ControlLabel>
                                        <FormControl
                                            value={formValues.selectedCoin}
                                            componentClass="select"
                                            placeholder="select"
                                            onChange={this.handleFormChange}
                                        >
                                            {formValues.coins.map(coin =>
                                                <option key={coin} value={coin}>{coin}</option>
                                            )}
                                        </FormControl>
                                    </FormGroup>
                                </Row>
                                <Row className="row__padding--bottom">
                                    <ControlLabel>From: </ControlLabel>
                                    <DatePicker id="from" onChange={this.handleFromDateChange} value={formValues.fromDate} />
                                </Row>
                                <Row className="row__padding--bottom">
                                    <ControlLabel>To: </ControlLabel>
                                    <DatePicker id="to" onChange={this.handleToDateChange} value={formValues.toDate} />
                                </Row>
                                <Row>
                                    <FormGroup controlId="granularity">
                                        <ControlLabel>Granularity: </ControlLabel>
                                        <FormControl
                                            type="text"
                                            value={formValues.granularity}
                                            placeholder="Enter seconds"
                                            onChange={this.handleFormChange}
                                        />
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup controlId="dateFormat">
                                        <ControlLabel>Date Format: </ControlLabel>
                                        <FormControl
                                            type="text"
                                            onChange={this.handleFormChange}
                                            value={formValues.dateFormat}
                                        />
                                    </FormGroup>

                                </Row>
                                <Row>
                                    <Button onClick={this.fetchData}>Fetch Data Sample</Button>
                                </Row>
                            </Well>
                        </Col>
                        <Col md={8}>
                            <Row>
                                <h2>Data Received (latest 10 items)</h2>
                                <DataTable data={this.props.firstTenHistoricPrices} />
                            </Row>
                            <Row>
                                <h2>Data Received (earliest 10 items)</h2>
                                <DataTable data={this.props.lastTenHistoricPrices} />
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Form>
        );
    }
}

export default ControlPanel;
