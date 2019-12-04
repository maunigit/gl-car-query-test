import React from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Text } from 'react-native-paper';
import { DataTable } from 'react-native-paper';
import globalStyles from '../styles/Style';
import * as Localization from 'expo-localization';

@inject('store')
@observer
export default class Detail extends React.Component {
  state = { isLoading: true };

  /**
   * Screen navigation options
   */
  static navigationOptions = {
    title: 'Detail',
  };

  componentDidMount() {
    console.log('DetailScreen - componentDidMount');
    this.getDetails();
  }

  /**
   * Fetch details
   */
  getDetails = async () => {
    try {
      let URL_DETAILS =
        'https://www.carqueryapi.com/api/0.3/?&cmd=getModel&model=' +
        this.props.store.trim_id;
      console.log('URL_DETAILS è: ' + URL_DETAILS);
      let response = await fetch(URL_DETAILS);
      let data = await response.json();
      let statusCode = response.status;
      if (statusCode != 200) {
        console.log('ERROR: statusCode is ' + statusCode);
      }
      let obj = null;
      if (data.length > 0) {
        obj = data[0];
      }
      this.props.store.details = obj;
      console.log('data: ' + JSON.stringify(data));
      this.setState({ isLoading: false });
    } catch (error) {
      alert(error);
    }
  };

  /**
   * Create descriptions
   */
  createDescriptions = () => {
    let descr = {
      //Unique measures
      'make_country':'Country of Origin',
      'make_display':'Make',
      'model_name':'Model name',
      'model_trim':'Trim',
      'model_year':'Year',
      'model_body':'Body Style',
      'model_engine_position':'Engine Location',
      'model_engine_type':'Engine Type',      
      'model_engine_cc':'Engine Displacement (cc)',
      'model_engine_cyl':'Engine Cylinders',
      'model_engine_valves_per_cyl':'Engine Valves Per Cylinder',
      'model_engine_valves':'Engine Valves',
      'model_engine_compression':'Engine Compression Ratio',
      'model_engine_fuel':'Engine Fuel Type',
      'model_drive':'Drive',
      'model_transmission_type':'Transmission Type',
      'model_0_to_100_kph':'0-100 kph',
      'model_doors':'Doors',
      'model_seats':'Seats',
      'ExtColors':'Exterior Colors',
      'IntColors':'Interior Colors',

      //International measures
      'model_engine_bore_mm':'Engine Bore (mm)',
      'model_engine_stroke_mm':'Engine Stroke (mm)',
      'model_engine_l':'Engine Displacement (l)',
      'model_engine_power_ps':'Engine Max Power (PS)',
      'model_engine_power_rpm':'Engine Max Power RPM',
      'model_engine_torque_nm':'Engine Max Torque (Nm)',
      'model_engine_torque_rpm':'Engine Max Torque RPM',
      'model_top_speed_kph':'Top Speed (KPH)',
      'model_weight_kg':'Weight (kg)',
      'model_length_mm':'Length (mm)',
      'model_width_mm':'Width (mm)',
      'model_height_mm':'Height (mm)',
      'model_wheelbase_mm':'Wheelbase (mm)',
      'model_lkm_mixed':'Fuel Economy Mixed(l/100km)',
      'model_fuel_cap_l':'Fuel Capacity(l)',
      'model_lkm_hwy':'Fuel Economy HWY(l/100km):',
      'model_lkm_city':'Fuel Economy City(l/100km):',

      //UK measures
      'model_engine_bore_in':'Engine Bore (in)',
      'model_engine_stroke_in':'Engine Stroke (in)',
      'model_engine_ci':'Engine Displacement (cubic inches)',
      'model_engine_power_hp':'Engine Max Power (HP)',
      'model_engine_power_kw':'Engine Max Power (kW)',
      'model_engine_torque_lbft':'Engine Max Torque (Lb-Ft)',
      'model_engine_torque_kgm':'Engine Max Torque (kgf-m)',
      'model_top_speed_mph':'Top Speed (MPH)',
      'model_weight_lbs':'Weight (lbs)',
      'model_length_in':'Length (in)',
      'model_width_in':'Width (in)',
      'model_height_in':'Height (in)',
      'model_wheelbase_in':'Wheelbase (in)',
      'model_mpg_mixed':'Fuel Economy Mixed(mpg)',
      'model_fuel_cap_g':'Fuel Capacity(g)',
      'model_mpg_hwy':'Fuel Economy HWY(mpg):',
      'model_mpg_city':'Fuel Economy City(mpg):'
    };
    return descr;
  };

  /**
   * Take the description number
   */
  takeDescriptionNumber = (key) => {
    let number = {      
      'make_country':1,
      'make_display':2,
      'model_name':3,
      'model_trim':4,
      'model_year':5,
      'model_body':6,
      'model_engine_position':7,
      'model_engine_type':8,      
      'model_engine_cc':9,
      'model_engine_cyl':10,
      'model_engine_valves_per_cyl':11,
      'model_engine_valves':12,
      'model_engine_compression':20,
      'model_engine_fuel':21,
      'model_drive':22,
      'model_transmission_type':23,
      'model_0_to_100_kph':25,
      'model_doors':26,
      'model_seats':27,
      'ExtColors':37,
      'IntColors':38,

      //International measures
      'model_engine_bore_mm':13,
      'model_engine_stroke_mm':14,
      'model_engine_l':15,
      'model_engine_power_ps':16,
      'model_engine_power_rpm':17,
      'model_engine_torque_nm':18,
      'model_engine_torque_rpm':19,
      'model_top_speed_kph':24,
      'model_weight_kg':28,
      'model_length_mm':29,
      'model_width_mm':30,
      'model_height_mm':31,
      'model_wheelbase_mm':32,
      'model_lkm_mixed':33,
      'model_fuel_cap_l':34,
      'model_lkm_hwy':35,
      'model_lkm_city':36,

      //UK measures
      'model_engine_bore_in':13,
      'model_engine_stroke_in':14,
      'model_engine_ci':15,
      'model_engine_power_hp':16,
      'model_engine_power_kw':17,
      'model_engine_torque_lbft':18,
      'model_engine_torque_kgm':19,
      'model_top_speed_mph':24,
      'model_weight_lbs':28,
      'model_length_in':29,
      'model_width_in':30,
      'model_height_in':31,
      'model_wheelbase_in':32,
      'model_mpg_mixed':33,
      'model_fuel_cap_g':34,
      'model_mpg_hwy':35,
      'model_mpg_city':36
    };
    return number[key];
  }

  /**
   * Check if key of descriptions has to be display
   * 
   * see: https://en.wikipedia.org/wiki/Imperial_units#Current_use
   * see: https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
   */
  checkKeyDescriptions = (key, value, country) => {
    let cell=true;
    if(key=='model_id'||key=='model_make_id'||key=='model_sold_in_us'
      ||key=='model_make_display'){
      return false;   
    }else{
      if(key=='ExtColors'||key=='IntColors'){
        if(value.length==0){
          return false;
        }      
      }      
      if (country=='GB'||country=='IN'||country=='HK'||country=='CA'||country=='AU'||country=='NZ'
      ||country=='IE'||country=='MY'||country=='PH'||country=='LK'||country=='ZA') {
        if(key=='model_engine_bore_mm'||key=='model_engine_stroke_mm'||key=='model_weight_kg'
        ||key=='model_length_mm'||key=='model_width_mm'||key=='model_height_mm'||key=='model_wheelbase_mm'
        ||key=='model_lkm_mixed'||key=='model_fuel_cap_l'||key=='model_lkm_hwy'||key=='model_lkm_city'
        ||key=='model_engine_l'||key=='model_engine_power_ps'||key=='model_engine_power_rpm'
        ||key=='model_engine_torque_nm'||key=='model_engine_torque_rpm'||key=='model_top_speed_kph'){
          cell=false;
        }      
      }
      else{
        if(key=='model_engine_bore_in'||key=='model_engine_stroke_in'||key=='model_weight_lbs'
        ||key=='model_length_in'||key=='model_width_in'||key=='model_height_in'||key=='model_wheelbase_in'
        ||key=='model_mpg_mixed'||key=='model_fuel_cap_g'||key=='model_mpg_hwy'||key=='model_mpg_city'
        ||key=='model_engine_ci'||key=='model_engine_power_hp'||key=='model_engine_power_kw'
        ||key=='model_engine_torque_lbft'||key=='model_engine_torque_kgm'||key=='model_top_speed_mph'){
        cell=false;   
        }
      }
    }    
    return cell;
  }

  /**
   * List of details
   */
  showDetails = () => {
    let locale = Localization.locale;
    console.log('Locale is: ' + locale);
    let tokens = locale.split('-');
    let country = tokens[1];
    console.log('Country is: ' + country);
    let rows = [];
    let keys = Object.keys(this.props.store.details);
    let descriptions = this.createDescriptions();
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = this.props.store.details[key];
      if (value!=null && value!='Not Avai' && value!='Not Available') {
        console.log('K: ' + key + ' V: ' + value);
        let createCell = this.checkKeyDescriptions(key, value, country);
        if (createCell) {
          if (key=='model_trim' && value=='') {
            value = 'Default';
          }
          let keyDesc = descriptions[key];
          //sort descriptions
          let number = this.takeDescriptionNumber(key);
          rows[number]=(
            <DataTable.Row accessibilityLabel={''+i} key={i}>
              <DataTable.Cell accessibilityLabel={''+keyDesc} key={'K' + i}>{keyDesc}</DataTable.Cell>
              <DataTable.Cell accessibilityLabel={''+value} key={'V' + i} numeric>{value}</DataTable.Cell>
            </DataTable.Row>
          );
        }
      }      
    }
    return (
      <DataTable>
        <ScrollView>{rows}</ScrollView>
      </DataTable>
    );
  };

  /**
   * Show details
   */
  render() {
    if (this.state.isLoading) {
      return (
        <View style={[globalStyles.container, globalStyles.horizontal]}>
          <ActivityIndicator id="ai-indicator" animating={true} size="large" color="green" />
        </View>
      );
    } else if (this.props.store.details.length == 0) {
      return (
        <View style={globalStyles.paragraphText}>
          <Text>Sorry, no detail is present.</Text>
        </View>
      );
    } else {
      return <View style={globalStyles.container}>{this.showDetails()}</View>;
    }
  }
}
