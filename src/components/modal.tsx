import React from "react";
import { useModal } from "@/context/useModal";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";

export const IModal: React.FC = () => {
  const { content, isVisible, description, title } = useModal();

  return (
    <Dialog open={isVisible}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <DialogClose />
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};
