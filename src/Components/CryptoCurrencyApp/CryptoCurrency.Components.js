import React, { PureComponent } from 'react'
import './CryptoCurrency.scss';
export default class CryptoCurrencyComponents extends PureComponent {
  render() {

    const { filteredCryptos, handleSearch } = this.props;

    return (
      <div>
        <div>
 
<input id='currency-field' type="text" placeholder="provide the coin name" value={this.search} onChange={handleSearch} />

</div>
<div className='crypto-data'>
  {filteredCryptos.map(crypto => (
    <div key={crypto.id} className='currency'>
      <div className='currency-image'>
       <img src={crypto.image} height={20} width={20} alt="" />
      </div>
      <div className='currency-name'>
      {crypto.id}
      </div >
      <div  className='currency-price'> 
      {crypto.current_price}
      </div>
      <div className='currency-percentage'>
      {crypto.market_cap_change_percentage_24h}
      </div>
      <div className='currency-market-cap'> 
       Mkp Cap: <br /> Rs.{crypto.market_cap}
      </div>
    </div>
  ))} 
</div>
      </div>
    )
  }
}
