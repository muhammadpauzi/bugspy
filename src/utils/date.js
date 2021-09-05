const humanizeDate = (date) => {
    const delta = Math.round((+new Date - date) / 1000);
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;

    switch (true) {
        case delta < 30:
            return 'Just then'
        case delta < minute:
            return delta + ' seconds ago';
        case delta < 2 * minute:
            return 'A minute ago'
        case delta < hour:
            return Math.floor(delta / minute) + ' minutes ago';
        case delta < Math.floor(delta / hour) == 1:
            return '1 hour ago'
        case delta < day:
            return Math.floor(delta / hour) + ' hours ago'
        case delta < day * 2:
            return 'Yasterday';
        default:
            return new Date(date).toLocaleString();
    }
}

export { humanizeDate };