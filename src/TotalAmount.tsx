const TotalAmount = ({ items = [] as any }) => {
  // TODO: calculate ans show the total amount
  // console.log(items);
  let total = 0;
  for (let item of items) {
    // console.log(item.price * item.count);
    total += item.price * item.count;
  }
  return <h2>Total amount: {total}</h2>;
};

export default TotalAmount;
