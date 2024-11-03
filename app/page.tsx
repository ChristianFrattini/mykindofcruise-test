import Adventures from "./components/Adventures";
import Cruises from "./components/Cruises";

export default function Home() {
  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl ">
        <Adventures />
        <Cruises />
      </div>
    </div>
  );
}
