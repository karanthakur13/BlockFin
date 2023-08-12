import React from "react";
import { useRewardContext } from "../context/reward";
import { useState, useEffect } from "react";

const Token = () => {
  const { Reward, contract, address } = useRewardContext();

  /*  const greward = async () => {
    console.log(address);
    const data = await Reward(, );
  }; */

  const callapi = async () => {
    const { response } = await axios.post(
      (payee = ""`http://localhost:8080/api/scoreUpdate`),
      {
        metaID: payee,
        blogID: id,
        vote: vote,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  };

  useEffect(() => {
    if (contract) callapi();
  }, [contract]);
  return <div>token</div>;
};

export default Token;
