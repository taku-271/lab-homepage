"use client";

import { Box, Heading } from "@yamada-ui/react";

const NotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Heading variant="h1">404 - Page Not Found</Heading>
    </Box>
  );
};

export default NotFound;
