import {
  Container,
  Heading,
  Image,
  Text,
  Button,
  Center,
  Stack,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";
import workingImg from "../dist/imgs/working.svg";
import notFound from "../dist/imgs/lost.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);
  return (
    <Container p={0}>
      <Center w={"100%"} h={"100%"}>
        <Stack direction={"column"} spacing={10} mt={20}>
          <Image objectFit="cover" src={notFound} alt="Working" />
          <Stack spacing={4}>
            <Heading as="h2" size="4xl">
              404
            </Heading>
            <Heading as="h2" size="2xl">
              404
            </Heading>
            <Text fontSize={15} color={"gray.400"}>
              Sorry! we cannot find that page! Don't worry though, everything is
              still AWESOME!
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <Button borderRadius={"100px"} onClick={goBack}>
              <IoReturnUpBackOutline />
            </Button>
            <Button
              bg={"blue.700"}
              w={"100px"}
              borderRadius={"100px"}
              onClick={goHome}
            >
              <FaHome color="white" />
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Container>
  );
};

export default NotFound;
