import Image from "next/image";
import { Inter } from "next/font/google";
import { TypeAnimation } from "react-type-animation";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-full flex-col items-center justify-center font-mono ">
      <TypeAnimation
          sequence={[
            'It was a cool course, ',
            1000, // Waits 1s
            'It was a cool course, thanks to each of you!!!!!', 
            1000,
            'It was a cool course, thanks for your patience', 
            1000,
            'It was a cool course, thanks for the interesting questions', 
            1000,
            'It was a cool course, thanks for your attendance', 
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em', display: 'inline-block' }}
        />
      </div>

      <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

    </main>
  );
}
