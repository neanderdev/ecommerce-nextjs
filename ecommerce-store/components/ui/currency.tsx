"use client";

import { useEffect, useState } from "react";

interface CurrencyProps {
    value: string | number;
}

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export function Currency({ value }: CurrencyProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <span className="font-semibold">
            {formatter.format(Number(value))}
        </span>
    );
}
