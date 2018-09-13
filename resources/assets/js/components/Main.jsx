import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ProductsLoader } from './products-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: { data: [], total: 0 },
            dataState: { take: 10, skip: 0 }
        };
        this.dataRecieved = this.dataRecieved.bind(this);
        this.dataStateChange = this.dataStateChange.bind(this);
    }
    dataStateChange(e) {
        console.log("State Chance",e);
        this.setState({
            ...this.state,
            dataState: e.data
        });
    }
    componentDidMount(){
        console.log("mounted");
    }

    dataRecieved(products){
        console.log("Data Recieved",products);
        this.setState({
            ...this.state,
            products: products
        });
    }

    render() {
        return (
            <div >
                <Grid
                    filterable={true}
                    sortable={true}
                    pageable={true}
                    {...this.state.dataState}
                    {...this.state.products}
                    onDataStateChange={this.dataStateChange}
                >
                    <Column field="ProductID" filter="numeric" title="Id for" />
                    <Column field="ProductName" title="Name" />
                    <Column field="UnitPrice" filter="numeric" format="{0:c}" title="Price" />
                    <Column field="UnitsInStock" filter="numeric" title="In stock" />
                </Grid>

                <ProductsLoader
                    dataState={this.state.dataState}
                    onDataRecieved={this.dataRecieved}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('my-app'));
