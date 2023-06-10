"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shared/dialog";

interface DelDialogProps {
  children: React.ReactNode;
  triggerChild: React.ReactNode;
  title: string;
  description?: string;
}

const DelDialog = ({
  children,
  triggerChild,
  title,
  description,
}: DelDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerChild}</DialogTrigger>
      <DialogContent className="h-52">
        <DialogTitle className="flex justify-center">{title}</DialogTitle>
        <DialogHeader>
          <DialogDescription>{description}</DialogDescription>
          {/* <div className="overflow-auto h-fit">{children}</div> */}
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DelDialog;
