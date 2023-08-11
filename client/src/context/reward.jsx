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
    "0xEC4839d2A49b2167767F1743A3810A70Dfc3d368"
  );

  const address = useAddress();
  const connect = useMetamask();
  const { mutateAsync: giveReward } = useContractWrite(contract, "giveReward");

  const Reward = async (_address, _reward) => {
    try {
      const data = await giveReward({
        args: [_address, _reward],
      });

      console.log("successful", data);
    } catch (error) {
      console.log("try again", error);
    }
  };
  return (
    <RewardContext.Provider
      value={{
        contract,
        Reward,
        address,
      }}
    >
      {children}
    </RewardContext.Provider>
  );
};

export const useRewardContext = () => useContext(RewardContext);