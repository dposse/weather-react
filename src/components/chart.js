import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const average =data=>(Math.round(data.reduce((sum, cur)=>(sum+cur),0)/data.length));

export default props => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};