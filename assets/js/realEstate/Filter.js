import React, { Component} from 'react';



export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.cities = this.cities.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
  }
  //right before it renders
  componentWillMount(){
      this.props.populateAction()
  }

  cities() {
      if(this.props.globalState.populateFormsData.cities != undefined) {
        var { cities } = this.props.globalState.populateFormsData
        
              return cities.map((item) => {
                  return(
                    <option key={item} value={item}>{item}</option>
                  )
              })   
           }
       }


  bedrooms () {
    if(this.props.globalState.populateFormsData.bedrooms != undefined) {
        var { bedrooms } = this.props.globalState.populateFormsData
        
              return bedrooms.map((item) => {
                  return(
                    <option key={item} value={item}>{item}</option>
                  )
              })   
           }

        }

  homeTypes () {
    if(this.props.globalState.populateFormsData.homeTypes != undefined) {
        var { homeTypes } = this.props.globalState.populateFormsData
        
              return homeTypes.map((item) => {
                  return(
                    <option key={item} value={item}>{item}</option>
                  )
              })   
           }

        }
  
  render () {
    return (
     <section id='filter'>
        <div className='inside'>
         <h4>Filter</h4>  
         <select name="city" className='city' onChange={this.props.change}>
             <option value='All'>All Cities</option>
            {this.cities()}
         </select>
         <select name="homeType" className='homeType' onChange={this.props.change}>
            <option value='All'>All Home Types</option>
             {this.homeTypes()}
         </select>
         <select name="rooms" className='bedrooms' onChange={this.props.change}>
             <option value='0'>0+</option>
             {this.bedrooms()}
         </select>

         <div className='filters price'>
             <span className='title'>Price</span>
             <input type="text" name="min_price" className='min-price' value='0' onChange={this.props.change} value={this.props.globalState.min_price}/>
             <input type="text" name="max_price" className='max-price' value='10000000' onChange={this.props.change} value={this.props.globalState.max_price}/>
         </div>
         <div className='filters floor-space'>
             <span className='title'>Floor Space</span>
             <input type="text" name="min_floor_space" className='min-price' value='0' onChange={this.props.change} value={this.props.globalState.min_floor_space}/>
             <input type="text" name="max_floor_space" className='max-price' value='50000' onChange={this.props.change} value={this.props.globalState.max_floor_space}/>
         </div>
         
        </div>  
     </section>
    )
  }
}
