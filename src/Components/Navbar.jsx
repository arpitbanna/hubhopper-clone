export default function Navbar() {
  return (
    <nav className="flex bg-white justify-between p-5 ">
      <h2 className="text-blue-800 font-bold text-3xl">hubhopper</h2>

      <div className="flex justify-between gap-10">
        <span>Features</span>
        <span>Enterprise</span>
        <span>Services</span>
        <span>API</span>
        <span>Resources</span>
        <span>Pricing</span>
      </div>

      <div className="flex justify-between gap-10">
        <button>Login</button>
        <button className="bg-black text-white px-10 rounded-[10px]">Start my podcast</button>
      </div>
    </nav>
  );
}