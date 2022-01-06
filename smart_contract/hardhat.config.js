require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/QMmBXKArUGqQSZ--D3BH8jZkcje2Hszr",
      accounts: [
        "2095b78f418fda67ded303fa79b0e68b28ae58849388f641c06ffaa98b86680d",
      ],
    },
  },
};
