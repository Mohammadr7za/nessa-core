import { Inter, Lexend_Deca } from 'next/font/google';
// import { iranSans } from '/public/fonts/FontsFree-Net-ir_sans.ttf';
import localFont from 'next/font/local'

export const iranSansFont = localFont({
  src: "/public/fonts/FontsFree-Net-ir_sans.ttf",
  display: 'swap',
})

const myFont = localFont({ src: '../public/fonts/FontsFree-Net-ir_sans.ttf' })


export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend',
});

// export const inter