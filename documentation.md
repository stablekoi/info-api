# Documentation

All StableKoi pairs consist of two different tokens.

Results are cached for 5 minutes (or 300 seconds).

## [`/summary`](https://info.stablekoi.com/api/summary)

Returns data for the top ~1000 StableKoi pairs, sorted by reserves.

### Request

`GET https://info.stablekoi.com/api/summary`

### Response

```json5
{
  updated_at: 1234567, // UNIX timestamp
  data: {
    "0x..._0x...": {
      // ERC20 token addresses, joined by an underscore
      price: "...", // price denominated in token1/token0
      base_volume: "...", // last 24h volume denominated in token0
      quote_volume: "...", // last 24h volume denominated in token1
      liquidity: "...", // liquidity denominated in USD
      liquidity_BNB: "...", // liquidity denominated in CKB
    },
    // ...
  },
}
```

## [`/tokens`](https://info.stablekoi.com/api/tokens)

Returns the tokens in the top ~1000 pairs on StableKoi, sorted by reserves.

### Request

`GET https://info.stablekoi.com/api/tokens`

### Response

```json5
{
  updated_at: 1234567, // UNIX timestamp
  data: {
    "0x...": {
      // the address of the ERC20 token
      name: "...", // not necessarily included for ERC20 tokens
      symbol: "...", // not necessarily included for ERC20 tokens
      price: "...", // price denominated in USD
      price_BNB: "...", // price denominated in CKB
    },
    // ...
  },
}
```

## [`/tokens/0x...`](https://info.stablekoi.com/api/tokens/0x07a388453944bB54BE709AE505F14aEb5d5cbB2C)

Returns the token information, based on address.

### Request

`GET https://info.stablekoi.com/api/tokens/0x07a388453944bB54BE709AE505F14aEb5d5cbB2C`

### Response

```json5
{
  updated_at: 1234567, // UNIX timestamp
  data: {
    name: "...", // not necessarily included for ERC20 tokens
    symbol: "...", // not necessarily included for ERC20 tokens
    price: "...", // price denominated in USD
    price_BNB: "...", // price denominated in CKB
  },
}
```

## [`/pairs`](https://info.stablekoi.com/api/pairs)

Returns data for the top ~1000 StableKoi pairs, sorted by reserves.

### Request

`GET https://info.stablekoi.com/api/pairs`

### Response

```json5
{
  updated_at: 1234567, // UNIX timestamp
  data: {
    "0x..._0x...": {
      // the asset ids of CKB and ERC20 tokens, joined by an underscore
      pair_address: "0x...", // pair address
      base_name: "...", // token0 name
      base_symbol: "...", // token0 symbol
      base_address: "0x...", // token0 address
      quote_name: "...", // token1 name
      quote_symbol: "...", // token1 symbol
      quote_address: "0x...", // token1 address
      price: "...", // price denominated in token1/token0
      base_volume: "...", // volume denominated in token0
      quote_volume: "...", // volume denominated in token1
      liquidity: "...", // liquidity denominated in USD
      liquidity_BNB: "...", // liquidity denominated in CKB
    },
    // ...
  },
}
```
