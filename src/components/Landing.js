import React from "react";

function LandingPage(props) {
  return (
    <div
      style={{
        justifyContent: "center",
        paddingLeft: "12%",
        paddingRight: "12%",
      }}
    >
      <h1 style={{ color: "#041D42", textTransform: "uppercase" }}>
        Auction Arbitrage
      </h1>
      <h2
        style={{ textDecoration: "underline", textDecorationColor: "#91A3B5" }}
      >
        A tool for business owners to buy and sell online
      </h2>
      <div
        style={{
          paddingLeft: "12%",
          paddingRight: "12%",
        }}
      >
        <p
          style={{
            borderRadius: "6px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "2px",
            paddingBottom: "2px",
            boxSizing: "border-box",
            boxShadow: "0 2px 2px rgba(204, 197, 185, 0.5)",
            backgroundColor: "white",
          }}
        >
          Auction Crawler is a tool for business owners to buy and sell online.
          See what deals you can find! It’s easy to see how much you can make
          buying and selling items with Auction Crawler. Launch your own online
          store right here starting with Auction Crawler and maximize your
          profits. Auction Crawler automatically calculates the maximum profit
          for a product.
        </p>
        <p
          style={{
            borderRadius: "6px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "2px",
            paddingBottom: "2px",
            boxSizing: "border-box",
            boxShadow: "0 2px 2px rgba(204, 197, 185, 0.5)",
            backgroundColor: "white",
          }}
        >
          Auction Arbitrage is a web app designed to centralize and automate
          price comparison between niche auction sites and Ebay. The user
          interface is simple and intuitive: just select an auction comparison,
          and the app will start scanning for products to price compare. Then,
          the app will automatically compare the Ebay price to the auction
          price.
        </p>
        <p
          style={{
            borderRadius: "6px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "2px",
            paddingBottom: "2px",
            boxSizing: "border-box",
            boxShadow: "0 2px 2px rgba(204, 197, 185, 0.5)",
            backgroundColor: "white",
          }}
        >
          Once you find an auction you want to buy, click the price to bid on
          the local auction. If the local price is lower, you’ll be able to
          purchase the item on local auction and resell it on Ebay for a higher
          price. The app will automatically update new inventory and notifies
          you of potential deals.
        </p>
      </div>
    </div>
  );
}
export default LandingPage;
