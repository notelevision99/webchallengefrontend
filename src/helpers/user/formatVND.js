function formatVND(number) {
    return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}
export default formatVND;
