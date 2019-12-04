import React from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Text } from 'react-native-paper';
import globalStyles from '../styles/Style';
import { VictoryBar, VictoryChart, VictoryLine, VictoryLabel, VictoryAxis, VictoryLegend } from 'victory-native';

@inject('store')
@observer
export default class Price extends React.Component {
  state = { isLoading: true };

    /**
    * Screen navigation options
    */
    static navigationOptions = {
        title: 'Price',
    };

    componentDidMount() {
      console.log('PriceScreen - componentDidMount');
      this.getPrices();
    }

    /**
     * Fetch prices
     */
    getPrices = async () => {
      let config = require('./../../assets/config.json');
      let url = config.priceApiUrl;
      try {
        let response = await fetch(url);
        let data = await response.json();
        let statusCode = response.status;
        if (statusCode != 200) {
          console.log('ERROR: statusCode is ' + statusCode);
        }
        this.props.store.prices = data;
        console.log(JSON.stringify(data));
        this.setState({ isLoading: false });
      } catch (error) {
        alert(error);
      }
    };

    /**
     * Get data for the chart
     */
    getDataForChart = () => {
      let data = [];
      let makes = 'makes';
      let models = 'models';
      let years = 'years';
      let trims = 'trims';
      let prices = 'prices';
      let json = this.props.store.prices;
      for(var i = 0; i < json.length; i++) {
        var obj = json[i];  
        if (obj.makes == this.props.store.make_id && obj.models == this.props.store.model_name
          && obj.years == this.props.store.year && obj.trims == this.props.store.trim_name) {
            let record = [];
            console.log('Price: ' + obj.prices + ' - Km: ' + obj.km + ' - Retailer: ' + obj.retailer)
            record.push(obj.prices, obj.km, obj.retailer);
            data.push(record);
        }
      }
      return data;
    }

      /**
       * Chart of prices
       */
      showPrices = () => {
        let data = this.getDataForChart();
        if (data.length == 0) {
          return (
            <View style={globalStyles.paragraphText}>
              <Text>Sorry, no price is avaiable for your choice.</Text>
            </View>
          );          
        } else {
          let screenWidth = Dimensions.get("window").width;
          let sum = 0;
          let price_km_retailer = [];
          let dataToDisplay = [];
          let color = '';
          for (var i = 0; i < data.length; i++) {
            price_km_retailer = data[i];
            sum += parseInt(price_km_retailer[0]);
            if (price_km_retailer[2]=='si'){
              color='#7DB3FF';
            } else{
              color='#9ADFB4';
            }
            dataToDisplay.push({ km: parseInt(price_km_retailer[1]), price: parseInt(price_km_retailer[0]), fill: color });
          }
          let avg_price = sum/data.length;
          console.log('Price avg is: ' + avg_price);
          return (
            <View style={globalStyles.container}>
             <Text style={globalStyles.titleChart}>Sales Prices</Text>
             <VictoryChart 
              padding={{ left: 65, top: 40, right: 45, bottom: 50 }}  
              domainPadding={{x: 25, y: 25}}
              > 
               <VictoryBar data={dataToDisplay} x="km" y="price" animate={{ onLoad: { duration: 1000 } }}
                style={{ data: { fill: ({ datum }) => datum.fill, width:30 } }}
               />
               <VictoryLine y={() => avg_price} />
               <VictoryLabel text="Avg" datum={{ x: 0, y: avg_price }} textAnchor="end"/>
               <VictoryLabel text="Km" datum={{ x: 0, y: 0 }} textAnchor="end"/>
               <VictoryLabel text="Price" datum={{ x: 0, y: 200 }} textAnchor="end"/>               
               <VictoryAxis dependentAxis 
                tickFormat={(tick) => `€${tick}`}
                style={{
                  axis: {stroke: 'grey'},
                  ticks: {stroke: 'black'}
                }}
               />
               <VictoryAxis tickLabelComponent={<VictoryLabel angle={45} />} 
                tickFormat={(tick) => `${tick/1000}k`}
                style={{
                  axis: {stroke: 'grey'},
                  ticks: {stroke: 'black'}
                }}
               />
               <VictoryLegend x={40} y={280}
                orientation="horizontal"
                colorScale={[ "#7DB3FF", "#9ADFB4" ]}
                data={[{ name: "Retailer" }, { name: "Private" }]}
               />
             </VictoryChart>
           </View>
            );
        }
      };

    /**
     * Show prices
     */
    render() {
      if (this.state.isLoading) {
        return (
          <View style={[globalStyles.container, globalStyles.horizontal]}>
            <ActivityIndicator id="ai-indicator" size="large" color="green" />
          </View>
        );
      } else if (this.props.store.prices.length == 0) {
        return (
          <View style={globalStyles.paragraphText}>
            <Text>Sorry, no price is present.</Text>
          </View>
        );
      } else {
        return <View style={globalStyles.container}>{this.showPrices()}</View>;
      }
    }
}
