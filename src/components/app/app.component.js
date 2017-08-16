import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import './app.css';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

class App extends Component {
    static propTypes = {
        downloadData: PropTypes.func.isRequired,
        fetchData: PropTypes.func.isRequired,
        historicPricesSample: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            coin: '',
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

    render() {
        return (
            <Form inline>
                <Grid className="App">
                    <Row className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Coin History</h2>
                    </Row>
                    <Row>
                        <h2>
                            Data
                        </h2>
                    </Row>
                    <Row>
                        <FormGroup controlId="coin">
                            <ControlLabel>Coin: </ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="bitcoin">Bitcoin</option>
                                <option value="Ethereum">Ethereum</option>
                                <option value="LiteCoin">LiteCoin</option>
                            </FormControl>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup controlId="fields">
                            <ControlLabel>Fields: </ControlLabel>
                        </FormGroup>
                        <table>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Low</th>
                                    <th>High</th>
                                    <th>Open</th>
                                    <th>Close</th>
                                    <th>Volume</th>
                                </tr>
                            </thead>
                        </table>
                    </Row>
                    <Row>
                        <FormGroup controlId="dateFormat">
                            <ControlLabel>Format Date and Time as: </ControlLabel>
                            <FormControl componentClass="select" placeholder="select">
                                <option value="ddmmyy">dd-mm-yy</option>
                                <option value="mmddyy">mm-dd-yy</option>
                                <option value="custom">Custom Format</option>
                            </FormControl>
                        </FormGroup>
                    </Row>
                    <Row>
                        <h2>Period</h2>
                        <Col md={4}>
                            <ControlLabel>From: </ControlLabel>
                            <DatePicker id="from"  />
                        </Col>
                        <Col md={4}>
                            <ControlLabel>To: </ControlLabel>
                            <DatePicker id="to" />
                        </Col>
                        <Col md={4}>
                            <FormGroup controlId="granularity">
                                <ControlLabel>Granularity: </ControlLabel>
                                <FormControl
                                    type="text"
                                    value={'some text'}
                                    placeholder="Enter seconds"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <h2>Files</h2>
                        <FormGroup controlId="splitFiles">
                            <ControlLabel>Number of files: </ControlLabel>
                            <FormControl
                                type="text"
                                value={'num of files'}
                                placeholder="Enter files"
                            />
                        </FormGroup>
                    </Row>
                    <Row>
                        <Button onClick={this.fetchData}>Fetch Data</Button>
                        <Button onClick={this.downloadData}>Download Data</Button>
                    </Row>
                    <Row>
                        <h2>Data received (first 10 items)</h2>
                        <FormGroup controlId="formControlsTextarea">
                            <FormControl
                                componentClass="textarea"
                                rows={10}
                                cols={100}
                                value={this.props.historicPricesSample}
                            />
                        </FormGroup>
                    </Row>
                </Grid>
            </Form>
        );
    }
}

export default App;
