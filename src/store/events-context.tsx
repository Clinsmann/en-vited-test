import { createContext, useState } from "react";
import { Event } from "../pages/event-detail";

interface ApplicationContext {
  children: React.ReactNode;
}

interface IAppContext {
  event: Event | null;
  setEvent: React.Dispatch<React.SetStateAction<Event | null>>;
}

const defaultAppContext: IAppContext = {
  event: null,
  setEvent: () => {},
};

export const AppCtx = createContext<IAppContext>(defaultAppContext);

export const AppContext: React.FC<ApplicationContext> = ({ children }: any) => {
  const [event, setEvent] = useState<Event | null>(null);
  return (
    <AppCtx.Provider value={{ event, setEvent }}>{children}</AppCtx.Provider>
  );
};
