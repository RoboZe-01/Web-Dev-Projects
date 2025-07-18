


# 🕒 React Stopwatch App – Project #2 in My React Learning Series

This is a beginner-friendly **Stopwatch App** built using **React.js + Hooks** as part of my journey to learn React by building real-world projects.

The app supports:
- ▶️ Start
- ⏸️ Pause
- 🔄 Reset
- ⏱️ Lap time recording
- Responsive layout and accurate timer logic

It’s built entirely with functional components using **React Hooks** like `useState`, `useEffect`, and `useRef`.

---

## 🚀 Live Preview
Coming Soon...

## 📂 GitHub Repository
🔗 [Click here to view the code](https://github.com/RoboZe-01/Web-Dev-Projects/tree/main/Learning%20React%20using%20Projects/Stopwatch/vite-project)

---

## 📚 Key Concepts Covered

✅ `useState` for managing state  
✅ `useEffect` for handling timer logic & side effects  
✅ `useRef` to persist data without triggering re-renders  
✅ Conditional rendering  
✅ Responsive styling & mobile-friendly UI  
✅ Time formatting logic

---

## 🛠️ Getting Started

Follow these steps to set up and run the project:

### 1. Clone the Repository

```bash
git clone https://github.com/RoboZe-01/Web-Dev-Projects.git
cd Web-Dev-Projects/Learning React using Projects/Stopwatch/vite-project

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

---

## 🧠 React Concepts & Hook Usage Breakdown

### 🔹 `useState` – For Dynamic State Management

We use `useState` to manage:

* `isRunning` → Whether the stopwatch is active
* `elapsedTime` → Current time in milliseconds
* `lapTimes` → Array of recorded laps

```jsx
const [isRunning, setIsRunning] = useState(false);
const [elapsedTime, setElapsedTime] = useState(0);
const [lapTimes, setLapTimes] = useState([]);
```

### 🔹 `useEffect` – For Handling Side Effects (Timers)

This hook starts the timer when `isRunning` is `true`, and clears it on stop or unmount.

```jsx
useEffect(() => {
  let intervalId;

  if (isRunning) {
    intervalId = setInterval(() => {
      setElapsedTime(Date.now() - startTimeRef.current);
    }, 10);
  }

  return () => clearInterval(intervalId); // Cleanup
}, [isRunning]);
```

### 🔹 `useRef` – For Persisting Values Between Renders

* `startTimeRef` holds the time when the stopwatch was started.
* Unlike `useState`, updating `useRef` won’t re-render the component.

```jsx
const startTimeRef = useRef(0);
```

---

## 🔄 Functions Explained

### ▶️ `start()`

Starts the timer and sets the start time (even accounting for paused time).

```jsx
const start = () => {
  setIsRunning(true);
  startTimeRef.current = Date.now() - elapsedTime;
};
```

### ⏸️ `stop()`

Pauses the timer and clears the interval.

```jsx
const stop = () => {
  setIsRunning(false);
};
```

### 🔄 `reset()`

Resets all states and clears lap records.

```jsx
const reset = () => {
  setElapsedTime(0);
  setIsRunning(false);
  setLapTimes([]);
};
```

### ⏱️ `recordLap()`

Pushes the current formatted time into the `lapTimes` array.

```jsx
const recordLap = () => {
  setLapTimes([...lapTimes, formatTime()]);
};
```

### ⏲️ `formatTime()`

Formats the raw `elapsedTime` into readable `MM:SS:ms` format.

```jsx
const formatTime = () => {
  const ms = elapsedTime % 1000;
  const seconds = Math.floor(elapsedTime / 1000) % 60;
  const minutes = Math.floor(elapsedTime / 60000) % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(Math.floor(ms / 10)).padStart(2, "0")}`;
};
```

---

## 🖼️ UI Design Considerations

✅ **Mobile Responsive**: Uses flexbox and dynamic styling
✅ **Touch Friendly**: Big buttons and spacing for mobile users
✅ **Minimalist UI**: Focuses on core interaction and speed
✅ **Dark Mode Ready (Future Enhancement)**

---

## 📦 Future Improvements

* 🌙 Add Dark/Light Theme using `useContext`
* 💾 Save lap records in `localStorage`
* ⏳ Add countdown timer or Pomodoro version
* 📈 Add lap comparison, best/worst times

---

## 💡 Why You Should Try This Project

This stopwatch app is perfect if you're just getting into React because:

✅ It’s easy to build, yet teaches **essential concepts**
✅ Gives hands-on experience with **Hooks**
✅ Helps you **debug timing and re-renders**
✅ It’s extendable and customizable for portfolio

---

## 🧑‍💻 Author

👋 Hi, I’m **[RoboZe](https://github.com/RoboZe-01)** — learning React by building real, useful projects.
More projects are coming soon! 🚀

---

> **“The best way to learn code is to build something real with it.”**
> So go ahead — clone it, break it, and make it yours.

Feel free to ⭐ star the repo if it helps you or fork it and experiment!

---


