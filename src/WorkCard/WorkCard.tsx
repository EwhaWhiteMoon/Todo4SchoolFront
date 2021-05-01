import { type } from 'os';
import React, { ReactPropTypes } from 'react';
import {Card} from "react-bootstrap";

import PeriodViewer from "./PeriodViewer"

interface Work{
    title: string;
    start: Date;
    end: Date;
    description: string;
}

class WorkCard extends React.Component<Work>{
    state = this.props
    render(){
        return(
            <Card className="text-center" bg = "dark" text = "white">
                <Card.Header as = "h4">{this.props.title}</Card.Header>
                <Card.Body>{this.props.description}</Card.Body>
                <Card.Footer className="mb-2 text-muted">
                    <PeriodViewer start = {this.props.start} end = {this.props.end}/>
                </Card.Footer>
            </Card>
        );
    }
}

export type { Work };
export default WorkCard;