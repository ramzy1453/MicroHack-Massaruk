export default function Footer() {
  return (
    <div className="shadow-lg border-t  py-10 flex justify-center flex-col items-center space-y-4">
      <ul className="flex justify-between text-blue-600 font-semibold space-x-12">
        <button className="hover:text-blue-500">BLOG</button>
        <button className="hover:text-blue-500">TERMS AND CONDITIONS</button>
        <button className="hover:text-blue-500">PRIVACY POLICY</button>
        <button className="hover:text-blue-500">PRICING</button>
        <button className="hover:text-blue-500">CONTACT US</button>
      </ul>
      <p className="text-[#83868B] text-md">
        Copyright 2023 Masarok all rights reserved.
      </p>
    </div>
  );
}
