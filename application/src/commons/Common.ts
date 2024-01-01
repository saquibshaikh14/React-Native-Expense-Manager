const convertAmountInLocal = (totalExpenseAmount: string) => {
    return parseFloat(totalExpenseAmount).toFixed(2)
    // .toLocaleString('en-IN');
}


export {
    convertAmountInLocal
}

export function asyncWrapper(callback: (arg0: any[]) => any) {
    return async function (...args: any[]) {
        try {
            await callback(args);
        } catch (err) {
            console.log(err);
        }
    }
} 