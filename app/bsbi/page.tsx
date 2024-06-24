"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "Who is considered the father of the Internet?",
    options: ["Tim Berners-Lee", "Vint Cerf", "Steve Jobs", "Bill Gates"],
    correctAnswer: 1,
    explanation:
      "Vint Cerf, along with Bob Kahn, is considered one of the fathers of the Internet. They invented the TCP/IP protocol suite.",
    moreInfo: "internet-pioneers",
  },
  {
    question:
      "When was ARPANET, the precursor to the Internet, first deployed?",
    options: ["1969", "1975", "1985", "1995"],
    correctAnswer: 0,
    explanation:
      "ARPANET, funded by the US Department of Defense, was first deployed in 1969.",
    moreInfo: "arpanet-history",
  },
  {
    question:
      "Which of these is NOT a primary purpose for the Internet's creation?",
    options: [
      "Military communication",
      "Academic research",
      "Social media",
      "Information sharing",
    ],
    correctAnswer: 2,
    explanation:
      "The Internet was initially created for military and academic purposes. Social media came much later.",
    moreInfo: "internet-purposes",
  },
  {
    question: "How can IT affect inventory management in business?",
    options: [
      "By increasing manual labor",
      "By reducing real-time tracking",
      "By enabling real-time inventory tracking",
      "By eliminating the need for suppliers",
    ],
    correctAnswer: 2,
    explanation:
      "IT systems can track inventory levels in real-time, reducing stockouts and overstock situations.",
    moreInfo: "it-inventory-management",
  },
  {
    question:
      "How does IT improve connections between suppliers and customers?",
    options: [
      "By eliminating all human interaction",
      "By enabling faster and more efficient communication",
      "By replacing suppliers with automation",
      "By reducing the need for customer service",
    ],
    correctAnswer: 1,
    explanation:
      "IT enables faster and more efficient communication between suppliers and customers, improving supply chain management.",
    moreInfo: "it-supply-chain",
  },
  {
    question: "What was the primary goal of the original ARPANET project?",
    options: [
      "Social networking",
      "Resource sharing between computers",
      "Online shopping",
      "Video streaming",
    ],
    correctAnswer: 1,
    explanation:
      "The primary goal of ARPANET was to allow sharing of resources between different computers at different locations.",
    moreInfo: "arpanet-goals",
  },
  {
    question: "Which technology forms the backbone of the modern Internet?",
    options: ["HTTP", "TCP/IP", "HTML", "XML"],
    correctAnswer: 1,
    explanation:
      "TCP/IP (Transmission Control Protocol/Internet Protocol) forms the backbone of the modern Internet, enabling data transmission between devices.",
    moreInfo: "internet-infrastructure",
  },
  {
    question: "How does IT impact customer relationship management (CRM)?",
    options: [
      "By reducing customer interactions",
      "By automating personalized communications",
      "By eliminating the need for customer feedback",
      "By increasing manual data entry",
    ],
    correctAnswer: 1,
    explanation:
      "IT enhances CRM by enabling automated, personalized communications with customers based on their data and interactions.",
    moreInfo: "it-crm",
  },
  {
    question: "What is the Internet of Things (IoT)?",
    options: [
      "A new internet cable",
      "Network of physical devices connected to the internet",
      "A type of wireless router",
      "An online store for electronics",
    ],
    correctAnswer: 1,
    explanation:
      "The Internet of Things refers to the network of physical devices, vehicles, home appliances, and other items embedded with electronics, software, sensors, and network connectivity, which enables these objects to collect and exchange data.",
    moreInfo: "iot-basics",
  },
  {
    question: "How does cloud computing impact businesses?",
    options: [
      "By increasing hardware costs",
      "By reducing scalability",
      "By enabling remote work and collaboration",
      "By slowing down data processing",
    ],
    correctAnswer: 2,
    explanation:
      "Cloud computing enables businesses to scale their IT resources easily, facilitates remote work and collaboration, and often reduces overall IT costs.",
    moreInfo: "cloud-computing-business",
  },
];

const moreInfoContent = {
  "internet-pioneers":
    "The Internet as we know it today is the result of the work of many pioneers. Key figures include Vint Cerf and Bob Kahn (TCP/IP), Tim Berners-Lee (World Wide Web), and Ray Tomlinson (email).",
  "arpanet-history":
    "ARPANET, developed by the US Department of Defense, was the first operational packet-switching network and the predecessor of the Internet. It was crucial in developing protocols for internetworking.",
  "internet-purposes":
    "The Internet was initially developed for military and academic purposes, focusing on robust communication and information sharing. Its commercial and social uses emerged later.",
  "it-inventory-management":
    "IT revolutionizes inventory management through real-time tracking, automated reordering, and predictive analytics, helping businesses optimize their stock levels and reduce costs.",
  "it-supply-chain":
    "IT enhances supply chain management by improving communication, enabling real-time tracking of goods, and facilitating data-driven decision making across the entire supply network.",
  "arpanet-goals":
    "ARPANET's goal of resource sharing laid the foundation for modern cloud computing and distributed systems, fundamentally changing how we think about computing resources.",
  "internet-infrastructure":
    "The Internet's infrastructure includes physical networks, protocols like TCP/IP, domain name systems, and the software and hardware that support data transmission across the globe.",
  "it-crm":
    "IT-driven CRM systems allow businesses to manage all customer interactions, personalize communications, and analyze customer data to improve services and increase customer satisfaction.",
  "iot-basics":
    "IoT is transforming industries by enabling smart homes, cities, and factories. It's driving innovation in areas like predictive maintenance, energy management, and personalized healthcare.",
  "cloud-computing-business":
    "Cloud computing offers businesses flexibility, scalability, and cost-efficiency. It enables remote work, facilitates collaboration, and allows companies to access advanced technologies without significant upfront investments.",
};

const InternetHistoryGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleAnswer = (index: any) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setShowMoreInfo(false);
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowExplanation(false);
    setGameOver(false);
    setSelectedAnswer(null);
    setShowMoreInfo(false);
  };

  const getButtonClass = (index: any) => {
    if (!showExplanation) return "w-full";
    if (index === questions[currentQuestion].correctAnswer)
      return "w-full bg-green-600 hover:bg-green-700";
    return "w-full bg-red-700 hover:bg-red-800";
  };

  return (
    <div className="p-4 w-full h-full text-center justify-center items-center self-center flex">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Internet History and Business Impact Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          {!gameOver ? (
            <>
              <h2 className="text-lg font-semibold mb-4">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <p className="mb-4">{questions[currentQuestion].question}</p>
              <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showExplanation}
                    className={
                      showExplanation ? getButtonClass(index) : "w-full"
                    }>
                    {option}
                  </Button>
                ))}
              </div>
              {showExplanation && (
                <div className="mt-4">
                  <p className="font-semibold">Explanation:</p>
                  <p>{questions[currentQuestion].explanation}</p>
                  <Button
                    onClick={() => setShowMoreInfo(true)}
                    className="mt-2 mr-2">
                    Learn More
                  </Button>
                  <Button onClick={nextQuestion} className="mt-2">
                    {currentQuestion < questions.length - 1
                      ? "Next Question"
                      : "Finish Quiz"}
                  </Button>
                </div>
              )}
              {showMoreInfo && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                  <h3 className="font-semibold mb-2">More Information:</h3>
                  <p>{moreInfoContent[questions[currentQuestion].moreInfo]}</p>
                  <Button
                    onClick={() => setShowMoreInfo(false)}
                    className="mt-2">
                    Close
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
              <p className="mb-4">
                Your score: {score} out of {questions.length}
              </p>
              <Button onClick={resetGame}>Play Again</Button>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <a
            href="/"
            className="w-full text-right font-semibold text-lime-400 hover:text-lime-600">
            Back to Home
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InternetHistoryGame;
