/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from "react";

interface ModalContextProps {
  title: string;
  description: string;
  content: ReactNode;
  isVisible: boolean;
  openModal: (content: IOpenModalProp) => void;
  closeModal: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

interface IOpenModalProp {
  title: string;
  content: JSX.Element;
  description: string;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

export function ModalContextProvider({ children }: ProviderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [content, setContent] = useState<ReactNode | undefined>(null);

  const openModal = ({ content, title, description }: IOpenModalProp) => {
    setTitle(title);
    setDescription(description);
    setIsVisible(true);
    setContent(content);
  };

  const closeModal = () => {
    setTitle("");
    setDescription("");
    setIsVisible(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider
      value={{
        content,
        isVisible,
        title,
        description,

        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}
