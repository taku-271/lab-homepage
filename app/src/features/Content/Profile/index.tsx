import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleUser,
  faEnvelope,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { Box, Heading, Link, Text } from "@yamada-ui/react";

export const Profile = () => {
  return (
    <Box
      id="profile"
      height={{ base: "100vh", md: "auto" }}
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      padding="5vw"
    >
      <Box textAlign="center" marginBottom="5vh">
        <Text>自己紹介</Text>
        <Heading variant="h1" marginBottom="10%">
          私について
        </Heading>
        <hr color="#4169e1" />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom="5vh"
        flexDir={{ base: "row", md: "column" }}
      >
        <Box textAlign="center" mb="5vh">
          <FontAwesomeIcon icon={faCircleUser} boxSize="50%" color="#4169e1" />
        </Box>
        <Box
          width={{ base: "50%", md: "auto" }}
          display="flex"
          flexDir="column"
          gap="2vh"
        >
          <Heading variant="h3">楽しく開発をモットーに</Heading>
          <Text>
            はじめまして，山下拓海です．私は2025年4月から福井大学の学部4年生として橘研究室に配属されました．
          </Text>
          <Text>
            また，ユニフォームネクスト株式会社のプログライングバイトを大学2年生の頃から約2年程度続けています．そこでは主にインフラとバックエンド，認可周りを担当し，時々フロントエンドや生成AI関連のものもしています．
          </Text>
          <Text>
            趣味はドライブとクルマ弄りとプログラミングです！クルマ弄りのためにガソリンスタンドでバイトしてます笑
            時々ドラマやアニメ，将棋にハマったりハマらなかったりします．
          </Text>
          <Text>
            楽しく開発することをモットーに，これからより楽しんで学習や開発を進めていく予定です！
          </Text>
          <Box display="flex" gap="10%" flexDir={{ base: "row", md: "column" }}>
            <Link href="mail:ta.yamashita.314@gmail.com" external>
              <Text>
                <FontAwesomeIcon icon={faEnvelope} mr="0.5rem" />
                ta.yamashita.314@gmail.com
              </Text>
            </Link>
            <Link href="https://github.com/taku-271" external>
              <Text>
                <FontAwesomeIcon icon={faGithub} marginRight="0.5rem" />
                @taku-271
              </Text>
            </Link>
            <Link href="https://zenn.dev/taku_271" external>
              <Text>
                <FontAwesomeIcon icon={faNewspaper} mr="0.5rem" />
                taku_271
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
