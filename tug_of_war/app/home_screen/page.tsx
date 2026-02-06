export default function Home() {
  return (
    <div className="m-[90px] flex items-center justify-center space-x-[90px] animate-pulse">
      <div className="p-[10px] flex items-center h-[150px] w-[150px] rounded-md border border-red-500" 
    //   onClick={}
      >
        <h1>🐦</h1>
        <h2>Red team</h2>
      </div>
      <div className="p-[10px] flex items-center h-[150px] w-[150px] rounded-md border border-blue-500 animate-pulse"  
      //   onClick={}
      >
        <h1>🐳</h1>
        <h2>Blue team</h2>
      </div>
    </div>
  );
}
