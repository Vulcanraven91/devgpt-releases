import React, { useEffect } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import {
  Box,
  Flex,
  Tag,
  Alert,
  AlertIcon,
  Text,
  AlertTitle,
  AlertDescription,
  Fade,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { CloseIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { app, ipcMain, dialog, TouchBar, shell } from "electron";
import getLatestReleaseVersion from "@/src/components/platform/transaction/utils/getLatestReleaseVersion";

const Document = async () => {

  // const isOnLatestVersion = await getLatestReleaseVersion();
  // console.log(isOnLatestVersion);


  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="February Labs" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <div
          id="titlebar"
          className="titlebar"
          style={{
            // @ts-ignore
            "-webkit-app-region": "drag",
          }}
        />
        <Flex
          alignItems='center'
          position="absolute"
          justifyContent='flex-end'
          top={0}
          bg="#ED8936"
          width="100%"
          p={4}
        >
          <Text>You're on an old version, upgrade for the best experience.</Text>
          <WarningIcon mx={4} />
        </Flex>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
