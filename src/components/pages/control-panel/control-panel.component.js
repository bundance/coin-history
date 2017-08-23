import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Row, Well } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import '../page-styles.css';

class ControlPanel extends React.Component {
    static propTypes = {
        formValues: PropTypes.object,
        downloadData: PropTypes.func.isRequired,
        fetchData: PropTypes.func.isRequired,
        historicPricesSample: PropTypes.string,
        setFromDate: PropTypes.func.isRequired,
        setToDate: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            coin: '',
            api: '',
            dateFormat: '',
            from: '',
            to: '',
            granularity: 1
        }
    }

    fetchData = () => {
        console.log('fetch data called');
        this.props.fetchData(this.state);
    };

    downloadData = () => {
        this.props.downloadData();
    };

    handleFromChange = (value, formattedValue) => {
        console.log({ value, formattedValue });
        this.props.setFromDate(value);
    };

    handleToChange = (value, formattedValue) => {
        console.log({ value, formattedValue });
        this.props.setToDate(value);
    };

    handleFormChange = (event) => {
        this.props.handleFormChange({ [event.target.id]: event.target.value });
    };

    render() {
        const formValues = this.props.formValues;
        console.log({ formValues });
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
                                    <FormGroup controlId="market">
                                        <ControlLabel>Market: </ControlLabel>
                                        <FormControl componentClass="select" placeholder="select" onChange={this.handleFormChange} >
                                            <option value="bitcoin">Poloniex</option>
                                            <option value="Ethereum">Genesis</option>
                                            <option value="LiteCoin">CoinBase</option>
                                            <option value="LiteCoin">Average</option>
                                        </FormControl>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup controlId="coin">
                                        <ControlLabel>Coin: </ControlLabel>
                                        <FormControl componentClass="select" placeholder="select" onChange={this.handleFormChange} >
                                            <option value="bitcoin">Bitcoin</option>
                                            <option value="Ethereum">Ethereum</option>
                                            <option value="LiteCoin">LiteCoin</option>
                                        </FormControl>
                                    </FormGroup>
                                </Row>
                                <Row className="row__padding--bottom">
                                    <ControlLabel>From: </ControlLabel>
                                    <DatePicker id="from" onChange={this.handleFromChange} />
                                </Row>
                                <Row className="row__padding--bottom">
                                    <ControlLabel>To: </ControlLabel>
                                    <DatePicker id="to" onChange={this.handleToChange} />
                                </Row>
                                <Row>
                                    <FormGroup controlId="granularity">
                                        <ControlLabel>Granularity: </ControlLabel>
                                        <FormControl
                                            type="text"
                                            value={'seconds'}
                                            placeholder="Enter seconds"
                                            onChange={this.handleFormChange}
                                        />
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup controlId="dateFormat">
                                        <ControlLabel>Format Date and Time as: </ControlLabel>
                                        <FormControl componentClass="select" placeholder="select" onChange={this.handleFormChange}>
                                            <option value="ddmmyy">dd-mm-yy</option>
                                            <option value="mmddyy">mm-dd-yy</option>
                                            <option value="custom">Custom Format</option>
                                        </FormControl>
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <Button onClick={this.fetchData}>Fetch Data</Button>
                                    <Button onClick={this.downloadData}>Download Data</Button>
                                </Row>
                            </Well>
                        </Col>
                        <Col md={8}>
                            <Row>
                                <h2>Data Received (first 10 items)</h2>
                                <FormGroup controlId="first10">
                                    <FormControl
                                        componentClass="textarea"
                                        rows={10}
                                        cols={39}
                                        value={this.props.historicPricesSample}
                                        readOnly
                                    />
                                </FormGroup>
                            </Row>
                            <Row>
                                <h2>Data Received (last 10 items)</h2>
                                <FormGroup controlId="last10">
                                    <FormControl
                                        componentClass="textarea"
                                        rows={10}
                                        cols={39}
                                        value={this.props.historicPricesSample}
                                        readOnly
                                    />
                                </FormGroup>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </Form>
        );
    }
}

export default ControlPanel;