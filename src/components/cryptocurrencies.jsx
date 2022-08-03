import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Alert, Spin } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState, useEffect } from "react";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: cryptoList,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetCryptosQuery(count);
  const [cryptoCoins, setCryptoCoins] = useState([]);

  useEffect(() => {
    const filteredCoins = cryptoList?.data?.coins.filter((coin) =>
      coin?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptoCoins(filteredCoins);
  }, [cryptoList, searchTerm]);

  if (isFetching) return <Spin tip="Loading..."></Spin>;
  if (isError)
    return (
      <Alert
        message={`Unexpected Error ${error?.status}! ${error?.data?.message}`}
        description="Try refresh your page!"
        type="error"
        closable
      />
    );

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[15, 15]} className="crypto-card-container">
        {cryptoCoins?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.name}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    alt="crypto"
                    src={currency.iconUrl}
                    className="crypto-image"
                  />
                }
                hoverable
              >
                <p>Price: {millify(currency?.price)}</p>
                <p>Market Cap: {millify(currency?.marketCap)}</p>
                <p>Daily Change: {millify(currency?.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
