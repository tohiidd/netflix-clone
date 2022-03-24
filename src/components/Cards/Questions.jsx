import axios from "axios";
import { useEffect, useState } from "react";
import { EmailForm } from "../Form/Form";
import Question from "./Question";

function QuestionCard() {
  const [questionList, setQuestionList] = useState([]);
  useEffect(async () => {
    try {
      const { data } = await axios.get("./api/questions.json");
      console.log(data);
      setQuestionList(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <section className="bg-black">
      <div className="text-white  py-10 lg:py-20 border-bottom ">
        <div className=" lg:px-24 max-width-960 mx-auto">
          <h1 className="text-2xl mx-auto w-2/3 sm:w-4/5 lg:w-full pt-5 md:text-5xl font-semibold text-center">
            Frequently Asked Questions
          </h1>
          <ul className="faq-list w-full sm:w-5/6 lg:w-4/5 mx-auto my-10">
            {questionList.map((question) => (
              <Question
                key={question.id}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </ul>
        </div>
        <div className="max-width-960 mx-auto">
          <EmailForm />
        </div>
      </div>
    </section>
  );
}

export default QuestionCard;
