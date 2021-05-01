import React, { ReactPropTypes } from 'react';

interface Period{
  start: Date
  end: Date
}

class PeriodViewer extends React.Component<Period>{
  render(){
    return(
      <>
        {this.props.start.toLocaleDateString()} ~ {this.props.end.toLocaleDateString()}
      </>
    );
  }
}

export type { Period };

export default PeriodViewer;
