import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class extends React.Component {
    static propTypes = {
        data: PropTypes.array
    };

    render() {
        const { data } = this.props;
        console.log({data});
        return (
            <div>
                { data && <BootstrapTable
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
                    dataField="High"
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
            </BootstrapTable> }
            </div>
        );
    }
}
