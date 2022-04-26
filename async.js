const processOrder = (customer) => {
    console.log(`Processing order for Customer 1`);

    setTimeout(() => {
        console.log(`Cooking completed`);
    }, 3000);

    console.log(`Order proccessed for Custormer 1`);
};

console.log(`Take order for customer 1`);
processOrder();
console.log(`Completed order for customer 1`);