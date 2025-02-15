import { CarPrors } from "@/app/types";
import React, { Fragment } from "react";

import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import Image from "next/image";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarPrors;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className="fixed inset-0 bg-black" />
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
