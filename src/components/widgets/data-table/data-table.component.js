import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';

const DataTable = ({
    data
}) => (
    <FormGroup controlId="first10">
        <FormControl
            componentClass="textarea"
            rows={10}
            cols={39}
            value={data}
            readOnly
        />
    </FormGroup>
);

DataTable.propTypes = {
    value: PropTypes.string
};

export default DataTable;