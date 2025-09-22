import { useSelector } from "react-redux";
import BackButton from "../../ui/BackButton";

function MyOrders() {
  const { orders } = useSelector((state) => state.orders);

  if (orders.length === 0) {
    return <p className="text-center mt-10">No past orders found.</p>;
  }

  return (
    <div className="px-6 py-12">
      <BackButton />
      <h1 className="text-2xl font-bold mb-6 mt-12">My Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg shadow-sm p-4 bg-white"
          >
            <p className="font-semibold">Order ID: {order.id}</p>
            <p>Date: {order.date}</p>
            <p>Total Paid: ${order.totalPrice.toFixed(2)}</p>
            <ul className="mt-2 list-disc ml-5">
              {order.items.map((item) => (
                <li key={item.productId}>
                  {item.quantity} × {item.title} (${item.totalPrice})
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
