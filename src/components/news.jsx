import { Select, Typography, Row, Col, Avatar, Card, Spin, Alert } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";

const News = ({ simplified }) => {
  const { Text, Title } = Typography;
  const { Option } = Select;
  const count = simplified ? 7 : 13;
  const placeHolderImgUrl =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  const { data: cryptos } = useGetCryptosQuery(100);
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const {
    data: cryptoNews,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetCryptoNewsQuery({ count, newsCategory });

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
      <Row gutter={[15, 15]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Cryptocurrnecy">Cryptocurrnecy</Option>
              {cryptos?.data?.coins.map(({ name }) => (
                <Option key={name} value={name}>
                  {name}
                </Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews?.value.map((pieceOfNews, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card>
              <a href={pieceOfNews.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {pieceOfNews.name}
                  </Title>
                  <img
                    src={
                      pieceOfNews?.image?.thumbnail?.contentUrl ||
                      placeHolderImgUrl
                    }
                    alt="news"
                  />
                </div>
                <p>
                  {pieceOfNews.description > 100
                    ? `${pieceOfNews.description.substring(0, 100)}...`
                    : pieceOfNews.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        pieceOfNews.provider[0]?.image?.thumbnail?.contentUrl ||
                        placeHolderImgUrl
                      }
                      alt="news"
                    />
                    <Text className="provider-name">
                      {pieceOfNews.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(pieceOfNews.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
