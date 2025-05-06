import { faCircleUser, faFile } from "@fortawesome/free-regular-svg-icons";
import { faBookBookmark, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { Box, Heading, Link, Text } from "@yamada-ui/react";

export const Header = () => {
  return (
    <Box
      as="header"
      width="100vw"
      height="7vh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX="5%"
      position="fixed"
      top="0"
      left="0"
      backgroundColor="#fbfbfb"
    >
      <Link href="#" textDecoration="none">
        <Heading display="flex" margin="0">
          <Text color="#4169e1">Port</Text>
          <Text color="#00bfff">folio</Text>
        </Heading>
      </Link>
      <Box
        width="50%"
        height="100%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="right"
        gap="15%"
      >
        <Link href="#" textDecor="none" color="black">
          <Text display={{ base: "block", md: "none" }}>ホーム</Text>
          <FontAwesomeIcon
            icon={faHome}
            boxSize="2rem"
            display={{ base: "none", md: "block" }}
          />
        </Link>
        <Link href="#profile" textDecor="none" color="black">
          <Text display={{ base: "block", md: "none" }}>自己紹介</Text>
          <FontAwesomeIcon
            icon={faCircleUser}
            boxSize="2rem"
            display={{ base: "none", md: "block" }}
          />
        </Link>
        <Link href="#skill" textDecor="none" color="black">
          <Text display={{ base: "block", md: "none" }}>スキル</Text>
          <FontAwesomeIcon
            icon={faBookBookmark}
            boxSize="2rem"
            display={{ base: "none", md: "block" }}
          />
        </Link>
        <Link
          href="https://github.com/taku-271?tab=repositories"
          textDecor="none"
          color="black"
          external
        >
          <Text display={{ base: "block", md: "none" }}>作品</Text>
          <FontAwesomeIcon
            icon={faFile}
            boxSize="2rem"
            display={{ base: "none", md: "block" }}
          />{" "}
        </Link>
      </Box>
    </Box>
  );
};
