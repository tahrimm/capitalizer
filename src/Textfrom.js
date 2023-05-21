import React, {useState} from 'react';

export default function Textfrom(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event)=> {
      setText(event.target.value);
  };
    //make uppercase
   const handleUpClick = ()=> {
    if (text.length === 0) {
      props.showAlert("Enter some text here", "warning");
    } else {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    } 
    };
    //make lowercase
    const handleloClick = () => {
      if (text.length === 0) {
        props.showAlert("Enter some text here", "warning");
      } else {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
      }
    };    
    //remove extra space 
    const handleextraspace = (event)=> {
      if (text.length === 0) {
        props.showAlert("Enter some text here", "warning");
      } else {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
      }
    };
    //first letter upercase 
    const handleCapitalizeClick = () => {
      if (text.length === 0) {
        props.showAlert("Enter some text here", "warning");
      } else {
        let newText = text.replace(/\b\w/g, (match) => match.toUpperCase());
        setText(newText);
        props.showAlert("Capitalized first letter of each word!", "success");
      }
      };
      //remove extra new lines
      const handleRemoveNewLinesClick = () => {
        if (text.length === 0) {
          props.showAlert("Enter some text here", "warning");
        } else {
        let newText = text.replace(/\n{2,}/g, "\n");
        setText(newText);
        props.showAlert("Removed extra new lines!", "success");
        }
      };  
      //remove spacial charac
      const handleSpecialCharsClick = () => {
        if (text.length === 0) {
          props.showAlert("Enter some text here", "warning");
        } else {
        let newText = text.replace(/[^0-9a-zA-Z\s]/g, "");
        setText(newText);
        props.showAlert("Removed special characters!", "success");
        }
      };      
      //Reverse
      const handleReverseClick = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Reversed text!", "success");
      };
      //remove html tags
      const handleRemoveHtmlTagsClick = () => {
        if (text.length === 0) {
          props.showAlert("Enter some text here", "warning");
        } else {
        const withoutHtmlTags = text.replace(/<[^>]+>/g, "");
        setText(withoutHtmlTags);
        props.showAlert("HTML tags removed!", "success");
        }
      };            
      //extrac emails
      const handleExtractClick = () => {
        if (text.length === 0) {
          props.showAlert("Enter some text here", "warning");
        } else {
        const emailRegex = /[\w._%+-]+@[\w-]+\.[a-z]{2,}/gi;
        const urlRegex = /(http|https):\/\/[^\s]+/gi;
        const emailMatches = text.match(emailRegex);
        const urlMatches = text.match(urlRegex);
        let extractedText = "";
        if (emailMatches) {
          extractedText += "Emails: " + emailMatches.join(" ") + " ";
        }
        if (urlMatches) {
          extractedText += "URLs: " + urlMatches.join(" ");
        }
        const newText = extractedText || "No email or URL found!";
        setText(newText);
        props.showAlert("Extracted email/URL!", "success");
      }
      };     
      //phone number extract 
      {/*const handleExtractPhoneNumbersClick = () => {
        if (text.length === 0) {
          props.showAlert("Enter some text here", "warning");
        } else {
        const phoneRegex = /(?:\+\d{1,3}\s?)?(?:\(\d{1,4}\)\s?)?(?:\d{1,4}[\s.-])?\d{2,4}[\s.-]\d{2,4}[\s.-]?\d{2,5}/g;
        const extractedPhoneNumbers = text.match(phoneRegex);
      
        if (extractedPhoneNumbers) {
          const phoneNumbersString = extractedPhoneNumbers.join("\n");
          setText(phoneNumbersString);
          props.showAlert("Phone numbers extracted!", "success");
        } else {
          props.showAlert("No phone numbers found!", "warning");
        }
      }
      };  */}   
      //word frequency 
      const handleWordFrequencyClick = () => {
        if (text.length === 0) {
          props.showAlert("Enter some text here", "warning");
        } else {
        // Remove punctuation and convert text to lowercase
        const cleanedText = text.replace(/[^\w\s]|_/g, "").toLowerCase();
      
        // Split text into an array of words
        const words = cleanedText.split(/\s+/);
      
        // Count the frequency of each word
        const frequencyMap = {};
        for (let word of words) {
          frequencyMap[word] = (frequencyMap[word] || 0) + 1;
        }
      
        // Sort words by frequency (from most used to least used)
        const sortedWords = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);
      
        // Generate output string with sorted word frequencies
        let output = "";
        for (let [word, frequency] of sortedWords) {
          output += `${word}: ${frequency} `;
        }
      
        setText(output);
        props.showAlert("Word frequency sorted!", "success");
      }
      };      
  return (
    <>
 <div className="container" style={{color: props.mode==='dark'?'white':'#1f2327'}}> 
    <h1 className="my-1.5"> {props.head} </h1>
    <div className="container my-1" style={{color: props.mode==='dark'?'white':'#1f2327'}}>
    <p>
  {`${text.split(/\s+/).filter((element) => element.length !== 0).length} words and ${text.length} characters and you need `}
  {text.length >= 238 ? `${(0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length).toFixed(2)} Minutes read.` : `${(2.5 * text.split(/\s+/).filter((element) => element.length !== 0).length).toFixed(2)} Seconds to read.`}
</p>
</div>
<div className="mb-2">
<label htmlFor="myBox" className="form-label"></label>
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#292b2e':'white', color: props.mode==='dark'?'white':'#1f2327'}} id="myBox" rows="9.5"></textarea>
</div>
<div className="d-flex flex-wrap justify-content-start">
<button className="btn btn-outline-success mx-1 my-1 w-30 text-truncate" onClick={handleExtractClick}>Extract Emails/URLs</button>
<button className="btn btn-outline-success mx-1 my-1 w-30 text-truncate" onClick={handleWordFrequencyClick}>Words Frequency</button>
<button className="btn btn-outline-success mx-1 my-1 w-30 text-truncate" onClick={handleextraspace}>Remove extra space</button>
<button className="btn btn-outline-success mx-1 my-1 w-30 text-truncate" onClick={handleRemoveNewLinesClick}>Remove Extra Line</button>
<button className="btn btn-outline-success mx-1 my-1 w-30 text-truncate" onClick={handleRemoveHtmlTagsClick}>Remove Html-Tag</button>
<button className="btn btn-outline-success mx-1 my-1 w-30 text-truncate" onClick={handleSpecialCharsClick}>Remove SpecialChar</button>
<button className="btn btn-outline-success mx-1 my-1 w-30 text-truncate" onClick={handleCapitalizeClick}>Capitalize 1st-letter</button>
<button className="btn btn-outline-success mx-1 my-1 w-30 text-truncate" onClick={handleUpClick}>To Uppercase</button>
<button className="btn btn-outline-success mx-1 my-1 w-30 text-truncate" onClick={handleloClick}>To Lowercase</button>
<button className="btn btn-outline-success mx-1 my-1 w-30 text-truncate" onClick={handleReverseClick}>Reverse Texts</button>
</div>
</div>
</>
)
}
