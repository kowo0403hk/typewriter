const sentence = "hello there from lighthouse labs";

const typewriter = (sentence, msInterval) => {
  let ms = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, ms);
    //outside of the async code. If the increment is set within the async code, ms will never get incremented when it is called AFTER all the sync code has run
    ms += msInterval; 
  }
}

typewriter(sentence, 50);