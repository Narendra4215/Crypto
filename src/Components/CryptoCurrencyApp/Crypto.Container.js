import React, { PureComponent } from 'react'
import CryptoComponents from './CryptoCurrency.Components';

export default class CryptoContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          cryptos: [],
          search: '',
        };
      }
    
      componentDidMount() {
        this.fetchCryptocurrencies();
    
      }
    
      fetchCryptocurrencies = () => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
          .then(res => res.json())
          .then(data => {
            this.setState({ cryptos: data });
          })
          .catch(error => {
            console.log('Error fetching data:', error);
          });
      }
    
      
      handleSearch = event => {
        this.setState({ search: event.target.value });
      };

   
      


  render() {
    const { cryptos, search } = this.state;
    const filteredCryptos = cryptos.filter(crypto =>
      crypto.id.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
     <CryptoComponents filteredCryptos={filteredCryptos} handleSearch={this.handleSearch} />
      </div>
    )
  }
}
