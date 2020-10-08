import React from 'react';
import './PriceList.css';
import {passes} from "../../data/price-list";


class PriceList extends React.Component {

    render() {
        return (
            passes.map(pass => {
                    return <>{{pass.name}}</>
            })
        )
    }
}

export default PriceList;
