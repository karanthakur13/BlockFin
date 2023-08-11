import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x71b4cc3e1B129b289f3531B38839cA1B6dfb6F56"
  );

  const { mutateAsync: addblog } = useContractWrite(contract, "addblog");

  const address = useAddress();
  const connect = useMetamask();

  const publishBlog = async (form) => {
    try {
      const data = await addblog({
        args: [
          form.title,
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

  const fetchblog = async () => {
    try {
      const data = await contract.call("getBlogs");

      console.info("contract call success");
      return data;
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        fetchblog,
        publishBlog,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
