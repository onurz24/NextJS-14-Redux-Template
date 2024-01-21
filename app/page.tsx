import Counter from "./components/Counter";
import CounterBtn from "./components/CounterBtn";

export default function Home() {
  return (
    <div className="w-full h-full
    flex flex-col justify-center items-center gap-4">
      <Counter/>
      <div className="flex justify-center items-center gap-4">
        <CounterBtn payload={1}/>
        <CounterBtn payload={-1}/>
      </div>

    </div>
  );
}
