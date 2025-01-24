# Stale Closure in React's useEffect Hook

This example demonstrates a common error in React's `useEffect` hook where a stale closure leads to unexpected behavior.  The `setInterval` callback uses the initial value of `count`, not the updated value, causing the counter to increment incorrectly.

## Bug

The `bug.js` file contains the buggy code. The counter will not update correctly due to the stale closure of `count`.

## Solution

The `bugSolution.js` file provides a corrected version using `useRef` to access the most up-to-date value of `count` within the `setInterval` callback.