import prismadb from "@/lib/prismadb";

export async function getTotalRevenue(storeId: string) {
    const paidOrders = await prismadb.order.findMany({
        include: {
            orderItems: {
                include: {
                    product: true,
                },
            },
        },
        where: {
            storeId,
            isPaid: true,
        },
    });

    const totalRevenue = paidOrders.reduce((total, order) => {
        const orderTotal = order.orderItems.reduce((orderSum, item) => {
            return orderSum + item.product.price.toNumber();
        }, 0);

        return total + orderTotal;
    }, 0);

    return totalRevenue;
}
