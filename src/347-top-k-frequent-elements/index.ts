import { PriorityQueue } from '@src/common/priority-queue';

/**
 * Time Complexity: O(n*logk)
 * 
 * Space Complexity: O(n+k)
 */
export function topKFrequent(nums: number[], k: number): number[] {
  // Building the hash map which holds frequency of the values.
  const freqs = new Map<number, number>();

  for (const n of nums) {
    freqs.set(n, (freqs.get(n) ?? 0) + 1);
  }

  // Initializing the priority queue (heap)
  const heap = new PriorityQueue<number>();

  // Adding each element in the hash map to the priority queue
  for (const n of freqs.keys()) {
    heap.enqueue(n, freqs.get(n) as number);

    // Priority queue's length must be less than or equal to k so we try to keep
    // the length within that range
    if (heap.size() > k) {
      heap.dequeue();
    }
  }

  // Initializing the result array
  const result = new Array(k).fill(0);

  // Getting the top k elements from the priority queue
  for (let i = 0; i < k; i++) {
    result[i] = heap.dequeue().data;
  }

  return result;
}
