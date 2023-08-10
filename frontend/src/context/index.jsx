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
    "0xA5593C5b7827B736bF2a17A9da6764D7796BfB62"
  );

  const { mutateAsync: addblog } = useContractWrite(contract, "addblog");

  const address = useAddress();
  const connect = useMetamask();

  const publishBlog = async (form) => {
    try {
      console.log(form);
      const data = await addblog({
        args: [
          form.title,
          form.blog,
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

export const useStateContext = () => useContext(StateContext);
