/**
 * 2. Add Two Numbers
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/add-two-numbers/
 * 
 * ============================================================================
 * Problem Description:
 * ============================================================================
 * You are given two non-empty linked lists representing two non-negative 
 * integers. The digits are stored in reverse order, and each of their nodes 
 * contains a single digit. Add the two numbers and return the sum as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the 
 * number 0 itself.
 * 
 * ----------------------------------------------------------------------------
 * Examples:
 * ----------------------------------------------------------------------------
 * Example 1:
 *   Input: l1 = [2,4,3], l2 = [5,6,4]
 *   Output: [7,0,8]
 *   Explanation: 342 + 465 = 807.
 * 
 * Example 2:
 *   Input: l1 = [0], l2 = [0]
 *   Output: [0]
 * 
 * Example 3:
 *   Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 *   Output: [8,9,9,9,0,0,0,1]
 * 
 * ----------------------------------------------------------------------------
 * Constraints:
 * ----------------------------------------------------------------------------
 * - The number of nodes in each linked list is in the range [1, 100].
 * - 0 <= Node.val <= 9
 * - It is guaranteed that the list represents a number that does not have 
 *   leading zeros.
 * ============================================================================
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    
    // 'current' adalah pointer yang akan bergerak merangkai node baru satu per satu
    let current = dummyHead; 
    
    // 'carry' ini buat nyimpen angka puluhan (misal 6 + 4, 1 nya taro di carry.)
    let carry = 0;

    // looping terus selama salah satu list masih punya isi, 
    // ATAU kalau masih ada carry / simpanan yang tersisa di akhir.
    while (l1 !== null || l2 !== null || carry > 0) {
        // ambil nilai saat ini. Kalau list sudah habis, pakai angka 0 agar tidak error
        let val1 = (l1 !== null) ? l1.val : 0;
        let val2 = (l2 !== null) ? l2.val : 0;

        // jumlahkan kedua nilai ditambah simpanan (carry) dari putaran sebelumnya
        let sum = val1 + val2 + carry;

        // update carry baru.
        carry = Math.floor(sum / 10);

        // buat node baru dengan angka satuannya, terus sambungin node tersebut ke rangkaian hasil kita
        current.next = new ListNode(sum % 10);

        // geser pointer 'current' maju ke node yang baru dibuat
        current = current.next;

        // geser pointer l1 dan l2 maju ke node berikutnya (kalo belum null)
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // return node setelah dummyHead, soalnya dummyHead isinya cuma angka 0 pancingan
    return dummyHead.next;
};

/**
 * Submission Performance:
 * - Runtime: 2 ms (Beats 85%)
 * - Memory: 61 MB (Beats 72%)
 */