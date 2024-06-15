import { useState, useEffect } from 'react';

const Typewriter = () => {
  const words = ["WEB DESIGN", "DIGITAL MARKETING",
     "SEO","SMM"];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
        if (currentCharIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };
    
    const timeoutId = setTimeout(handleTyping, 200);
    return () => clearTimeout(timeoutId);
  }, [currentCharIndex, isDeleting, words, currentWordIndex]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="max-w-6xl bg-gradient-to-br from-white to-neutral-50 bg-clip-text text-center text-4xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">{text}</h1>
    </div>
  );
};

export default Typewriter;