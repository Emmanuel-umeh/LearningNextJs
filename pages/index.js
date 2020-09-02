import Link from "next/link";
import Fetch from "isomorphic-unfetch";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import Prices from "../components/prices";
const index = (props) => (

  <Layout>
    <h1 style={{ textAlign: "center" }}>Welcome to Next JS</h1>
    <Prices bpi={props.bpi} />
  </Layout>
);

index.getInitialProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  // console.log("data ", data)
  return {
    bpi: data.bpi,
  };
};
export default index;
