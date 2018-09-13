import React from 'react';
import ReactDOM from 'react-dom';

import { ComboBox } from '@progress/kendo-react-dropdowns';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);


        const sports = [ "Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball" ];
        let state = {
            allowCustom: true
        }
    };

    onChange(event){
        this.setState({
            allowCustom: event.target.checked
        });
    }

    render() {
        const allowCustom = this.state.allowCustom;
        return (
            <div className="example-wrapper">
                <div className="example-config">
                    <input id="ac" type="checkbox" className="k-checkbox" onChange={this.onChange} checked={allowCustom} />
                    <label className="k-checkbox-label" for="ac">Allow custom values</label>
                </div>
                <div>
                    <div>Favorite sport:</div>
                    <ComboBox data={this.sports} allowCustom={allowCustom} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <AppComponent />,
    document.querySelector('my-app')
);
