function InventoryItem({ name, type, quantity, price }) {
  const totalValue = quantity * price;
  return (
    <div>
      <h2>{`${name} (${type})`}</h2>
      <p>{quantity < 5 ? `⚠️ Low Stock! ${quantity} remained.` : ""} </p>
      <p>
        {totalValue > 1000 ? `💰 High value - consider extra protection!` : ""}
      </p>
    </div>
  );
}
