"use client";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageType } from "@/types";

import { GalleryTab } from "./gallery-tab";

interface GalleryProps {
    images: ImageType[];
}

export function Gallery({ images }: GalleryProps) {
    return (
        <TabGroup as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <GalleryTab key={index} image={image} />
                    ))}
                </TabList>
            </div>

            <TabPanels className="aspect-square w-full">
                {images.map((image, index) => (
                    <TabPanel key={index}>
                        <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                            <Image
                                className="object-cover object-center"
                                src={image.url}
                                alt="Image"
                                fill
                            />
                        </div>
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    );
}
