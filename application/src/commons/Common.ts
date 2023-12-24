const convertAmountInLocal = (totalExpenseAmount: string) => {
    return parseFloat(totalExpenseAmount).toFixed(2)
    // .toLocaleString('en-IN');
}


export {
    convertAmountInLocal
}