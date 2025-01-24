```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = count; // Store the updated count value
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Correct way to update state
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```