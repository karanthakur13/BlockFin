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
    "0x3b2b4861e72cf0ED52E798E37eB5537EB6336694"
  );

  const { mutateAsync: addblog } = useContractWrite(contract, "addblog");

  const address = useAddress();
  const connect = useMetamask();

  const publishBlog = async (form) => {
    try {
      const data = await addblog({
        args: [form.title, form.body, form.tags],
      });

      console.log("successful", data);
    } catch (error) {
      console.log("try again", error);
    }
  };

  const fetchblog = async (_productId) => {
    try {
      const data = await contract.call("getBlogs", [_productId]);
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
