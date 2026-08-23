import { AppConfig } from '../types';

export const DEFAULT_CONFIG: AppConfig = {
  recipientName: 'My Love',
  senderName: 'Yours Forever',
  // Romantic couple mirror selfie with love vibes
  mainPhoto: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop',
  polaroidText: 'Happy Birthday ❤️',
  passcode: '1234',
  cakeHeading: 'Swipe to Cut the Cake! 🎂',
  cakeCelebrationText: 'Happy Birthday, My Love! 💖',
  letterTitle: 'Happy Birthday My Love ✨',
  letterGreeting: 'Happiest birthday to the love of my life! 🌸',
  letterBody: [
    'Wishing you achieve all your dreams, stay happy, and keep smiling the way you do...',
    'Because that smile is truly my favorite thing in the whole world 🌟',
    'Every single day is special because you are the main character in my life and heart 💕',
    'Let\'s share unlimited laughs, endless love, silly fights, and timeless memories 🌸',
    'Thank you for being my partner in crime, my safe place, and my greatest blessing.',
    'You are my today and all of my tomorrows. I love you forever and ever! ❤️'
  ],
  letterClosing: 'I love you the most ❤️',
  galleryPhotos: [
    {
      id: 'photo-1',
      // Romantic couple holding hands forming heart & fairy lights
      url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop',
      caption: 'The way your eyes shine when you laugh ✨',
      date: 'Our Favorite Day',
      rotation: -5,
      x: 20,
      y: 22,
      z: 50,
      scale: 1.05
    },
    {
      id: 'photo-2',
      // Romantic couple holding hands walking together
      url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop',
      caption: 'Holding your hand through every season 🍂',
      date: 'Autumn Walk',
      rotation: 6,
      x: 78,
      y: 20,
      z: -20,
      scale: 0.95
    },
    {
      id: 'photo-3',
      // Romantic couple sunset golden hour embrace
      url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1000&auto=format&fit=crop',
      caption: 'Golden hour looks best with you 🌅',
      date: 'Sunset Magic',
      rotation: -6,
      x: 24,
      y: 65,
      z: 20,
      scale: 1.0
    },
    {
      id: 'photo-4',
      // Cute couple hands together with heart
      url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop',
      caption: 'Little moments that become forever memories ☕',
      date: 'Coffee & Us',
      rotation: 5,
      x: 80,
      y: 64,
      z: -10,
      scale: 1.02
    },
    {
      id: 'photo-5',
      // Romantic sweet couple warm hug & forehead touch
      url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop',
      caption: 'Together is my favorite place to be 💕',
      date: 'Just Us Two',
      rotation: -2,
      x: 50,
      y: 42,
      z: 80,
      scale: 1.12
    },
    {
      id: 'photo-6',
      // Sweet couple laughing warmly together
      url: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=1000&auto=format&fit=crop',
      caption: 'You make every ordinary moment feel magical 🌸',
      date: 'Sweet Moments',
      rotation: 7,
      x: 15,
      y: 44,
      z: -45,
      scale: 0.92
    },
    {
      id: 'photo-7',
      // Romantic couple cuddle at sunset
      url: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=1000&auto=format&fit=crop',
      caption: 'Here is to a lifetime of adventures together 🚀',
      date: 'Forever & Always',
      rotation: -4,
      x: 85,
      y: 42,
      z: -35,
      scale: 0.95
    }
  ],
  musicTitle: 'Romantic Piano & Chimes 🎵'
};
