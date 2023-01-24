import {
  Flex,
  Box,
  Text,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ button1, button2, text }) => {
  return (
    <Flex width="100%" height="10vh" bgColor="#FDFDFD">
      <Box
        width={{ base: "100%", sm: "60%", md: "90%" }}
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="2px solid #DEE2E6"
        padding="20px"
      >
        <Box display="flex" width="80%" paddingLeft="4">
          <Text
            bgGradient="linear(to-l,  #4529E6, #0B0D0D)"
            bgClip="text"
            fontWeight="extrabold"
            fontSize="1.8rem"
          >
            Bit Cars
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        width={{ base: "30%", sm: "40%", lg: "25%" }}
        alignItems="center"
        justifyContent="space-evenly"
        borderLeft="2px solid #d2d8db"
        borderBottom="2px solid #DEE2E6"
        fontFamily="inter"
        fontWeight="600"
      >
        <Box display={{ base: "flex", sm: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>Perfil</MenuItem>
              <MenuItem>Carros</MenuItem>
              <Box
                display="flex"
                flexDirection="column"
                borderTop="2px solid #DEE2E6"
              >
                <Link color="#495057" href="" margin="5%">
                  Fazer Login
                </Link>

                <Button
                  bgColor="#FFFFFF"
                  border="1px solid black"
                  size="sm"
                  margin="5%"
                >
                  {" "}
                  Cadastrar{" "}
                </Button>
              </Box>
            </MenuList>
          </Menu>
        </Box>
        <Box
          display={{ base: "none", sm: "flex" }}
          width="100%"
          alignItems="center"
          justifyContent="space-evenly"
          fontSize={{ base: "16px" }}
          fontFamily="inter"
        >
          {text}
          {button1}
          {button2}
        </Box>
      </Box>
    </Flex>
  );
};
export default Header;
