import { Inter, Lexend_Deca } from 'next/font/google';
// import iranSans from "@public/fonts/FontsFree-Net-ir_sans";
// import iranSans1 from "@public/fonts/FontsFree-Net-ir_sans.ttf";
// import { iranSans2 } from '@public/fonts/FontsFree-Net-ir_sans';
// import { iranSans3 } from '@public/fonts/FontsFree-Net-ir_sans.ttf';
// import iranSans4 from 'public/fonts/FontsFree-Net-ir_sans.ttf';
// import iranSans5 from 'public/fonts/FontsFree-Net-ir_sans';
// import { iranSans6 } from 'public/fonts/FontsFree-Net-ir_sans.ttf';
// import { iranSans7 } from 'public/fonts/FontsFree-Net-ir_sans';
import localFont from 'next/font/local';

export const iranSansFont = localFont({
  src: '../../public/fonts/FontsFree-Net-ir_sans.ttf',
  // display: 'swap',
  variable: '--font-iransans'
});

// export const myFont = localFont({ src: '../public/fonts/FontsFree-Net-ir_sans.ttf' })

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend',
});

// export const inter