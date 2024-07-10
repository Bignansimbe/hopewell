export default function getFriendlyDate(dateString) {
    const compareDate = new Date(dateString);
    const now = new Date();
    const diffInMilliseconds = now - compareDate;

    // Define time intervals in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    if (diffInMilliseconds < minute) {
        return 'Just Now';
    } else if (diffInMilliseconds < hour) {
        const minutesAgo = Math.floor(diffInMilliseconds / minute);
        return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
    } else if (diffInMilliseconds < day) {
        const hoursAgo = Math.floor(diffInMilliseconds / hour);
        return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
    } else if (diffInMilliseconds < week) {
        const daysAgo = Math.floor(diffInMilliseconds / day);
        return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
    } else if (diffInMilliseconds < month) {
        const weeksAgo = Math.floor(diffInMilliseconds / week);
        return `${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`;
    } else if (diffInMilliseconds < year) {
        const monthsAgo = Math.floor(diffInMilliseconds / month);
        return `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
    } else {
        const yearsAgo = Math.floor(diffInMilliseconds / year);
        return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
    }
}

// Example usage:
