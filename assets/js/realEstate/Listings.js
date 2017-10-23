import React, { Component} from 'react';


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings () {
    var {listingsData} = this.props

    if(listingsData == undefined || listingsData.length == 0 ) {
      return 'Sorry your filter did not match any listing'
    }

    return listingsData.map((listing, index) => {
      
        //this is the boxed view
        return(
          <div className='col-md-4' key={index}>
          <div className='listing'>
            <div className='listing-img' style={{background:`url("${listing.image}") no-repeat center center`}}>
              <span className='address'>{listing.address}</span>
              <div className='details'>
                <div className='user-img'></div>
                <div className='user-details'>
                  <span className='user-name'>Nina Smith</span>
                  <span className='post-date'>05/05/2017</span>
                </div>
                <div className='listing-details'>
                  <div className='floor-space'>
                    <i className='fa fa-square-o'></i>
                    <span>{listing.floorSpace}ft &sup2;</span></div>
                    <div className='bedrooms'>
                    <i className='fa fa-bed'></i>
                    <span>{listing.rooms} Bedrooms</span>
                  </div>
                  <div className='view-btn'>
                    View Listing
                  </div>
                </div>
              </div>
            </div>
            <div className='bottom-info'>
              <span className='price'>${listing.price} / month</span>
              <span className='location'><i className="fa fa-map-maker" aria-hidden='true'></i>
              {listing.city}, {listing.state}</span>
            </div>
          </div>
          </div>
        )
      
    })

  }
  render () {
    return (
        <section id='listings'>
          <section className='search-area'>
            <input type='text' name='search' placeholder='search...' onChange={this.props.change} />
          </section>
          <section className='sortby-area'>
            <div className='results'>{this.props.globalState.filteredData.length} results found</div>
            <div className='sort-options'>
              <select name='sortby' className='sortby' onChange={this.props.change}>
              <option value='price-dsc'>Lowest Price</option>
                <option value='price-asc'>Highest Price</option>
               
              </select>
              
            </div>
          </section>
          <section className='listings-results'>
            <div className='row'>
            {this.loopListings()}
            </div>
          </section>
          <section id='pagination'>
            <ul className='pages'>
              <li className='active'>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>Next</li>

            </ul>
          </section>
        </section>
    )
  }
}
