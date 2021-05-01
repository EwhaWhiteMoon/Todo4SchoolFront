import React, { ReactPropTypes } from 'react';
import {Card, ListGroup} from "react-bootstrap";

import WorkCard, { Work } from "../WorkCard/WorkCard"

class WorkList extends React.Component<{title: String, works:Array<Work>},{works:Array<Work>}>{
    state = this.props;
    render(){
        const workListGroupItem = this.state.works.map((work) => (
            <ListGroup.Item key = {work.title}>
                <WorkCard {...work}/>
            </ListGroup.Item>
        ));
        return(
            <>
               <ListGroup>
                   <ListGroup.Item className="text-center">
                        <h2>{this.props.title}</h2>
                    </ListGroup.Item>
                    {workListGroupItem}
               </ListGroup>
            </>
        );
    }
}

export default WorkList;