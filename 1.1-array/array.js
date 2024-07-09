const arr = [5, 4, 3, 2, 1]

Array.prototype.inReversed = function () {
    const reverse = (start, end) => {
        if (start > end) return;
        const tmp = this[start];
        this[start] = this[end];
        this[end] = tmp;
        reverse(start + 1, end - 1);
    };
    reverse(0, this.length - 1);
};
arr.inReversed()
console.log(arr);