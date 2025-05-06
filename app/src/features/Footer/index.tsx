import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { Box, Link, Text } from "@yamada-ui/react";

export const Footer = () => {
  return (
    <footer>
      <Box
        bg="#4169e1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={{ base: "1rem", md: "1rem" }}
        height="5vh"
        width="100vw"
        backgroundColor="#00bff"
        color="white"
      >
        <Text>Powered by Takumi Yamashita</Text>
        <Text>
          <Link href="https://x.com/taku_271" external>
            <FontAwesomeIcon icon={faXTwitter} color="white" />
          </Link>
        </Text>
        <Text>
          <Link href="email:ta.yamashita.314@gmail.com" external>
            <FontAwesomeIcon icon={faEnvelope} color="white" />
          </Link>
        </Text>
        <Text>
          <Link href="https://github.com/taku-271" external>
            <FontAwesomeIcon icon={faGithub} color="white" />
          </Link>
        </Text>
      </Box>
    </footer>
  );
};
