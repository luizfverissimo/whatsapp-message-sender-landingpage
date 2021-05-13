import Head from 'next/head';
import { Content } from '../components/Content';
import { Faq } from '../components/Faq';
import { Feature } from '../components/Feature';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Step } from '../components/Step';
import { Testimonials } from '../components/Testimonials'; 
import { Footer } from '../components/Footer'; 

export default function Home() {
  return (
    <main className='w-screen min-h-screen'>
      <Navbar />
      <Header />
      <Testimonials />
      <Feature />
      <Content/>
      <Step />
      <Faq />
      <Footer />
    </main>
  );
}
