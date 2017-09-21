import React from 'react';
import PropTypes from 'prop-types';
import Spinner from "react-md-spinner";
import MediaQuery from 'react-responsive';
import { Modal } from 'react-bootstrap';
import "./waiting-spinner.css";

/**
 * Responsive React wrapper around the react-md-waiting-spinner (https://github.com/tsuyoshiwada/react-md-spinner)
 * @param props - waitingText - the text you want to display next to the waiting-spinner.
 *              - show - true to show the waiting-spinner, false to hide it (defaults to false)
 *              - For all other props, see props in https://github.com/tsuyoshiwada/react-md-spinner
 *
 * @usage <WaitingSpinner show={showWaitingSpinner} />
 *
 */

WaitingSpinner.propTypes = {
    waitingText: PropTypes.string,
    show: PropTypes.bool
};


export function WaitingSpinner(props) {
    return (
        <div>
            <MediaQuery minWidth={768}>
                <Modal show={props.show} bsSize="small" >
                    <Modal.Body className="waiting-spinner">
                        <div className="spinner--container">
                            <Spinner
                                className="spinner"
                                size={30}
                                singleColor={"darkorange"}
                                {...props}
                            />
                            <span className="loading-text">{props.waitingText}</span>
                        </div>
                    </Modal.Body>
                </Modal>
            </MediaQuery>
            <MediaQuery maxWidth={767}>
                <Modal show={props.show} bsSize="small" >
                    <Modal.Body className="waiting-spinner__small">
                        <div className="spinner--container__small">
                            <Spinner
                                className="spinner"
                                size={20}
                                singleColor={"darkorange"}
                                {...props}
                            />
                            <span className="loading-text">{props.waitingText}</span>
                        </div>
                    </Modal.Body>
                </Modal>
            </MediaQuery>
        </div>
    );
}