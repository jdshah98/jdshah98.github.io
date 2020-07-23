import React from 'react'

const UIContext = React.createContext();

const UIProvider = UIContext.Provider;
const UIConsumer = UIContext.Consumer;

export default UIContext;
export {
    UIProvider,
    UIConsumer
};