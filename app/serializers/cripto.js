exports.responseAllCoins = (coinsList = []) => coinsList.map((coin) => ({
  id: coin.id,
  symbol: coin.symbol,
  currentPrice: coin.current_price,
  name: coin.name,
  image: coin.image,
  lastUpdated: coin.last_updated,
}));

exports.mapCriptosTop = (criptos) => criptos.map((cripto) => ({
  symbol: cripto.data.symbol,
  name: cripto.data.name,
  image: cripto.data.image.thumb,
  lastUpdated: cripto.data.last_updated,
  prices: {
    usd: cripto.data.market_data.current_price.usd,
    eur: cripto.data.market_data.current_price.eur,
    ars: cripto.data.market_data.current_price.ars,
  },
}));
