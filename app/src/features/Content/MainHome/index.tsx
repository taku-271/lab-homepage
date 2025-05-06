import { Box, Heading, Img, Link, Text } from "@yamada-ui/react";

export const MainHome = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      paddingX="5vw"
      justifyContent="center"
      alignItems="center"
      gap="10vw"
      flexDir={{ base: "row", md: "column" }}
    >
      <Box display={{ base: "none", md: "block" }}>
        <Img
          src="https://avatars.githubusercontent.com/u/87481129?v=4"
          borderRadius="50%"
        />
      </Box>
      <Box display="flex" flexDir="column" gap="1vh">
        <Text color="#4169e1">ようこそ！</Text>
        <Heading variant="h2" color="#00bfff">
          山下 拓海
        </Heading>
        <Text>福井大学 B4 橘研究室</Text>
        <Text>フロントエンド，バックエンド，インフラ</Text>
        <Text>
          主にAWSを用いたインフラや，GraphQLを始めとしたバックエンド開発を行う．
        </Text>
        <Text>時々フロントエンドや生成AIソリューションも...</Text>
        <Link href="https://github.com/taku-271?tab=repositories" external>
          作品を見る
        </Link>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <Img
          src="https://avatars.githubusercontent.com/u/87481129?v=4"
          borderRadius="50%"
        />
      </Box>
    </Box>
  );
};
