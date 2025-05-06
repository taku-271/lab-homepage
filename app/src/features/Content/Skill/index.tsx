import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@yamada-ui/fontawesome";
import { Box, Heading, Text } from "@yamada-ui/react";

export const Skill = () => {
  return (
    <Box
      id="skill"
      display="flex"
      height={{ base: "100vh", md: "auto" }}
      paddingX="5vw"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center" marginBottom="5vh">
        <Text>スキル</Text>
        <Heading variant="h1" mb="10%">
          私のスキルセット
        </Heading>
        <hr color="#4169e1" />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexDir={{ base: "row", md: "column" }}
      >
        <Box
          textAlign="center"
          display={{ base: "none", md: "block" }}
          mb="5vh"
        >
          <FontAwesomeIcon
            icon={faBookBookmark}
            boxSize="50%"
            color="#4169e1"
          />
        </Box>
        <Box display="flex" flexDir="column" gap="2vh" mb="5vh">
          <Box>
            <Heading variant="h2" fontSize="24px">
              汎用系
            </Heading>
            <Text fontSize="18px" fontWeight="bold">
              Vim, C言語, Java, Python, JavaScript, TypeScript (node, bun)
            </Text>
            <Text>特にJavaScript, TypeScriptが得意です！</Text>
            <Text>初心者Vimmerなのでお手柔らかに...</Text>
          </Box>
          <Box>
            <Heading variant="h2" fontSize="24px">
              Web系
            </Heading>
            <Text fontSize="18px" fontWeight="bold">
              HTML, CSS, React, Next.js, Nest.js, Express.js, GraphQL, Apollo
            </Text>
            <Text>GraphQL推しです．崇拝しましょう．</Text>
          </Box>
          <Box>
            <Heading variant="h2" fontSize="24px">
              インフラ系
            </Heading>
            <Text fontSize="18px" fontWeight="bold">
              MySQL, AWS, AWS CDK, Terraform, Auth0, Linux
            </Text>
            <Text>AWS便利すぎてこれで完結するんじゃないかと信じています.</Text>
          </Box>
          <Box>
            <Heading variant="h2" fontSize="24px">
              資格試験等
            </Heading>
            <Text fontSize="18px" fontWeight="bold">
              IPA 基本情報技術者試験, AWS CLF
            </Text>
            <Text>応用情報結果待ちです...受かってる気がしなくて震える.</Text>
            <Text>AWS SAA, AWS AIFは今度受けます.</Text>
          </Box>
        </Box>
        <Box textAlign="center" display={{ base: "block", md: "none" }}>
          <FontAwesomeIcon
            icon={faBookBookmark}
            boxSize="50%"
            color="#4169e1"
          />
        </Box>
      </Box>
    </Box>
  );
};
