/**
 * 1. Two Sum
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/two-sum/
 * 
 * ============================================================================
 * Problem Description:
 * ============================================================================
 * Given an array of integers `nums` and an integer target, return indices of 
 * the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
 * 
 * ----------------------------------------------------------------------------
 * Examples:
 * ----------------------------------------------------------------------------
 * Example 1:
 *   Input: nums = [2,7,11,15], target = 9
 *   Output: [0,1]
 *   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 *   Input: nums = [3,2,4], target = 6
 *   Output: [1,2]
 * 
 * Example 3:
 *   Input: nums = [3,3], target = 6
 *   Output: [0,1]
 * 
 * ----------------------------------------------------------------------------
 * Constraints:
 * ----------------------------------------------------------------------------
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 * 
 * Follow-up: Can you come up with an algorithm that is less than O(n^2) 
 * time complexity?
 * ============================================================================
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // object container
    let numMap = {}; 

    // start dari kiri ke kanan, dari indeks 0 sampe indeks terakhir.
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let need = target - currentNum;

        // anggap 0 sebagai data yang sah dan benar (as an index), jgn dianggap false.
        if (numMap[need] !== undefined) {
            // ambil index di [need], gabungin sama index sekarang [i].
            return [numMap[need], i];
        }
        numMap[currentNum] = i;
    }
};


/**
 * Submission Performance:
 * - Runtime: 3 ms (Beats 60%)
 * - Memory: 53.58 MB (Beats 95%)
 */