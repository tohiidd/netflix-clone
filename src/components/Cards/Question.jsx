import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

function Question({ question, answer }) {
  const answerRef = useRef();
  const iconRef = useRef();

  function toggleAnswer() {
    const answerElement = answerRef.current.style;
    const iconElement = iconRef.current.style;

    if (answerElement.display == "" || answerElement.display == "none") {
      answerElement.display = "block";
      iconElement.transform = "rotate(45deg)";
    } else if (answerElement.display == "block") {
      answerElement.display = "none";
      iconElement.transform = "rotate(0deg)";
    }
  }
  return (
    <li className="mb-2 ">
      <button
        className="faq-question w-full text-left rounded-sm text-lg md:text-2xl font-normal"
        onClick={toggleAnswer}
      >
        <span className="md:align-middle">{question}</span>
        <span
          className="float-right text-2xl md:text-3xl transition-all"
          ref={iconRef}
        >
          <FontAwesomeIcon icon={faPlus} className="md:align-middle" />
        </span>
      </button>
      <div className="answer p-8 mt-0.5" ref={answerRef}>
        <span className="text-2xl ">
          {answer}
          <br />
          <br />
          <a href className="underline">
            Check out some of our content
          </a>
        </span>
      </div>
    </li>
  );
}

export default Question;
