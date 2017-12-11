
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'; // package for charts lines
import _ from 'lodash';

// since we are not going to be make use of any component state we will keep this as a functional component install of class
export default (props) => {

    function average(data) {
        return _.round(_.sum(data)/data.length); 
    }    

    return (
        <div>
            <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>  
        </div>
    )
}


