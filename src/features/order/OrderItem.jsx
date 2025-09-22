function OrderItem({ item }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex items-center gap-3">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-12 w-12 rounded-md object-cover"
        />
        <p>
          {item.quantity} × {item.title}
        </p>
      </div>
      <p className="font-bold">${item.totalPrice.toFixed(2)}</p>
    </div>
  );
}

export default OrderItem;
