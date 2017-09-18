import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

export default class extends React.Component {
    static propTypes = {
        data: PropTypes.array
    };

    render() {
        const { data } = this.props;

        return (
            <div> { data &&
                <BootstrapTable
                    ref="table"
                    data={data}
                    hover
                    striped
                >
                    <TableHeaderColumn
                        dataSort={true}
                        dataField="date"
                        isKey={true}
                    >
                        Date
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataSort={true}
                        dataField="time"
                    >
                        Time
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataSort={true}
                        dataField="timestamp"
                    >
                        Timestamp
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataSort={true}
                        dataField="open"
                    >
                        Open
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataSort={true}
                        dataField="close"
                    >
                        Close
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataSort={true}
                        dataField="high"
                    >
                        High
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataSort={true}
                        dataField="low"
                    >
                        Low
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataSort={true}
                        dataField="volume"
                    >
                        Volume
                    </TableHeaderColumn>
                </BootstrapTable>
            }
            </div>
        );
    }
}
