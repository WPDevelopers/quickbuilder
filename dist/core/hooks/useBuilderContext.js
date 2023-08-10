import { useContext, createContext } from 'react';

var BuilderContext = /*#__PURE__*/createContext(undefined);
BuilderContext.displayName = process.env.NODE_ENV === 'production' ? 'Anonymous' : 'BuilderContext';
var BuilderProvider = BuilderContext.Provider;
var BuilderConsumer = BuilderContext.Consumer;
function useBuilderContext() {
  var builderContext = useContext(BuilderContext);
  return builderContext;
}

export { BuilderConsumer, BuilderContext, BuilderProvider, useBuilderContext as default };
