

export default function HowToPlay() {

  return (
    <div id ='container'>
    <div className="content">
                <h1>How to play hangman</h1>
                <p>Hangman is a simple word guessing game. Player tries to figure
                   out an unknown word by guessing letters.<br/> If too many letters which do not 
                   appear in the word are guessed, the player is hanged (and loses). <br/>
                  As the letters in the word are guessed correctly, the letter will be inserted in the word
                  space(underscores). If a letter not in <br/>the word is guessed, the "hanger-thingy" and the person will be drawn, 
                   one part for each incorrect letter guess. <br/> This is drawn in 10 part. thats a max of 10 incorrect
                   guesses. Easy right.</p>
                   <h3>Ready to try playing?</h3>
                  <p>The best way to learn is by doing. Give it a try.</p>
                <br />
                
          
    </div>
    
    </div>
  )
}
