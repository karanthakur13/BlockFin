import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const RewardContext = createContext();

export const RewardContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xd87560990E4e6fD69369f984A6E0f02C6C8c7C31"
  );

  const address = useAddress();
  const connect = useMetamask();
  const { mutateAsync: giveReward } = useContractWrite(contract, "giveReward");

  const publishBlog = async (form) => {
    try {
      const data = await giveReward({
        args: [
          add
          form.types,
          form.className,
          form.children,
          form.src,
          form.topics,
          form.thumbnail,
          form.timeToRead,
        ],
      });

      console.log("successful", data);
    } catch (error) {
      console.log("try again", error);
    }
  };
};

export const useRewardContext = () => useContext(RewardContext);
