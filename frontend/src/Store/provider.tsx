"use client"
import {store} from './Store';
import {Provider} from 'react-redux';
import React from 'react';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { StateContextProvider, useStateContext } from '@/context';

export function ReduxProvider({children}:{children:React.ReactNode}){
    return <Provider store={store}><ThirdwebProvider activeChain={Sepolia}><StateContextProvider>{children}</StateContextProvider></ThirdwebProvider></Provider>;
}