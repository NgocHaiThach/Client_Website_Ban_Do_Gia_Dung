export const formatPrice = (price) => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
}

export const formatDate = (date) => {
    let d = new Date(date);
    return (
        paddingZero(d.getUTCDate()) +
        '/' +
        paddingZero(d.getUTCMonth() + 1) +
        '/' +
        d.getFullYear()
    );
}

const paddingZero = (n) => {
    return n < 10 ? '0' + n : n;
}
