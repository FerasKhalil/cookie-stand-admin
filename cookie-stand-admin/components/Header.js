import Head from 'next/head'
import Link from 'next/link'
export default function Header(props, title) {
  return (
    <div>

      <header className=" bg-green-500 p-10 text-3xl md:font-bold w-full ">
        <div>
          <h1>
            Cookie Stand Admin
          </h1>
        </div>
        <Link href='/Overview'>
          <a className="p-1 rounded bg-green-50 float-right">Overview</a>
        </Link>
      </header>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}