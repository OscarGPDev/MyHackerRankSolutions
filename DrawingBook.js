// A teacher asks the class to open their books to a page number. A student can either start turning
// pages from the front of the book or from the back of the book. They always turn pages one at a time.
// When they open the book, page 1 is always on the right side
// When they flip page, they see pages and . Each page except the last page will always be printed on both sides.
// The last page may only be printed on the front, given the length of the book. If the book is pages long,
// and a student wants to turn to page, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.
//
// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
function pageCount(n, p) {
    // Write your code here
    const pagesTurnedFromFront = Math.floor(p / 2);
    let pagesTurnedFromBack;
    if (n % 2 !== 0) {
        pagesTurnedFromBack = Math.floor((n + 1 - p) / 2);
    } else {
        pagesTurnedFromBack = Math.floor((n - p) / 2);
    }
    return pagesTurnedFromFront < pagesTurnedFromBack ? pagesTurnedFromFront : pagesTurnedFromBack
}
module.exports = {pageCount}