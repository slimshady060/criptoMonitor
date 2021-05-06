const allCriptos = [
    {
      "id": "bitcoin",
      "symbol": "btc",
      "name": "Bitcoin",
      "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      "current_price": 57597,
      "market_cap": 1073228796751,
      "market_cap_rank": 1,
      "fully_diluted_valuation": 1205195590467,
      "total_volume": 72288677465,
      "high_24h": 57973,
      "low_24h": 53329,
      "price_change_24h": 3252.32,
      "price_change_percentage_24h": 5.98456,
      "market_cap_change_24h": 60525848803,
      "market_cap_change_percentage_24h": 5.97666,
      "circulating_supply": 18700537,
      "total_supply": 21000000,
      "max_supply": 21000000,
      "ath": 64805,
      "ath_change_percentage": -11.48105,
      "ath_date": "2021-04-14T11:54:46.763Z",
      "atl": 67.81,
      "atl_change_percentage": 84497.1134,
      "atl_date": "2013-07-06T00:00:00.000Z",
      "roi": null,
      "last_updated": "2021-05-05T17:17:03.004Z"
    },
    {
      "id": "ethereum",
      "symbol": "eth",
      "name": "Ethereum",
      "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      "current_price": 3441.25,
      "market_cap": 397626276378,
      "market_cap_rank": 2,
      "fully_diluted_valuation": null,
      "total_volume": 63820677007,
      "high_24h": 3445.67,
      "low_24h": 3242.22,
      "price_change_24h": 114.3,
      "price_change_percentage_24h": 3.43557,
      "market_cap_change_24h": 13023302056,
      "market_cap_change_percentage_24h": 3.38617,
      "circulating_supply": 115751319.5615,
      "total_supply": null,
      "max_supply": null,
      "ath": 3519.55,
      "ath_change_percentage": -2.45093,
      "ath_date": "2021-05-04T13:34:43.987Z",
      "atl": 0.432979,
      "atl_change_percentage": 792847.39532,
      "atl_date": "2015-10-20T00:00:00.000Z",
      "roi": {
        "times": 79.00580107999792,
        "currency": "btc",
        "percentage": 7900.580107999793
      },
      "last_updated": "2021-05-05T17:16:32.149Z"
    },
    {
      "id": "binancecoin",
      "symbol": "bnb",
      "name": "Binance Coin",
      "image": "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
      "current_price": 649.43,
      "market_cap": 100212248674,
      "market_cap_rank": 3,
      "fully_diluted_valuation": 110587956225,
      "total_volume": 5438461596,
      "high_24h": 663.5,
      "low_24h": 608.63,
      "price_change_24h": 27.94,
      "price_change_percentage_24h": 4.4964,
      "market_cap_change_24h": 4822204489,
      "market_cap_change_percentage_24h": 5.05525,
      "circulating_supply": 154533651.9,
      "total_supply": 170533651.9,
      "max_supply": 170533651.9,
      "ath": 677.47,
      "ath_change_percentage": -4.36145,
      "ath_date": "2021-05-03T17:44:19.191Z",
      "atl": 0.0398177,
      "atl_change_percentage": 1627120.72909,
      "atl_date": "2017-10-19T00:00:00.000Z",
      "roi": null,
      "last_updated": "2021-05-05T17:15:18.075Z"
    }
  ];

  const criptoIds = [
      {
        cId: "binancecoin"
      },
      {
        cId: "ethereum"
      },
      {
        cId: "bitcoin"
      },
  ]

  module.exports = {
      allCriptos,
      criptoIds,
  }